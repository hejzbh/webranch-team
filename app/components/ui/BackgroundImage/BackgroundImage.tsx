import React from "react";
// Next
import Image from "next/image";
// Interface
interface BackgroundImageProps {
  className?: string;
  loading?: "lazy" | "eager";
  imageSRC: string;
  children?: React.ReactNode;
}

const BackgroundImage = ({
  className = "",
  loading = "lazy",
  imageSRC,
  children,
}: BackgroundImageProps) => {
  return (
    <>
      <Image
        src={imageSRC}
        style={{ aspectRatio: "16/9" }}
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        loading={loading}
        fill
        objectFit="fill"
        className={`z-[-1] w-full h-full   ${className}`}
      />
      {children}
    </>
  );
};

export default BackgroundImage;
