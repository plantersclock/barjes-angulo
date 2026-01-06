"use client";

import Link from "next/link";
import React from "react";

interface PillarCardProps {
  boldText: string;
  regularText: string;
  sideText: string;
  backgroundColor: string;
  linkText: string;
  linkHref: string;
  hoverColor?: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  boldText,
  regularText,
  sideText,
  backgroundColor,
  linkText,
  linkHref,
  hoverColor = "#011cbf",
}) => {
  return (
    <div
      className="relative w-full h-full text-white rounded-md transition-all duration-200"
      style={{ backgroundColor }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
      }}
    >
      {/* Triangle in top-right corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[10vw] sm:border-l-[5vw] lg:border-l-[2vw] border-l-transparent border-t-[10vw] sm:border-t-[5vw] lg:border-t-[2vw] border-t-white"></div>

      {/* Rotated Side Text */}
      <div className="absolute w-full h-full z-20 -rotate-90 rounded-md overflow-hidden">
        <h2 className="font-eloquia-display rotate-180 absolute leading-none w-full text-right  text-5xl 2xl:text-6xl font-semibold  p-0 -mx-[.3rem] -my-[.45rem] 2xl:-my-[.55rem]">
          {sideText}
        </h2>
      </div>

      {/* Content at bottom */}
      <div className="absolute w-full h-full z-50">
        <div className=" relative h-full w-full">
          <p className=" pt-[30%] pl-[30%] sm:pl-[35%] pr-[10%] text-base sm:text-xs md:text-sm lg:text-xs 2xl:text-sm  mb-4 leading-tight ">
            <span className="font-bold">{boldText}</span> {regularText}
          </p>
          <Link
            href={linkHref}
            className="absolute bottom-[5%] right-[10%] text-sm sm:text-xs 2xl:text-sm font-light hover:underline flex items-center gap-2 font-eloquia-text"
          >
            <span className="font-medium">→</span> {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
