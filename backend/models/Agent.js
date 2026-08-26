import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    badge: {
      type: String,
      enum: ["Top Rated", "Verified", "Featured", "None"],
      default: "Top Rated",
    },
    badgeTagline: { type: String, default: "Among top 1% agents on NestVault" },
    isVerified: { type: Boolean, default: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 4.9 },
    reviewsCount: { type: Number, default: 128 },
    bio: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    propertiesSold: { type: Number, required: true },
    totalSales: { type: String, default: "$300M+" },
    clientSatisfaction: { type: String, default: "98%" },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    languages: [{ type: String }],
    socials: {
      linkedin: { type: String, default: "#" },
      facebook: { type: String, default: "#" },
      instagram: { type: String, default: "#" },
    },
    aboutText: { type: String, required: true },
    certifications: [{ type: String }],
    areasOfExpertise: [{ type: String }],
  },
  { timestamps: true },
);

export const Agent = mongoose.model("Agent", agentSchema);
