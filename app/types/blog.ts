export type BlogCategory = "design" | "development" | "webflow" | "seo";

export interface Blog {
  title: string;
  thumbnail: string;
  content: string;
  category: BlogCategory;
  createdAt: Date;
  id: string;
}
