import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { FiHeadphones, FiMapPin } from "react-icons/fi";

const contactCards = [
  {
    id: 1,
    icon: LuPhone,
    title: "Call Us",
    subtext: "Speak to our property experts",
    primary: "+1 (123) 456-7890",
    timing: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
  {
    id: 2,
    icon: LuMail,
    title: "Email Us",
    subtext: "Drop us an email anytime",
    primary: "info@nestvault.com",
    timing: "We reply within 24 hours",
  },
  {
    id: 3,
    icon: FiMapPin,
    title: "Visit Our Office",
    subtext: "123 Luxury Street,",
    primary: "California, USA",
    timing: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    id: 4,
    icon: FiHeadphones,
    title: "Live Chat",
    subtext: "Chat with our support team",
    isChatButton: true,
    timing: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
];

const ContactCards = () => {
  return (
    <section className="w-full max-w-7xl mx-auto bg-[#0a0d14]/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-2xl my-6">
      <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        {contactCards.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="relative z-10 flex flex-col items-center justify-center text-center group lg:border-r lg:border-white/10 last:lg:border-0 px-4"
            >
              {}
              <div className="w-14 h-14 rounded-full bg-[#0a0d14] border border-[#f59e0b]/40 p-1 flex items-center justify-center shrink-0 shadow-lg group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full bg-[#161a23] border border-slate-700/80 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#f59e0b]" />
                </div>
              </div>

              {}
              <div className="flex flex-col items-center mt-3 gap-2">
                {}
                <h4 className="text-sm font-semibold text-white">
                  {item.title}
                </h4>

                {}
                <p className="text-[11px] text-slate-400">{item.subtext}</p>

                {}
                <p className="text-[#f59e0b] text-sm font-semibold mt-1">
                  {item.primary}
                </p>

                {}
                {item.isChatButton && (
                  <button className="mt- px-6 py-1.5 rounded-full border border-amber-500 text-amber-500 text-xs hover:bg-amber-500 hover:text-black transition-colors">
                    Start Chat
                  </button>
                )}

                {}
                <p className="text-[11px] text-slate-300 mt-0.5">
                  {item.timing}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactCards;
