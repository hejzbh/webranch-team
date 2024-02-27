import React from "react";
// Next
import dynamic from "next/dynamic";
// Components
const CompanyShortInfo = dynamic(
  () => import("@/app/components/CompanyShortInfo")
);
const GetInTouch = dynamic(() => import("@/app/components/GetInTouch"));
const SocialMedia = dynamic(() => import("@/app/components/SocialMedia"));
const NavLinks = dynamic(() => import("@/app/components/NavLinks"));

// Interface
interface MainSidebarProps {
  className?: string;
}
const MainSidebar = ({ className = "" }: MainSidebarProps) => {
  return (
    <div
      className={`h-screen max-h-screen overflow-y-scroll rounded-l-3xl scrollbar-hide bg-sidebar p-5 sm:p-10 ${className}`}
    >
      {/** Info about company/team */}
      <CompanyShortInfo descriptionClassName="text-white" />
      {/** Links (ON MOBILE ONLY) */}
      <div className="border-t-2 border-white/30 block py-4 mt-10 lg:hidden">
        <NavLinks direction="column" />
      </div>
      {/** Get In Touch */}
      <div className="border-y-2 border-white/30 py-4 lg:my-10">
        <GetInTouch />
      </div>

      {/** Social media */}
      <SocialMedia className="mt-10" />
    </div>
  );
};

export default MainSidebar;
