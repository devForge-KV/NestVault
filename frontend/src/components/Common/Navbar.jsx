import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  User as UserIcon,
  LogOut,
  Heart,
  Bookmark,
  ChevronDown,
} from "lucide-react";
import axios from "axios";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/auth/me", {
        withCredentials: true,
      });
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
    window.addEventListener("authChange", fetchUser);
    return () => window.removeEventListener("authChange", fetchUser);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      setUser(null);
      setIsDropdownOpen(false);
      setIsOpen(false);
      navigate("/signin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/agents", label: "Agents" },
    { path: "/aboutus", label: "About Us" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {}
        <Logo />

        {}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs xl:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#f59e0b] font-semibold"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="tel:+11234567890"
            className="flex items-center gap-2 text-white text-xs xl:text-sm font-medium hover:text-[#f59e0b] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <span>+1 (123) 456-7890</span>
          </a>

          {}
          {user ? (
            <div className="flex items-center gap-3">
              {}
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `p-2 rounded-full border transition-all ${
                    isActive
                      ? "bg-amber-500/10 border-[#f59e0b] text-[#f59e0b]"
                      : "bg-zinc-900 border-white/10 text-gray-300 hover:text-[#f59e0b] hover:border-white/30"
                  }`
                }
                title="Saved Properties"
              >
                <Heart size={18} />
              </NavLink>

              {}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1.5 p-1.5 pr-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-white/30 text-gray-300 transition-all cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b]">
                    <UserIcon size={16} />
                  </div>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen
                        ? "rotate-180 text-[#f59e0b]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl shadow-black/80 animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="px-3 py-2 border-b border-white/5">
                      <p className="text-xs text-zinc-400">Signed in as</p>
                      <p className="text-sm font-semibold text-white truncate">
                        {user.name || "User"}
                      </p>
                    </div>

                    <div className="py-1">
                      <NavLink
                        to="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-all"
                      >
                        <UserIcon size={15} className="text-zinc-400" />
                        <span>My Profile</span>
                      </NavLink>
                      <NavLink
                        to="/wishlist"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-all"
                      >
                        <Bookmark size={15} className="text-zinc-400" />
                        <span>Saved Properties</span>
                      </NavLink>
                    </div>

                    <div className="pt-1 border-t border-white/5">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer"
                      >
                        <LogOut size={15} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/signin"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold text-xs xl:text-sm px-3.5 py-1.5 rounded-xl transition-all shadow-md shadow-[#f59e0b]/20 hover:scale-105 active:scale-95 flex items-center gap-1.5"
              >
                <span>Sign In</span>
              </NavLink>
              <NavLink
                to="/signup"
                className="text-white hover:text-[#f59e0b] font-semibold text-xs xl:text-sm px-3.5 py-1.5 transition-colors"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>

        {}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 rounded-b-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium py-2.5 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-amber-500/10 text-[#f59e0b] font-semibold"
                      : "text-slate-300 hover:bg-zinc-800/60 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+11234567890"
              className="flex items-center justify-center gap-2 text-white text-sm py-2.5 bg-zinc-900 rounded-xl border border-white/5"
            >
              <Phone className="w-4 h-4 text-[#f59e0b]" />
              <span>+1 (123) 456-7890</span>
            </a>

            {}
            {user ? (
              <div className="flex flex-col gap-2 pt-1">
                <div className="grid grid-cols-2 gap-2">
                  <NavLink
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm font-medium"
                  >
                    <UserIcon size={16} className="text-[#f59e0b]" />
                    <span className="truncate">{user.name || "Profile"}</span>
                  </NavLink>
                  <NavLink
                    to="/wishlist"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm font-medium"
                  >
                    <Heart size={16} className="text-red-400" />
                    <span>Wishlist</span>
                  </NavLink>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium cursor-pointer"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <NavLink
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold text-sm py-2.5 rounded-xl transition-all shadow-md shadow-[#f59e0b]/20 flex items-center justify-center"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-zinc-900 border border-white/10 hover:border-[#f59e0b]/40 text-white hover:text-[#f59e0b] font-semibold text-sm py-2.5 rounded-xl transition-all flex items-center justify-center"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
