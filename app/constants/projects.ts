import { Project } from "../types/projects";

/**Welcome to the world of Tuffex, where our goal was to create an application that is more than just a platform - it was envisioned to be pixel-perfect to the last detail. With a sharp focus on speed, simplicity, and power, Tuffex is designed to provide a seamless experience to users worldwide. With an intuitive interface that takes your breath away and technological capabilities that reach into infinity, this platform represents a symbiosis of elegant design and revolutionary functionality. Dive into the world of Tuffex and experience the music revolution firsthand. */
export const projectsList: Project[] = [
  // 1) ---------------------------------------------------------------------------------
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
  // 2) ---------------------------------------------------------------------------------
  {
    name: "Zerost",
    images: [
      "/images/projects/zerost/thumbnail.webp",
      "/images/projects/zerost/fancy.webp",
      "/images/projects/zerost/long.webp",
    ],
    description:
      "Zerost - a team specializing in the development of AI glasses and other technologies. (space) Our task was to carefully listen to their needs, thoroughly consider them, and dive into the work to create a website that reflects their desires. We succeeded in this endeavor - crafting a perfectly simple site tailored to the client, delivering all necessary information through an engaging and cheerful design. (space) The page speed is at a high level, optimized for all devices, and scored 100% on the Google Lighthouse test.",
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
  // 3) ---------------------------------------------------------------------------------
  {
    name: "Webonify",
    images: ["/images/projects/webonify/thumbnail.webp"],
    description:
      "Zerost - a team specializing in the development of AI glasses and other technologies. (space) Our task was to carefully listen to their needs, thoroughly consider them, and dive into the work to create a website that reflects their desires. We succeeded in this endeavor - crafting a perfectly simple site tailored to the client, delivering all necessary information through an engaging and cheerful design. (space) The page speed is at a high level, optimized for all devices, and scored 100% on the Google Lighthouse test.",
    smallThumbnailSRC: "/images/projects/webonify/thumbnail.webp",
    largeThumbnailSRC: "/images/projects/webonify/cartoon.webp",
    slug: "3",
    summaryCards: [],
    features: [],
    benefits: [
      // 1) -------------
      {
        title: "Edit your shop as you like",
        description:
          "Although Webonify is a ready-made system, there is the possibility of customizing the design of your web shop according to your preferences.",
        features: [
          "Choose from a variety of pre-designed templates",
          "Customize colors, fonts, and layouts",
          "Add your logo and branding elements",
          "Integrate specialized features and plugins",
          "Request a completely custom design tailored to your brand",
          "Integrate your existing design if you already have one",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/multiple-designs.png",
      },
      // 2) -------------
      {
        title: "Monitor daily progress for multiple sales channels",
        description:
          "Stay informed about your business's daily performance, enabling timely adjustments and informed decision-making",
        features: [
          "Number of orders",
          "Total revenue generated from webshop sales",
          "Orders awaiting resolution",
          "Products stock count",
          "Number of new customers",
          "Top-selling products analysis",
          "Pending transactions",
          "Overall activity",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/track-progress.png",
      },
      // 3) -------------
      {
        title: "Total Product Control",
        description:
          "Take full command of your products with our comprehensive management tools.",
        features: [
          "Easily add, delete, or edit products",
          "Select distribution channels",
          "Organize products into collections",
          "Manage product variants",
          "Set prices in multiple currencies",
          "Choose tax rates for products",
          "Provide detailed descriptions",
          "Specify warehouse locations and availability",
          "Upload images",
          "Discount & Preorder options",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/products.png",
      },
    ],
    testimonialText: `Working with Webranch Team to develop our website was an absolute pleasure. (space) Their team's expertise and attention to detail truly exceeded our expectations. The end result is a stunning website that perfectly captures the essence of our brand and showcases our innovative AI technologies and immersive experiences.`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
    isWebonifyProject: true,
  },
];
