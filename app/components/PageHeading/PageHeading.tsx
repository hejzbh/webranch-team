import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
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
  backgroundImgSRC?: string;
  link?: {
    href: string;
    title: string;
  };
  animation?: string;
  animationDuration?: number;
  animationDelay?: number;
}
const PageHeading = ({
  className = "",
  pageTitle = "Page",
  id = "first-section",
  backgroundImgSRC = "/images/reflection-bg.webp",
  breadcrumbs = [],
  link,
  animation = "",
  animationDuration = 300,
  animationDelay = 0,
}: PageHeadingProps) => {
  return (
    <div
      data-aos={animation}
      data-aos-duration={animationDuration}
      data-aos-delay={animationDelay}
      id={id}
      className={`relative z-[1] py-20 pb-0 overflow-hidden ${className}`}
    >
      {/** Background image */}
      <BackgroundImage imageSRC={backgroundImgSRC} loading="eager" />
      {/** Content */}
      <div className=" min-h-[32vh] md:min-h-[40vh] relative container mx-auto flex items-center justify-center">
        {/** Title & Breadcrumb & LINK? */}
        <div className="text-center flex flex-col justify-center items-center">
          <Title text={pageTitle} h1 className="text-center" />
          {link && (
            <Link
              title={link.title}
              href={link.href}
              className="text-[17px] text-common-purple underline text-center font-[500] mt-3"
            >
              {link.title}
            </Link>
          )}
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
