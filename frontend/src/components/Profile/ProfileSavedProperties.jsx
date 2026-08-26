import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import PropertiesCard from "../Common/PropertiesCard";
import { useWishlist } from "../../hooks/useWishlist";

const ProfileSavedProperties = ({ savedProperties = [] }) => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="space-y-4">
      {}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-wider font-thin">
          Saved Properties
        </h2>

        {savedProperties.length > 0 && (
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#f59e0b] hover:underline cursor-pointer transition-colors"
          >
            <span>View All ({savedProperties.length})</span>
            <FaArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>

      {}
      {savedProperties.length === 0 ? (
        <div className="bg-[#0a0d14]/90 border border-white/10 rounded-2xl p-8 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white/40">
            <FaHeart className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            No Saved Properties Yet
          </h3>
          <p className="text-xs text-white/50 max-w-sm mx-auto">
            Explore listings and click the heart icon on any property to save it
            to your dashboard.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {savedProperties.slice(0, 4).map((item) => (
            <PropertiesCard
              key={item._id || item.id}
              property={item}
              isWishlisted={wishlist.some(
                (saved) => (saved._id || saved.id) === (item._id || item.id),
              )}
              onToggleWishlist={toggleWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileSavedProperties;
