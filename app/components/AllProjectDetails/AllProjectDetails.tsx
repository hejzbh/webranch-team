import React from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { Project } from "@/app/types/projects";
// Components
const ProjectHeading = dynamic(() => import("./ProjectHeading"));
const ProjectDescription = dynamic(() => import("./ProjectDescription"));
const TextWithImage = dynamic(() => import("@/app/components/TextWithImage"));
const ProjectGallery = dynamic(
  () => import("@/app/components/AllProjectDetails/ProjectGallery")
);
const ProjectTechnologies = dynamic(
  () => import("@/app/components/AllProjectDetails/ProjectTechnologies")
);
// Interface
interface AllProjectDetailsProps {
  className?: string;
  project: Project;
}
const AllProjectDetails = ({
  className = "",
  project,
}: AllProjectDetailsProps) => {
  return (
    <section className={`${className} container mx-auto`}>
      {/** Heading */}
      <ProjectHeading
        projectThumbnailSRC={project.largeThumbnailSRC}
        projectSummaryCards={project.summaryCards}
      />
      {/** Description */}
      <ProjectDescription
        description={project.description}
        features={project.features}
        className="my-20 "
      />
      {/** Testimonial (What client said) */}
      <TextWithImage
        className="border-y-2 py-20"
        imageSRC="/images/happyClient.webp"
        title="What client said"
        description={project.testimonialText}
        reversed
      />
      {/** Project Gallery */}
      <ProjectGallery
        images={project.images}
        className="border-b-2 pb-20 !mb-10"
      />
      {/** Project technologies */}
      <ProjectTechnologies technologies={project.technologies} />
    </section>
  );
};

export default AllProjectDetails;
