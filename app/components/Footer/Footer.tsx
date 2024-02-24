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
    <footer className={`relative z-[1] py-20 ${className}`}>
      {/** Background */}
      <BackgroundImage imageSRC="/images/reflection-bg.webp" />
      {/** Content */}
      <div className="container mx-auto">
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
