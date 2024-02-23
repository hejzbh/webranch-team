import React from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { Blog } from "@/app/types/blog";
// Components
const BlogCard = dynamic(() => import("@/app/components/Blog/BlogCard"));
// Interface
interface BlogListingProps {
  className?: string;
  blogList: Blog[];
}

const BlogListing = ({ className = "", blogList }: BlogListingProps) => {
  return (
    <ul
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center ${className}`}
    >
      {blogList?.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </ul>
  );
};

export default BlogListing;
