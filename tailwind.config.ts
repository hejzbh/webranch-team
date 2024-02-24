import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "350px",
      xs: "400px",
      ssm: "500px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "990px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        "services-list-xl": "repeat(auto-fit, minmax(10em, 22em))",
        "services-list-sm": "repeat(auto-fit, minmax(10em, 18em))",
      },
      colors: {
        "common-black-2": "#52525C",
        "common-black": "#151718",
        "common-purple": "#6864ED",
        "common-green": "#33CC79",
        "tp-border-3": "#EDEFEB",
        "text-body": "#6A6A74",
        upwork: "#73bb44",
        "common-yellow": "#EED064",
        "nav-link-hover": "#6864ED",
      },
      container: {
        padding: {
          DEFAULT: "1rem",

          lg: "4rem",
          xl: "5rem",
          "2xl": "8rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
