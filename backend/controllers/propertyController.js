import Property from "../models/Property.js";
export const getProperties = async (req, res) => {
  try {
    const {
      location,
      propertyType,
      maxPrice,
      bedRooms,
      bathRooms,
      forSale,
      forRent,
      sortBy,
    } = req.query;

    let query = {};
    if (location && location.trim() !== "") {
      query.location = { $regex: location.trim(), $options: "i" };
    }
    if (propertyType && propertyType !== "all") {
      query.category = { $regex: propertyType.trim(), $options: "i" };
    }
    if (maxPrice) {
      query.price = { $lte: Number(maxPrice) };
    }
    if (bedRooms && bedRooms !== "any") {
      if (bedRooms === "4+") {
        query.beds = { $gte: 4 };
      } else {
        query.beds = Number(bedRooms);
      }
    }
    if (bathRooms && bathRooms !== "any") {
      if (bathRooms === "4+") {
        query.baths = { $gte: 4 };
      } else {
        query.baths = Number(bathRooms);
      }
    }
    if (forSale === "true" && forRent !== "true") {
      query.badge = { $regex: "Sale", $options: "i" };
    } else if (forRent === "true" && forSale !== "true") {
      query.badge = { $regex: "Rent", $options: "i" };
    }
    let sortOptions = { createdAt: -1 };
    if (sortBy === "price-low") {
      sortOptions = { price: 1 };
    } else if (sortBy === "price-high") {
      sortOptions = { price: -1 };
    }

    const properties = await Property.find(query).sort(sortOptions);

    res.status(200).json({
      success: true,
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate("agent");
    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found" });
    }
    res.status(200).json({ success: true, data: property });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error: " + error.message });
  }
};
