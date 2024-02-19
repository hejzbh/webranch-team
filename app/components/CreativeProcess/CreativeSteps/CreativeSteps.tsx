import React from "react";
// Next
import Image from "next/image";
// Constant
import { creativeProcessSteps } from "@/app/constants/creativeProcessSteps";
// Interface
interface CreativeStepsProps {
  className?: string;
}
const CreativeSteps = ({ className = "" }: CreativeStepsProps) => {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-3 items-end gap-2 sm:gap-7 ${className}`}
    >
      {creativeProcessSteps?.map((step, idx, steps) => {
        return (
          <div
            className={`w-full relative pt-10 text-center  ${
              idx === steps.length - 1 && "col-span-3 lg:col-span-1"
            }`}
            key={idx}
          >
            {/** Name */}
            <h3
              className={`creative-step-text z-[1] cursor-pointer text-[40px] xs:text-[50px] sm:text-[85px] xl:text-[100px] 2xl:text-[120px] font-semibold text-transparent transition-all duration-300 ease-in-out group`}
            >
              {/** Image (display on hover) */}
              {step.imageSRC && (
                <Image
                  width={200}
                  height={150}
                  src={step.imageSRC}
                  alt={step.name}
                  className="z-[-1] absolute top-0 right-10 transition-all duration-300 ease-in-out opacity-0 translate-y-[-8%] group-hover:opacity-100 group-hover:translate-y-0 w-full max-w-[120px] sm:max-w-[200px]"
                />
              )}
              {step.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default CreativeSteps;
