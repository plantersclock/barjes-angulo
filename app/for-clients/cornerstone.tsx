import Image from "next/image";
import React from "react";
import cornerstone from "../images/cornerstone-logo.png";
import Link from "next/link";

const Cornerstone = () => {
  return (
    <div className="px-[4%] xl:px-[10%] flex flex-col md:flex-row justify-between items-center py-8 md:py-12 relative bg-linear-to-r from-[#F9F9F9] from-60% to-white">
      <div className="h-22 lg:h-33 -ml-6 aspect-475/135">
        <Image
          src={cornerstone}
          alt="Cornerstone Logo"
          height={135}
          width={475}
          className="object-cover w-full h-full scale-80"
          quality={100}
          priority
        />
      </div>
      <div>
        <p className="py-4 md:py-0 text-content max-w-sm xl:max-w-md">
          <span className="font-semibold">
            Barjes is a Cornerstone Planning Group advisor,
          </span>
          {` operating independently while supported by a fiduciary, advisor-owned RIA.`}
        </p>
      </div>

      <div className="absolute w-full h-full z-50 right-0 bottom-0">
        <div className=" relative h-full w-full">
          <Link
            href="https://www.cspgllc.com"
            target="_blank"
            className="absolute bottom-4 md:bottom-[20%] right-[10%] text-sm sm:text-xs lg:text-base font-light hover:font-bold flex items-center gap-2 font-eloquia-text"
          >
            <span className="font-medium">→</span> Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cornerstone;
