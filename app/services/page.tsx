import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import { getServicesBreadcrumbs } from "../constants/breadcrumbs";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const OurServices = dynamic(() => import("@/app/components/OurServices"));
const WhyWorkWithUs = dynamic(() => import("@/app/components/WhyWorkWithUs"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Services - Webranch",
  description:
    "Explore our comprehensive range of digital services at Webranch. From web development to app development, e-commerce solutions, and custom coding, trust our dynamic team led by Amel and Hazim to guide you towards success.",
  keywords: [
    "Digital services",
    "Web development",
    "App development",
    "E-commerce solutions",
    "Custom coding",
    "Webflow integration",
    "Game development",
    "Amel and Hazim",
    "Dynamic team",
    "Top-quality services",
    "Upwork",
  ],
  applicationName: "Webranch",
};

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      {" "}
      <PageHeading
        breadcrumbs={getServicesBreadcrumbs()}
        pageTitle="Services"
        animation="fade-in"
      />
      <OurServices className="!mt-0" includeTitle={false} />
      <WhyWorkWithUs className="md:mt-[12rem]" animation="fade-up" />
      <ContactUs />
    </main>
  );
};

export default ServicesPage;
