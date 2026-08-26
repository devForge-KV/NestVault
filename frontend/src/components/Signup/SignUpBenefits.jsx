import React from "react";
import { LuHeartHandshake } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { FiTrendingUp } from "react-icons/fi";

const chooseUsData = [
  {
    id: 1,
    icon: LuHeartHandshake,
    title: "Save Favorites",
    desc: "Save properties and searches to view them later.",
  },
  {
    id: 2,
    icon: FaRegBell,
    title: "Get Alert",
    desc: "Receive instant notification for new properties.",
  },
  {
    id: 3,
    icon: GrUserManager,
    title: "Personalized Experience",
    desc: "Get recommended properties that match your preferences.",
  },
  {
    id: 4,
    icon: FiTrendingUp,
    title: "Track Activity",
    desc: "Keep track your inquiries and save listings.",
  },
];

const SignUpBenefits = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-[#0a0d14]/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-2xl my-4">
      <h2 className="text-2xl text-center sm:text-3xl font-bold text-white mb-6">
        Why Create an <span className="text-[#f59e0b]">Account?</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {chooseUsData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 border border-gray-400/10 hover:border-gray-200 rounded-2xl p-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#292927] border border-gray-400/10 flex items-center justify-center shrink-0">
                <IconComponent className="w-8 h-8 text-[#f59e0b]" />
              </div>

              <div className="flex flex-col text-center">
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

export default SignUpBenefits;
