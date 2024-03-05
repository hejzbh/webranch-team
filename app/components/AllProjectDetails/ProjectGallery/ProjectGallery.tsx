import React from "react";
// Next
import Image from "next/image";
// Constants
import { sectionSpacingClass } from "@/app/constants/classes";
// Interface
interface ProjectGalleryProps {
  className?: string;
  images: string[];
}
const ProjectGallery = ({
  className = "",
  images = [],
}: ProjectGalleryProps) => {
  return (
    <section
      data-aos="fade-in"
      className={`${className} grid md:grid-cols-2 gap-10 ${sectionSpacingClass}`}
    >
      {/** First (Mobile top)  */}
      <div className="grid-cols-1 gap-10 grid">
        {images?.slice(0, 2)?.map((img, key) => (
          <div
            data-aos="fade-in"
            key={key}
            className="rounded-3xl overflow-hidden group"
          >
            <Image
              loading="lazy"
              src={img}
              alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
              width={900}
              height={700}
              className="drop-shadow-xl rounded-3xl transition-all duration-700 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
      {/** Second (Mobile bottom) */}
      <div className="rounded-3xl overflow-hidden group">
        <Image
          loading="lazy"
          src={images[images.length - 1]}
          alt={process.env.NEXT_PUBLIC_ALT_IMAGE as string}
          width={900}
          height={700}
          className="drop-shadow-xl rounded-3xl transition-all duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </section>
  );
};

export default ProjectGallery;
