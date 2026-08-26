import mongoose from "mongoose";
import User from "../models/User.js";

export const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("wishlist")
      .populate("wishlist");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.json({ success: true, data: user.wishlist });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.propertyId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid property id" });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $addToSet: { wishlist: req.params.propertyId } },
      { new: true },
    )
      .select("wishlist")
      .populate("wishlist");

    return res.json({ success: true, data: user.wishlist });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { wishlist: req.params.propertyId } },
      { new: true },
    )
      .select("wishlist")
      .populate("wishlist");

    return res.json({ success: true, data: user?.wishlist || [] });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
