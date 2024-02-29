// Next
import dynamic from "next/dynamic";
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
const AnimatedPortfolio = dynamic(
  () => import("@/app/components/AnimatedPortfolio")
);

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
