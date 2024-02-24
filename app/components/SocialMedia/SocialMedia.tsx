import React from "react";
// Next
import Link from "next/link";
// Constants
import { socialMediaLinks } from "@/app/constants/socialMediaLinks";
// TS
import { SocialMediaLink } from "@/app/types/socialMedia";
// Interface
interface SocialMediaProps {
  className?: string;
}
const SocialMedia = ({ className = "" }: SocialMediaProps) => {
  const splittedLinks: [SocialMediaLink][] = socialMediaLinks.reduce(
    (acc: any, val) => {
      val.name.includes("Amel") ? acc[0].push(val) : acc[1].push(val);

      return acc;
    },
    [[], []]
  );

  return (
    <ul className={`${className} space-y-5`}>
      {/** Amel */}
      <li className="">
        <div>
          {/** Name */}
          <p className="text-[18.5px] text-white drop-shadow-sm font-[500]">{`Amel's`}</p>
          {/** Links */}
          <ul className="flex items-center space-x-3 mt-1">
            {splittedLinks[0]?.map((link) => {
              const Icon = link.Icon;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.name}
                    className="rounded-xl shadow-md p-2 bg-white block transition-all duration-300 ease-in-out hover:bg-common-green group"
                  >
                    <Icon className="text-common-purple text-[25px] drop-shadow-sm group-hover:text-white" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
      {/** Hazim */}
      <li className="">
        <div>
          {/** Name */}
          <p className="text-[18px] text-white drop-shadow-sm font-[500]">{`Hazim's`}</p>
          {/** Links */}
          <ul className="flex items-center space-x-3 mt-1">
            {splittedLinks[1]?.map((link) => {
              const Icon = link.Icon;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.name}
                    className="rounded-xl shadow-md p-2 bg-white block transition-all duration-300 ease-in-out hover:bg-common-green group"
                  >
                    <Icon className="text-common-purple text-[25px] drop-shadow-sm group-hover:text-white" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default SocialMedia;
