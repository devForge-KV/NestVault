import React from "react";
import { SearchCheck, ReceiptText, CalendarDays, KeyRound } from "lucide-react";

const stepsData = [
  {
    id: 1,
    Number: "01",
    icon: SearchCheck,
    title: "Search Property",
    desc: "Search from thousands of properties that match your needs.",
  },
  {
    id: 2,
    Number: "02",
    icon: ReceiptText,
    title: "Shortlist & Connect",
    desc: "Shortlist your favorite properties and connect with our experts.",
  },
  {
    id: 3,
    Number: "03",
    icon: CalendarDays,
    title: "Visit & Explore",
    desc: "Schedule a visit & explore the property in person.",
  },
  {
    id: 4,
    Number: "04",
    icon: KeyRound,
    title: "Buy or Rent",
    desc: "Complete the process and make it yours!",
  },
];

const Step = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-[#0a0d14]/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-2xl my-6">
      {}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#f59e0b]">
          How It Works
        </p>
        <h2 className="mt-1 text-xl sm:text-2xl font-serif font-medium text-white tracking-wide">
          Simple Steps to Find Your Dream Property
        </h2>
      </div>

      {}
      <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {}
        <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-[1px] border-t border-dashed border-slate-700/70 -z-0" />

        {stepsData.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center justify-start text-center group"
            >
              {}
              <div className="w-14 h-14 rounded-full bg-[#0a0d14] border border-[#f59e0b]/40 p-1 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full bg-[#161a23] border border-slate-700/80 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
              </div>

              {}
              <div className="flex flex-col items-center mt-2.5">
                <span className="text-[11px] font-semibold text-slate-500 mb-0.5">
                  {step.Number}
                </span>
                <h4 className="text-sm font-semibold text-slate-100 group-hover:text-[#f59e0b] transition-colors">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Step;
