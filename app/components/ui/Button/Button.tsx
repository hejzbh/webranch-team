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
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
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
  disabled = false,
  type = "button",
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
      type={type}
      disabled={disabled}
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
