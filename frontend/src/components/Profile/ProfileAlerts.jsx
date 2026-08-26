import React, { useState } from "react";
import {
  FaBell,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBuilding,
  FaTag,
  FaBed,
} from "react-icons/fa";

const ProfileAlerts = ({
  alerts = [],
  userLocation = "New York, USA",
  receiveUpdates = true,
}) => {
  const [isEnabled, setIsEnabled] = useState(receiveUpdates);
  const primaryAlert = alerts[0] || {
    title: `New properties in ${userLocation}`,
    description: "Get notified when new properties match your preferences.",
    type: "Buy",
    propertyType: "Residential",
    priceRange: "$500K - $5M",
    beds: "3+ Beds",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
  };

  const toggleAlert = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="bg-[#0a0d14]/90 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-5">
      {}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FaBell className="w-4 h-4 text-[#f59e0b]" />
          <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
            Property Alerts
          </h3>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 hover:border-[#f59e0b]/40 text-xs font-bold text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-pointer"
        >
          <span>Manage Alerts</span>
          <FaArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>

      {}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
        {}
        <div className="flex items-center gap-4 min-w-0">
          <img
            src={
              primaryAlert.image ||
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
            }
            alt="Alert Preview"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-white/10"
          />

          <div className="space-y-1.5 min-w-0">
            <h4 className="text-sm font-bold text-white truncate">
              {primaryAlert.title}
            </h4>
            <p className="text-xs text-white/50 truncate">
              {primaryAlert.description}
            </p>

            {}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/70 pt-1">
              <div className="flex items-center gap-1 text-[#f59e0b]">
                <FaMapMarkerAlt className="w-3 h-3" />
                <span className="text-white/80">{primaryAlert.type}</span>
              </div>

              <div className="flex items-center gap-1 text-[#f59e0b]">
                <FaBuilding className="w-3 h-3" />
                <span className="text-white/80">
                  {primaryAlert.propertyType}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[#f59e0b]">
                <FaTag className="w-3 h-3" />
                <span className="text-white/80">{primaryAlert.priceRange}</span>
              </div>

              <div className="flex items-center gap-1 text-[#f59e0b]">
                <FaBed className="w-3 h-3" />
                <span className="text-white/80">{primaryAlert.beds}</span>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="self-end sm:self-center shrink-0">
          <button
            type="button"
            onClick={toggleAlert}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              isEnabled ? "bg-[#f59e0b]" : "bg-white/20"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                isEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAlerts;
