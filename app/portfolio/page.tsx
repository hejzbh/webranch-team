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

const PortfolioPage = () => {
  return (
    <main className="min-h-screen">
      {" "}
      <PageHeading
        breadcrumbs={getPortfolioBreadcrumbs()}
        pageTitle="Portfolio"
      />
      <OurWork
        className="!mt-0"
        includeBG={false}
        includeTitle={false}
        includeBTN={false}
      />
      <Lighthouse />
      <ContactUs />
    </main>
  );
};

export default PortfolioPage;
