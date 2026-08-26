import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "nestvault_secret_key_123";

export const requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Authentication required" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired session" });
  }
};
