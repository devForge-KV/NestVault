import React from "react";
import {
  FaHistory,
  FaChevronRight,
  FaArrowRight,
  FaHeart,
  FaRegCommentDots,
  FaEye,
  FaReply,
} from "react-icons/fa";

const ProfileRecentActivity = ({ activities = [] }) => {
  const getActionIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "saved":
        return <FaHeart className="w-4 h-4 text-red-400" />;
      case "inquiry":
        return <FaRegCommentDots className="w-4 h-4 text-[#f59e0b]" />;
      case "viewed":
        return <FaEye className="w-4 h-4 text-cyan-400" />;
      default:
        return <FaReply className="w-4 h-4 text-[#f59e0b]" />;
    }
  };

  return (
    <div className="bg-[#0a0d14]/90 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5">
      {}
      <div>
        <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
          Recent Activity
        </h3>
      </div>

      {}
      {activities.length === 0 ? (
        <div className="py-8 text-center space-y-2">
          <FaHistory className="w-8 h-8 text-white/20 mx-auto" />
          <p className="text-xs text-white/50">No recent activity found.</p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {activities.slice(0, 4).map((item) => (
            <div
              key={item._id || item.id}
              className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                  {getActionIcon(item.type)}
                </div>

                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-white/90 truncate">
                    {item.actionText}
                  </h4>
                  <p className="text-[11px] text-white/50 truncate mt-0.5 group-hover:text-white transition-colors">
                    {item.propertyName || item.targetName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-white/40 shrink-0">
                <span>
                  {item.timeAgo ||
                    (item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "")}
                </span>
                <FaChevronRight className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      )}

      {}
      <button
        type="button"
        className="w-full py-2.5 rounded-xl border border-white/10 hover:border-[#f59e0b]/40 text-xs font-bold text-white/90 hover:text-[#f59e0b] flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99]"
      >
        <span>View All Activity</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ProfileRecentActivity;
