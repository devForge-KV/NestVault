import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaArrowRight,
} from "react-icons/fa";

const ProfileBioCard = ({ user }) => {
  const getMemberSince = (dateString) => {
    if (!dateString) return "May 2024";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };
  const avatarSrc =
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=f59e0b&color=000&bold=true`;

  return (
    <div className="bg-[#0a0d14]/90 border border-white/10 rounded-2xl p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {}
      <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
        {}
        <div className="relative shrink-0">
          <img
            src={avatarSrc}
            alt={user?.name || "User Avatar"}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white/10 shadow-lg shadow-black/40"
          />
        </div>

        {}
        <div className="space-y-2.5 w-full">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {user?.name || "John Doe"}
            </h2>
            {user?.isVerified && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30">
                Verified
              </span>
            )}
          </div>

          <div className="space-y-1.5 text-xs text-white/70">
            <div className="flex items-center gap-2.5">
              <FaEnvelope className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span className="truncate">{user?.email || "N/A"}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <FaPhoneAlt className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span>{user?.phone || "N/A"}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span>{user?.location || "Location not set"}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <FaCalendarAlt className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span>Member since {getMemberSince(user?.createdAt)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b]/10 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FaEdit className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white mb-1.5">About Me</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            {user?.aboutMe ||
              "I'm looking for my dream home. Interested in modern apartments, luxury villas and commercial spaces in prime locations."}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold text-white mb-2">Preferences</h3>
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
            {user?.preferences && user.preferences.length > 0 ? (
              user.preferences.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-white/90">{item}</span>
                  {index < user.preferences.length - 1 && (
                    <span className="text-[#f59e0b] font-bold">•</span>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <span>Buy</span>
                <span className="text-[#f59e0b] font-bold">•</span>
                <span>Residential</span>
                <span className="text-[#f59e0b] font-bold">•</span>
                <span>New York, USA</span>
              </>
            )}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#f59e0b]/40 text-[#f59e0b] hover:bg-[#f59e0b]/10 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>View Full Profile</span>
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBioCard;
