import { Link } from "react-router-dom";
import { House } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none group"
    >
      <House className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#f59e0b] stroke-[2.3] shrink-0 transition-transform group-hover:scale-105" />
      <div className="flex flex-col justify-center leading-none">
        <span className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.08em] sm:tracking-[0.1em] text-[#f59e0b] font-serif">
          NestVault
        </span>
        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.12em] text-white uppercase -mt-0.5 sm:-mt-1 pl-0.5 font-sans">
          REAL ESTATE
        </span>
      </div>
    </Link>
  );
};

export default Logo;