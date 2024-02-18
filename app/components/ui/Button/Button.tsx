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
}

const Button = ({
  className = "",
  text = "",
  href,
  uppercase,
  children,
}: ButtonProps) => {
  const router: any = useRouter();

  function onBtnClick() {
    if (!href) return;
    router.push(href);
  }

  return (
    <button
      style={{ letterSpacing: ".7px" }}
      className={`text-white bg-common-purple transition-all duration-300 ease-in-out hover:bg-common-green rounded-lg px-9 py-4 font-semibold text-[16px] md:text-[17px] ${
        uppercase && "uppercase"
      } ${className}`}
      onClick={onBtnClick}
      title={text}
    >
      {text && text}
      {children && children}
    </button>
  );
};

export default Button;
