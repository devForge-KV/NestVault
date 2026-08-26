import React from "react";
import { IoHomeOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";

const SignUpHero = () => {
  const signupFeatures = [
    {
      id: 1,
      icon: IoHomeOutline,
      title: "Explore Thousands of Properties",
      desc: "Find the perfect property from our wide range of listings.",
    },
    {
      id: 2,
      icon: GrUserManager,
      title: "Connect with Expert Agents",
      desc: "Get professional advice from our trusted real estate experts.",
    },
    {
      id: 3,
      icon: IoShieldCheckmarkOutline,
      title: "Secure & Hassle-Free",
      desc: "Enjoy a smooth and secure experience from start to finish.",
    },
  ];

  return (
    <section className="w-full relative h-full min-h-[720px] rounded-[28px] overflow-hidden flex flex-col justify-between p-8 sm:p-12 border border-white/10 shadow-2xl">
      {}
      <img
        src="https://plus.unsplash.com/premium_photo-1682377521590-bc565126cb4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="NestVault Luxury Real Estate"
        className="w-full h-full object-cover absolute inset-0"
      />

      {}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {}
      <div className="relative z-10 space-y-3 text-left">
        <h1 className="text-3xl sm:text-5xl font-serif text-white tracking-wide leading-tight">
          Welcome to <br />
          <span className="text-[#f59e0b]">NestVault</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 font-medium tracking-wide leading-relaxed">
          Your journey to finding the perfect property starts here.
        </p>
      </div>

      {}
      <div className="relative z-10 my-8 space-y-5 w-full">
        {signupFeatures.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`flex items-center gap-4 text-left ${
                index !== signupFeatures.length - 1
                  ? "border-b border-white/10 pb-5"
                  : ""
              }`}
            >
              <div className="w-13 h-13 rounded-2xl bg-[#0c1017]/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-[#f59e0b] shrink-0 shadow-lg">
                <IconComponent className="text-2xl" />
              </div>

              <div className="space-y-1 flex-1">
                <h4 className="text-sm sm:text-base font-medium text-[#f59e0b]">
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

      {}
      <div className="relative z-10 flex items-center gap-3.5 bg-[#0c1017]/80 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl self-start">
        <div className="flex -space-x-2.5 overflow-hidden">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0c1017] object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
            alt="Client 1"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0c1017] object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
            alt="Client 2"
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0c1017] object-cover"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
            alt="Client 3"
          />
          <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-black font-bold text-[10px] flex items-center justify-center ring-2 ring-[#0c1017]">
            10K+
          </div>
        </div>
        <div className="text-left">
          <p className="text-xs font-semibold text-white">
            Join 10,000+ happy clients
          </p>
          <p className="text-[10px] text-gray-400">
            who found their dream property.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpHero;
