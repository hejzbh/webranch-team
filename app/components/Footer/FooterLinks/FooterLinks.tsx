import React from "react";
// Next
import dynamic from "next/dynamic";
import Link from "next/link";
// CONSTANT
import { footerLinksList } from "@/app/constants/footerLinks";
import { EMAIL, LOCATION } from "@/app/constants/contact";
// Icons
import {
  MdKeyboardArrowRight,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
// Components
const Logo = dynamic(() => import("@/app/components/ui/Logo"));
// Interface
interface FooterLinksProps {
  className?: string;
}
const FooterLinks = ({ className = "" }: FooterLinksProps) => {
  return (
    <ul
      className={`grid gap-10 sm:gap-6  grid-cols-1 sm:grid-cols-2 justify-center items-center lg:grid-cols-4 ${className}`}
    >
      {/** Agency Details */}
      <li className="flex flex-col justify-center items-center">
        <Logo className="min-w-[150px]" />
        <Link
          className="text-[17px] font-[500] transition-all duration-300 ease-in-out text-nav-link-hover flex items-center"
          title="Contact us via email"
          href={`mailto:${EMAIL}`}
        >
          <MdOutlineEmail className="text-[20px] mr-1" /> {EMAIL}
        </Link>
        <p className="text-[17px] mt-1 font-[500] transition-all duration-300 ease-in-out text-text-body flex items-center hover:text-nav-link-hover">
          <MdOutlineLocationOn className="text-[20px] mr-1" /> {LOCATION}
        </p>
      </li>
      {/** Links */}
      {footerLinksList?.map(({ links, listTitle }, idx) => {
        return (
          <li className="flex flex-col justify-center items-center" key={idx}>
            {/** List Title */}
            <h3 className="text-common-black font-semibold text-[22px] md:text-[23px] mb-3 ml-1">
              {listTitle}
            </h3>
            {/** Links */}
            <ul className="space-y-2">
              {links?.map((link, idx) => (
                <li key={idx}>
                  <Link
                    className="text-common-black/80 flex items-center font-[500] transition-all duration-300 ease-in-out text-[16px] hover:text-nav-link-hover"
                    href={link.href}
                    title={link.name}
                  >
                    <MdKeyboardArrowRight className="mr-1 text-[18px]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
