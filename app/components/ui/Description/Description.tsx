import React from "react";
// Interface
interface DescriptionProps {
  className?: string;
  text: string;
}

const Description = ({ className = "", text }: DescriptionProps) => {
  return (
    <p
      className={`text-common-black-2 text-[19px] drop-shadow-sm ${className}`}
    >
      {text}
    </p>
  );
};

export default Description;
