import { spaceBetweenText } from "@/app/utils/helper";
import React from "react";
// Interface
interface DescriptionProps {
  className?: string;
  text: string;
}

const Description = ({ className = "", text }: DescriptionProps) => {
  return (
    <p
      className={`text-common-black-2 text-[17px] sm:text-[18px] md:text-[19px] drop-shadow-sm ${className}`}
    >
      {spaceBetweenText(text)}
    </p>
  );
};

export default Description;
