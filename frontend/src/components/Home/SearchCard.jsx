import React, { useState } from "react";
import { MapPin, ChevronDown, Search, SlidersHorizontal } from "lucide-react";

const SearchCard = () => {
  const [activeTab, setActiveTab] = useState("Buy");

  const getFilterFields = () => {
    const priceOptions =
      activeTab === "Rent"
        ? ["Min Price", "$500/mo", "$1,000/mo", "$2,500/mo"]
        : activeTab === "Commercial"
          ? ["Min Price", "$200,000", "$1,000,000", "$10,000,000+"]
          : ["Min Price", "$100,000", "$500,000", "$1,000,000+"];

    const maxPriceOptions =
      activeTab === "Rent"
        ? ["Max Price", "$3,000/mo", "$5,000/mo", "$10,000+/mo"]
        : activeTab === "Commercial"
          ? ["Max Price", "$2,000,000", "$5,000,000", "$50,000,000+"]
          : ["Max Price", "$1,000,000", "$5,000,000", "$10,000,000+"];

    const propertyTypes =
      activeTab === "Commercial"
        ? ["Select type", "Office", "Retail Shop", "Warehouse", "Land"]
        : ["Select type", "Apartment", "Villa", "Penthouse", "Townhouse"];

    return [
      {
        id: "location",
        label: "Location",
        type: "input",
        placeholder: "Enter location",
        icon: MapPin,
      },
      { id: "property-type", label: "Property Type", options: propertyTypes },
      { id: "min-price", label: "Min Price", options: priceOptions },
      { id: "max-price", label: "Max Price", options: maxPriceOptions },
    ];
  };

  const tabs = ["Buy", "Rent", "Commercial"];

  const handleSearch = () => {
    console.log(`Searching for ${activeTab} properties...`);
  };

  return (
    <div className="absolute inset-x-0  bottom-45 lg:-bottom-15 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0a0c10]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
        {}
        <div className="flex items-center justify-between border-b border-gray-800/80 pb-3 mb-5">
          <div className="flex items-center gap-4 sm:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs sm:text-base font-medium relative pb-2 transition-all ${
                  activeTab === tab
                    ? "text-[#f59e0b]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#f59e0b] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {}
          <button className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-[#f59e0b]">
            <SlidersHorizontal className="w-4 h-4 text-[#f59e0b]" />
            <span>Advanced Search</span>
          </button>
        </div>

        {}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          {getFilterFields().map((field, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-1.5 ${idx === 0 ? "col-span-2 sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <label
                htmlFor={field.id}
                className="text-xs text-gray-300 font-medium"
              >
                {field.label}
              </label>
              <div className="relative flex items-center">
                {field.type === "input" ? (
                  <>
                    <field.icon className="absolute left-3.5 w-4 h-4 text-gray-500" />
                    <input
                      id={field.id}
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full bg-[#13161c] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]/50"
                    />
                  </>
                ) : (
                  <>
                    <select
                      id={field.id}
                      className="w-full bg-[#13161c] border border-gray-800 rounded-xl py-2.5 px-4 pr-10 text-sm text-gray-400 appearance-none focus:outline-none focus:border-[#f59e0b]/50 cursor-pointer"
                    >
                      {field.options.map((opt, i) => (
                        <option
                          key={i}
                          value={i === 0 ? "" : opt.toLowerCase()}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
                  </>
                )}
              </div>
            </div>
          ))}
          <button
            onClick={handleSearch}
            className="col-span-2 lg:col-span-1 w-full bg-[#f59e0b] hover:bg-[#d4af37] text-gray-950 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span>Search {activeTab}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
