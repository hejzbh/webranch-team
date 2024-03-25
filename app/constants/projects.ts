import { Project } from "../types/projects";

/**Welcome to the world of Tuffex, where our goal was to create an application that is more than just a platform - it was envisioned to be pixel-perfect to the last detail. With a sharp focus on speed, simplicity, and power, Tuffex is designed to provide a seamless experience to users worldwide. With an intuitive interface that takes your breath away and technological capabilities that reach into infinity, this platform represents a symbiosis of elegant design and revolutionary functionality. Dive into the world of Tuffex and experience the music revolution firsthand. */
export const projectsList: Project[] = [
  // 1) ---------------------------------------------------------------------------------
  {
    name: "Webonify",
    images: ["/images/projects/webonify/thumbnail.webp"],
    description:
      "Webonify is a fully customizable e-commerce solution, offering a user-friendly storefront and powerful management tools, enabling businesses to swiftly launch and manage their online stores with ease.",
    smallThumbnailSRC: "/images/projects/webonify/thumbnail.webp",
    largeThumbnailSRC: "/images/projects/webonify/cartoon.webp",
    slug: "webonify",
    ogImageSRC: "https://i.ibb.co/K5V4m1b/thumbnail.webp",
    summaryCards: [],
    features: [],
    benefits: [
      // 1) -------------
      {
        title: "Edit your shop as you like",
        description:
          "Although Webonify is a ready-made system, there is the possibility of customizing the design of your web shop according to your preferences.",
        features: [
          "Choose from pre-designed templates",
          "Customize colors, fonts, and layouts",
          "Add your logo and branding elements",
          "Integrate specialized features and plugins",
          "Request a completely custom design",
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
          "Track orders, revenue, and stock",
          "Analyze top-selling products",
          "Monitor new customers and pending transactions",
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
          "Add, delete, or edit products",
          "Organize products into collections and categories",
          "Manage product variants and pricing",
          "Provide detailed descriptions and images",
          "Choose tax rates and sales channels",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/products.png",
      },
      // 4) ------------
      {
        title: "Efficient Order Management",
        description:
          "Streamline your order processing with our comprehensive suite of order management tools.",
        features: [
          "Track order details",
          "Manage payments and refunds",
          "Access customer information",
          "Edit orders",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/order-managment.png",
      },
      // 5) ------------------------
      {
        title: "Collections & Categories",
        description:
          "Organize your products seamlessly into collections and categories for easy navigation and improved customer experience.",
        features: [
          "Create custom collections to showcase curated product sets",
          "Organize products into categories for intuitive browsing",
          "Enhance user experience with easy navigation and discovery",
          "Optimize product visibility and accessibility",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/categories.png",
      },
      // 6) ------------
      {
        title: "Discounts, Vouchers, and Gift Cards",
        description:
          "Boost sales and customer loyalty with <b>Webonify</b> versatile discounting and gifting options.",
        features: [
          "Create customizable gift cards and vouchers",
          "Apply discounts to products, categories, or collections",
          "Track and analyze campaign effectiveness",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/gift-cards.png",
      },
      // 7) -------------
      {
        title: "Customizable Payment Methods",
        description:
          "Offer convenience and flexibility by integrating preferred payment methods, including custom options.",
        features: [
          "Secure transactions with PayPal",
          "Enable card payments",
          "Cash on delivery",
          "Support popular gateways and add custom methods",
          "& more",
        ],
        imageSRC: "/images/projects/webonify/payments.png",
      },
      // 8) -------------
      {
        title: "Endless Customization",
        description:
          "Manage key aspects of your store and operations with ease",
        features: [
          "Customers: Authentication options and user databases",
          "Taxes: Manage tax rates effortlessly",
          "Staff Settings: Control employee permissions",
          "Shipping Settings: Define shipping methods",
          "Multichannel: Expand sales channels",
          "Content Management: Create and manage content pages",
          "Site Settings: Adjust site configurations",
          "Plugins: Extend functionality with plugins",
          "Webhooks & Events: Integrate and automate",

          "& more",
        ],
        imageSRC: "/images/projects/webonify/customize.png",
      },
    ],
    testimonialText: `Working with Webranch Team to develop our website was an absolute pleasure. (space) Their team's expertise and attention to detail truly exceeded our expectations. The end result is a stunning website that perfectly captures the essence of our brand and showcases our innovative AI technologies and immersive experiences.`,
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
    isWebonifyProject: true,
  },
  // 2) ---------------------------------------------------------------------------------
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
    ogImageSRC: "https://i.ibb.co/N9F2vV0/thumbnail.webp",
    slug: "tuffex",
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

  // 3) ---------------------------------------------------------------------------------
  {
    name: "Webranch Talk",
    images: [
      "/images/projects/webranch-talk/thumbnail.webp",
      "/images/projects/webranch-talk/image1.webp",
    ],
    description: `<b>Webranch Talk</b> is our latest application designed to streamline <b>communication between our team and our clients</b>, particularly in <b>task management</b>. It allows us to receive tasks from clients with all relevant information, such as deadlines and additional requirements, and efficiently manage these tasks. (space)

      The application includes <b>real-time</b> chat, video calls, audio calls, servers, channels within servers, projects, to-do lists, reminders, and much more related to task management.`,
    smallThumbnailSRC: "/images/projects/webranch-talk/thumbnail.webp",
    largeThumbnailSRC: "/images/projects/webranch-talk/thumbnail.webp",
    slug: "webranch-talk",

    ogImageSRC: "https://i.ibb.co/sVL6m10/k-OCAc-ZWib-OU-11zon.webp",
    summaryCards: [
      { title: "Date", value: "25-3-2024" },
      { title: "Client", value: "Webranch" },
      { title: "Backend", value: "Mongo DB" },
      {
        title: "Location",
        value: "Remote",
      },
    ],
    features: [
      "Task Managment",
      "Chatting",
      "Audio & Video calls",
      "Permissions",
      "Responsive",
      "Pixel Perfect",
    ],
    technologies: ["html", "css", "js", "react", "next", "tailwind"],
  },
  // 4) ------------------------------------------------------------------------
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
    slug: "zerost",
    productionLink: "https://webranch-zerost.netlify.app/",
    ogImageSRC: "https://i.ibb.co/qWcVygk/small.webp",
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
];
