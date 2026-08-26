import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { FiTrendingUp, FiHeadphones } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const chooseUsData = [
  {
    id: 1,
    icon: GoShieldCheck,
    title: "Verified & Trusted",
    desc: "Every property is verified for authenticity and quality assurance.",
  },
  {
    id: 2,
    icon: FiTrendingUp,
    title: "Wide Range of Properties",
    desc: "Choose from thousands of properties across top locations.",
  },
  {
    id: 3,
    icon: FaHandshake,
    title: "Easy & Secure Process",
    desc: "Simple, transparent and secure process from search to ownership.",
  },
  {
    id: 4,
    icon: FiHeadphones,
    title: "Expert Support",
    desc: "Get professional support from our real estate experts anytime.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-[#0a0d14]/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-2xl my-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#f59e0b] mb-2">
          Why Choose Us
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Your Trusted Real Estate{" "}
          <span className="text-[#f59e0b]">Partner</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {chooseUsData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-start gap-4 border border-gray-400/10 hover:border-gray-200 rounded-2xl p-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#292927] border border-gray-400/10 flex items-center justify-center shrink-0">
                <IconComponent className="w-8 h-8 text-[#f59e0b]" />
              </div>

              <div className="flex flex-col">
                <h4 className="text-xs  font-semibold text-gray-100">
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
    </section>
  );
};

export default WhyChooseUs;
