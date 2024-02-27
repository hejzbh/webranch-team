export interface Project {
  name: string;
  href: string;
  productionLink?: string;
  images: string[]; // [0] - THUMBNAIL
  description?: string;
  slug: string;
}
