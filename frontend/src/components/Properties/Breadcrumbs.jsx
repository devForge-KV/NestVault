import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Share2, Heart } from "lucide-react";

const Breadcrumbs = ({ propertyName, isLoading = false, onShare, onSave }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    if (onSave) onSave(!isSaved);
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else if (navigator.share) {
      navigator
        .share({
          title: propertyName || "Property Details",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="w-full bg-[#0a0d14]/90 border-b border-slate-800/60 py-3.5 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-2 text-xs sm:text-sm"
        >
          <Link
            to="/"
            className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
          >
            Home
          </Link>

          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

          <Link
            to="/properties"
            className="text-slate-400 hover:text-white transition-colors duration-200 font-medium"
          >
            Properties
          </Link>

          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

          {}
          {isLoading ? (
            <div className="h-4 w-36 bg-slate-800 animate-pulse rounded"></div>
          ) : (
            <span className="text-[#E5A638] font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {propertyName}
            </span>
          )}
        </nav>

        {}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
          >
            <Share2 className="w-4 h-4 text-slate-400" />
            <span>Share</span>
          </button>

          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border transition-all duration-200 text-xs sm:text-sm font-medium ${
              isSaved
                ? "border-rose-500/50 bg-rose-500/10 text-rose-400"
                : "border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isSaved ? "fill-rose-500 text-rose-500" : "text-slate-400"}`}
            />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
