import React from "react";
// Next
import dynamic from "next/dynamic";
import { Metadata } from "next";
// Constants
import { aboutUsBreadcrumbs } from "../constants/breadcrumbs";
import {
  ABOUT_US_FIRST_TITLE_TEXT,
  ABOUT_US_FIRST_DESCRIPTION_TEXT,
} from "@/app/constants/text";
// Constants
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const TextWithImage = dynamic(() => import("@/app/components/TextWithImage"));
const TeamMembers = dynamic(() => import("@/app/components/TeamMembers"));
const Testimonials = dynamic(() => import("@/app/components/Testimonials"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));
const WhyWorkWithUs = dynamic(() => import("@/app/components/WhyWorkWithUs"));

export const metadata: Metadata = {
  title: "About Us - Webranch",
  description:
    "Learn more about Webranch, the dynamic duo of Amel and Hazim, specializing in Web & App development, Webflow, and other digital solutions. Discover how we bring visions to life and empower your success story.",
  keywords: [
    "Webranch",
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
      "https://i.ibb.co/TPc5wkd/White-Dusk-Blue-And-Nile-Blue-Geometric-Web-Design-And-Development-Presentation.png",
    ],
  },
};

const AboutUsPage = () => {
  return (
    <main className="min-h-screen">
      <PageHeading
        breadcrumbs={aboutUsBreadcrumbs}
        pageTitle="About Us"
        animation="fade-in"
      />
      <TextWithImage
        animation="fade-up"
        imageSRC="/images/two-man-2.webp"
        title={ABOUT_US_FIRST_TITLE_TEXT}
        description={ABOUT_US_FIRST_DESCRIPTION_TEXT}
        className="!mt-0 md:!mt-20"
      />
      <TeamMembers className="py-5" animation="fade-up" />
      <WhyWorkWithUs animation="fade-up" />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default AboutUsPage;
