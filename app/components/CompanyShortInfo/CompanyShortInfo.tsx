import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const Logo = dynamic(() => import("@/app/components/ui/Logo"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
// Interface
interface CompanyShortInfoProps {
  className?: string;
  descriptionClassName?: string;
}
const CompanyShortInfo = ({
  className = "",
  descriptionClassName = "",
}: CompanyShortInfoProps) => {
  return (
    <div className={`${className}`}>
      <Logo className="min-w-[150px]" />
      <Description
        className={`${descriptionClassName}`}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum quisquam corporis ipsa alias vel."
      />
    </div>
  );
};

export default CompanyShortInfo;
