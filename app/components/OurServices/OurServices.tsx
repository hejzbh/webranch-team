import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import {
  OUR_SERVICES_DESCRIPTION_TEXT,
  OUR_SERVICES_PRETITLE_TEXT,
  OUR_SERVICES_TITLE_TEXT,
} from "@/app/constants/text";
// Components
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
const ServicesList = dynamic(() => import("./ServicesList"));
// Interface
interface OurServicesProps {
  className?: string;
}
const OurServices = ({ className = "" }: OurServicesProps) => {
  return (
    <div className={`container mx-auto my-10 ${className}`}>
      {/** Heading */}
      <div className="text-center">
        <PreTitle text={OUR_SERVICES_PRETITLE_TEXT} className="mx-auto" />
        <Title size="medium" text={OUR_SERVICES_TITLE_TEXT} className="my-7" />
        <Description text={OUR_SERVICES_DESCRIPTION_TEXT} />
      </div>
      {/** Services List */}
      <ServicesList className="mt-[4rem] md:mt-[6rem]" />
    </div>
  );
};

export default OurServices;
