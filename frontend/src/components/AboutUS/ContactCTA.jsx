import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const contactDetails = [
  {
    id: 1,
    icon: FiPhoneCall,
    label: "Call Us",
    value: "+1 (123) 456-7890",
    href: "tel:+11234567890",
  },
  {
    id: 2,
    icon: FiMail,
    label: "Email Us",
    value: "info@nestvault.com",
    href: "mailto:info@nestvault.com",
  },
  {
    id: 3,
    icon: FiMapPin,
    label: "Visit Us",
    value: "123 Luxury Street,\nCalifornia, USA",
    href: "#",
  },
];

const ContactCTA = () => {
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
            <div className="relative z-10 flex flex-col gap-1.5 max-w-md">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-white tracking-wide">
                Let’s Find Your{" "}
                <span className="text-[#f59e0b]">Dream Property</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connect with us today and take the first step towards your new
                beginning.
              </p>
            </div>
          </div>
        </div>

        {}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 px-4 sm:px-2 py-6 lg:py-0">
          {contactDetails.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3.5 sm:gap-4 py-2 group transition-all h-full ${
                  index !== 0
                    ? "sm:border-l sm:border-white/10 sm:pl-4 lg:pl-6"
                    : ""
                }`}
              >
                {}
                <div className="w-12 h-12 rounded-full bg-[#161b26] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/50 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-[#f59e0b] group-hover:scale-110 transition-transform" />
                </div>

                {}
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-semibold text-white group-hover:text-[#f59e0b] transition-colors">
                    {item.label}
                  </span>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 whitespace-pre-line leading-snug font-medium">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
