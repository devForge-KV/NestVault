import React from "react";
import {
  FaWater,
  FaUmbrellaBeach,
  FaTv,
  FaMicrochip,
  FaFire,
  FaUtensils,
  FaDumbbell,
  FaSpa,
  FaWineGlassAlt,
  FaShieldAlt,
  FaTree,
  FaCheckCircle,
} from "react-icons/fa";
import { TbElevator } from "react-icons/tb";

const amenityIconMap = {
  "infinity pool": FaWater,
  pool: FaWater,
  "swimming pool": FaWater,
  "private beach": FaUmbrellaBeach,
  "beach access": FaUmbrellaBeach,
  "home theater": FaTv,
  theater: FaTv,
  "smart home": FaMicrochip,
  fireplace: FaFire,
  "outdoor kitchen": FaUtensils,
  gym: FaDumbbell,
  "fitness center": FaDumbbell,
  spa: FaSpa,
  "wine cellar": FaWineGlassAlt,
  elevator: TbElevator,
  "security system": FaShieldAlt,
  "landscaped garden": FaTree,
  garden: FaTree,
};

const Amenities = ({ amenities = [], isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="w-full bg-[#0a0d14]/90 border border-slate-800/80 rounded-2xl p-6 space-y-6">
        <div className="h-6 w-36 bg-slate-800 rounded animate-pulse"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-14 bg-slate-800/60 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }
  if (!Array.isArray(amenities) || amenities.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-[#0a0d14]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-6">Amenities</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        {amenities.map((amenity, index) => {
          const key = amenity.toLowerCase().trim();
          const IconComponent = amenityIconMap[key] || FaCheckCircle;

          return (
            <div
              key={index}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a0d14]/20 border border-slate-800/90 hover:border-slate-700 transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-[#E5A638]/10 text-[#E5A638] shrink-0">
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                {amenity}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
