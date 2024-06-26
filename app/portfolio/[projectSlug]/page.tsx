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

export async function generateMetadata({ params }: ProjectDetailsPageProps) {
  const project = getProjectDetails(params.projectSlug);
  return {
    title: `${project?.name} - ${
      project?.isWebonifyProject
        ? "Custom e-commerce solution platform"
        : "Webranch project"
    }`,
    description: project?.description.slice(0, 120).replace(/(space)/g, ""),

    openGraph: {
      images: [project?.ogImageSRC || project?.smallThumbnailSRC],
    },
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

  if (projectDetails.isWebonifyProject) {
    const WebonifyDetails = dynamic(
      () => import("@/app/components/WebonifyDetails"),
      {
        loading: () => <>...</>,
      }
    );

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
        <WebonifyDetails project={projectDetails} />
      </main>
    );
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
