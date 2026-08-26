import React from "react";
import HeroBnr from "../../assets/Images/HeroBnrr.jpeg";
import { Building2, UsersRound, ShieldCheck } from "lucide-react";

function HomeHero() {
  const statsData = [
    { id: 1, icon: Building2, value: "10,000+", label: "Properties" },
    { id: 2, icon: UsersRound, value: "500+", label: "Agents" },
    { id: 3, icon: ShieldCheck, value: "5,000+", label: "Happy Clients" },
  ];

  return (
    <section className="w-full relative">
      <div className="w-full lg:h-[85vh] h-[45vh] relative">
        {}
        <img
          src={HeroBnr}
          alt="Hero Banner"
          width="1080"
          height="472"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover "
        />

        {}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-40% to-transparent">
          <div
            className="flex flex-col items-start justify-center h-full 
            px-4 sm:px-8 md:px-16 lg:px-24 
            gap-2 sm:gap-4
             "
          >
            {}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
              <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#f59e0b]">
                Premium Living Starts Here
              </span>
            </div>

            {}
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-[1.15] text-gray-50">
              Find Your Dream
              <br />
              <span className="text-[#f59e0b]">Property</span>
              <br />
              Today
            </div>

            {}
            <p className="text-gray-300 text-xs sm:text-base max-w-xs sm:max-w-md font-light leading-relaxed tracking-wide font-serif italic opacity-90 pl-3 sm:pl-4 border-l border-[#d4af37]/30">
              Explore premium residential & commercial properties for sale &
              rent
            </p>

            {}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-1 sm:mt-2">
              {statsData.map((stat) => (
                <div key={stat.id} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl border border-[#d4af37]/40 bg-[#111111]/70 backdrop-blur-md flex items-center justify-center shrink-0">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#f59e0b]" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-gray-50 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
