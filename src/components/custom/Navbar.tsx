import React from "react";
import Logo from "../ui/Logo";

import { cn } from "@/src/lib/utils";
import {
  ChevronDown,
  CircleUserRound,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";

const NavLinks = [
  {
    id: 1,
    title: "shop",
    href: "#newArrivals",
  },
  {
    id: 2,
    title: "on sale",
    href: "#topSelling",
  },
  {
    id: 3,
    title: "new arrivals",
    href: "#newArrivals",
  },
  {
    id: 4,
    title: "brands",
    href: "#brands",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center 2xl:gap-[40px] lg:gap-8 justify-between">
      <div className="flex items-center gap-2">
        <Menu className="lg:hidden" />
        <Logo />
      </div>
      <ul className="lg:flex items-center gap-[24px] hidden capitalize">
        {NavLinks.map((link) => (
          <li key={link.id} className="flex items-center gap-1">
            <a
              href={link.href}
              className="2xl:text-[16px] text-sm hover:text-black/25 transition-colors"
            >
              {link.title}
            </a>
            <div className={cn("", link.id !== 1 ? "hidden" : "visible")}>
              <ChevronDown size={16} />
            </div>
          </li>
        ))}
      </ul>

      <div className="py-3 px-4 lg:flex hidden items-center gap-3 bg-secondary rounded-[62px] flex-1">
        <Search color="#00000066" />
        <input
          placeholder="Search for products.."
          className="flex-1 focus:outline-none"
        />
      </div>

      <div className="flex items-center lg:gap-3.5 gap-3">
        <div className="rounded-full hover:bg-[#f0f0f0] p-2 transition-colors cursor-pointer lg:hidden">
          <Search size={24} />
        </div>
        <div className="rounded-full hover:bg-[#f0f0f0] p-2 transition-colors cursor-pointer">
          <ShoppingCart />
        </div>
        <div className="rounded-full hover:bg-[#f0f0f0] p-2 transition-colors cursor-pointer">
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
