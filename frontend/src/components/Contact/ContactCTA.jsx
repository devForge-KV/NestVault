import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

const socialLinks = [
  {
    id: 1,
    icon: FaFacebook,
    href: "#",
    color: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    id: 2,
    icon: IoLogoInstagram,
    href: "#",
    color: "hover:bg-pink-600 hover:border-pink-600",
  },
  {
    id: 3,
    icon: FaLinkedin,
    href: "#",
    color: "hover:bg-sky-600 hover:border-sky-600",
  },
  {
    id: 4,
    icon: IoLogoYoutube,
    href: "#",
    color: "hover:bg-red-600 hover:border-red-600",
  },
  {
    id: 5,
    icon: FaXTwitter,
    href: "#",
    color: "hover:bg-gray-700 hover:border-gray-700",
  },
];

const ContactCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 my-8">
      <div className="w-full bg-[#0a0d14] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        {}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl  font-semibold text-white">
            Follow Us for the{" "}
            <span className="text-[#f59e0b]">Latest Updates</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Stay connected with us on social media for new properties, market
            trends and exclusive offers.
          </p>
        </div>

        {}
        <div className="flex items-center gap-3 shrink-0">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`w-11 h-11 rounded-full bg-[#141822] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 ${item.color}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
