import React from "react";
import { IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { FaRegHeart, FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInHero = () => {
  const signInFeature = [
    {
      id: 1,
      icon: IoHomeOutline,
      title: "Explore Properties",
      desc: "Access thousand of primium properties across top locations,",
    },
    {
      id: 2,
      icon: FaRegHeart,
      title: "Save & Shortlist",
      desc: "Save your favorite properties and shortlist the ones you love.",
    },
    {
      id: 3,
      icon: FaRegBell,
      title: "Get Instant Alerts",
      desc: "Receive instant notification for new listings and price updates.",
    },
  ];

  return (
    <section className="w-full relative h-full min-h-[720px] rounded-[28px] overflow-hidden flex flex-col justify-between p-12 sm:p-12 border border-white/10 shadow-2xl">
      <img
        src="https://img.magnific.com/free-photo/luxury-architecture-exterior-design_23-2151920973.jpg?t=st=1787111524~exp=1787115124~hmac=53d456bcabd72c8fab9688f838b98512d660c25bcc1d586aecc96611be788bb7&w=1060"
        alt="NestVault Luxury Real Estate"
        className="w-full h-full object-container absolute inset-0"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 space-y-3 text-left">
        <h1 className="text-3xl sm:text-5xl tracking-wide leading-tight text-white font-serif">
          Welcome Back to <br />
          <span className="text-[#f59e0b]">NestVault</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide leading-relaxed">
          SignIn your account and coninue <br />
          your journey to find the perfect properties.
        </p>
      </div>

      <div className="relative z-10 my-8 space-y-5 w-full">
        {signInFeature.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`flex items-center text-left gap-4 ${index !== signInFeature.length - 1 ? "border-b border-white/10 pb-5" : ""}`}
            >
              <div className="w-13 h-13 rounded-2xl bg-[#0c1017]/80 border border-white/10 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg text-[#f59e0b]">
                <IconComponent className="text-2xl" />
              </div>

              <div className="space-y-1 flex-1">
                <h4 className="text-sm sm:text-base text-[#f59e0b] font-medium">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#0b1017]/85 backdrop-blur-md border border-white/10 rounded-2xl p-5 mt-8 shadow-2xl space-y-4 max-w-sm">
        <div className="flex items-center gap-8">
          <div className="w-14 h-14 rounded-full bg-[#1e1912]/90 border border-[#f59e0b]/30 flex items-center justify-center shrink-0 shadow-lg shadow-black/40">
            <IoPeopleOutline className="text-[#f59e0b] text-2xl" />
          </div>

          <div className="space-y-1">
            <h4 className="text-white text-sm font-semibold">
              New to <span className="text-[#f59e0b]">NestVault?</span>
            </h4>
            <p className="text-gray-300 text-xs leading-snug">
              Create an account and start exploring thousands of properties.
            </p>
          </div>
        </div>
        <Link
          to="/signup"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-[#f59e0b]/70 rounded-xl text-[#f59e0b] text-xs font-semibold hover:bg-[#f59e0b] hover:text-black transition duration-200"
        >
          Create Account <span className="text-sm">→</span>
        </Link>
      </div>
    </section>
  );
};
export default SignInHero;
