import { FooterLink } from "../types/footer";

export const footerLinksList: FooterLink[] = [
  {
    listTitle: "Our Services",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Webflow", href: "/services/webflow" },
      { name: "App Development", href: "/services/app-development" },
      { name: "Game Development", href: "/services/game-development" },
      { name: "E-Commerce", href: "/services/e-commerce" },
      { name: "Custom Solutions", href: "/services/custom-solutions" },
    ],
  },
  {
    listTitle: "Recent Projects",
    links: [
      { name: "Webonify", href: "/portfolio/webonify" },
      { name: "Tuffex", href: "/portfolio/tuffex" },
      { name: "Zerost", href: "/portfolio/zerost" },
    ],
  },
  {
    listTitle: "Pages",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
];
