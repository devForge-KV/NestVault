import React, { useState } from "react";
import { ArrowRight, Rocket, TrendingUp, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const SellBanner = () => {
  const [activeCard, setActiveCard] = useState(1);

  const benefits = [
    {
      id: 1,
      icon: Rocket,
      title: "Quick Listing",
      desc: "Get your property listed in minutes.",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Maximum Reach",
      desc: "Reach thousands of potential customers.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Best Deals",
      desc: "Get the best price for your property.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-6 px-4">
      <div className="bg-[#0b0e14] border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
        {}
        <div className="lg:col-span-6 relative flex items-center min-h-[200px] sm:min-h-[220px] p-5 sm:p-6 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-[#0b0e14]" />

          <div className="relative z-10 max-w-md">
            <h2 className="text-xl sm:text-2xl font-serif font-medium text-white leading-tight">
              Want to Sell or Rent <br />
              <span className="text-[#f59e0b] font-semibold">
                Your Property?
              </span>
            </h2>

            <p className="text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-normal">
              List your property with us and reach thousands of potential buyers
              or tenants.
            </p>

            <NavLink
              to="/properties"
              className="mt-3.5 inline-flex items-center gap-1.5 bg-[#f59e0b] hover:bg-[#c5a028] text-slate-950 font-semibold text-xs px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
            >
              List Your Property
              <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>

        {}
        <div className="lg:col-span-6 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#0b0e14]">
          {benefits.map((item) => {
            const Icon = item.icon;
            const isActive = activeCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                className={`flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#10141d] border border-amber-500/40 shadow-lg shadow-amber-500/5 scale-[1.02]"
                    : "bg-transparent border border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                {}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-[#161b26] border border-[#f59e0b]"
                      : "bg-[#121620] border border-slate-800"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-[#f59e0b]" : "text-slate-400"
                    }`}
                  />
                </div>

                {}
                <h4
                  className={`text-xs font-semibold transition-colors ${
                    isActive ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.title}
                </h4>

                {}
                <p className="text-[10px] text-slate-400 mt-1 leading-normal max-w-[140px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SellBanner;
