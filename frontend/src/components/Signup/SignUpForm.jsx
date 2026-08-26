import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { LuUser, LuMail, LuEye, LuEyeOff, LuLoader } from "react-icons/lu";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

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

  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      icon: LuUser,
      validation: {
        required: "Full name is required",
        minLength: { value: 3, message: "Minimum 3 characters required" },
      },
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      icon: LuMail,
      validation: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Enter a valid email address",
        },
      },
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      isPhone: true,
      validation: {
        required: "Phone number is required",
        pattern: {
          value: /^[0-9]{10}$/,
          message: "Enter a valid 10-digit number",
        },
      },
    },
    {
      id: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Create a password",
      icon: LuUser,
      isPassword: true,
      showState: showPassword,
      toggleShow: () => setShowPassword((prev) => !prev),
      validation: {
        required: "Password is required",
        minLength: { value: 6, message: "Minimum 6 characters required" },
      },
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: showConfirmPassword ? "text" : "password",
      placeholder: "Confirm your password",
      icon: LuUser,
      isPassword: true,
      showState: showConfirmPassword,
      toggleShow: () => setShowConfirmPassword((prev) => !prev),
      validation: {
        required: "Please confirm your password",
        validate: (value) => value === password || "Passwords do not match",
      },
    },
  ];
  const onSubmit = async (data) => {
    try {
      const finalPayload = {
        name: data.name,
        email: data.email,
        phone: `${countryCode} ${data.phone}`,
        password: data.password,
        receiveUpdates: data.receiveUpdates || false,
      };

      const response = await axios.post("/api/auth/signup", finalPayload, {
        withCredentials: true,
      });

      if (response.data.success) {
        window.dispatchEvent(new Event("authChange"));
        alert("Account created successfully! 🎉");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert(
        error.response?.data?.message || "Signup failed. Please try again.",
      );
    }
  };

  return (
    <section className="w-full  p-4 sm:pt-8 flex justify-center">
      <div className="w-full max-w-[480px] bg-[#121722] border border-white/10 rounded-2xl py-6 px-6 sm:px-8 shadow-2xl">
        {}
        <div className="flex flex-col gap-2 items-center justify-center tracking-wide leading-tight text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-serif tracking-wide">
            Create Your <span className="text-[#f59e0b]">Account</span>
          </h1>
          <p className="text-gray-300 text-sm">
            Sign up to get started with NestVault
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
                className="w-full py-2.5 px-4 rounded-xl bg-[#111622]/60 hover:bg-[#161d2d] border border-white/10 hover:border-white/20 text-sm font-medium text-white flex items-center justify-center gap-3 transition-all duration-200 shadow-sm cursor-pointer"
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
          <span className="bg-[#121722] px-3 text-[11px] font-semibold tracking-wider text-gray-400 uppercase absolute">
            OR
          </span>
        </div>

        {}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          {formFields.map((field) => {
            const Icon = field.icon;
            const fieldError = errors[field.id];

            return (
              <div key={field.id}>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  {field.label}
                </label>

                {field.isPhone ? (
                  <div className="flex gap-2">
                    <div className="relative flex items-center bg-[#111722] border border-white/10 rounded-xl px-2.5 py-2.5 text-xs text-white">
                      <span className="mr-1">🇺🇸</span>
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        disabled={isSubmitting}
                        className="bg-transparent text-gray-300 text-xs focus:outline-none cursor-pointer pr-1"
                      >
                        <option value="+1" className="bg-[#111722] text-white">
                          +1
                        </option>
                        <option value="+91" className="bg-[#111722] text-white">
                          +91
                        </option>
                        <option value="+44" className="bg-[#111722] text-white">
                          +44
                        </option>
                        <option
                          value="+971"
                          className="bg-[#111722] text-white"
                        >
                          +971
                        </option>
                      </select>
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="tel"
                        placeholder={field.placeholder}
                        disabled={isSubmitting}
                        {...register(field.id, field.validation)}
                        className={`w-full bg-[#111722] border ${
                          fieldError ? "border-red-500" : "border-white/10"
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative flex items-center">
                    <Icon className="absolute left-3.5 text-gray-500 text-base" />
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      disabled={isSubmitting}
                      {...register(field.id, field.validation)}
                      className={`w-full bg-[#111722] border ${
                        fieldError ? "border-red-500" : "border-white/10"
                      } rounded-xl pl-10 ${
                        field.isPassword ? "pr-11" : "pr-4"
                      } py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f59e0b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
                    />

                    {field.isPassword && (
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={field.toggleShow}
                        className="absolute right-3.5 text-gray-500 hover:text-white cursor-pointer disabled:opacity-50"
                      >
                        {field.showState ? (
                          <LuEyeOff size={16} />
                        ) : (
                          <LuEye size={16} />
                        )}
                      </button>
                    )}
                  </div>
                )}

                {fieldError && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {fieldError.message}
                  </span>
                )}
              </div>
            );
          })}

          {}
          {}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register("agreeTerms", {
                  validate: (value) =>
                    value === true ||
                    "You must agree to the Terms & Privacy Policy",
                })}
                className="mt-0.5 w-3.5 h-3.5 accent-[#f59e0b] rounded cursor-pointer disabled:opacity-50"
              />
              <span className="text-[11px] sm:text-xs text-gray-400 leading-snug">
                I agree to the{" "}
                <span className="text-[#f59e0b] hover:underline cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#f59e0b] hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </label>
            {errors.agreeTerms && (
              <span className="text-[11px] text-red-500 block mt-1">
                {errors.agreeTerms.message}
              </span>
            )}
          </div>

          {}
          <div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                disabled={isSubmitting}
                {...register("receiveUpdates")}
                className="w-3.5 h-3.5 accent-[#f59e0b] rounded cursor-pointer disabled:opacity-50"
              />
              <span className="text-[11px] sm:text-xs text-gray-400">
                I want to receive updates and offers via email
              </span>
            </label>
          </div>

          {}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#f59e0b]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <LuLoader className="animate-spin text-base" />
                <span>Processing...</span>
              </>
            ) : (
              <span>Sign Up &rarr;</span>
            )}
          </button>
        </form>

        {}
        <p className="text-center text-xs text-gray-400 mt-5">
          Already have an account?{" "}
          <span
            to="/signin"
            className="text-[#f59e0b] font-medium hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
