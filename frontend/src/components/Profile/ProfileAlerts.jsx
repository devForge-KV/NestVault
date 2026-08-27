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
    <div className="bg-[#0a0d14]/90 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FaBell className="w-4 h-4 text-[#f59e0b] shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            Property Alerts
          </h3>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 hover:border-[#f59e0b]/40 text-xs font-semibold text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all shrink-0"
        >
          <span>Manage</span>
          <FaArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>

      {/* Main Alert Card */}
      <div className="p-3.5 sm:p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
        {/* Content Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 min-w-0 w-full">
          {/* Image */}
          <img
            src={
              primaryAlert.image ||
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
            }
            alt="Alert Preview"
            className="w-full h-36 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-white/10"
          />

          {/* Details */}
          <div className="space-y-1.5 min-w-0 w-full">
            <div className="flex items-center justify-between gap-2 sm:block">
              <h4 className="text-sm font-semibold text-white truncate">
                {primaryAlert.title}
              </h4>
              {/* Mobile Toggle Switch */}
              <div className="sm:hidden shrink-0">
                <button
                  type="button"
                  onClick={toggleAlert}
                  className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isEnabled ? "bg-[#f59e0b]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                      isEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <p className="text-xs text-white/60 line-clamp-2 sm:truncate">
              {primaryAlert.description}
            </p>

            {/* Badges / Meta Info */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-white/75 pt-1">
              <div className="flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5">
                <FaMapMarkerAlt className="w-2.5 h-2.5 text-[#f59e0b]" />
                <span>{primaryAlert.type}</span>
              </div>

              <div className="flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5">
                <FaBuilding className="w-2.5 h-2.5 text-[#f59e0b]" />
                <span>{primaryAlert.propertyType}</span>
              </div>

              <div className="flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5">
                <FaTag className="w-2.5 h-2.5 text-[#f59e0b]" />
                <span>{primaryAlert.priceRange}</span>
              </div>

              <div className="flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/5">
                <FaBed className="w-2.5 h-2.5 text-[#f59e0b]" />
                <span>{primaryAlert.beds}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Toggle Switch */}
        <div className="hidden sm:block shrink-0 pl-2">
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