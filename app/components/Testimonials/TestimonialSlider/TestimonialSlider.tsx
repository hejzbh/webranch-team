"use client";
import React, { useEffect, useState } from "react";
// Next
import dynamic from "next/dynamic";
// NPM
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// Constants
import { testimonialList } from "@/app/constants/testimonials";
// Components
const TestimonialCard = dynamic(
  () => import("@/app/components/Testimonials/TestimonialCard")
);
// Interface
interface TestimonialSliderProps {
  className?: string;
}

const animation = { duration: 30000, easing: (t: number) => t };

const TestimonialSlider = ({ className = "" }: TestimonialSliderProps) => {
  const [slides, setSlides] = useState<number>(4);

  const [sliderRef] = useKeenSlider({
    loop: true,

    renderMode: "performance",
    slides: {
      perView: slides,
      spacing: 120,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  function responsiveSlides() {
    // 1)
    const getSlides = () => {
      if (typeof window === "undefined") return 4;
      if (window?.innerWidth >= 1650) return 4;
      if (window?.innerWidth >= 1000) return 3;
      if (window?.innerWidth >= 768) return 2;
      return 1;
    };
    // 2)
    setSlides(getSlides());
  }

  useEffect(() => {
    window.addEventListener("resize", responsiveSlides);

    return () => window.removeEventListener("resize", responsiveSlides);
  }, []);

  return (
    <div className={`${className}`}>
      <div ref={sliderRef} className="keen-slider items-center">
        {[...testimonialList, ...testimonialList, ...testimonialList]?.map(
          (testimonial, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <TestimonialCard
                testimonial={testimonial}
                idx={idx}
                className=""
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
