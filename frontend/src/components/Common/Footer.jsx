import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { LuPhone, LuMail } from "react-icons/lu";
import Logo from "./Logo";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "#", label: "Buy" },
    { path: "/rent", label: "Rent" },
    { path: "/agents", label: "Agents" },
  ];

  const company = [
    { path: "/aboutus", label: "About Us" },
    { path: "#", label: "Our Services" },
    { path: "#", label: "Careers" },
    { path: "#", label: "Blog" },
    { path: "/contactus", label: "Contact Us" },
  ];

  const support = [
    { path: "#", label: "Help Center" },
    { path: "#", label: "FAQs" },
    { path: "#", label: "Terms & Conditions" },
    { path: "#", label: "Privacy Policy" },
  ];

  return (
    <footer className="w-full bg-[#05070c] text-slate-400 border-t border-slate-800/80 pt-10 pb-8 lg:pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-2 lg:col-span-4 lg:pr-10 lg:border-r border-slate-800/70 flex flex-col justify-between py-1 border-b lg:border-b-0 border-slate-800/60 pb-6 lg:pb-0">
            <div>
              <div className="flex items-center">
                <Logo />
              </div>
              <p className="text-slate-400 text-xs mt-3.5 leading-relaxed max-w-[310px]">
                NestVault is your trusted partner in finding the perfect
                property. We offer the best real estate solutions with
                transparency and trust.
              </p>
            </div>
            <p className="hidden lg:block text-slate-500 text-[11px] mt-6 tracking-wide">
              © 2026 NestVault Real Estate. All Rights Reserved.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-2 lg:px-8 lg:border-r border-slate-800/70 py-1">
            <h4 className="text-slate-100 font-semibold text-xs tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[12px]">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className="text-slate-400 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 lg:px-8 lg:border-r border-slate-800/70 py-1">
            <h4 className="text-slate-100 font-semibold text-xs tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[12px]">
              {company.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className="text-slate-400 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 lg:px-8 lg:border-r border-slate-800/70 py-1">
            <h4 className="text-slate-100 font-semibold text-xs tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-[12px]">
              {support.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className="text-slate-400 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 lg:pl-8 py-1">
            <h4 className="text-slate-100 font-semibold text-xs tracking-wider mb-4">
              Connect With Us
            </h4>

            <div className="flex items-center gap-2 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaFacebookF size={12} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <RiInstagramFill size={13} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaLinkedinIn size={12} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
              >
                <FaYoutube size={13} />
              </a>
            </div>

            <div className="space-y-2.5 text-[11px] sm:text-[12px]">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-slate-300 hover:text-[#f59e0b] transition-colors"
              >
                <LuPhone size={13} className="text-[#f59e0b] shrink-0" />
                <span className="font-medium tracking-wide">
                  +1 (123) 456-7890
                </span>
              </a>
              <a
                href="mailto:info@nestvault.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#f59e0b] transition-colors"
              >
                <LuMail size={13} className="text-[#f59e0b] shrink-0" />
                <span className="font-medium truncate">info@nestvault.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="block lg:hidden border-t border-slate-800/80 mt-8 pt-6 text-center">
          <p className="text-slate-500 text-[11px] tracking-wide">
            © 2026 NestVault Real Estate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
