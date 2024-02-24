import React from "react";
// Next
import Link from "next/link";
// Constant
import { EMAIL, LOCATION, PHONE_NUMBERS } from "@/app/constants/contact";

// Icons
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdLocalPhone,
} from "react-icons/md";

// Interface
interface GetInTouchProps {
  className?: string;
}
const GetInTouch = ({ className = "" }: GetInTouchProps) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-white text-md mb-4 font-[500] text-[20px] xs:text-[21px] sm:text-[22px] lg:text-[23px]">
        Get In Touch
      </h3>
      <ul className="space-y-5">
        {/** Mail */}
        <li>
          <Link
            title={`Contact us via e-mail`}
            href={`mailto:${EMAIL}`}
            className="flex items-center group"
          >
            {/** Icon */}
            <span className="bg-common-purple p-2 rounded-full shadow-sm  mr-3">
              <MdOutlineEmail className=" text-white text-[22px] sm:text-[24px]" />
            </span>
            {/** Email */}
            <p className="text-white text-[17px]  transition-all duration-300 ease-in-out group-hover:text-common-purple">
              <span className="block text-[15px] text-white">E-Mail</span>
              {EMAIL}
            </p>
          </Link>
        </li>
        {/** PHONE NUMBER */}
        <li>
          <div
            title={`Contact us via phone number`}
            className="flex items-center group"
          >
            {/** Icon */}
            <span className="bg-common-purple p-2 rounded-full shadow-sm  mr-3">
              <MdLocalPhone className="text-white text-[22px] sm:text-[24px]" />
            </span>
            {/** Phone number */}
            <div className="text-white text-[17px]">
              <span className="block text-[15px] mb-[1px]">Phone number</span>
              {PHONE_NUMBERS?.map((phoneNumber, idx) => (
                <Link
                  key={idx}
                  title={`Contact ${phoneNumber}`}
                  href={`tel:${phoneNumber}`}
                  className="block  transition-all duration-300 ease-in-out hover:text-common-purple"
                >
                  {phoneNumber}
                </Link>
              ))}
            </div>
          </div>
        </li>
        {/** Location */}
        <li>
          <div
            title={`Contact us via phone number`}
            className="flex items-center group"
          >
            {/** Icon */}
            <span className="bg-common-purple p-2 rounded-full shadow-sm  mr-3">
              <MdOutlineLocationOn className="text-white text-[22px] sm:text-[24px]" />
            </span>
            {/** Phone number */}
            <p className="text-white text-[17px]">
              <span className="block text-[15px] mb-[1px]">Location</span>
              {LOCATION}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GetInTouch;
