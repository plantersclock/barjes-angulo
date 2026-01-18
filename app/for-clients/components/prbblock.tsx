"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PRBBlockProps {
  titleText: string;
  image: StaticImageData;
  paragraph1: string;
  paragraph2: string;
  backgroundColor: string;
  linkText: string;
  linkHref: string;
  hoverColor?: string;
  sideText: string;
}

const PRBBlock: React.FC<PRBBlockProps> = ({
  titleText,
  image,
  paragraph1,
  paragraph2,
  backgroundColor,
  linkText,
  linkHref,
  sideText,
  hoverColor = "#011cbf",
}) => {
  return (
    <Link
      href={linkHref}
      className="relative w-full h-full text-white rounded-md aspect-auto lg:aspect-square min-h-120 md:min-h-85.5 overflow-hidden "
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
      <div className="absolute w-full h-full flex">
        <div className="relative w-full h-full">
          <div className=" w-full h-full -rotate-90 rounded-md aspect-square">
            <span className="font-eloquia-display rotate-180 absolute z-175 -top-2 right-1 md:right-[1] md:-top-[1] lg:top-0 lg:right-2 leading-none w-full text-right text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold lg:-mx-[.3rem] lg:-my-[.45rem] 2xl:-my-[.55rem]">
              {sideText}
            </span>
          </div>
        </div>
      </div>

      {/* Content at bottom */}
      <div className="absolute w-full h-full z-50">
        <div className=" relative pt-[10%] lg:pt-[12%] xl:pt-[12%] px-[15%] sm:px-[15%] lg:px-[12%] 2xl:px-[15%] h-full w-full ">
          <div className="flex items-center ">
            <div className="relative w-14 h-14  md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-18 2xl:h-18 aspect-square">
              <Image
                src={image}
                alt={titleText}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="flex justify-center leading-none font-semibold text-2xl md:text-base lg:text-lg 2xl:text-2xl pl-4">
              {titleText}
            </h3>
          </div>
          <p className="text-content mt-6 md:mt-4 lg:mt-6 2xl:mt-8">
            {paragraph1}
            <br />
            <br />
            {paragraph2}
          </p>

          <div className="absolute bottom-[5%] right-[10%] md:text-sm lg:text-base  hover:font-bold flex items-center gap-2 font-eloquia-text font-light">
            <span className="font-bold">→</span> {linkText}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PRBBlock;
