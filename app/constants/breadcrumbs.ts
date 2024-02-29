// TS
import { BreadcrumbType } from "../types/breadcrumb";
import { projectsList } from "./projects";
import { services } from "./services";

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

export function getServicesBreadcrumbs(serviceSlug?: string) {
  const breadcrumbs: BreadcrumbType[] = [
    homeBreadcrumb,
    {
      title: "Services",
      description: "Page you are on",
      href: "/services",
      isActive: !serviceSlug,
    },
  ];

  if (serviceSlug) {
    const service = services.find((service) => service.slug === serviceSlug);
    service
      ? breadcrumbs.push({
          title: service?.name,
          description: "Service you are looking",
          href: `/services/${serviceSlug}`,
          isActive: true,
        })
      : null;
  }

  return breadcrumbs;
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
