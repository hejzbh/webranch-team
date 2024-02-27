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
}

const WhyWorkWithUs = ({ className = "" }: WhyWorkWithUsProps) => {
  return (
    <div className={className}>
      <TextWithImage
        imageSRC="/images/why-us.png"
        title={WHY_WORK_WITH_US_TITLE_TEXT}
        description={WHY_WORK_WITH_US_DESCRIPTION_TEXT}
      />
    </div>
  );
};

export default WhyWorkWithUs;
