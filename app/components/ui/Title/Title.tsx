import React from "react";
// Interface
interface TitleProps {
  className?: string;
  h1?: boolean;
  text: string;
  style?: React.CSSProperties;
  uppercase?: boolean;
  size?: "small" | "medium" | "large" | "largeWithSmallMobile" | "extraSmall";
  colorfulWords?: string[];
  animation?: string;
  animationDuration?: number;
  animationDelay?: number;
}

const textSizeClasses = {
  extraSmall:
    "text-[23px] xxs:text-[25px] xs:text-[26px] md:text-[28px] xl:text-[30px] 2xl:text-[35px]",
  small:
    "text-[30px] xxs:text-[33px] xs:text-[34px] md:text-[33px] xl:text-[37px] 2xl:text-[43px]",
  medium:
    "text-[30px] xxs:text-[33px] xs:text-[34px] md:text-[35px] xl:text-[47px] 2xl:text-[53px]",
  large:
    "text-[38px] xxs:text-[42px] xs:text-[50px] md:text-[60px] xl:text-[70px] 2xl:text-[80px]",
  largeWithSmallMobile:
    "text-[32px] xxs:text-[35px] xs:text-[37px] md:text-[60px] xl:text-[70px] 2xl:text-[80px]",
};

const Title = ({
  className = "",
  h1,
  text,
  style = {},
  uppercase,
  size = "large",
  animation = "",
  animationDuration = 300,
  animationDelay = 0,
}: TitleProps) => {
  if (h1)
    return (
      <h1
        data-aos={animation}
        data-aos-duration={animationDuration}
        data-aos-delay={animationDelay}
        style={{ lineHeight: 1.1, ...style }}
        className={`${
          textSizeClasses[size]
        } font-semibold text-common-black drop-shadow-2xl ${
          uppercase && "uppercase"
        } ${className}`}
      >
        {text}
      </h1>
    );

  return (
    <h2
      data-aos={animation}
      data-aos-duration={animationDuration}
      data-aos-delay={animationDelay}
      style={{ lineHeight: 1.2, ...style }}
      className={`${
        textSizeClasses[size]
      } font-semibold text-common-black  drop-shadow-lg ${
        uppercase && "uppercase"
      } ${className} `}
    >
      {text}
    </h2>
  );
};

export default Title;
