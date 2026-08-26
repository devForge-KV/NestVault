import React from "react";
import { IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { FaAward, FaRegSmile } from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    icon: IoPeopleOutline,
    title: "500+",
    desc: "Expert Agent",
  },
  {
    id: 2,
    icon: IoHomeOutline,
    title: "10,000+",
    desc: "Property Sold",
  },
  {
    id: 3,
    icon: FaAward,
    title: "15+",
    desc: "Years Experience",
  },
  {
    id: 4,
    icon: FaRegSmile,
    title: "98+",
    desc: "Clint Setesfaction",
  },
];

const StatCounter = () => {
  return (
    <div className="w-full mx-auto px-4 my-6">
      <div className="w-full bg-[#0a0d14]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {featuresData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-4 p-3 sm:p-2 rounded-xl transition-all duration-300 group hover:bg-white/[0.02] ${
                  index !== featuresData.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                {}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#161b26] border border-white/10 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#f59e0b]/50 group-hover:bg-[#f59e0b]/10 transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#f59e0b] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {}
                <div className="flex flex-col">
                  <h4 className="text-lg sm:text-2xl font-bold text-[#f59e0b] tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 leading-tight font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatCounter;
