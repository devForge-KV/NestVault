import React from "react";
import agentHeroImage from "../../assets/Images/AgenetsHero.jpeg";

const AgentHero = () => {
  return (
    <section className="w-full relative">
      <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[65vh] relative">
        <img
          src={agentHeroImage}
          alt="Property Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="w-full px-5 sm:px-8 md:px-16 lg:px-24">
            {}
            <div className="flex flex-col items-start gap-2 sm:gap-3 max-w-xl">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight text-white">
                Contact Our <br /> Expert{" "}
                <span className="text-[#f59e0b]">Us</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Home <span className="mx-1 text-gray-500">&gt;</span>{" "}
                <span className="text-[#f59e0b]">Agents </span>
              </p>

              <div className="text-xs sm:text-base text-gray-300 font-sans tracking-wide">
                <span className="text-white italic font-medium leading-relaxed">
                  Our experienced agents are here to help you find the
                  <br className="hidden sm:block" />
                  perfect property that fits your lifestyle and investment
                  goals,
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
