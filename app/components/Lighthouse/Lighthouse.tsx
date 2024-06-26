import React from "react";
// Next
import Image from "next/image";
import dynamic from "next/dynamic";
// Constants
import {
  LIGHTHOUSE_PRETITLE_TEXT,
  LIGHTHOUSE_TITLE_TEXT,
  LIGHTHOUSE_DESCRIPTION_TEXT,
} from "@/app/constants/text";
import { lighthouseList } from "@/app/constants/lighthouse";
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
// Interface
interface LighthouseProps {
  className?: string;
}
const Lighthouse = ({ className = "" }: LighthouseProps) => {
  return (
    <section
      className={`container mx-auto overflow-hidden ${sectionSpacingClass} ${className}`}
    >
      {/** Heading */}
      <PreTitle
        text={LIGHTHOUSE_PRETITLE_TEXT}
        className="mx-auto"
        animation="fade-in"
      />
      {/** Content */}{" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-10 lg:mt-[3rem]">
        {/** Image */}
        <Image
          data-aos="fade-right"
          loading="lazy"
          src={"/images/lighthouse-2.webp"}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          width={500}
          height={500}
          className="order-2 mt-10 lg:mt-0 lg:order-1 mx-auto"
        />
        {/** Conntent */}
        <div
          data-aos="fade-left"
          className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left items-center"
        >
          {/** Title & Description */}
          <Title text={LIGHTHOUSE_TITLE_TEXT} size="small" />
          <Description
            text={LIGHTHOUSE_DESCRIPTION_TEXT}
            className="my-3 mb-6"
          />
          {/** Lighthouse stats */}
          <ul className="space-y-5 text-left mt-5 lg:mt-0 sm:max-w-[80%] mx-auto lg:max-w-full lg:mx-[unset]">
            {lighthouseList?.map((item, idx) => {
              const Icon = item?.Icon;

              return (
                <li
                  data-aos="fade-in"
                  data-aos-delay={idx * 190}
                  className="flex items-center space-y-2 sm:space-y-0 sm:space-x-5 justify-center text-center sm:text-left lg:justify-start flex-col sm:flex-row"
                  key={idx}
                >
                  {" "}
                  <Icon
                    className={`basis-[10%] text-[40px] sm:text-[45px] ${item.colorClass}`}
                  />
                  <div className="basis-[70%]">
                    <h3 className="text-[20px] font-[500] mb-1">{item.name}</h3>
                    <p className="text-text-body">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lighthouse;
