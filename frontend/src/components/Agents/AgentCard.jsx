import React from "react";
import { FaStarOfDavid, FaRegHeart, FaUser } from "react-icons/fa";
import { LuBriefcase, LuClock, LuBuilding2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const AgentCard = ({ agent, loading = false }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-[320px] bg-[#0c0f17] border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#f59e0b]"></div>
      </div>
    );
  }

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case "Top Rated":
        return "bg-[#f59e0b] text-black font-bold";
      case "Verified":
        return "bg-[#16a34a] text-white font-bold";
      case "Featured":
        return "bg-[#2563eb] text-white font-bold";
      default:
        return "bg-gray-700 text-white font-bold";
    }
  };

  return (
    <div className="bg-[#0c0f17] border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#f59e0b]/40 transition-all duration-300 flex flex-col justify-between p-2.5 sm:p-4 shadow-2xl group">
      {}
      <div className="relative w-full h-36 sm:h-56 bg-[#161b26] rounded-lg sm:rounded-xl overflow-hidden mb-2.5 sm:mb-4">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {}
        {agent.badge && agent.badge !== "None" && (
          <span
            className={`absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded sm:rounded-md tracking-wide shadow-md ${getBadgeStyle(
              agent.badge,
            )}`}
          >
            {agent.badge}
          </span>
        )}

        {}
        <button className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 p-1.5 sm:p-2 bg-black/40 backdrop-blur-md rounded-full text-white/80 hover:text-white hover:bg-black/60 transition-colors">
          <FaRegHeart className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {}
      <div className="flex flex-col gap-1.5 sm:gap-3 flex-1 justify-between px-0.5">
        <div>
          {}
          <h3 className="text-white font-bold text-xs sm:text-base tracking-wide group-hover:text-[#f59e0b] transition-colors truncate">
            {agent.name}
          </h3>

          {}
          <p className="text-[#f59e0b] text-[10px] sm:text-xs font-medium mt-0.5 truncate">
            {agent.role}
          </p>

          {}
          <div className="flex items-center gap-1 mt-1 sm:mt-2 text-[10px] sm:text-xs">
            <div className="flex text-[#f59e0b] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStarOfDavid key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              ))}
            </div>
            <span className="text-white font-bold ml-0.5">{agent.rating}</span>
            <span className="text-gray-400 text-[9px] sm:text-[11px] truncate">
              ({agent.reviewsCount})
            </span>
          </div>
        </div>

        {}
        <div className="space-y-1 sm:space-y-2 py-1 sm:py-2 text-[10px] sm:text-xs text-gray-300 border-t border-b border-white/5 my-1">
          {}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <LuBriefcase className="text-[#f59e0b] w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span className="text-gray-300 font-normal truncate">
              {agent.specialization || "Luxury Specialist"}
            </span>
          </div>

          {}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <LuClock className="text-[#f59e0b] w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span className="text-gray-300 font-normal truncate">
              {agent.experienceYears}+ Yrs Exp
            </span>
          </div>

          {}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <LuBuilding2 className="text-[#f59e0b] w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span className="text-gray-300 font-normal truncate">
              {agent.propertiesSold} Sold
            </span>
          </div>
        </div>

        {}
        <button
          onClick={() => navigate(`/agents/${agent._id}`)}
          className="w-full mt-0.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-[#f59e0b]/30 bg-transparent hover:bg-[#f59e0b] text-[#f59e0b] hover:text-black font-semibold text-[10px] sm:text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
        >
          View Profile <FaUser className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
