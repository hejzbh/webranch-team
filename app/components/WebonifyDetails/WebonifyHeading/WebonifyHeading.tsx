import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
// Interface
interface WebonifyHeadingProps {
  className?: string;
  imageSRC: string;
}
const WebonifyHeading = ({
  className = "",
  imageSRC = "",
}: WebonifyHeadingProps) => {
  return (
    <section
      data-aos="fade-in"
      className={`flex justify-between w-full pb-10 flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 items-center container mx-auto ${className}`}
    >
      {/** Text */}
      <div className="w-full flex-1 text-center md:text-left">
        <Title size="small" text="What is Webonify ?" />
        <Description
          text={`Introducing <b>Webonify</b> - our unique, pre-built <b>e-commerce system</b>, fully tailored to your needs and ready for <b>immediate use</b>. (space) Crafted with <b>care</b> and expertise by Us, <b>Webonify</b> offers an intuitive experience for launching your <b>online store</b>. (space) With a rich array of features, including advanced inventory management, secure transactions, and efficient order tracking, <b>Webonify sets the standard in the e-commerce industry</b>. (space)  With <b>Webonify</b>, your <b>online store can be up and running right away</b>, allowing you to <b>quickly achieve your goals</b> and modernize your <b>business</b> for the digital era.`}
        />
      </div>
      {/** Thumbnail */}

      <Image
        loading="lazy"
        alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
        src={imageSRC}
        width={500}
        quality={100}
        className="rounded-3xl drop-shadow-xl w-full max-w-full lg:max-w-[400px] xl:max-w-[450px]"
        height={250}
      />
    </section>
  );
};

export default WebonifyHeading;
