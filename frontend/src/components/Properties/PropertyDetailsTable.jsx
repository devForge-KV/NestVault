import React from "react";

const PropertyDetailsTable = ({ property, isLoading = false }) => {
  if (isLoading || !property) {
    return (
      <div className="w-full bg-[#0a0d14]/90 border border-slate-800/80 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="h-6 w-36 bg-slate-800 rounded mb-4"></div>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="flex justify-between py-2 border-b border-slate-800/60"
          >
            <div className="h-4 w-24 bg-slate-800/60 rounded"></div>
            <div className="h-4 w-28 bg-slate-800/80 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);
  const tableRows = [
    {
      label: "Property ID",
      value:
        property.propertyId || `NV-${property._id?.slice(-5).toUpperCase()}`,
    },
    {
      label: "Property Type",
      value: property.category,
    },
    {
      label: "Property Status",
      value: property.badge,
    },
    {
      label: "Price",
      value: `${formattedPrice} ${property.priceType || ""}`.trim(),
    },
    {
      label: "Bedrooms",
      value: property.beds,
    },
    {
      label: "Bathrooms",
      value: property.baths,
    },
    {
      label: "Area",
      value: property.area,
    },
    {
      label: "Lot Area",
      value: property.lotArea,
    },
    {
      label: "Year Built",
      value: property.yearBuilt,
    },
    {
      label: "Garages",
      value: property.garages,
    },
    {
      label: "Furnished",
      value: property.furnished,
    },
    {
      label: "View",
      value: property.view,
    },
  ];

  return (
    <div className="w-full bg-[#0a0d14]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-bold text-white mb-4">Property Details</h3>

      <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
        {tableRows.map((row, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2.5 hover:bg-slate-900/40 px-1 rounded transition-colors"
          >
            <span className="text-slate-400 font-medium">{row.label}</span>
            <span className="text-white font-semibold">
              {row.value ?? "N/A"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsTable;
