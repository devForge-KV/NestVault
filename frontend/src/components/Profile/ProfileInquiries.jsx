import React from "react";
import { FaArrowRight, FaQuestionCircle } from "react-icons/fa";

const ProfileInquiries = ({ inquiries = [] }) => {
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30";
      case "replied":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "closed":
      default:
        return "bg-white/5 text-white/50 border-white/10";
    }
  };

  return (
    <div className="bg-[#0a0d14]/90 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5">
      {}
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
          My Inquiries
        </h3>
        {inquiries.length > 0 && (
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-bold text-[#f59e0b] hover:underline cursor-pointer"
          >
            <span>View All ({inquiries.length})</span>
            <FaArrowRight className="w-2.5 h-2.5" />
          </button>
        )}
      </div>

      {}
      {inquiries.length === 0 ? (
        <div className="py-8 text-center space-y-2">
          <FaQuestionCircle className="w-8 h-8 text-white/20 mx-auto" />
          <p className="text-xs text-white/50">No inquiries sent yet.</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {inquiries.slice(0, 3).map((item) => (
            <div
              key={item._id || item.id}
              className="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={item.property?.images?.[0] || item.propertyImage || ""}
                  alt={item.property?.title || "Property"}
                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10 bg-white/5"
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {item.property?.title || item.propertyTitle}
                  </h4>
                  <p className="text-[11px] text-white/50 truncate mt-0.5">
                    {item.property?.location || item.location}
                  </p>
                  <p className="text-[10px] text-white/40 mt-0.5">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : ""}
                  </p>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-lg text-[11px] font-bold border capitalize shrink-0 ${getStatusBadge(item.status)}`}
              >
                {item.status || "Pending"}
              </span>
            </div>
          ))}
        </div>
      )}

      {}
      <button
        type="button"
        className="w-full py-2.5 rounded-xl border border-white/10 hover:border-[#f59e0b]/40 text-xs font-bold text-white/90 hover:text-[#f59e0b] flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99]"
      >
        <span>Browse More Properties</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ProfileInquiries;
