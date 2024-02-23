import React from "react";
// Interface & Types
import { BlogCategory } from "@/app/types/blog";
interface BlogCategoryProps {
  category: BlogCategory;
  className?: string;
}
const BlogCategory = ({ category, className = "" }: BlogCategoryProps) => {
  return (
    <div
      className={`bg-common-purple shadow-sm p-2 px-4 rounded-xl ${className}`}
    >
      <span className="text-white font-[500] text-[14px] xs:text-[15px]">
        {category.toUpperCase()}
      </span>
    </div>
  );
};

export default BlogCategory;
