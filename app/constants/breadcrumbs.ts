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
