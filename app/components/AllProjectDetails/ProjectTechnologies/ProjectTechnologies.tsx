import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// TS
import { Technology } from "@/app/types/projects";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
// Interface
interface ProjectTechnologiesProps {
  className?: string;
  technologies: Technology[];
}
const ProjectTechnologies = ({
  className = "",
  technologies = [],
}: ProjectTechnologiesProps) => {
  return (
    <section data-aos="fade-in" className={`${className}`}>
      {/** Title */}
      <Title size="small" text="Built using" className="text-center" />
      {/** Technologies listing */}
      <ul className="mt-8 flex items-center gap-5 justify-center flex-wrap">
        {technologies?.map((technology, idx) => (
          <li title={technology} key={idx}>
            <Image
              src={`/images/technologies/${technology}.webp`}
              alt={technology}
              width={90}
              height={90}
              className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectTechnologies;
