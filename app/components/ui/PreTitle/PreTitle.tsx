import React from "react";

// Interface
interface PreTitleProps {
  className?: string;
  upperCase?: boolean;
  text: string;
  circleColor?: "#6864ED";
  animation?: string;
  animationDuration?: number;
  animationDelay?: number;
}

const PreTitle = ({
  className = "",
  text,
  upperCase,
  animation = "",
  animationDuration = 300,
  animationDelay = 0,
}: PreTitleProps) => {
  text = upperCase ? text.toUpperCase() : text;

  return (
    <h4
      data-aos={animation}
      data-aos-duration={animationDuration}
      data-aos-delay={animationDelay}
      style={{ lineHeight: "18px" }}
      className={` text-common-black-2 text-[14px] xxs:text-[15px] text-center md:text-[16px] rounded-3xl shadow-md bg-white max-w-fit py-3 px-5 font-semibold flex items-center ${className}`}
    >
      <span className={`mr-[8px] p-[6px] rounded-full bg-[#6864ED]`}></span>
      {text}
      <span className={`ml-[8px] p-[6px] rounded-full bg-[#6864ED]`}></span>
    </h4>
  );
};

export default PreTitle;
