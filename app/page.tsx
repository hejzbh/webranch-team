// Next
import dynamic from "next/dynamic";
// Components
const Hero = dynamic(() => import("@/app/components/Hero"));
const CreativeProcess = dynamic(
  () => import("@/app/components/CreativeProcess")
);

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeProcess />
    </>
  );
}
