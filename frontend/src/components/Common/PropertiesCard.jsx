import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Bed, Bath, Ruler, MapPin } from "lucide-react";

const PropertyCard = ({ property, isWishlisted, onToggleWishlist }) => {
  const navigate = useNavigate();
  const isRent = property?.badge?.toLowerCase() === "for rent";

  return (
    <div
      onClick={() => property?._id && navigate(`/properties/${property._id}`)}
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && property?._id) {
          event.preventDefault();
          navigate(`/properties/${property._id}`);
        }
      }}
      className="bg-[#0b0f17] text-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col group h-full cursor-pointer"
    >
      {}
      <div className="relative h-32 sm:h-44 md:h-48 lg:h-52 overflow-hidden shrink-0">
        <img
          src={property?.image}
          alt={property?.title || "Property listing"}
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {}
        <span
          className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-white backdrop-blur-md ${
            isRent
              ? "bg-emerald-600/90 border border-emerald-500/30"
              : "bg-amber-900/80 text-[#f59e0b] border border-amber-600/40"
          }`}
        >
          {property?.badge}
        </span>

        {}
        <button
          onClick={(event) => {
            event.stopPropagation();
            onToggleWishlist?.(property?._id);
          }}
          aria-label={`${isWishlisted ? "Remove" : "Save"} ${property?.title || "property"} ${isWishlisted ? "from" : "to"} wishlist`}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-slate-900/60 backdrop-blur-md p-1.5 sm:p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-slate-300"
            }`}
          />
        </button>
      </div>

      {}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-grow">
        <div>
          {}
          <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-0.5 sm:mb-1">
            {property?.currency}
            {property?.price?.toLocaleString()}{" "}
            <span className="text-[10px] sm:text-xs md:text-sm font-normal text-slate-400 block sm:inline">
              {property?.priceType}
            </span>
          </div>

          {}
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-amber-400 line-clamp-1 group-hover:text-[#f59e0b] transition-colors">
            {property?.title}
          </h3>

          {}
          <p className="text-slate-400 text-[10px] sm:text-xs mt-1 sm:mt-1.5 md:mt-2 flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f59e0b]/80 shrink-0" />
            <span className="truncate">{property?.location}</span>
          </p>
        </div>

        {}
        <div className="flex items-center justify-between mt-3 sm:mt-4 md:mt-5 pt-2 sm:pt-3 border-t border-slate-800/80 text-slate-300 text-[10px] sm:text-xs font-medium gap-1 sm:gap-1.5">
          {property?.beds ? (
            <span className="flex items-center gap-1 shrink-0">
              <Bed className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
              {property.beds} <span className=" sm:inline">Beds</span>
            </span>
          ) : null}

          {property?.baths ? (
            <span className="flex items-center gap-1 shrink-0">
              <Bath className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
              {property.baths} <span className=" sm:inline">Baths</span>
            </span>
          ) : null}

          {property?.area ? (
            <span className="flex items-center gap-1 min-w-0 shrink-0">
              <Ruler className="w-3 h-3 sm:w-2 sm:h-2 text-slate-400 shrink-0" />
              <span className="truncate">{property.area}</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
