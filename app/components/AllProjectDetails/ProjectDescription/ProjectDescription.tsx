import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
const ProjectFeatures = dynamic(
  () => import("@/app/components/AllProjectDetails/ProjectFeatures")
);
// Interface
interface ProjectDescriptionProps {
  className?: string;
  description: string;
  features: string[];
}

const ProjectDescription = ({
  className = "",
  description,
  features = [],
}: ProjectDescriptionProps) => {
  return (
    <div
      data-aos="fade-in"
      className={`flex items-center justify-center flex-col space-y-10 md:justify-between md:items-start lg:items-center lg:flex-row lg:space-y-0 lg:space-x-10 ${className}`}
    >
      {/** Description text */}
      <div className="basis-[70%] text-center md:text-left">
        {/** Title */}
        <Title size="small" text="About the project" />
        {/** Description */}
        <Description text={description} />
      </div>

      {/** Features */}
      <ProjectFeatures features={features} />
    </div>
  );
};

export default ProjectDescription;
