"use client";
import React from "react";
// Next
import { useRouter } from "next/navigation";
// Interface
interface ButtonProps {
  className?: string;
  text: string;
  uppercase?: boolean;
  href?: string;
  children?: React.ReactNode;
  titleProp?: string;
  onClick?: () => void;
  reversedBG?: boolean;
}

const Button = ({
  className = "",
  text = "",
  href,
  uppercase,
  children,
  titleProp = text,
  reversedBG,
  onClick = () => {},
}: ButtonProps) => {
  const router: any = useRouter();

  function onBtnClick() {
    if (!href) {
      if (onClick) {
        onClick();
      }
      return;
    }
    router.push(href);
  }

  return (
    <button
      style={{ letterSpacing: ".7px" }}
      className={`text-white  transition-all duration-300 ease-in-out ${
        reversedBG
          ? "bg-common-green hover:bg-common-purple"
          : "bg-common-purple hover:bg-common-green"
      } rounded-lg px-9 py-4 font-semibold text-[16px] md:text-[17px] ${
        uppercase && "uppercase"
      } ${className}`}
      onClick={onBtnClick}
      title={text || titleProp}
    >
      {text && text}
      {children && children}
    </button>
  );
};

export default Button;
