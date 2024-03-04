import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const FooterLinks = dynamic(
  () => import("@/app/components/Footer/FooterLinks")
);
// Interface
interface FooterProps {
  className?: string;
}
const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer
      data-aos="fade-in"
      data-aos-duration="700"
      className={`relative z-[1] pt-20 pb-10 rounded-t-3xl
     ${className}`}
    >
      {/** Background */}
      <BackgroundImage imageSRC="/images/reflection-bg.webp" />
      {/** Content */}
      <div className="container mx-auto">
        {/** Links */}
        <FooterLinks />
        {/** Copyright */}
        <div className="border-t-[1px] border-gray-500/30 mt-10 pt-10">
          <p className="text-[16px] text-text-body text-center">
            &copy; All rights reserved by{" "}
            {process.env.NEXT_PUBLIC_AGENCY_NAME as string}{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
