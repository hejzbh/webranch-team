import React from "react";
// Next
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
// TS
import { Blog } from "@/app/types/blog";
// Icons
import { FaArrowRightLong } from "react-icons/fa6";
// Components
const BlogCategory = dynamic(
  () => import("@/app/components/Blog/BlogCategory")
);
const BlogDate = dynamic(() => import("@/app/components/Blog/BlogDate"));
// Interface
interface BlogCardProps {
  className?: string;
  blog: Blog;
}
const BlogCard = ({ className = "", blog }: BlogCardProps) => {
  return (
    <div className={`group ${className}`}>
      {/** todo: When comes real blog data we should provide /blog/id in href */}
      <Link
        className="block relative h-full min-h-[22em] sm:min-h-[25em] z-[1] bg-white group overflow-hidden border-[15px] border-white rounded-[20px] shadow-md"
        title={blog.title}
        href={`#`}
      >
        {/** Thumbnail */}
        <div className="overflow-hidden rounded-[20px]">
          <Image
            loading="lazy"
            src={blog.thumbnail}
            alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
            width={500}
            height={500}
            className="w-full rounded-[20px] shadow-md object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        {/** Details */}
        <div className="mt-5 text-center flex flex-col justify-center items-center sm:justify-start sm:items-start sm:text-left">
          {/** Category & Date */}
          <div className="flex items-center space-x-3">
            <BlogCategory category={blog.category} />
            <BlogDate date={blog.createdAt} />
          </div>
          {/** Title */}
          <h3 className="text-common-black text-[19px] xxs:text-[20px]  xs:text-[22px] md:text-[24px] xl:text-[27px] font-[500] my-5">
            {blog.title}
          </h3>
          {/** Read more */}
          {/** todo: When comes real blog data we should provide /blog/id in href */}
          <Link
            title={`See details`}
            className="text-text-body font-semibold uppercase text-[16px] xs:text-[17px] tracking-wide flex items-center transition-all duration-300 ease-in-out group-hover:text-nav-link-hover"
            href="#"
          >
            View More
            <FaArrowRightLong className="ml-2" />
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
