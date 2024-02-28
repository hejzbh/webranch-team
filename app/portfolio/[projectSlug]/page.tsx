import React from "react";
// Next
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
// Constants
import { getPortfolioBreadcrumbs } from "@/app/constants/breadcrumbs";
import { projectsList } from "@/app/constants/projects";
// TS
import { Project } from "@/app/types/projects";
// Components
const PageHeading = dynamic(() => import("@/app/components/PageHeading"));
const AllProjectDetails = dynamic(
  () => import("@/app/components/AllProjectDetails")
);

// Interface
interface ProjectDetailsPageProps {
  params: {
    projectSlug: string;
  };
}

function getProjectDetails(projectSlug: string) {
  const project: Project | undefined = projectsList.find(
    (project) => project.slug === projectSlug
  );

  return project;
}

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
  const projectDetails = getProjectDetails(params?.projectSlug);

  if (!projectDetails) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      {/** Page Heading */}
      <PageHeading
        pageTitle={projectDetails.name}
        breadcrumbs={getPortfolioBreadcrumbs(params.projectSlug)}
        backgroundImgSRC="/images/line.webp"
        link={
          projectDetails?.productionLink
            ? {
                title: "VIEW DEMO",
                href: projectDetails.productionLink,
              }
            : undefined
        }
      />
      {/** Details */}
      <AllProjectDetails project={projectDetails} />
    </main>
  );
};

export default ProjectDetailsPage;
