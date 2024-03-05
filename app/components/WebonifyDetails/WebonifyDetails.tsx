import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// TS
import { Project } from "@/app/types/projects";
// Components
const WebonifyHeading = dynamic(
  () => import("@/app/components/WebonifyDetails/WebonifyHeading")
);
// Interface
interface WebonifyDetailsProps {
  className?: string;
  project: Project;
}
const WebonifyDetails = ({ className = "", project }: WebonifyDetailsProps) => {
  return (
    <section className={`container mx-auto ${className}`}>
      {/** Heading */}
      <WebonifyHeading imageSRC={"/images/projects/webonify/design.png"} />
      {/** Banner */}
      <div className="border-y-2 py-10">
        <Image
          loading="lazy"
          src="/images/projects/webonify/banner.png"
          alt="Webonify banner"
          width={1080}
          height={700}
          className="w-full drop-shadow-xl rounded-3xl"
        />
      </div>
    </section>
  );
};

export default WebonifyDetails;
