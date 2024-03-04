import { spaceBetweenText } from "@/app/utils/helper";
import React from "react";
// Interface
interface DescriptionProps {
  className?: string;
  text: string;
  animation?: string;
  animationDuration?: number;
  animationDelay?: number;
}

const Description = ({
  className = "",
  text,
  animation = "",
  animationDuration = 300,
  animationDelay = 0,
}: DescriptionProps) => {
  return (
    <p
      data-aos={animation}
      data-aos-duration={animationDuration}
      data-aos-delay={animationDelay}
      className={`text-common-black-2 text-[17px] sm:text-[18px] md:text-[19px] drop-shadow-sm ${className}`}
    >
      {spaceBetweenText(text)}
    </p>
  );
};

export default Description;
