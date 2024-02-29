import React from "react";
// Next
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

const PortfolioPage = () => {
  return (
    <main className="min-h-screen">
      {" "}
      <PageHeading
        breadcrumbs={getPortfolioBreadcrumbs()}
        pageTitle="Portfolio"
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
