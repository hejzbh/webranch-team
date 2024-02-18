import React from "react";
// Interface
interface TitleProps {
  className?: string;
  h1?: boolean;
  text: string;
  style?: React.CSSProperties;
  uppercase?: boolean;
}

const Title = ({
  className = "",
  h1,
  text,
  style = {},
  uppercase,
}: TitleProps) => {
  if (h1)
    return (
      <h1
        style={{ lineHeight: 1, ...style }}
        className={`text-[80px] font-semibold text-common-black drop-shadow-2xl ${
          uppercase && "uppercase"
        } ${className}`}
      >
        {text}
      </h1>
    );

  return (
    <h2
      style={{ lineHeight: 1, ...style }}
      className={`text-[80px] font-semibold text-common-black  drop-shadow-lg ${
        uppercase && "uppercase"
      } ${className} `}
    >
      {text}
    </h2>
  );
};

export default Title;
