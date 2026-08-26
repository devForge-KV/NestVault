import React from "react";
import heroImage from "../../assets/Images/PHomeBnr.jpeg";
import { IoHomeOutline } from "react-icons/io5";

const PropertieHome = () => {
  return (
    <>
      <section className="w-full relative">
        <div className="w-full h-[35vh] sm:h-[42vh] lg:h-[55vh] relative">
          {}
          <img
            src={heroImage}
            alt="Property Banner"
            className="w-full h-full object-cover"
          />

          {}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-40% to-transparent flex items-center">
            {}
            <div className="w-full px-5 sm:px-8 md:px-16 lg:px-24">
              {}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-0">
                {}
                <div className="flex flex-col items-start gap-2">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight text-white">
                    Find Your Perfect{" "}
                    <span className="text-[#f59e0b]">Property</span>
                  </h1>

                  <p className="text-xs sm:text-sm text-gray-400 font-medium ">
                    Home <span className="mx-1 text-gray-500">&gt;</span>{" "}
                    <span className="text-[#f59e0b]">Property</span>
                  </p>

                  {}
                  <div className="self-start absolute bottom-1.5 sm:self-auto flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl text-white shadow-xl">
                    <div className="p-2 bg-[#f59e0b]/20 rounded-lg text-[#f59e0b] shrink-0">
                      <IoHomeOutline className="text-2xl sm:text-3xl" />
                    </div>
                    <div className="text-xs sm:text-sm font-sans leading-snug">
                      <span className="text-base sm:text-lg font-bold text-[#f59e0b] block">
                        10,000+
                      </span>
                      <span className="text-gray-200 font-medium whitespace-nowrap">
                        Premium Properties
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertieHome;
