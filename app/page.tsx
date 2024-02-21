// Next
import dynamic from "next/dynamic";
// Components
const Hero = dynamic(() => import("@/app/components/Hero"));
const CreativeProcess = dynamic(
  () => import("@/app/components/CreativeProcess")
);
const WhoWeAre = dynamic(() => import("@/app/components/WhoWeAre"));
const OurServices = dynamic(() => import("@/app/components/OurServices"));

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeProcess />
      <WhoWeAre />
      <OurServices />
    </>
  );
}
