import React from "react";
// Next
import Image from "next/image";
// Icons
import { SiUpwork } from "react-icons/si";
import { AiOutlineMessage } from "react-icons/ai";
// Interfaces & Types
import { Testimonial } from "@/app/types/testimonials";
// Interface
interface TestimonialCardProps {
  className?: string;
  testimonial: Testimonial;
  idx: number;
}

const apostropheColor = [
  "bg-common-green",
  "bg-common-purple",
  "bg-common-yellow",
  "bg-upwork",
];

let colorIdx = 0;

const TestimonialCard = ({
  className = "",
  testimonial,
}: TestimonialCardProps) => {
  // "" - Background color
  if (colorIdx === 2) {
    colorIdx = 0;
  } else {
    colorIdx++;
  }

  return (
    <div className={`${className} p-5 text-center`}>
      {/** Apostrophe */}
      <div>
        <div
          className={`rounded-full flex items-center justify-center mx-auto w-[40px] h-[40px] ${
            apostropheColor[testimonial.isUpworkClient ? 3 : colorIdx]
          }`}
        >
          {testimonial.isUpworkClient ? (
            <SiUpwork className="text-white text-[23px]" />
          ) : (
            <AiOutlineMessage className="text-white text-[23px]" />
          )}
        </div>
        {testimonial.isUpworkClient && (
          <p className="text-upwork text-[16px] font-semibold mt-1">
            UpWork Client
          </p>
        )}
      </div>
      {/* Message */}
      <p className="my-7 sm:my-10 text-text-body text-[17px] sm:text-[18px]">
        {testimonial.message}
      </p>
      {/** Author */}
      <div className="flex flex-col justify-center items-center">
        <Image
          loading="lazy"
          src={testimonial.authorProfileSRC}
          width={80}
          height={80}
          className="rounded-full drop-shadow-md"
          alt={testimonial.author}
        />
        <h3 className="text-common-black font-semibold text-[18px] sm:text-[19px] my-1 mt-3">
          {testimonial.author}
        </h3>
        <p className="text-[15px] text-text-body">{testimonial.authorRole}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
