import React from "react";
// Next
import Image from "next/image";
import dynamic from "next/dynamic";
// TS
import { WebonifyBenefit } from "@/app/types/projects";
// Icons
import { MdCheckCircleOutline } from "react-icons/md";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
// Interface
interface WebonifyBenefitCardProps {
  className?: string;
  benefit: WebonifyBenefit;
  reversed?: boolean;
}
const WebonifyBenefitCard = ({
  className = "",
  benefit,
  reversed,
}: WebonifyBenefitCardProps) => {
  return (
    <div
      className={`flex justify-between items-center ${
        reversed ? "flex-row-reverse" : "flex-row"
      } ${className}`}
    >
      {/* Text */}
      <div className="basis-[48%]">
        <Title text={benefit.title} size="extraSmall" />
        <Description
          text={benefit.description as string}
          className="my-4 mb-6"
        />
        {/** Features */}
        <ul className="space-y-3">
          {benefit.features?.map((feature, idx) => (
            <li
              key={idx}
              className="transition-all flex items-center duration-300 ease-in-out hover:underline text-common-black/80 text-[17px] sm:text-[18px] md:text-[19px] drop-shadow-sm font-[500]"
            >
              <MdCheckCircleOutline className="text-[27px] text-common-green mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/** Image */}

      <div className=" basis-[48%]">
        <Image
          loading="lazy"
          src={benefit.imageSRC}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          width={500}
          height={700}
          className="rounded-3xl drop-shadow-xl w-full"
        />
      </div>
    </div>
  );
};

export default WebonifyBenefitCard;
