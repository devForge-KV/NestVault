import React from "react";
import {
  FaBed,
  FaBath,
  FaExpandArrowsAlt,
  FaCar,
  FaCalendarCheck,
  FaCommentDots,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PriceAndAgentCard = ({
  property,
  onScheduleTour,
  onRequestInfo,
  isLoading = false,
}) => {
  if (isLoading || !property) {
    return (
      <div className="w-full bg-[#111726]/90 border border-slate-800/80 rounded-2xl p-6 space-y-6 animate-pulse">
        <div className="h-8 bg-slate-800 rounded w-2/3"></div>
        <div className="h-4 bg-slate-800 rounded w-1/2"></div>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 bg-slate-800/60 rounded-xl"></div>
          ))}
        </div>
        <div className="h-12 bg-slate-800 rounded-xl"></div>
        <div className="h-12 bg-slate-800 rounded-xl"></div>
      </div>
    );
  }
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  const agent = property.agent;

  return (
    <div className="w-full bg-[#0a0d14]/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-6">
      {}
      <div>
        <div className="flex items-baseline gap-1.5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {formattedPrice}
          </h2>
          {property.priceType && (
            <span className="text-sm sm:text-base font-medium text-slate-400">
              {property.priceType}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#E5A638] mt-1.5 line-clamp-1">
          {property.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
          <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#E5A638] shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>
      </div>

      {}
      <div className="grid grid-cols-4 gap-2 py-3 border-y border-slate-800/80">
        <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#0a0d14]/90 border border-slate-800/50 text-center">
          <FaBed className="w-4 h-4 text-[#E5A638] mb-1.5" />
          <span className="text-xs font-bold text-white">{property.beds}</span>
          <span className="text-[10px] text-slate-400">Beds</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#0a0d14]/90 border border-slate-800/50 text-center">
          <FaBath className="w-4 h-4 text-[#E5A638] mb-1.5" />
          <span className="text-xs font-bold text-white">{property.baths}</span>
          <span className="text-[10px] text-slate-400">Baths</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#0a0d14]/90 border border-slate-800/50 text-center">
          <FaExpandArrowsAlt className="w-4 h-4 text-[#E5A638] mb-1.5" />
          <span className="text-xs font-bold text-white truncate w-full px-1">
            {property.area}
          </span>
          <span className="text-[10px] text-slate-400">Sq.Ft</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-[#0a0d14]/90 border border-slate-800/50 text-center">
          <FaCar className="w-4 h-4 text-[#E5A638] mb-1.5" />
          <span className="text-xs font-bold text-white">
            {property.garages}
          </span>
          <span className="text-[10px] text-slate-400">Garages</span>
        </div>
      </div>

      {}
      <div className="space-y-3">
        <button
          type="button"
          onClick={onScheduleTour}
          className="w-full py-3.5 px-4 rounded-xl bg-[#E5A638] hover:bg-[#d4972e] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#E5A638]/10 cursor-pointer active:scale-[0.98]"
        >
          <FaCalendarCheck className="w-4 h-4" />
          <span>Schedule a Tour</span>
        </button>

        <button
          type="button"
          onClick={onRequestInfo}
          className="w-full py-3.5 px-4 rounded-xl border border-slate-700/80 bg-[#0a0d14]/90 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98]"
        >
          <FaCommentDots className="w-4 h-4 text-[#E5A638]" />
          <span>Request More Info</span>
        </button>
      </div>

      {}
      {agent && (
        <div className="pt-4 border-t border-slate-800/80">
          <p className="text-xs font-medium text-slate-400 mb-3">Listed by</p>

          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#E5A638]/40"
              />
              {agent.isVerified && (
                <FaCheckCircle className="w-4 h-4 text-[#E5A638] bg-slate-950 rounded-full absolute -bottom-0.5 -right-0.5" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white truncate">
                {agent.name}
              </h4>
              <p className="text-xs text-slate-400 truncate">{agent.role}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex items-center text-[#E5A638] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-slate-300 ml-1">
                  {agent.rating}
                </span>
                <span className="text-[10px] text-slate-400">
                  ({agent.reviewsCount} Reviews)
                </span>
              </div>
            </div>
          </div>

          {}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <a
              href={`tel:${agent.phone}`}
              className="flex items-center justify-center p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="Call Agent"
            >
              <FaPhoneAlt className="w-3.5 h-3.5 text-[#E5A638]" />
            </a>

            <a
              href={`mailto:${agent.email}`}
              className="flex items-center justify-center p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="Email Agent"
            >
              <FaEnvelope className="w-3.5 h-3.5 text-[#E5A638]" />
            </a>

            <a
              href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4 text-[#E5A638]" />
            </a>

            <a
              href={agent.socials?.linkedin || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 text-[#E5A638]" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceAndAgentCard;
