import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdSettings, MdPriceChange, MdStars } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import NavItem from "./navitem";

const Parameters = {
  title: {
    name: "Banking",
    image:
      "https://res.cloudinary.com/duozomapm/image/upload/v1744569362/Bimage-removebg-preview_wxam6g.png",
    alt: "banking",
  },
  navigations: [
    { name: "Home", href: "", icon: <AiOutlineHome size={20} /> },
    { name: "Services", href: "", icon: <MdSettings size={20} /> },
    { name: "Pricing", href: "", icon: <MdPriceChange size={20} /> },
    { name: "Features", href: "", icon: <MdStars size={20} /> },
  ],
  action: {
    name: "Open Account",
    icon: <FiArrowUpRight size={20} />,
  },
};

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-2 rounded-[5rem]">
      <nav className="mx-auto flex justify-between items-center px-4">
        {/* title */}
        <div className="flex items-center">
          <img
            src={Parameters?.title?.image}
            alt={Parameters?.title?.alt}
            className="h-6 w-auto mr-1 sm:h-8 sm:w-auto" // Increased size on small screens
          />
          <div className="text-xl font-extrabold text-black sm:text-2xl md:text-3xl">
            {/* Responsive text */}
            {Parameters?.title?.name}
          </div>
        </div>

        {/* navigations */}
        <div className="hidden lg:flex space-x-2 lg:space-x-4">
          {Parameters?.navigations?.map((item, index) => (
            <NavItem item={item} key={`nav-${index}`} />
          ))}
        </div>

        {/* action */}
        <div className="flex items-center">
          <button className="bg-[#DEF25C] text-black font-medium py-2 px-4 rounded-full cursor-pointer text-sm sm:text-base">
            {Parameters?.action?.name}
          </button>
          <div className="rounded-full bg-black text-white flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer text-sm sm:text-base">
            {Parameters?.action?.icon}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
