// TS
import { BreadcrumbType } from "../types/breadcrumb";

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

export function getPortfolioBreadcrumbs(project?: any) {
  return [
    homeBreadcrumb,
    {
      title: "Portfolio",
      description: "Page you are on",
      href: "/portfolio",
      isActive: !project,
    },
  ] as BreadcrumbType[];
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
