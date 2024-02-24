import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const CompanyShortInfo = dynamic(
  () => import("@/app/components/CompanyShortInfo")
);
const GetInTouch = dynamic(() => import("@/app/components/GetInTouch"));
const SocialMedia = dynamic(() => import("@/app/components/SocialMedia"));
// Interface
interface MainSidebarProps {
  className?: string;
}
const MainSidebar = ({ className = "" }: MainSidebarProps) => {
  return (
    <div
      className={`h-screen overflow-y-scroll rounded-l-3xl scrollbar-hide bg-sidebar p-5 sm:p-10 ${className}`}
    >
      <CompanyShortInfo descriptionClassName="text-white" />
      <div className="py-4 border-y-2 border-white/30 my-10">
        <GetInTouch />
      </div>
      <SocialMedia className="mt-10" />
    </div>
  );
};

export default MainSidebar;
