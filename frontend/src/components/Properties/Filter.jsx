import React, { useState, useContext } from "react";
import FilterContext from "../../hooks/FilterContext";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaMapMarkerAlt, FaChevronDown, FaRegBell } from "react-icons/fa";

const Filter = ({ onApply }) => {
  const { setFilter } = useContext(FilterContext);

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState(15000000);
  const [bedRooms, setBedRooms] = useState("any");
  const [bathRooms, setBathRooms] = useState("any");
  const [status, setStatus] = useState({ forSale: false, forRent: false });

  const handleReset = () => {
    setLocation("");
    setPropertyType("all");
    setPriceRange(15000000);
    setBedRooms("any");
    setBathRooms("any");
    setStatus({ forSale: false, forRent: false });

    setFilter({
      location: "",
      propertyType: "all",
      priceRange: 15000000,
      bedRooms: "any",
      bathRooms: "any",
      status: { forSale: false, forRent: false },
    });
  };

  const handleApplyFilter = () => {
    setFilter({
      location,
      propertyType,
      priceRange,
      bedRooms,
      bathRooms,
      status,
    });

    if (onApply) {
      onApply();
    }
  };

  return (
    <aside className="w-full bg-[#0b0f17] border border-white/10 p-4 sm:p-5 rounded-2xl text-white flex flex-col gap-5 shrink-0">
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <LuSlidersHorizontal className="text-[#f59e0b] text-base sm:text-lg" />
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            Filter Properties
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-xs text-[#f59e0b] hover:underline font-medium cursor-pointer transition-all"
        >
          Reset All
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[11px] sm:text-xs font-medium text-gray-300">
          Location
        </label>
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#121824] border border-white/10 rounded-xl py-2 pl-8 pr-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[11px] sm:text-xs font-medium text-gray-300">
          Property Type
        </label>
        <div className="relative">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-[#121824] border border-white/10 rounded-xl py-2 px-3 pr-8 text-xs text-gray-300 appearance-none focus:outline-none focus:border-[#f59e0b] cursor-pointer"
          >
            <option value="all">Select type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Townhouse">Townhouse</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-[10px] pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center text-xs">
          <label className="font-medium text-gray-300 text-[11px] sm:text-xs">
            Price Range
          </label>
          <span className="text-[#f59e0b] font-semibold text-xs">
            ${(priceRange / 1000000).toFixed(1)}M
          </span>
        </div>
        <input
          type="range"
          min="500000"
          max="30000000"
          step="500000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[11px] sm:text-xs font-medium text-gray-300">
          Bedrooms
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {["1", "2", "3", "4+"].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setBedRooms(bedRooms === num ? "any" : num)}
              className={`py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                bedRooms === num
                  ? "bg-[#121824] text-[#f59e0b] border-[#f59e0b] font-bold"
                  : "bg-[#121824] text-gray-300 border-white/10"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-[11px] sm:text-xs font-medium text-gray-300">
          Bathrooms
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {["1", "2", "3", "4+"].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setBathRooms(bathRooms === num ? "any" : num)}
              className={`py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                bathRooms === num
                  ? "bg-[#121824] text-[#f59e0b] border-[#f59e0b] font-bold"
                  : "bg-[#121824] text-gray-300 border-white/10"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] sm:text-xs font-medium text-gray-300">
          Property Status
        </label>
        <div className="flex gap-4 text-xs text-gray-300">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={status.forSale}
              onChange={(e) =>
                setStatus({ ...status, forSale: e.target.checked })
              }
              className="w-3.5 h-3.5 rounded accent-[#f59e0b] cursor-pointer"
            />
            <span>For Sale</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={status.forRent}
              onChange={(e) =>
                setStatus({ ...status, forRent: e.target.checked })
              }
              className="w-3.5 h-3.5 rounded accent-[#f59e0b] cursor-pointer"
            />
            <span>For Rent</span>
          </label>
        </div>
      </div>

      <button
        type="button"
        onClick={handleApplyFilter}
        className="w-full bg-[#f59e0b] hover:bg-[#b8952b] text-black font-semibold text-xs py-2.5 rounded-xl transition-all cursor-pointer mt-1 active:scale-95"
      >
        Apply Filter
      </button>

      <div className="bg-[#0b0f17] hidden lg:block text-center border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center max-w-sm mx-auto shadow-xl">
        {}
        <div className="w-14 h-14 rounded-full bg-[#161c28] flex items-center justify-center mb-4 border border-white/5">
          <FaRegBell className="text-[#f59e0b] text-2xl" />
        </div>

        {}
        <h2 className="text-white font-semibold text-lg sm:text-xl mb-2 tracking-wide">
          Get Property Alerts
        </h2>

        {}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-[240px]">
          Be the first to know about new properties that fit your needs.
        </p>

        {}
        <button
          type="button"
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-[#f59e0b]/60 hover:border-[#f59e0b] bg-transparent text-[#f59e0b] font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-[#f59e0b]/10 active:scale-95 cursor-pointer"
        >
          Create Alert
        </button>
      </div>
    </aside>
  );
};

export default Filter;
