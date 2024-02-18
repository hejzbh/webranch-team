import React from "react";
// Next
import Image from "next/image";
// Interface
interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Image
      className={`w-full max-w-[120px] md:max-w-[150px] ${className}`}
      src="/images/logo.webp"
      loading="lazy"
      width={150}
      height={150}
      alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
    />
  );
};

export default Logo;
