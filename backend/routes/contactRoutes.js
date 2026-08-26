import express from "express";
import { createContactInquiry } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContactInquiry);

export default router;
