// Next
import dynamic from "next/dynamic";
import { Metadata } from "next";
// Components
const Hero = dynamic(() => import("@/app/components/Hero"));
const CreativeProcess = dynamic(
  () => import("@/app/components/CreativeProcess")
);
const WhoWeAre = dynamic(() => import("@/app/components/WhoWeAre"));
const OurServices = dynamic(() => import("@/app/components/OurServices"));
const OurWork = dynamic(() => import("@/app/components/OurWork"));
const Lighthouse = dynamic(() => import("@/app/components/Lighthouse"));
const Testimonials = dynamic(() => import("@/app/components/Testimonials"));
const Blog = dynamic(() => import("@/app/components/Blog"));

export const metadata: Metadata = {
  title: "Webranch - Your Digital Solutions Partner",
  description:
    "Discover top-quality digital solutions at Webranch. From web development to app development, e-commerce solutions, and custom coding, trust our dynamic team led by Amel and Hazim to guide you towards success. Explore our portfolio now.",
  keywords: [
    "Digital solutions",
    "Web development",
    "App development",
    "E-commerce solutions",
    "Custom coding",
    "Webflow integration",
    "Game development",
    "Amel and Hazim",
    "Dynamic team",
    "Top-quality services",
    "Upwork",
  ],
  applicationName: "Webranch",
};

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeProcess />
      <WhoWeAre />
      <OurServices />
      <OurWork animatedPortfolio />
      <Lighthouse />
      <Testimonials />
      <Blog />
    </>
  );
}
