import React from "react";
// Next
import { Metadata } from "next";
import dynamic from "next/dynamic";
// Constants
import { getPortfolioBreadcrumbs } from "../constants/breadcrumbs";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const OurWork = dynamic(() => import("@/app/components/OurWork"));
const Lighthouse = dynamic(() => import("@/app/components/Lighthouse"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);

export const metadata: Metadata = {
  title: "Portfolio - Explore Our Work at Webranch",
  description:
    "Discover the portfolio of Webranch and explore our extensive range of projects showcasing our expertise in web & app development, Webflow, and other digital solutions. Dive into our success stories and see how we can elevate your digital presence.",
  keywords: [
    "portfolio",
    "Webranch portfolio",
    "web development",
    "app development",
    "Webflow",
    "digital solutions",
    "freelance",
    "UpWork",
    "Amel",
    "Hazim",
  ],
  openGraph: {
    images: [
      "https://i.ibb.co/9c3bpbf/White-Dusk-Blue-And-Nile-Blue-Geometric-Web-Design-And-Development-Presentation-2.jpg",
    ],
  },
  applicationName: "Webranch",
};

const PortfolioPage = () => {
  return (
    <main className="min-h-screen">
      {" "}
      <PageHeading
        breadcrumbs={getPortfolioBreadcrumbs()}
        pageTitle="Portfolio"
        animation="fade-in"
      />
      <div className="relative z-[1]">
        <OurWork
          className="!mt-0"
          includeBG={false}
          includeTitle={false}
          includeBTN={false}
        />
        <Lighthouse />
        <ContactUs />
        <BackgroundImage
          className="hidden 2xl:block opacity-40"
          imageSRC="/images/line.webp"
        />
      </div>
    </main>
  );
};

export default PortfolioPage;
