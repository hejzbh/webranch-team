import React from "react";
// Next
import Link from "next/link";
// Constants
import { navLinks } from "@/app/constants/navLinks";
// Interface
interface NavLinksProps {
  className?: string;
  direction: "row" | "column";
}

const directionClassName = {
  row: "flex-row space-x-9",
  column: "flex-col",
};

const NavLinks = ({ className = "", direction = "row" }: NavLinksProps) => {
  return (
    <ul className={`flex ${directionClassName[direction]} ${className}`}>
      {navLinks?.map((link, idx) => {
        return (
          <li key={idx}>
            <Link
              title={link.name}
              href={link.href ?? "#"}
              onClick={(e) => !link.href && e.preventDefault()} // Stop navigation if there is no href
              className={`py-[40px] text-[15px] lg:text-[16px] text-text-body transition-all duration-300 ease-in-out uppercase font-semibold tracking-widest hover:text-nav-link-hover`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
