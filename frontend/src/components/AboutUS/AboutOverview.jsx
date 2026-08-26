import React from "react";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineFlag } from "react-icons/hi2";
import { FaShieldAlt } from "react-icons/fa";

const About = [
  {
    id: 1,
    icon: HiOutlineFlag,
    title: "Our Mission",
    desc: "To help people find their dream properties with ease and confidence.",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "Our Vision",
    desc: "To be the most trusted real estate brand, known for innovation, reliability, and client satisfaction.",
  },
];

const AboutOverview = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1783124758982-b4ca4d3def22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About NestVault"
            className="w-full h-[360px] sm:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0a0c10]/90 backdrop-blur-md border border-[#f59e0b]/50 rounded-2xl p-3 sm:p-4 flex items-center gap-3 shadow-2xl max-w-[250px] sm:max-w-[270px]">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#182030] border border-white/10 flex items-center justify-center shrink-0">
              <LiaAwardSolid className="w-6 h-6 text-[#f59e0b]" />
            </div>
            <p className="text-xs sm:text-xs font-semibold text-gray-200 leading-snug">
              Trusted by thousands of happy clients
            </p>
          </div>
        </div>

        {}
        <div className="flex flex-col justify-center">
          {}
          <span className="text-[#f59e0b] text-xs sm:text-sm font-medium tracking-wide uppercase mb-2">
            Who We Are
          </span>

          {}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white leading-tight mb-4">
            Redefining Real Estate <br className="hidden sm:block" />
            with <span className="text-[#f59e0b]">Trust & Transparency</span>
          </h1>

          {}
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
            NestVault Real Estate is a trusted partner in finding the perfect
            property. We offer the best real estate solutions with transparency,
            integrity, and unmatched market expertise.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            Whether you’re buying, selling, or renting, our dedicated team is
            committed to providing personalized service and guiding you every
            step of the way.
          </p>

          {}
          <div className="space-y-5">
            {About.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="flex items-start gap-4">
                  {}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#182030] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent className="w-5 h-5 text-[#f59e0b]" />
                  </div>

                  {}
                  <div className="flex flex-col">
                    <h4 className="text-sm sm:text-base font-bold text-[#f59e0b]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
