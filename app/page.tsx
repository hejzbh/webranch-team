// Next
import dynamic from "next/dynamic";
// Components
const Hero = dynamic(() => import("@/app/components/Hero"));

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
