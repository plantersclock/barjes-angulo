import Image from "next/image";
import React from "react";
import iconTime from "../images/IconTime.png";
import iconFamily from "../images/IconFamily.png";
import iconLife from "../images/IconLife.png";
import iconLegacy from "../images/IconLegacy.png";
import GenericButton from "../components/general/GenericButton";

const FinancialFreedomSection = () => {
  return (
    <div className="flex flex-col items-center mx-[10%] sm:mx-[5%] lg:mx-[15%] xl:mx-[23%] my-[5%]">
      <h2 className="text-3xl sm:text-4xl font-semibold font-eloquia-display text-center sm:text-left">
        Financial Freedom According to Barjes
      </h2>

      <p className="text-sm my-6 sm:my-8 text-center sm:text-left">
        For Barjes, financial freedom means having the time to be present, the
        means to prioritize family, the space to live fully, and the foresight
        to leave something meaningful behind. The goal is to build a life that
        works for you.
      </p>
      <div className="flex flex-col sm:flex-row relative w-full justify-between px-[2%] mt-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={iconTime}
            alt="Time Icon"
            width={80}
            height={80}
            className=""
            priority
            quality={90}
          />
          <div className="font-semibold mt-6 font-eloquia-display">TIME</div>
        </div>
        <div className="flex flex-col items-center justify-center text-4xl font-bold text-theme-blue-700 py-6">
          +
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={iconFamily}
            alt="Family Icon"
            width={80}
            height={80}
            className="aspect-square"
            priority
            quality={90}
          />
          <div className="font-semibold mt-6 font-eloquia-display">FAMILY</div>
        </div>
        <div className="flex flex-col items-center justify-center text-4xl font-bold text-theme-blue-700 py-6">
          +
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={iconLife}
            alt="Life Icon"
            width={80}
            height={80}
            className="aspect-square"
            priority
            quality={90}
          />
          <div className="font-semibold mt-6 font-eloquia-display">LIFE</div>
        </div>
        <div className="flex flex-col items-center justify-center text-4xl font-bold text-theme-blue-700 py-6">
          +
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={iconLegacy}
            alt="Legacy Icon"
            width={80}
            height={80}
            className="aspect-square"
            priority
            quality={90}
          />
          <div className="font-semibold mt-6 font-eloquia-display">LEGACY</div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center gap-6 md:gap-18 mt-14 sm:mt-18">
        <div className="font-eloquia-display font-medium text-2xl text-center sm:text-left leading-none">
          Ready to make it <span className="block sm:inline">make sense?</span>
        </div>
        <div className="min-w-full sm:min-w-0 flex flex-col">
          <GenericButton
            title="Learn the process"
            linkHref="#"
            backgroundColor="#0036fd"
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialFreedomSection;
