import React from "react";
import { FaCheck } from "react-icons/fa";

const AboutProperty = ({
  description = "",
  features = [],
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="w-full bg-[#0a0d14]/90 border border-slate-800/80 rounded-2xl p-6 space-y-4 animate-pulse">
        <div className="h-6 w-48 bg-slate-800 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-800/60 rounded w-full"></div>
          <div className="h-4 bg-slate-800/60 rounded w-5/6"></div>
          <div className="h-4 bg-slate-800/60 rounded w-4/6"></div>
        </div>
        <div className="space-y-2 pt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-slate-800/40 rounded w-3/4"></div>
          ))}
        </div>
      </div>
    );
  }
  const paragraphs = description
    ? description.split("\n\n").filter((p) => p.trim() !== "")
    : [];

  return (
    <div className="w-full bg-[#0a0d14]/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">About This Property</h3>

      {}
      {paragraphs.length > 0 && (
        <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          {paragraphs.map((para, index) => (
            <p key={index} className="text-slate-300">
              {para}
            </p>
          ))}
        </div>
      )}

      {}
      {Array.isArray(features) && features.length > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-[#E5A638]/10 border border-[#E5A638]/30 shrink-0 text-[#E5A638]">
                <FaCheck className="w-2.5 h-2.5" />
              </div>
              <span className="text-sm sm:text-base text-slate-200 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutProperty;
