import React from "react";

// Interface
interface PreTitleProps {
  className?: string;
  upperCase?: boolean;
  text: string;
  circleColor?: "#6864ED";
}

const PreTitle = ({ className = "", text, upperCase }: PreTitleProps) => {
  text = upperCase ? text.toUpperCase() : text;

  return (
    <h3
      style={{ lineHeight: "18px" }}
      className={` text-common-black-2 text-[16px] rounded-3xl shadow-md bg-white max-w-fit py-3 px-5 font-semibold flex items-center ${className}`}
    >
      <span className={`mr-[8px] p-[6px] rounded-full bg-[#6864ED]`}></span>
      {text}
      <span className={`ml-[8px] p-[6px] rounded-full bg-[#6864ED]`}></span>
    </h3>
  );
};

export default PreTitle;
