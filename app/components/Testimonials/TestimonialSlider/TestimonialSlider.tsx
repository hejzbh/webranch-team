import React from "react";
// Interface
interface TestimonialSliderProps {
  className?: string;
}
const TestimonialSlider = ({ className = "" }: TestimonialSliderProps) => {
  return <div className={`${className}`}>TestimonialSlider</div>;
};

export default TestimonialSlider;
