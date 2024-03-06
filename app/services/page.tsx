import React from "react";
// Next
import dynamic from "next/dynamic";
import { Metadata } from "next";
// Constants
import { getServicesBreadcrumbs } from "../constants/breadcrumbs";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const OurServices = dynamic(() => import("@/app/components/OurServices"));
const WhyWorkWithUs = dynamic(() => import("@/app/components/WhyWorkWithUs"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));

export const metadata: Metadata = {
  title: "Services - Webranch: Elevate Your Digital Presence",
  description:
    "Explore the comprehensive services offered by Webranch, including web & app development, Webflow expertise, and other digital solutions. Discover how we can empower your success story and take your digital presence to the next level.",
  keywords: [
    "services",
    "Webranch services",
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
      "https://i.ibb.co/rfKmKGz/White-Dusk-Blue-And-Nile-Blue-Geometric-Web-Design-And-Development-Presentation-3.jpg",
    ],
  },
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
