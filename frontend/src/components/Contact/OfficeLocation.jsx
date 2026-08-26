import React from "react";

const OfficeLocation = () => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      {}
      <div className="flex flex-col gap-1.5 mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Our Office <span className="text-[#f59e0b]">Location</span>
        </h2>
      </div>

      {}
      <div className="w-full h-[260px] sm:h-[300px] lg:h-[325px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0b0f17]">
        <iframe
          title="NestVault Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531659!3d-37.816279779751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1614052323232!5m2!1sen!2sau"
          className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {}
      <div className="w-full bg-[#0b0f17] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 shadow-2xl mt-4">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
          alt="NestVault Office Building"
          className="w-full sm:w-36 h-28 sm:h-28 rounded-xl object-cover border border-white/5 shrink-0"
        />

        <div className="flex flex-col text-left">
          <h3 className="text-base font-bold text-[#f59e0b]">
            NestVault Real Estate
          </h3>
          <p className="text-xs text-gray-300 mt-1 font-medium leading-relaxed">
            123 Luxury Street, <br />
            California, USA 90210
          </p>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            Our office is located in the heart of the city, easily accessible
            and always ready to assist you with all your real estate needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;
