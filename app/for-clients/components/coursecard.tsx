import Image, { StaticImageData } from "next/image";
import React from "react";

interface CourseCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-2 relative">
      <div className="relative w-16 h-16 lg:w-20 lg:h-20 aspect-square">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <h3 className="font-eloquia-text text-lg font-semibold mt-4 ">{title}</h3>
      <p className="mt-3 text-base leading-snug mx-[5%] sm:mx-0 sm:text-left">
        {description}
      </p>
    </div>
  );
};

export default CourseCard;
