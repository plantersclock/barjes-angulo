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
    <div className="flex flex-col items-center text-center px-2">
      <div className="relative w-16 h-16 lg:w-20 lg:h-20 aspect-square">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-sm font-semibold mt-4 tracking-wider">{title}</h3>
      <p className="mt-3 text-xs leading-relaxed mx-[5%] sm:mx-0">
        {description}
      </p>
    </div>
  );
};

export default CourseCard;
