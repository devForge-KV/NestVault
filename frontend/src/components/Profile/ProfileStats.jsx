import React from "react";
import {
  FaHome,
  FaRegCommentDots,
  FaBell,
  FaClipboardList,
} from "react-icons/fa";

const ProfileStats = ({ user }) => {
  const firstName = user?.name ? user.name.split(" ")[0] : "User";
  const savedCount = user?.wishlist?.length || 0;
  const inquiriesCount = user?.inquiries?.length || 0;
  const alertsCount = user?.propertyAlerts?.length || 0;
  const bookingsCount = user?.bookings?.length || 0;

  const stats = [
    {
      id: 1,
      title: "Saved Properties",
      value: savedCount,
      icon: FaHome,
    },
    {
      id: 2,
      title: "My Inquiries",
      value: inquiriesCount,
      icon: FaRegCommentDots,
    },
    {
      id: 3,
      title: "Property Alerts",
      value: alertsCount,
      icon: FaBell,
    },
    {
      id: 4,
      title: "My Bookings",
      value: bookingsCount,
      icon: FaClipboardList,
    },
  ];

  return (
    <div className="space-y-6 pt-10">
      {}
      <div>
        <h1 className="text-2xl sm:text-3xl font-thine text-white flex items-center gap-2">
          Welcome back,<span className="text-[#f59e0b]"> {firstName}!</span>{" "}
          <span className="animate-pulse">👋</span>
        </h1>
        <p className="text-xs sm:text-sm text-white/60 mt-1">
          Manage your properties, inquiries and account details all in one
          place.
        </p>
      </div>

      {}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-[#0a0d14]/50 border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 hover:border-[#f59e0b]/40 hover:-translate-y-0.5"
            >
              {}
              <div className="w-12 h-12 rounded-full bg-[##f59e0b] border border-white/5 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-[#f59e0b]" />
              </div>

              {}
              <div>
                <h3 className="text-xl sm:text-2xl font-thine hover:italic text-white leading-tight">
                  {item.value}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/60 font-medium whitespace-nowrap mt-0.5">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileStats;
