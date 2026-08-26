import React from "react";
import {
  FaHome,
  FaShieldAlt,
  FaCalendarAlt,
  FaExpandArrowsAlt,
  FaLayerGroup,
  FaCar,
  FaEye,
  FaCouch,
} from "react-icons/fa";

const PropertyHighlights = ({ property, isLoading = false }) => {
  if (isLoading || !property) {
    return (
      <div className="w-full bg-[#111726]/60 border border-slate-800/80 rounded-2xl p-6">
        <div className="h-6 w-44 bg-slate-800 rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(8)].map((_, idx) => (
            <div
              key={idx}
              className="h-20 bg-slate-800/60 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  const highlights = [
    {
      icon: FaHome,
      label: "Property Type",
      value: property.category,
    },
    {
      icon: FaShieldAlt,
      label: "Property Status",
      value: property.badge,
    },
    {
      icon: FaCalendarAlt,
      label: "Year Built",
      value: property.yearBuilt,
    },
    {
      icon: FaExpandArrowsAlt,
      label: "Lot Area",
      value: property.lotArea,
    },
    {
      icon: FaLayerGroup,
      label: "Floors",
      value: property.floors,
    },
    {
      icon: FaCar,
      label: "Parking",
      value: `${property.garages} Garages`,
    },
    {
      icon: FaEye,
      label: "View",
      value: property.view,
    },
    {
      icon: FaCouch,
      label: "Furnished",
      value: property.furnished,
    },
  ];

  return (
    <div className="w-full bg-[#0a0d14]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-6">Property Highlights</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
        {highlights.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a0d14]/90 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <div className="p-2.5 rounded-lg bg-[#E5A638]/10 border border-[#E5A638]/20 shrink-0 text-[#E5A638]">
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium text-slate-400 truncate">
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
                  {item.value ?? "N/A"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyHighlights;
