import React from "react";
// TS
import { ProjectSummaryCard } from "@/app/types/projects";
import Link from "next/link";
// Interface
interface ProjectSummaryProps {
  className?: string;
  projectSummaryCards: ProjectSummaryCard[];
}
const ProjectSummary = ({
  className = "",
  projectSummaryCards = [],
}: ProjectSummaryProps) => {
  {
    /**todo:grid auto */
  }
  return (
    <ul
      className={`rounded-2xl p-5 bg-common-purple shadow-2xl grid gap-y-7 sm:grid-cols-2 md:grid-cols-4 justify-center items-center ${className}`}
    >
      {projectSummaryCards?.map((card, idx) => (
        <li className="justify-center flex flex-col items-center" key={idx}>
          {/** Title */}
          <h3 className=" text-white font-[500] text-[18px] sm:text-[19px] lg:text-[20px] 2xl:text-[23px]">
            {card.title}
          </h3>
          {/** Value */}
          {card.href ? (
            <Link
              title={card.title}
              href={card.href}
              className="text-[#A0F0FF] text-[17px]  2xl:text-[18px]"
            >
              {card.value}
            </Link>
          ) : (
            <p className="text-[#A0F0FF] text-[17px]  2xl:text-[18px]">
              {card.value}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectSummary;
