import React from "react";
// Next
import Image from "next/image";
// Interface
interface BackgroundImageProps {
  className?: string;
  loading?: "lazy" | "eager";
  imageSRC: string;
}

const BackgroundImage = ({
  className = "",
  loading = "lazy",
  imageSRC,
}: BackgroundImageProps) => {
  return (
    <Image
      src={imageSRC}
      alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
      loading={loading}
      fill
      objectFit="fill"
      className={`z-[-1] w-full h-full ${className}`}
    />
  );
};

export default BackgroundImage;
