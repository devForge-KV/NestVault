import React from "react";
import { FiSend, FiArrowRight } from "react-icons/fi";
import {
  LuTrendingUp,
  LuDollarSign,
  LuCalendar,
  LuUsers,
} from "react-icons/lu";
import NestVaultOffice from "../../assets/Images/OfficeImg.png";

const JoinTeam = () => {
  const benefits = [
    {
      id: 1,
      title: "Grow Your Career",
      desc: "We provide the tools and support you need to grow.",
      icon: LuTrendingUp,
    },
    {
      id: 2,
      title: "Great Commission",
      desc: "Competitive commission structure and performance bonuses.",
      icon: LuDollarSign,
    },
    {
      id: 3,
      title: "Flexible Schedule",
      desc: "Enjoy the flexibility to work on your own terms.",
      icon: LuCalendar,
    },
    {
      id: 4,
      title: "Supportive Team",
      desc: "Work with a team of experienced professionals.",
      icon: LuUsers,
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-[#0b0f17] border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl items-center">
        {}
        <div className="lg:col-span-8 p-8 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {}
            <div className="md:col-span-7 flex flex-col gap-4">
              <span className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">
                JOIN OUR TEAM
              </span>

              <h2 className="text-white text-3xl sm:text-4xl md:text-[38px] font-serif font-medium leading-[1.2]">
                Become a Part of <br />
                <span className="text-[#f59e0b] font-sans font-bold">
                  NestVault
                </span>{" "}
                Family
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mt-1 max-w-sm">
                We are always looking for passionate and driven individuals to
                join our team of real estate experts.
              </p>

              <div className="mt-4 flex flex-col gap-3 items-start">
                <button className="flex items-center gap-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#f59e0b]/20">
                  Apply Now <FiSend className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 text-[#f59e0b] hover:text-white text-xs font-semibold mt-1 transition-colors group">
                  Learn More About Careers{" "}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {}
            <div className="md:col-span-5 flex flex-col gap-5 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6">
              {benefits.map((item) => (
                <div key={item.id} className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-full bg-[#131722] border border-white/10 flex items-center justify-center text-[#f59e0b] shrink-0 group-hover:border-[#f59e0b] group-hover:bg-[#f59e0b]/10 transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[#f59e0b] text-sm font-bold tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-snug mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {}
        <div className="lg:col-span-4 relative h-full min-h-[320px] lg:min-h-[420px] overflow-hidden bg-[#131722]">
          <img
            src={NestVaultOffice}
            alt="NestVault Office Interior"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
