"use client";
import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import { projectsList } from "@/app/constants/projects";
// Components
const Project = dynamic(() => import("@/app/components/Portfolio/Project"));
const MacbookScroll = dynamic(
  () => import("@/app/components/ui/MacbookScroll")
);
// Interface
interface AnimatedPortfolioProps {
  className?: string;
}
const AnimatedPortfolio = ({ className = "" }: AnimatedPortfolioProps) => {
  return (
    <section className={`overflow-hidden w-full relative mb-7 ${className}`}>
      {projectsList?.map((project, i) => (
        <div key={project.slug} className="relative sm:bg-white">
          <MacbookScroll src={project.smallThumbnailSRC} showGradient={true}>
            {" "}
            <Project project={project} className="shadow-2xl" />
          </MacbookScroll>
        </div>
      ))}
    </section>
  );
};

export default AnimatedPortfolio;
