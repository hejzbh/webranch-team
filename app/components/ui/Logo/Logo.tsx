import React from "react";
// Next
import Link from "next/link";
import Image from "next/image";
// Interface
interface LogoProps {
  className?: string;
  src?: string;
}

const Logo = ({ className = "", src = "/images/logo2.png" }: LogoProps) => {
  return (
    <Link href="/" title="Home">
      <Image
        className={`w-full max-w-[60px] md:max-w-[80px] ${className}`}
        src={src}
        loading="lazy"
        width={150}
        height={150}
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
      />
    </Link>
  );
};

export default Logo;
