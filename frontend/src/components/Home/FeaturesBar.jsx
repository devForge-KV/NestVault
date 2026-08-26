import React from "react";
import {
  Building2,
  ShieldCheck,
  CircleDollarSign,
  Headphones,
} from "lucide-react";

const featuresData = [
  {
    id: 1,
    icon: Building2,
    title: "Wide Range of Properties",
    desc: "Choose from thousands of verified properties across top locations.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Verified & Trusted",
    desc: "Every property is verified for authenticity and quality assurance.",
  },
  {
    id: 3,
    icon: CircleDollarSign,
    title: "Easy & Secure",
    desc: "Simple, transparent and secure process from search to ownership.",
  },
  {
    id: 4,
    icon: Headphones,
    title: "Expert Support",
    desc: "Get professional support from our real estate experts anytime.",
  },
];

const FeaturesBar = () => {
  return (
    <div className="w-full  max-w-7xl mx-auto bg-[#0a0c10]/90 backdrop-blur-md border border-gray-800/80 rounded-2xl p-2 sm:p-8 shadow-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {featuresData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="flex items-start gap-4">
              {}
              <div className="w-16 h-16 rounded-full bg-[#292927] border border-gray-800/80 flex items-center justify-center shrink-0">
                <IconComponent className="w-8 h-8 text-[#f59e0b]" />
              </div>

              {}
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-semibold text-gray-100">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesBar;
