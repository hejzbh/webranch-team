import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Constants
import {
  HERO_BTN_1_TEXT,
  HERO_DESCRIPTION_TEXT,
  HERO_PRETITLE_TEXT,
  HERO_TITLE_TEXT,
} from "@/app/constants/text";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
const Button = dynamic(() => import("@/app/components/ui/Button"));
// Interface
interface HeroProps {
  className?: string;
}

const Hero = ({ className = "" }: HeroProps) => {
  return (
    <div id="first-section" className={`relative z-[1] ${className}`}>
      {/** Background image */}
      <BackgroundImage
        imageSRC={"/images/reflection-bg.webp"}
        loading="eager"
      />
      {/** Content */}
      <div className="container min-h-screen mx-auto pt-[140px] md:pt-[190px] pb-[88px] flex flex-col items-center justify-between space-y-7 lg:flex-row lg:space-y-0 lg:space-x-7">
        {/** Text */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          {/** Pretitle & Title & Description */}
          <PreTitle text={HERO_PRETITLE_TEXT} />
          <Title
            h1
            className="mb-1 lg:mb-7 my-7 text-center md:text-left"
            text={HERO_TITLE_TEXT}
          />
          <Description
            text={HERO_DESCRIPTION_TEXT}
            className="text-center md:text-left"
          />
          {/** Buttons */}
          <div className="flex items-center space-x-2 mt-7">
            <Button text={HERO_BTN_1_TEXT} uppercase />
          </div>
        </div>
        {/** Image */}
        <div className="pl-[3em] pt-5 lg:pt-0 lg:pl-0 flex-1 flex justify-end items-center">
          <Image
            src="/images/traffic.webp"
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            loading="eager"
            width={490}
            height={250}
            className="moveDownUp-animation dropShadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
