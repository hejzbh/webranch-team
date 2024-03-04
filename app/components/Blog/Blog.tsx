import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import {
  HOME_BLOG_TITLE_TEXT,
  HOME_BLOG_PRETITLE_TEXT,
} from "@/app/constants/text";
import { blogList } from "@/app/constants/blogList";
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const BlogListing = dynamic(() => import("@/app/components/Blog/BlogListing"));
// Interface
interface BlogProps {
  className?: string;
}

const Blog = ({ className = "" }: BlogProps) => {
  return (
    <section
      data-aos="fade-up"
      className={` relative z-[1] py-20 ${sectionSpacingClass} ${className}`}
    >
      {/** Background Image */}
      <BackgroundImage imageSRC={"/images/reflection-bg.webp"} loading="lazy" />
      {/** Content inner */}
      <div className="container mx-auto text-center">
        <PreTitle text={HOME_BLOG_PRETITLE_TEXT} className="mx-auto" />
        <Title
          size="medium"
          text={HOME_BLOG_TITLE_TEXT}
          className="my-7 lg:max-w-[60%] mx-auto"
        />
        {/** Blog Listing */}
        <BlogListing blogList={blogList} className="mt-20" />
      </div>
    </section>
  );
};

export default Blog;
