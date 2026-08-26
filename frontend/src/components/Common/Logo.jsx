import { Link } from "react-router-dom";
import { House } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-1.5 cursor-pointer select-none group"
    >
      <House className="w-10 h-10 md:w-10 md:h-10 text-[#f59e0b] stroke-[2.3] shrink-0" />
      <div className="flex flex-col justify-center leading-none">
        <span className="text-2xl font-light tracking-[0.1em] text-[#f59e0b] font-serif">
          NestVault
        </span>
        <span className="text-sm font-bold tracking-[0.1em] text-white uppercase -mt-1 pl-0.5 font-sans">
          REAL ESTATE
        </span>
      </div>
    </Link>
  );
};

export default Logo;
