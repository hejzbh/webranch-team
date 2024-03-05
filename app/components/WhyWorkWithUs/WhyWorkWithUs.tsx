import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import {
  WHY_WORK_WITH_US_DESCRIPTION_TEXT,
  WHY_WORK_WITH_US_TITLE_TEXT,
} from "@/app/constants/text";
// Components
const TextWithImage = dynamic(() => import("@/app/components/TextWithImage"));
// Interface
interface WhyWorkWithUsProps {
  className?: string;
  animation?: string;
  animationDuration?: number;
  animationDelay?: number;
}

const WhyWorkWithUs = ({
  className = "",
  animation = "",
  animationDuration = 300,
  animationDelay = 0,
}: WhyWorkWithUsProps) => {
  return (
    <section
      data-aos={animation}
      data-aos-duration={animationDuration}
      data-aos-delay={animationDelay}
      className={className}
    >
      <TextWithImage
        imageSRC="/images/why-us.png"
        title={WHY_WORK_WITH_US_TITLE_TEXT}
        description={WHY_WORK_WITH_US_DESCRIPTION_TEXT}
      />
    </section>
  );
};

export default WhyWorkWithUs;
