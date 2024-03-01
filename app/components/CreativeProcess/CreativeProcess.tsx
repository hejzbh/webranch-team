import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Constants
import {
  CREATIVE_PRETITLE_TEXT,
  CREATIVE_TITLE_TEXT,
} from "@/app/constants/text";
// Components
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const CreativeSteps = dynamic(() => import("./CreativeSteps"));
// Interface
interface CreativeProcessProps {
  className?: string;
}

const CreativeProcess = ({ className = "" }: CreativeProcessProps) => {
  return (
    <div id="creative-process" className={`container mx-auto ${className}`}>
      {/** Heading */}
      <div className="flex justify-between items-end flex-col md:flex-row md:items-start">
        {/** PreTitle & Title */}
        <div className="flex flex-col justify-center  items-center text-center md:text-left md:justify-start md:items-start ">
          <PreTitle text={CREATIVE_PRETITLE_TEXT} />
          <Title text={CREATIVE_TITLE_TEXT} size="small" className="mt-6" />
        </div>
        {/** Image */}
        <Image
          loading="lazy"
          src="/images/cta-1.webp"
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          width={200}
          height={180}
          className="w-full max-w-[70px] xs:max-w-[100px] sm:max-w-[130px] md:max-w-[200px]"
        />
      </div>

      {/** Steps */}
      <CreativeSteps className="mt-2 xs:mt-5 sm:mt-10" />
    </div>
  );
};

export default CreativeProcess;
