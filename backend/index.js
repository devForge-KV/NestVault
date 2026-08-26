import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import propertyRoutes from "./routes/propertyRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/realestate";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Database Connected Successfully! 🟢"))
  .catch((err) => console.log("DB Connection Error:", err.message));

app.use("/api/properties", propertyRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Real Estate API Server Running!" });
});

app.listen(port, () => {
  console.log(`Backend Server listening on port ${port}`);
});