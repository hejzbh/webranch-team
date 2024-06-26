import React from "react";
// Next
import dynamic from "next/dynamic";
// Constants
import {
  TESTIMONIALS_TITLE_TEXT,
  TESTIMONIALS_PRETITLE_TEXT,
} from "@/app/constants/text";
import { sectionSpacingClass } from "@/app/constants/classes";
// Components
const PreTitle = dynamic(() => import("@/app/components/ui/PreTitle"));
const Title = dynamic(() => import("@/app/components/ui/Title"));
const TestimonialSlider = dynamic(() => import("./TestimonialSlider"));
// Interface
interface TestimonialsProps {
  className?: string;
}
const Testimonials = ({ className = "" }: TestimonialsProps) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className={`${sectionSpacingClass} ${className}`}
    >
      {/** Heading */}
      <div className="container mx-auto text-center">
        <PreTitle text={TESTIMONIALS_PRETITLE_TEXT} className="mx-auto" />
        <Title text={TESTIMONIALS_TITLE_TEXT} size="medium" className="mt-7" />
      </div>
      {/** Slider */}
      <TestimonialSlider className="mt-10" />
    </section>
  );
};

export default Testimonials;
