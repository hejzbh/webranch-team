export interface Project {
  name: string;
  productionLink?: string;
  images: string[]; // [0] - THUMBNAIL
  largeThumbnailSRC: string;
  smallThumbnailSRC: string;
  description: string;
  slug: string;
  features: string[];
  summaryCards: ProjectSummaryCard[];
  testimonialText: string;
  technologies: Technology[];
  isWebonifyProject?: boolean;
}

export interface ProjectSummaryCard {
  title: string;
  value: string;
  href?: string;
}

export type Technology =
  | "html"
  | "css"
  | "js"
  | "react"
  | "next"
  | "tailwind"
  | "webflow"
  | "figma"
  | "c++"
  | "python"
  | "firebase";
