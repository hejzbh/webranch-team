import React from "react";
// Image
import Image from "next/image";
// TS
import { TeamMemberType } from "@/app/types/teamMember";
import Link from "next/link";
// Interface
interface TeamMemberProps {
  className?: string;
  member: TeamMemberType;
}
const TeamMember = ({ className = "", member }: TeamMemberProps) => {
  return (
    <div className={`group ${className}`}>
      {/** Profile Photo  */}
      <Image
        loading="lazy"
        src={member.profilePhotoSRC}
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        width={300}
        height={500}
        className="rounded-full transition-all duration-500 ease-in-out drop-shadow-md group-hover:drop-shadow-2xl w-full min-w-[230px] max-w-[230px] sm:min-w-[300px] sm:max-w-[300px]"
      />
      {/** Details */}
      <div className=" shadow-md p-2 rounded-xl bg-common-purple text-white relative translate-y-[-30px]">
        <h3 className="font-[500]  drop-shadow-sm text-[20px]  xxs:text-[21px] sm:text-[23px]">
          {member.name}
        </h3>
        <p className="text-white/70  text-[16px] xxs:text-[17px] sm:text-[18px]">
          {member.role}
        </p>
      </div>
      {/** Social Media Links */}
      <ul className="flex flex-wrap gap-2 justify-center items-center">
        {member.socialMediaLinks.map((link, idx) => {
          const Icon = link.Icon;

          return (
            <li key={idx}>
              <Link
                className="rounded-xl shadow-md p-2 block transition-all duration-300 ease-in-out bg-common-purple/70 group hover:scale-105 hover:bg-common-green/60"
                href={link.href}
                title={link.name}
              >
                <Icon className=" text-[25px] drop-shadow-sm text-white" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamMember;
