import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  WHO_WE_ARE_BTN_TEXT,
  WHO_WE_ARE_DESCRIPTION_TEXT,
  WHO_WE_ARE_PRETITLE_TEXT,
  WHO_WE_ARE_TITLE_TEXT,
} from "@/app/constants/text";
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
const Button = dynamic(() => import("@/app/components/ui/Button"));

// Interface
interface WhoWeAreProps {
  className?: string;
}

const WhoWeAre = ({ className = "" }: WhoWeAreProps) => {
  return (
    <div
      className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center ${sectionSpacingClass} ${className}`}
    >
      {/** Image */}
      <div className="order-2 lg:order-1">
        <Image
          className="mx-auto dropShadow moveDownUp-animation"
          src={"/images/two-man.webp"}
          loading="lazy"
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          width={500}
          height={350}
        />
      </div>
      {/** Text */}
      <div className="order-1 lg:order-2 text-center md:text-left">
        <PreTitle
          text={WHO_WE_ARE_PRETITLE_TEXT}
          className="mx-auto md:mx-[unset]"
        />
        <Title size="medium" text={WHO_WE_ARE_TITLE_TEXT} className="my-7" />
        <Description text={WHO_WE_ARE_DESCRIPTION_TEXT} />
        <Button text={WHO_WE_ARE_BTN_TEXT} className="mt-7" href="/about-us" />
      </div>
    </div>
  );
};

export default WhoWeAre;
