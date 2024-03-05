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
