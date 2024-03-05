import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// TS
import { ProjectSummaryCard } from "@/app/types/projects";
// Components
const ProjectSummary = dynamic(
  () => import("@/app/components/AllProjectDetails/ProjectSummary")
);
// Interface
interface ProjectHeadingProps {
  className?: string;
  projectThumbnailSRC: string;
  projectSummaryCards: ProjectSummaryCard[];
}
const ProjectHeading = ({
  className = "",
  projectThumbnailSRC = "",
  projectSummaryCards = [],
}: ProjectHeadingProps) => {
  return (
    <div data-aos="fade-in" className={`${className}`}>
      {/** Thumbnail */}
      <Image
        loading="lazy"
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        src={projectThumbnailSRC}
        width={800}
        quality={100}
        height={250}
        className="w-full max-h-[800px]  min-h-[310px] h-full sm:max-h-[600px] object-cover rounded-3xl drop-shadow-2xl"
      />
      {/** Summary */}
      <ProjectSummary
        className="max-w-[75%] sm:max-w-[90%] lg:max-w-[80%] mx-auto relative mt-[-35px] sm:mt-[-50px]"
        projectSummaryCards={projectSummaryCards}
      />
    </div>
  );
};

export default ProjectHeading;
