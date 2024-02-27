import React from "react";
// Next
import Link from "next/link";
// TS
import { BreadcrumbType } from "@/app/types/breadcrumb";
// Icons
import { IoIosArrowForward } from "react-icons/io";
// Interface
interface BreadcrumbProps {
  className?: string;
  breadcrumb: BreadcrumbType;
}
const Breadcrumb = ({ className = "", breadcrumb }: BreadcrumbProps) => {
  return (
    <Link
      title={breadcrumb.description}
      href={breadcrumb.href}
      className={`uppercase ${
        breadcrumb.isActive ? "text-common-purple font-[500]" : "text-text-body"
      } text-[15px] sm:text-[16px] md:text-[17px] flex items-center hover:text-common-purple ${className}`}
    >
      {breadcrumb.title}{" "}
      {!breadcrumb.isActive && (
        <IoIosArrowForward
          className={`text-text-body text-[17px] ml-2 mx-1 mb-[1px] !p-0 !min-h-0`}
        />
      )}
    </Link>
  );
};

export default Breadcrumb;
