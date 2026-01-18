"use client";

import Link from "next/link";
import React from "react";

interface KeynoteBlockProps {
  titleText: string;
  boldText: string;
  regularText: string;
  backgroundColor: string;
  linkText: string;
  linkHref: string;
  hoverColor?: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
}

const KeynoteBlock: React.FC<KeynoteBlockProps> = ({
  titleText,
  boldText,
  regularText,
  backgroundColor,
  linkText,
  linkHref,
  bullet1,
  bullet2,
  bullet3,
  hoverColor = "#011cbf",
}) => {
  return (
    <Link
      href={linkHref}
      className="relative w-full h-full text-white rounded-md  sm:aspect-9/7 lg:aspect-5/7 min-h-130 sm:min-h-0 max-h-125 sm:max-h-screen"
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
      {/* Content at bottom */}
      <div className="absolute w-full h-full z-50">
        <div className=" relative pt-[10%] lg:pt-[15%] xl:pt-[20%] px-[10%] sm:px-[15%] lg:px-[10%] xl:px-[12%] 2xl:px-[15%] h-full w-full">
          <h3 className="mb-4 leading-none text-header lg:text-3xl xl:text-4xl">
            {titleText}
          </h3>
          <p className="text-content ">
            <span className="font-semibold">{boldText}</span> {regularText}
          </p>
          <div className="relative sm:absolute left-0 top-4 sm:top-[50%] lg:top-[48%] xl:top-[47%] 2xl:top-[50%]  sm:px-[15%] lg:px-[10%] xl:px-[12%] 2xl:px-[15%]">
            <span className="font-semibold text-lg xl:text-xl">LEARN</span>
            <ul className="list-disc list-outside ml-5 mt-3 xl:mt-6 space-y-3 xl:space-y-4 text-content">
              <li>{bullet1}</li>
              <li>{bullet2}</li>
              <li>{bullet3}</li>
            </ul>
          </div>
          <Link
            href={linkHref}
            className="absolute bottom-[5%] right-[10%] text-lg lg:text-base  hover:font-bold flex items-center gap-2 font-eloquia-text "
          >
            <span className="font-medium">→</span> {linkText}
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default KeynoteBlock;
