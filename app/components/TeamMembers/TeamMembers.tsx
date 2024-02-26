import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import { sectionSpacingClass } from "@/app/constants/classes";
import { teamMembersList } from "@/app/constants/teamMembers";
import {
  TEAM_MEMBERS_TITLE_TEXT,
  TEAM_MEMBERS_PRETITLE_TEXT,
} from "@/app/constants/text";
// Components
const TeamMember = dynamic(() => import("./TeamMember"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
// Interface
interface TeamMembersProps {
  className?: string;
}
const TeamMembers = ({ className = "" }: TeamMembersProps) => {
  return (
    <section
      className={`container mx-auto ${sectionSpacingClass} ${className}`}
    >
      {/** Heading */}
      <div className="mb-[4rem] md:mb-[6rem]">
        <PreTitle text={TEAM_MEMBERS_PRETITLE_TEXT} className="mx-auto" />
        <Title
          text={TEAM_MEMBERS_TITLE_TEXT}
          size="medium"
          className="my-7 text-center"
        />
      </div>
      {/** List */}
      <ul className="flex flex-wrap gap-20 justify-center items-center text-center">
        {teamMembersList?.map((member, idx) => (
          <li key={idx}>
            <TeamMember member={member} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamMembers;
