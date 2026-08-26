import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "nestvault_secret_key_123";

const getCookieOptions = (req) => {
  const isHttps =
    req.secure || req.headers["x-forwarded-proto"]?.split(",")[0] === "https";

  return {
    httpOnly: true,
    secure: isHttps,
    sameSite: isHttps ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, receiveUpdates } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already registered. Please sign in.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password: hashedPassword,
      receiveUpdates: Boolean(receiveUpdates),
    });
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res
      .status(201)
      .cookie("token", token, getCookieOptions(req))
      .json({
        success: true,
        message: "Account created successfully",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          role: newUser.role,
        },
      });
  } catch (error) {
    console.error("SignUp Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    const passwordMatches = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (!user || !passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .status(200)
      .cookie("token", token, getCookieOptions(req))
      .json({
        success: true,
        message: "Signed in successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
      });
  } catch (error) {
    console.error("SignIn Controller Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(200).json({ success: false, user: null });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id)
      .select("-password")
      .populate("wishlist");
    if (!user) {
      return res.status(200).json({ success: false, user: null });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar,
        location: user.location,
        aboutMe: user.aboutMe,
        preferences: user.preferences,
        receiveUpdates: user.receiveUpdates,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        wishlist: user.wishlist,
      },
    });
  } catch (error) {
    res.status(200).json({ success: false, user: null });
  }
};

export const LogoutUser = async (req, res) => {
  try {
    res.clearCookie("token", getCookieOptions(req));
    res.status(200).json({ success: true, message: "Logged out Successfully" });
  } catch {
    res.status(500).json({ success: false, message: "Logout failed" });
  }
};
