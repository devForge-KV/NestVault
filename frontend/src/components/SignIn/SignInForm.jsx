import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LuMail, LuLock, LuEye, LuEyeOff, LuLoader } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const SocialAuth = [
    {
      id: "google",
      name: "Google",
      icon: FcGoogle,
      label: "Continue with Google",
      link: `${API_BASE_URL}/api/auth/google`,
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: FaFacebook,
      iconColor: "text-[#1877F2]",
      label: "Continue with Facebook",
      link: `${API_BASE_URL}/api/auth/facebook`,
    },
  ];

  const onSubmit = async (data) => {
    try {
      setServerError("");

      const response = await axios.post(
        `${API_BASE_URL}/api/auth/signin`,
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        window.dispatchEvent(new Event("authChange"));
        navigate("/");
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Invalid credentials or Server error"
      );
    }
  };

  return (
    <section className="w-full p-4 sm:pt-8 flex justify-center">
      <div className="w-full max-w-[480px] bg-[#0c1017]/95 border border-white/10 rounded-2xl py-8 px-6 sm:px-9 shadow-2xl backdrop-blur-md">
        {}
        <div className="flex flex-col gap-2 items-center justify-center tracking-wide leading-tight text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-serif tracking-wide">
            Login to Your <span className="text-[#f59e0b]">Account</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Welcome back! Please enter your details.
          </p>
        </div>

        {}
        <div className="mt-6 space-y-3">
          {SocialAuth.map((provider) => {
            const Icon = provider.icon;
            return (
              <a
                key={provider.id}
                href={provider.link}
                className="w-full py-2.5 px-4 rounded-xl bg-[#111622]/80 hover:bg-[#161d2d] border border-white/10 hover:border-white/20 text-xs sm:text-sm font-medium text-white flex items-center justify-center gap-3 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Icon className={`text-xl ${provider.iconColor || ""}`} />
                <span>{provider.label}</span>
              </a>
            );
          })}
        </div>

        {}
        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-white/10 w-full"></div>
          <span className="bg-[#0c1017] px-3 text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
            OR
          </span>
          <div className="border-t border-white/10 w-full"></div>
        </div>

        {}
        {serverError && (
          <div className="mb-4 p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
            {serverError}
          </div>
        )}

        {}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs sm:text-sm text-gray-300 font-medium">
              Email Address
            </label>
            <div className="relative">
              <LuMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-base" />
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full bg-[#111622]/90 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#f59e0b] transition duration-200"
              />
            </div>
            {errors.email && (
              <span className="text-[11px] text-red-400 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs sm:text-sm text-gray-300 font-medium">
              Password
            </label>
            <div className="relative">
              <LuLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-base" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="w-full bg-[#111622]/90 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#f59e0b] transition duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <LuEyeOff size={16} /> : <LuEye size={16} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-[11px] text-red-400 block">
                {errors.password.message}
              </span>
            )}
          </div>

          {}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-gray-400">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="w-3.5 h-3.5 accent-[#f59e0b] rounded cursor-pointer"
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-[#f59e0b] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold text-sm rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#f59e0b]/10 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <LuLoader className="animate-spin text-lg text-black" />
            ) : (
              <>
                Login <span className="text-base">→</span>
              </>
            )}
          </button>
        </form>

        {}
        <div className="mt-6 space-y-3 text-center">
          <p className="text-[11px] text-gray-400">
            By logging in, you agree to our{" "}
            <span className="text-[#f59e0b] hover:underline cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-[#f59e0b] hover:underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>

          <p className="text-xs text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#f59e0b] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
