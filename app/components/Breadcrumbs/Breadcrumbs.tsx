import React from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { BreadcrumbType } from "@/app/types/breadcrumb";
// Components
const Breadcrumb = dynamic(() => import("./Breadcrumb"));
// Interface
interface BreadcrumbsProps {
  className?: string;
  breadcrumbs: BreadcrumbType[];
}
const Breadcrumbs = ({
  className = "",
  breadcrumbs = [],
}: BreadcrumbsProps) => {
  return (
    <ul className={`flex items-center justify-center space-x-2 ${className}`}>
      {breadcrumbs?.map((breadcrumb, idx) => (
        <li key={idx}>
          <Breadcrumb breadcrumb={breadcrumb} />
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
