import React from "react";
// Next
import dynamic from "next/dynamic";
// TS
import { Service } from "@/app/types/services";
// Components
const Title = dynamic(() => import("@/app/components/ui/Title"));
const Description = dynamic(() => import("@/app/components/ui/Description"));
// Interface
interface AllServiceDetailsProps {
  className?: string;
  service: Service;
}
const AllServiceDetails = ({
  service,
  className = "",
}: AllServiceDetailsProps) => {
  return (
    <section className={`container mx-auto ${className}`}>
      {/** Description */}
      <div className="text-center md:text-left">
        <Title text="Details" size="small" animation="fade-in" />
        <Description
          text={service.longDescription as string}
          animation="fade-in"
        />
      </div>
    </section>
  );
};

export default AllServiceDetails;
