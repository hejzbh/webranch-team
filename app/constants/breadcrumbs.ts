// TS
import { BreadcrumbType } from "../types/breadcrumb";
import { projectsList } from "./projects";

//
const homeBreadcrumb: BreadcrumbType = {
  title: "Home",
  description: "Go to HomePage",
  href: "/",
};

//
export const aboutUsBreadcrumbs: BreadcrumbType[] = [
  homeBreadcrumb,
  {
    title: "About Us",
    description: "Page you are on",
    href: "/about-us",
    isActive: true,
  },
];

export function getPortfolioBreadcrumbs(projectSlug?: string) {
  const breadcrumbs: BreadcrumbType[] = [
    homeBreadcrumb,
    {
      title: "Portfolio",
      description: "Page you are on",
      href: "/portfolio",
      isActive: !projectSlug,
    },
  ];

  if (projectSlug) {
    const project = projectsList.find(
      (project) => project.slug === projectSlug
    );
    project
      ? breadcrumbs.push({
          title: project?.name,
          description: "Project you are looking",
          href: `/portfolio/${projectSlug}`,
          isActive: true,
        })
      : null;
  }

  return breadcrumbs;
}

export function getServicesBreadcrumbs(service?: any) {
  return [
    homeBreadcrumb,
    {
      title: "Services",
      description: "Page you are on",
      href: "/services",
      isActive: !service,
    },
  ] as BreadcrumbType[];
}

export function getContactBreadcrumbs() {
  return [
    homeBreadcrumb,
    {
      title: "Contact",
      description: "Page you are on",
      href: "/contact",
      isActive: true,
    },
  ] as BreadcrumbType[];
}
