import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const LocationMap = ({ location = "", isLoading = false }) => {
  if (isLoading || !location) {
    return (
      <div className="w-full bg-[#0a0d14]/90 border border-slate-800/80 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="flex justify-between">
          <div className="h-6 w-24 bg-slate-800 rounded"></div>
          <div className="h-4 w-20 bg-slate-800 rounded"></div>
        </div>
        <div className="h-44 bg-slate-800/60 rounded-xl"></div>
        <div className="h-4 bg-slate-800 rounded w-3/4"></div>
      </div>
    );
  }
  const mapQuery = encodeURIComponent(location);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <div className="w-full bg-[#0a0d14]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-lg space-y-4">
      {}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Location</h3>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-[#E5A638] hover:text-[#f3b955] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>View on Map</span>
          <FaExternalLinkAlt className="w-3 h-3" />
        </a>
      </div>

      {}
      <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group">
        <iframe
          title={`Map location for ${location}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${mapQuery}&t=m&z=13&output=embed&iwloc=near`}
          className="w-full h-full grayscale contrast-125 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
        />

        {}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#E5A638]/40 opacity-75"></span>
            <div className="p-2 bg-[#E5A638] text-slate-950 rounded-full shadow-xl border-2 border-slate-950">
              <FaMapMarkerAlt className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {}
      <div>
        <p className="text-sm font-bold text-white flex items-center gap-2">
          <FaMapMarkerAlt className="w-4 h-4 text-[#E5A638] shrink-0" />
          <span className="truncate">{location}</span>
        </p>
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
          Prime location with convenient access to local amenities, transit, and
          fine dining.
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
