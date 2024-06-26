import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import {
  OUR_WORK_PRETITLE_TEXT,
  OUR_WORK_TITLE_TEXT,
  OUR_WORK_BTN_TEXT,
} from "@/app/constants/text";
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Portfolio = dynamic(() => import("@/app/components/Portfolio"));
const Button = dynamic(() => import("@/app/components/ui/Button"));
const AnimatedPortfolio = dynamic(
  () => import("@/app/components/AnimatedPortfolio")
);
// Interface
interface OurWorkProps {
  className?: string;
  includeBG?: boolean;
  includeTitle?: boolean;
  includeBTN?: boolean;
  animatedPortfolio?: boolean;
}

const OurWork = ({
  className = "",
  includeTitle = true,
  includeBG = true,
  includeBTN = true,
  animatedPortfolio,
}: OurWorkProps) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className={`relative z-[1] py-20 pb-5 ${sectionSpacingClass} ${className}`}
    >
      {/** Background image */}
      {includeBG && !animatedPortfolio && (
        <BackgroundImage
          imageSRC={"/images/reflection-bg.webp"}
          loading="lazy"
        />
      )}
      {/** Content inner */}
      <div className="container mx-auto text-center">
        {/** Heading */}
        <div className="text-center">
          <PreTitle text={OUR_WORK_PRETITLE_TEXT} className="mx-auto" />
          {includeTitle && (
            <Title
              size="medium"
              text={OUR_WORK_TITLE_TEXT}
              className="my-7 lg:max-w-[60%] mx-auto"
            />
          )}
        </div>
        {/** Portfolio */}
        {animatedPortfolio ? (
          <>
            <div className="hidden md:block">
              {" "}
              <AnimatedPortfolio />
            </div>
            <div className="block md:hidden">
              {" "}
              <Portfolio className="my-20" />
            </div>
          </>
        ) : (
          <Portfolio className="my-20" />
        )}
        {/** BTN */}
        {includeBTN && (
          <Button className="mx-auto" uppercase text={OUR_WORK_BTN_TEXT} />
        )}
      </div>
    </section>
  );
};

export default OurWork;
