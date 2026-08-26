import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "$" },
    priceType: { type: String, default: "" },
    badge: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    area: { type: String, required: true },
    isFeatured: { type: Boolean, default: true },
    propertyId: { type: String },
    images: [{ type: String }],
    description: { type: String },
    features: [{ type: String }],
    amenities: [{ type: String }],
    garages: { type: Number, default: 2 },
    yearBuilt: { type: Number, default: 2023 },
    lotArea: { type: String, default: "0.25 Acres" },
    floors: { type: Number, default: 2 },
    view: { type: String, default: "Ocean View" },
    furnished: { type: String, default: "Fully Furnished" },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Property", propertySchema);
