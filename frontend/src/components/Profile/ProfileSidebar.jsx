import React from "react";
import {
  FaHome,
  FaUser,
  FaHeart,
  FaRegQuestionCircle,
  FaBell,
  FaHistory,
  FaCalendarCheck,
  FaReceipt,
  FaStar,
  FaEnvelope,
  FaCog,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

const ProfileSidebar = ({
  activeTab = "dashboard",
  setActiveTab = () => {},
  savedCount = 12,
  inquiriesCount = 5,
  messagesCount = 3,
}) => {
  const mainNavItems = [
    { id: "dashboard", label: "Dashboard", icon: FaHome },
    { id: "profile", label: "My Profile", icon: FaUser },
    {
      id: "saved",
      label: "Saved Properties",
      icon: FaHeart,
      badge: savedCount,
    },
    {
      id: "inquiries",
      label: "My Inquiries",
      icon: FaRegQuestionCircle,
      badge: inquiriesCount,
    },
    { id: "alerts", label: "Property Alerts", icon: FaBell },
    { id: "recent", label: "Recently Viewed", icon: FaHistory },
  ];

  const accountNavItems = [
    { id: "bookings", label: "My Bookings", icon: FaCalendarCheck },
    { id: "transactions", label: "Transactions", icon: FaReceipt },
    { id: "reviews", label: "Reviews", icon: FaStar },
    {
      id: "messages",
      label: "Messages",
      icon: FaEnvelope,
      badge: messagesCount,
    },
    { id: "settings", label: "Settings", icon: FaCog },
    { id: "password", label: "Change Password", icon: FaLock },
  ];

  return (
    <aside className="w-full bg-[#0a0d14]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-6">
      <div className="space-y-6">
        {}
        <div>
          <p className="text-[11px] font-semibold  uppercase tracking-wider text-white/50 px-3 mb-2">
            Main
          </p>
          <div className="space-y-1">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#f59e0b]/15 text-[#f59e0b] font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-[#f59e0b]" : "text-white/40"}`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50 px-3 mb-2">
            Account
          </p>
          <div className="space-y-1">
            {accountNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#f59e0b]/15 text-[#f59e0b] font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-[#f59e0b]" : "text-white/40"}`}
                    />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {}
      <div className="relative overflow-hidden rounded-xl border border-[#f59e0b]/30 bg-gradient-to-b from-[#182235] to-[#0d1320] p-4 text-left">
        <h4 className="text-sm font-bold text-white mb-1">
          List Your Property
        </h4>
        <p className="text-[11px] text-white/60 mb-3 leading-snug">
          Reach thousands of potential buyers or tenants.
        </p>

        <button
          type="button"
          className="w-full py-2.5 px-3 rounded-lg bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#f59e0b]/10 active:scale-[0.98]"
        >
          <span>List Property</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
