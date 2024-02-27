import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import { getContactBreadcrumbs } from "../constants/breadcrumbs";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <PageHeading pageTitle="Contact" breadcrumbs={getContactBreadcrumbs()} />
      <ContactUs className="!mt-0" />
    </main>
  );
};

export default ContactPage;
