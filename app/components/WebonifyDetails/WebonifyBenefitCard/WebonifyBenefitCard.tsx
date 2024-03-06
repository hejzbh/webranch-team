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
      className={`flex justify-between items-center flex-col-reverse ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${className}`}
    >
      {/* Text */}
      <div className="lg:basis-[48%] text-center md:text-left">
        <Title text={benefit.title} size="extraSmall" />
        <Description
          text={benefit.description as string}
          className="my-4 mb-6"
        />
        {/** Features */}
        <ul className="space-y-3 text-left ">
          {benefit.features?.map((feature, idx) => (
            <li
              key={idx}
              className="transition-all flex items-center  duration-300 ease-in-out hover:underline text-common-black/80 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] drop-shadow-sm font-[500]"
            >
              <MdCheckCircleOutline className="text-[23px] sm:text-[27px] text-common-green mr-3" />
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/** Image */}

      <div className=" lg:basis-[48%] mb-10 lg:mb-0">
        <Image
          loading="lazy"
          src={benefit.imageSRC}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          width={500}
          height={700}
          className="rounded-3xl drop-shadow-xl max-w-[90%] lg:max-w-full mx-auto w-full"
        />
      </div>
    </div>
  );
};

export default WebonifyBenefitCard;
