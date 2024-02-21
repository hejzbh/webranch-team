import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import {
  OUR_WORK_PRETITLE_TEXT,
  OUR_WORK_TITLE_TEXT,
  OUR_WORK_BTN_TEXT,
} from "@/app/constants/text";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Portfolio = dynamic(() => import("@/app/components/Portfolio"));
const Button = dynamic(() => import("@/app/components/ui/Button"));
// Interface
interface OurWorkProps {
  className?: string;
}

const OurWork = ({ className = "" }: OurWorkProps) => {
  return (
    <div className={`my-10 relative z-[1] py-20 ${className}`}>
      {/** Background image */}
      <BackgroundImage
        imageSRC={"/images/reflection-bg.webp"}
        loading="eager"
      />
      {/** Content inner */}
      <div className="container mx-auto text-center">
        {/** Heading */}
        <div className="text-center">
          <PreTitle text={OUR_WORK_PRETITLE_TEXT} className="mx-auto" />
          <Title
            size="medium"
            text={OUR_WORK_TITLE_TEXT}
            className="my-7 lg:max-w-[60%] mx-auto"
          />
        </div>
        {/** Portfolio */}
        <Portfolio className="my-20" />
        {/** BTN */}
        <Button className="mx-auto" uppercase text={OUR_WORK_BTN_TEXT} />
      </div>
    </div>
  );
};

export default OurWork;
