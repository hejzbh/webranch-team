import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import { aboutUsBreadcrumbs } from "../constants/breadcrumbs";
import {
  ABOUT_US_FIRST_TITLE_TEXT,
  ABOUT_US_FIRST_DESCRIPTION_TEXT,
  ABOUT_US_SECOND_TITLE_TEXT,
  ABOUT_US_SECOND_DESCRIPTION_TEXT,
} from "@/app/constants/text";
// Constants
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const TextWithImage = dynamic(() => import("@/app/components/TextWithImage"));
const TeamMembers = dynamic(() => import("@/app/components/TeamMembers"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));

const AboutUsPage = () => {
  return (
    <main className="min-h-screen">
      <PageHeading breadcrumbs={aboutUsBreadcrumbs} pageTitle="About Us" />
      <TextWithImage
        imageSRC="/images/teamwork.webp"
        title={ABOUT_US_FIRST_TITLE_TEXT}
        description={ABOUT_US_FIRST_DESCRIPTION_TEXT}
        className="!mt-0 md:!mt-20"
      />
      <TeamMembers className="py-5" />
      <TextWithImage
        imageSRC="/images/why-us.png"
        title={ABOUT_US_SECOND_TITLE_TEXT}
        description={ABOUT_US_SECOND_DESCRIPTION_TEXT}
      />
      <ContactUs />
    </main>
  );
};

export default AboutUsPage;
