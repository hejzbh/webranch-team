import { Project } from "../types/projects";

export const projectsList: Project[] = [
  {
    name: "Laundry App",
    images: [
      "/images/projects/40.webp",
      "/images/projects/41.webp",
      "/images/projects/42.webp",
    ],
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, aut
    unde ducimus voluptates accusantium nulla officia neque eius nam sit
    labore fugiat eum tenetur deserunt atque voluptate rerum illo eveniet
    obcaecati quasi voluptas enim omnis odit excepturi.
    (space)
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, aut
     unde ducimus voluptates accusantium nulla officia neque eius nam sit
     labore fugiat eum
     (space)
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, aut
     unde ducimus voluptates accusantium nulla officia neque eius nam sit
     labore fugiat eum tenetur deserunt atque.`,
    smallThumbnailSRC: "/images/projects/project2.webp",
    largeThumbnailSRC: "/images/projects/project2.webp",
    productionLink: "/",
    slug: "1",
    summaryCards: [
      { title: "Date", value: "10-03-2023" },
      { title: "Client", value: "John Smith" },
      {
        title: "URL",
        value: "www.mbexpert.at",
        href: "https://www.mbexpert.at",
      },
      {
        title: "Location",
        value: "Australia",
      },
    ],
    features: [
      "Responsive",
      "Multipage",
      "Checkout",
      "Pixel Perfect",
      "SEO Optimized",
    ],
    testimonialText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe porro ea
    nostrum ratione rerum. Quo quos temporibus eveniet voluptas autem
    cupiditate illum optio molestiae praesentium.   (space) Am dolor sit amet consectetur, adipisicing elit. Saepe porro ea
    nostrum ratione rerum? Quo quos temporibus eveni`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
  },
  {
    name: "Hunting",
    images: ["/images/projects/case-2.webp"],
    description: "",
    smallThumbnailSRC: "/images/projects/case-1.webp",
    largeThumbnailSRC: "/images/projects/test2.png",
    slug: "2",
    summaryCards: [],
    features: [],
    testimonialText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe porro ea
    nostrum ratione rerum? (space) Quo quos temporibus eveniet voluptas autem
    cupiditate illum optio molestiae praesentium.`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
  },
  {
    name: "InFest",
    images: ["/images/projects/case-3.webp"],
    smallThumbnailSRC: "/images/projects/case-2.webp",
    largeThumbnailSRC: "/images/projects/test2.png",
    description: "",
    slug: "2",
    summaryCards: [],
    features: [],
    testimonialText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe porro ea
    nostrum ratione rerum? (space) Quo quos temporibus eveniet voluptas autem
    cupiditate illum optio molestiae praesentium.`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
  },
  {
    name: "Paradox",
    images: ["/images/projects/case-4.webp"],
    description: "",
    smallThumbnailSRC: "/images/projects/case-3.webp",
    largeThumbnailSRC: "/images/projects/test2.png",
    slug: "4",
    summaryCards: [],
    features: [],
    testimonialText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe porro ea
    nostrum ratione rerum? (space) Quo quos temporibus eveniet voluptas autem
    cupiditate illum optio molestiae praesentium.`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
  },
];
