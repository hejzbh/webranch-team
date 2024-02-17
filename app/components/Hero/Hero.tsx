import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
// Interface
interface HeroProps {
  className?: string;
}

const Hero = ({ className = "" }: HeroProps) => {
  return (
    <div className={`relative z-[1] ${className}`}>
      {/** Background image */}
      <BackgroundImage
        imageSRC={"/images/reflection-bg.webp"}
        loading="eager"
      />
      {/** Content */}
      <div className="container mx-auto pt-[190px] pb-[88px] flex items-center justify-between space-x-7">
        {/** Text */}
        <div className="flex-1">
          {/** Pretitle & Title & Description */}
          <h3>Text</h3>
          <h1 className="text-[70px] font-semibold" style={{ lineHeight: 1 }}>
            Make a good plan & grow your business
          </h1>
          <p>description</p>
          {/** Buttons */}
          <div className="flex items-center space-x-2">
            <button>button 1</button>
            <button>button 1</button>
          </div>
        </div>
        {/** Image */}
        <div className="flex-1 flex justify-end items-center">
          <Image
            src="/images/hero-1.webp"
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            loading="eager"
            width={490}
            height={250}
            className="grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
