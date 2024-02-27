import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// TS
import { BreadcrumbType } from "@/app/types/breadcrumb";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Breadcrumbs = dynamic(() => import("@/app/components/Breadcrumbs"));
// Interface
interface PageHeadingProps {
  className?: string;
  pageTitle: string;
  id?: string;
  breadcrumbs: BreadcrumbType[];
}
const PageHeading = ({
  className = "",
  pageTitle = "Page",
  id = "first-section",
  breadcrumbs = [],
}: PageHeadingProps) => {
  return (
    <div
      id={id}
      className={`relative z-[1] py-20 pb-0 overflow-hidden ${className}`}
    >
      {/** Background image */}
      <BackgroundImage
        imageSRC={"/images/reflection-bg.webp"}
        loading="eager"
      />
      {/** Content */}
      <div className=" min-h-[32vh] md:min-h-[40vh] relative container mx-auto flex items-center justify-center">
        {/** Title & Breadcrumb */}
        <div className="text-center flex flex-col justify-center items-center">
          <Title text={pageTitle} h1 className="text-center" />

          <Breadcrumbs breadcrumbs={breadcrumbs} className="mt-5" />
        </div>
        {/** Image */}
        <Image
          loading="lazy"
          src="/images/cta-1.webp"
          width={130}
          height={180}
          objectFit="contain"
          className="absolute top-[25%] left-[55%] translate-y-[-50%] opacity-80 z-[-1]"
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        />
      </div>
    </div>
  );
};

export default PageHeading;
