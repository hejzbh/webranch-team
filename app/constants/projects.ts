import { Project } from "../types/projects";

/**Welcome to the world of Tuffex, where our goal was to create an application that is more than just a platform - it was envisioned to be pixel-perfect to the last detail. With a sharp focus on speed, simplicity, and power, Tuffex is designed to provide a seamless experience to users worldwide. With an intuitive interface that takes your breath away and technological capabilities that reach into infinity, this platform represents a symbiosis of elegant design and revolutionary functionality. Dive into the world of Tuffex and experience the music revolution firsthand. */
export const projectsList: Project[] = [
  {
    name: "Tuffex",
    images: [
      "/images/projects/tuffex/thumbnail.webp",
      "/images/projects/tuffex/real.webp",
      "/images/projects/tuffex/long.webp",
    ],
    description: `Welcome to the world of Tuffex, where our goal was to create an website that is more than just a platform - it was envisioned to be pixel-perfect to the last detail.
    (space)
    With a sharp focus on speed, simplicity, and power, Tuffex is designed to provide a seamless experience to users worldwide.  With an intuitive interface that takes your breath away and technological capabilities that reach into infinity, this platform represents a symbiosis of elegant design and revolutionary functionality.
     (space)
     Dive into the world of Tuffex and experience the music revolution firsthand.`,
    smallThumbnailSRC: "/images/projects/tuffex/thumbnail.webp",
    largeThumbnailSRC: "/images/projects/tuffex/small.webp",
    productionLink: "https://webranch-tuffex.netlify.app/",
    slug: "1",
    summaryCards: [
      { title: "Date", value: "24-12-2023" },
      { title: "Client", value: "Anonymous" },
      {
        title: "URL",
        value: "webranch-tuffex.app",
        href: "https://webranch-tuffex.netlify.app/",
      },
      {
        title: "Location",
        value: "London",
      },
    ],
    features: [
      "Responsive",
      "Animations",
      "Dynamic",
      "Pixel Perfect",
      "SEO Optimized",
    ],
    testimonialText: `Webranch exceeded our expectations in every aspect. (space) Their attention to detail, professionalism, and dedication to our project were truly commendable. From the initial concept discussions to the final delivery, they demonstrated expertise and creativity at every step.`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
  },
  {
    name: "Zerost",
    images: [
      "/images/projects/zerost/thumbnail.webp",
      "/images/projects/zerost/transparent.webp",
      "/images/projects/zerost/long.webp",
    ],
    description: "",
    smallThumbnailSRC: "/images/projects/zerost/thumbnail.webp",
    largeThumbnailSRC: "/images/projects/zerost/thumbnail.webp",
    slug: "2",
    productionLink: "https://webranch-zerost.netlify.app/",
    summaryCards: [
      { title: "Date", value: "17-11-2023" },
      { title: "Client", value: "Anonymous" },
      {
        title: "URL",
        value: "webranch-zerost.app",
        href: "https://webranch-zerost.netlify.app/",
      },
      {
        title: "Location",
        value: "Australia",
      },
    ],
    features: [
      "Responsive",
      "Reveal Animate",
      "Pixel Perfect",
      "SEO Optimized",
    ],
    testimonialText: `Working with Webranch Team to develop our website was an absolute pleasure. (space) Their team's expertise and attention to detail truly exceeded our expectations. The end result is a stunning website that perfectly captures the essence of our brand and showcases our innovative AI technologies and immersive experiences.`,
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
