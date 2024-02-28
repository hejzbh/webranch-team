import React from "react";
// Next
import Link from "next/link";
// Constants
import { navLinks } from "@/app/constants/navLinks";
// TS
import { NavLink } from "@/app/types/headerTypes";
// Interface
interface NavLinksProps {
  className?: string;
  direction: "row" | "column";
}

const directionClassName = {
  row: {
    list: "flex-row space-x-9",
    link: "py-[40px] text-[15px] lg:text-[16px] text-text-body transition-all duration-300 ease-in-out uppercase font-semibold tracking-widest hover:text-nav-link-hover",
  },
  column: {
    list: "flex-col",
    link: "text-[18px] font-[500] text-white py-4 block w-full  tracking-wide",
  },
};

const NavLinks = ({ className = "", direction = "row" }: NavLinksProps) => {
  function onLinkHover(this: number, e: any) {
    if (window.innerWidth <= 990) return;

    // 1)
    const navLinksEl = document.querySelectorAll(".nav-link");
    // 2)
    const targetEl = e.target;
    // 3)
    targetEl.style.opacity = 1;
    // 4)
    navLinksEl.forEach((navLink: any) => {
      // 1)
      if (navLink.id === targetEl.id) return;
      // 2)
      navLink.style.opacity = this;
    });
  }

  return (
    <ul className={`flex ${directionClassName[direction]?.list} ${className}`}>
      {navLinks?.map((link: NavLink, idx) => {
        return (
          <li key={idx}>
            <Link
              title={link.name}
              id={idx.toString()}
              onMouseOver={onLinkHover.bind(0.4)}
              onMouseOut={onLinkHover.bind(1)}
              href={link.href ?? "#"}
              onClick={(e) => {
                e.stopPropagation();

                if (!link.href) {
                  e.preventDefault();
                  return;
                }

                if (link.href.startsWith("#")) {
                  const sectionID = link.href.slice(1);
                  const section = document.getElementById(sectionID);

                  if (!section) return;

                  const sectionRect = section?.getBoundingClientRect();

                  window.scroll({
                    top: sectionRect.y + window.scrollY - 100,
                    behavior: "smooth",
                  });
                  e.preventDefault();
                }
              }} // Stop navigation if there is no href
              className={`nav-link ${directionClassName[direction]?.link}`}
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
