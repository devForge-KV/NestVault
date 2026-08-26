import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import propertyRoutes from "./routes/propertyRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());
mongoose
  .connect("mongodb://127.0.0.1:27017/realestate")
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
  console.log(`Backend Server listening on http://localhost:${port}`);
});
