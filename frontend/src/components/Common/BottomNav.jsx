import { NavLink } from "react-router-dom";
import {
  Home,
  Building2,
  UserRound,
  Phone,
  CircleUserRound,
} from "lucide-react";

const BottomNav = () => {
  const tabs = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/properties", icon: Building2, label: "Properties" },
    { path: "/agents", icon: UserRound, label: "Agents" },
    { path: "/contactus", icon: Phone, label: "Contact" },
    { path: "/profile", icon: CircleUserRound, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/5 backdrop-blur-2xl border-t border-white/[0.06] flex lg:hidden">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full py-3 gap-1 transition-all duration-300 ${
              isActive ? "text-amber-200" : "text-white/40"
            }`
          }
        >
          <tab.icon size={20} strokeWidth={1.8} />
          <span className="text-[10px]">{tab.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
