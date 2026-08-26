import express from "express";
import {
  registerUser,
  signin,
  getMe,
  LogoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", signin);
router.get("/me", getMe);
router.post("/logout", LogoutUser);
export default router;
