"use client";

import React from "react";

interface PillarCardProps {
  boldText: string;
  regularText: string;
  sideText: string;
  backgroundColor: string;
  linkText: string;

  hoverColor?: string;
}

const PillarCard: React.FC<PillarCardProps> = ({
  boldText,
  regularText,
  sideText,
  backgroundColor,
  linkText,

  hoverColor = "#011cbf",
}) => {
  return (
    <div
      className="relative w-full h-full text-white rounded-md transition-all duration-200"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
        backgroundColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
      }}
    >
      {/* Rotated Side Text */}
      <div className="absolute w-full h-full z-20  rounded-md overflow-hidden">
        <div className="h-full aspect-square -rotate-90">
          <span className="font-eloquia-display rotate-180 absolute leading-none w-full text-right text-4xl sm:text-5xl 2xl:text-6xl font-semibold  p-0 -mx-[.3rem] -my-[.45rem] 2xl:-my-[.55rem]">
            {sideText}
          </span>
        </div>
      </div>

      {/* Content at bottom */}
      <div className="relative w-full h-full z-50">
        <div className=" relative h-full w-full">
          <p className=" py-[15%] xl:pt-[20%] pl-[30%] sm:pl-[25%] pr-[10%] text-base sm:text-lg lg:text-sm xl:text-base 2xl:text-lg  mb-4 leading-tight ">
            <span className="font-bold">{boldText}</span> {regularText}
          </p>
          <div className="absolute bottom-[5%] right-[10%] text-sm sm:text-lg lg:text-sm xl:text-base 2xl:text-lg hover:font-bold flex items-center gap-2 font-eloquia-text">
            <span className="font-medium">→</span> {linkText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
