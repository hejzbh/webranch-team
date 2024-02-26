import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Constants
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const BackgroundImage = dynamic(
  () => import("@/app/components/ui/BackgroundImage")
);
const Title = dynamic(() => import("@/app/components/ui/Title"));
const GetInTouch = dynamic(() => import("@/app/components/GetInTouch"));
const ContactForm = dynamic(() => import("@/app/components/Forms/ContactForm"));
//  Interface
interface ContactUsProps {
  className?: string;
}
const ContactUs = ({ className = "" }: ContactUsProps) => {
  return (
    <section
      className={`relative z-[1]  py-20 pb-[13rem]  ${sectionSpacingClass} ${className}`}
    >
      {/** Background image */}
      <BackgroundImage
        imageSRC={"/images/reflection-bg.webp"}
        loading="eager"
      />
      {/** Content box */}
      <div
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0 48px 100px 0",
        }}
        className="rounded-[35px] relative z-[5] p-10 md:p-20  container mx-auto grid lg:grid-cols-2 gap-10"
      >
        {/** Text */}
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <Title text="Contact Us" size="small" />
          <GetInTouch
            removeTitle
            className="mt-10"
            valueClassName="!text-common-purple"
            labelClassName="!text-black"
          />
        </div>
        {/** Form */}
        <div className="mt-10 lg:mt-0">
          <ContactForm />
        </div>
      </div>
      {/** Image */}
      <Image
        src="/images/rocket.webp"
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        loading="lazy"
        width={600}
        className="absolute bottom-0 right-0  z-[-1] opacity-90 "
        height={250}
      />
    </section>
  );
};

export default ContactUs;
