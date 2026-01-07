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
}) => {
  return (
    <div
      className="relative w-full h-full text-white rounded-md aspect-auto md:aspect-square min-h-120 md:min-h-85.5 overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Rotated Side Text */}
      <div className="absolute w-full h-full  flex ">
        <div className="relative">
          <div className=" w-full h-full -rotate-90 rounded-md aspect-square">
            <h2 className="font-eloquia-display rotate-180 absolute z-175 -top-2 right-1 md:right-[1] md:-top-[1] lg:top-0 lg:right-2 leading-none w-full text-right text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold lg:-mx-[.3rem] lg:-my-[.45rem] 2xl:-my-[.55rem]">
              {sideText}
            </h2>
          </div>
        </div>
      </div>
      {/* Triangle in top-right corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[10vw] sm:border-l-[5vw] lg:border-l-[2vw] border-l-transparent border-t-[10vw] sm:border-t-[5vw] lg:border-t-[2vw] border-t-white"></div>

      {/* Content at bottom */}
      <div className="absolute w-full h-full z-50">
        <div className=" relative pt-[10%] lg:pt-[12%] xl:pt-[12%] px-[15%] sm:px-[15%] lg:px-[12%] 2xl:px-[15%] h-full w-full">
          <div className="flex items-center ">
            <div className="relative w-14 h-14  md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-18 2xl:h-18 aspect-square">
              <Image
                src={image}
                alt={titleText}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="flex justify-center leading-none font-semibold text-2xl md:text-base lg:text-lg 2xl:text-2xl pl-4">
              {titleText}
            </h2>
          </div>
          <p className="text-base md:text-xs lg:text-sm xl:text-base 2xl:text-lg leading-tight mt-6 md:mt-4 lg:mt-6 2xl:mt-8">
            {paragraph1}
            <br />
            <br />
            {paragraph2}
          </p>

          <Link
            href={linkHref}
            className="absolute bottom-[5%] right-[10%] md:text-sm lg:text-base  hover:underline flex items-center gap-2 font-eloquia-text font-light"
          >
            <span className="font-bold">→</span> {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PRBBlock;
