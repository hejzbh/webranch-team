import React from "react";
// Icons
import { FaCheck } from "react-icons/fa6";
// Interface
interface ProjectFeaturesProps {
  className?: string;
  features: string[];
}
const ProjectFeatures = ({
  className = "",
  features = [],
}: ProjectFeaturesProps) => {
  return (
    <ul className={`space-y-4 ${className}`}>
      {/** Features listing */}
      {features?.map((feature, idx) => (
        <li
          className="flex items-center text-[18px] font-[500] drop-shadow-sm"
          key={idx}
        >
          <FaCheck className="drop-shadow-md text-common-green text-[22px] sm:text-[24px] md:text-[27px] mr-2" />
          {feature}
        </li>
      ))}
      {/** ... */}
      <li className="flex items-center text-[18px] font-[500] drop-shadow-sm">
        <FaCheck className="drop-shadow-md text-common-green text-[22px] sm:text-[24px] md:text-[27px] mr-2" />
        & more...
      </li>
    </ul>
  );
};

export default ProjectFeatures;
