import React, { useState, useEffect, useContext } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Filter from "./Filter";
import PropertiesCard from "../Common/PropertiesCard";
import FilterContext, { FilterProvider } from "../../hooks/FilterContext";
import { useWishlist } from "../../hooks/useWishlist";
import Loading from "../Common/Loading";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const PROPERTIES_PER_PAGE = 8;

const PropertyListingContent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const { filter } = useContext(FilterContext);
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams();
        if (filter?.location) queryParams.append("location", filter.location);
        if (filter?.propertyType && filter.propertyType !== "all") {
          queryParams.append("propertyType", filter.propertyType);
        }

        if (filter?.priceRange)
          queryParams.append("maxPrice", filter.priceRange);
        if (filter?.bedRooms && filter.bedRooms !== "any")
          queryParams.append("bedRooms", filter.bedRooms);
        if (filter?.bathRooms && filter.bathRooms !== "any")
          queryParams.append("bathRooms", filter.bathRooms);
        if (filter?.status?.forSale) queryParams.append("forSale", "true");
        if (filter?.status?.forRent) queryParams.append("forRent", "true");
        if (sortBy) queryParams.append("sortBy", sortBy);

        const response = await fetch(`${API_BASE_URL}/api/properties?${queryParams.toString()}`);
        if (!response.ok) throw new Error("Failed to fetch");

        const result = await response.json();
        const payload = Array.isArray(result) ? result : (result?.data ?? []);
        setProperties(payload);
        setCurrentPage(1);
      } catch (err) {
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filter, sortBy]);
  const totalPages = Math.ceil(properties.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const currentProperties = properties.slice(
    startIndex,
    startIndex + PROPERTIES_PER_PAGE,
  );
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return loading ? (
    <Loading />
  ) : (
    <section className="max-w-[1400px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start">
      {}
      <div className="w-full lg:w-[320px] shrink-0">
        <Filter />
      </div>

      {}
      <div className="w-full flex-1 flex flex-col gap-4">
        {}
        <div className="flex items-center justify-between bg-[#0b0f17] border border-white/10 rounded-xl px-4 py-3 text-white">
          <span className="text-xs text-gray-400 font-medium">
            Showing{" "}
            <span className="text-white font-semibold">
              {startIndex + 1}-
              {Math.min(startIndex + PROPERTIES_PER_PAGE, properties.length)}
            </span>{" "}
            of{" "}
            <span className="text-white font-semibold">
              {properties.length}
            </span>{" "}
            Results
          </span>

          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-400 hidden sm:block">
              Sort by:
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#121824] border border-white/10 text-xs text-gray-200 rounded-lg py-1.5 pl-3 pr-8 appearance-none focus:outline-none focus:border-[#f59e0b] cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <FaChevronDown className="absolute right-2.5 top-2 text-gray-400 text-[10px] pointer-events-none" />
            </div>
          </div>
        </div>

        {}
        {error && (
          <div className="text-center py-12 text-red-400 text-sm bg-[#0b0f17] rounded-xl border border-white/10">
            {error}
          </div>
        )}

        {}
        {!loading && !error && currentProperties.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentProperties.map((item) => (
              <PropertiesCard
                key={item._id}
                property={item}
                isWishlisted={wishlist.some(
                  (saved) => (saved._id || saved.id) === item._id,
                )}
                onToggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        )}

        {}
        {!loading && !error && properties.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm bg-[#0b0f17] rounded-xl border border-white/10">
            No properties found.
          </div>
        )}

        {}
        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg bg-[#0b0f17] border border-white/10 text-white flex items-center justify-center disabled:opacity-30 hover:border-[#f59e0b] transition-all"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {}
            {getPageNumbers().map((page, idx) => (
              <button
                key={idx}
                onClick={() => page !== "..." && setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-xs font-medium transition-all ${
                  page === currentPage
                    ? "bg-[#f59e0b] text-black font-bold"
                    : page === "..."
                      ? "text-gray-400 cursor-default bg-transparent"
                      : "bg-[#0b0f17] border border-white/10 text-white hover:border-[#f59e0b]"
                }`}
              >
                {page}
              </button>
            ))}

            {}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg bg-[#0b0f17] border border-white/10 text-white flex items-center justify-center disabled:opacity-30 hover:border-[#f59e0b] transition-all"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const PropertyListing = () => {
  return (
    <FilterProvider>
      <PropertyListingContent />
    </FilterProvider>
  );
};

export default PropertyListing;
