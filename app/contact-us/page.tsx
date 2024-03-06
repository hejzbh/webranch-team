import React from "react";
// Next
import dynamic from "next/dynamic";
import { Metadata } from "next";
// Constants
import { getContactBreadcrumbs } from "../constants/breadcrumbs";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Webranch",
  description:
    "Connect with Webranch and explore how we can assist you with your digital needs. Whether you have questions, inquiries, or project ideas, we're here to help. Reach out to the dynamic duo of Amel and Hazim today.",
  keywords: [
    "contact us",
    "Webranch contact",
    "digital solutions",
    "web development",
    "app development",
    "Webflow",
    "freelance",
    "UpWork",
    "Amel",
    "Hazim",
  ],
  openGraph: {
    images: [
      "https://i.ibb.co/pbbvCYR/White-Dusk-Blue-And-Nile-Blue-Geometric-Web-Design-And-Development-Presentation-1.jpg",
    ],
  },
  applicationName: "Webranch",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <PageHeading
        pageTitle="Contact"
        breadcrumbs={getContactBreadcrumbs()}
        animation="fade-in"
      />
      <ContactUs className="!mt-0" />
    </main>
  );
};

export default ContactPage;
