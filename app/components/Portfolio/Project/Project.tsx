import React from "react";
// Next
import Link from "next/link";
import dynamic from "next/dynamic";
// Icons
import { ImArrowUpRight } from "react-icons/im";
// Interfaces & Types
import { Project as ProjectType } from "@/app/types/projects";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const Button = dynamic(() => import("@/app/components/ui/Button"));
// Interface
interface ProjectProps {
  className?: string;
  project: ProjectType;
}

const Project = ({ className, project }: ProjectProps) => {
  return (
    <div className={`h-full ${className}`}>
      <Link
        className="block relative h-full min-h-[22em] sm:min-h-[25em] z-[1] p-20 group overflow-hidden border-[5px] border-white rounded-[20px]"
        href={project.href}
        title={project.name}
      >
        {/** Image */}
        <BackgroundImage
          imageSRC={project.smallThumbnailSRC}
          className="!object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
        />
        {/** Button (Display on hover) */}
        <Button
          text=""
          titleProp="View Project Details"
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-400 ease-in-out !rounded-full !bg-common-green scale-50 !p-7 opacity-0 group-hover:opacity-100 group-hover:scale-100  shadow-md hover:opacity-70"
        >
          <ImArrowUpRight className="text-[23px]" />
        </Button>
      </Link>
    </div>
  );
};

export default Project;
