import React from "react";
// Next
import Image from "next/image";
import Link from "next/link";
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
        <li
          data-aos="fade-in"
          data-aos-delay={idx * 100}
          className="text-center group"
          key={idx}
        >
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
          <h3 className="text-common-black my-3 font-semibold text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px]">
            {service.name}
          </h3>
          {/** Description */}
          <p className="text-common-black-2  text-[15px] sm:text-[16px] md:text-[17px]">
            {service.shortDescription}
          </p>
          {/** Read More ? */}
          {service.slug && (
            <Link
              title="Read more"
              className="mt-3 p-1 block text-center text-[15px] sm:text-[16px] md:text-[17px] font-[500] drop-shadow-md text-common-black-2 hover:text-common-purple underline transition-all duration-500 ease-in-out tracking-wide"
              href={`/services/${service.slug}`}
            >
              Read More
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
