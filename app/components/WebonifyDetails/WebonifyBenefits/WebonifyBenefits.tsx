import React from "react";
// Next
import dynamic from "next/dynamic";
// Const
import { sectionSpacingClass } from "@/app/constants/classes";
// TS
import { WebonifyBenefit as WebonifyBenefitType } from "@/app/types/projects";
// Components
const WebonifyBenefitCard = dynamic(() => import("../WebonifyBenefitCard"));
// Interface
interface WebonifyBenefitsProps {
  className?: string;
  benefits: WebonifyBenefitType[];
}
const WebonifyBenefits = ({
  className = "",
  benefits = [],
}: WebonifyBenefitsProps) => {
  return (
    <section className={`${sectionSpacingClass} ${className}`}>
      <ul className="space-y-20">
        {benefits?.map((benefit, idx) => (
          <li data-aos="fade-in" data-aos-delay={idx * 100} key={idx}>
            <WebonifyBenefitCard benefit={benefit} reversed={idx % 2 === 0} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WebonifyBenefits;
