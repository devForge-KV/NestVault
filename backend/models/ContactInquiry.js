import mongoose from "mongoose";

const contactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    number: { type: String, trim: true, default: "" },
    subject: { type: String, trim: true, default: "General Inquiry" },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true },
);

export default mongoose.model("ContactInquiry", contactInquirySchema);
