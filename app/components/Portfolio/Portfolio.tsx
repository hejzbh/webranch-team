
import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import { projectsList } from "@/app/constants/projects";
// Components
const Project = dynamic(() => import("./Project"));
// Interface
interface PortfolioProps {
  className?: string;
}

const Portfolio = ({ className = "" }: PortfolioProps) => {
  return (
    <ul
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center ${className}`}
    >
      {projectsList?.map((project, idx) => (
        <li key={idx}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  );
};

export default Portfolio;
