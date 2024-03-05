import React from "react";
// Next
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
// Constants
import { getServicesBreadcrumbs } from "@/app/constants/breadcrumbs";
import { services } from "@/app/constants/services";
// TS
import { Service } from "@/app/types/services";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const AllServiceDetails = dynamic(
  () => import("@/app/components/AllServiceDetails")
);
const CreativeSteps = dynamic(
  () => import("@/app/components/CreativeProcess/CreativeSteps")
);
const ContactUs = dynamic(() => import("@/app/components/ContactUs"));
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
// Interface
interface ServiceDetailsPageProps {
  params: {
    serviceSlug: string;
  };
}

function getServiceDetails(serviceSlug: string) {
  const service: Service | undefined = services.find(
    (service) => service.slug === serviceSlug
  );

  return service;
}

const ServiceDetailsPage = ({ params }: ServiceDetailsPageProps) => {
  const serviceDetails = getServiceDetails(params.serviceSlug);

  if (!serviceDetails) return notFound();

  return (
    <main>
      {/** Page Heading */}
      <PageHeading
        pageTitle={serviceDetails.name}
        breadcrumbs={getServicesBreadcrumbs(params.serviceSlug)}
        backgroundImgSRC="/images/line-2.webp"
        animation="fade-in"
      />
      <div className="relative z-[1]">
        {/** Details */}
        <AllServiceDetails service={serviceDetails} />
        {/** Process */}
        <CreativeSteps className="container mx-auto mb-10 lg:mb-20 my-20" />
        {/** Contact Us */}
        <ContactUs className="!mt-0  !py-10" />
        {/** Backgroudn image */}
        <BackgroundImage
          className="hidden 2xl:block opacity-40"
          imageSRC="/images/line.webp"
        />
      </div>
    </main>
  );
};

export default ServiceDetailsPage;
