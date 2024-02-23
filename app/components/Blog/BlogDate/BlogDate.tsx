import React from "react";
// Interface
interface BlogDateProps {
  className?: string;
  date: Date;
}
const BlogDate = ({ className = "", date }: BlogDateProps) => {
  return (
    <div
      className={`bg-common-green shadow-sm p-2 px-4 rounded-xl ${className}`}
    >
      <span className="text-white font-[500] text-[14px] xs:text-[15px]">
        {date.toLocaleDateString()}
      </span>
    </div>
  );
};

export default BlogDate;
