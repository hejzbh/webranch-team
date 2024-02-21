import { NavLink } from "../types/headerTypes";

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "#services" },
  {
    name: "Pages",
    submenu: [
      { name: "Team", href: "/team" },
      { name: "Blog", href: "/blog" },
    ],
  },
];
