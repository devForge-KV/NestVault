import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/userController.js";

const router = express.Router();

router.use(requireAuth);
router.get("/wishlist", getWishlist);
router.post("/wishlist/:propertyId", addToWishlist);
router.delete("/wishlist/:propertyId", removeFromWishlist);

export default router;
