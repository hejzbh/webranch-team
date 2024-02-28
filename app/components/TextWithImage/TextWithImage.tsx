import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Constants
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
// Interface
interface TextWithImageProps {
  className?: string;
  imageSRC?: string;
  title: string;
  description: string;
  reversed?: boolean;
}
const TextWithImage = ({
  className = "",
  description = "",
  title = "",
  imageSRC = "/images/teamwork.webp",
  reversed,
}: TextWithImageProps) => {
  return (
    <section
      className={`container mx-auto ${sectionSpacingClass} ${className}`}
    >
      {/** Text 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/** Text */}
        <div
          className={`text-center md:text-left ${
            reversed && "order-1 lg:order-2"
          }`}
        >
          <Title size="small" text={title} />
          <Description text={description} className="mt-4" />
        </div>
        {/** Image */}
        <div className={`text-center ${reversed && "order-2 lg:order-1"}`}>
          <Image
            loading="lazy"
            src={imageSRC}
            width={500}
            className="mx-auto lg:ml-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[500px] rounded-3xl"
            height={450}
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          />
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
