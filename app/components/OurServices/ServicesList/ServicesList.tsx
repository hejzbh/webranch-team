import React from "react";
// Next
import Image from "next/image";
// Constant
import { services } from "@/app/constants/services";
// Interface
interface ServicesListProps {
  className?: string;
}

const ServicesList = ({ className = "" }: ServicesListProps) => {
  return (
    <ul
      className={`grid services-list-sm lg:grid-cols-services-list-xl justify-center gap-10 gap-y-20 ${className}`}
    >
      {services?.map((service, idx) => (
        <li className="text-center group" key={idx}>
          {/** Icon */}
          <Image
            loading="lazy"
            src={service.imageSRC}
            alt={service.name}
            width={60}
            height={60}
            className="mx-auto transition-all duration-300 ease-in-out group-hover:translate-y-[-15%]"
          />
          {/** Name */}
          <h4 className="text-common-black my-3 font-semibold text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px]">
            {service.name}
          </h4>
          {/** Description */}
          <p className="text-common-black-2  text-[15px] sm:text-[16px] md:text-[17px]">
            {service.description}
          </p>
          {/** Read More ? */}
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
