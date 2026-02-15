import Image from "next/image";
import React from "react";
import iconTime from "../images/IconTime.png";
import iconFamily from "../images/IconFamily.png";
import iconLife from "../images/IconLife.png";
import iconLegacy from "../images/IconLegacy.png";
import GenericButton from "../components/general/GenericButton";

const FinancialFreedomSection = () => {
  return (
    <section className="flex flex-col items-center mx-[10%] sm:mx-[5%] lg:mx-[15%] xl:mx-[23%] 2xl:mx-[20%] my-[5%]">
      <h2 className="text-header text-center sm:text-left mt-8 lg:mt-0">
        Financial Freedom According to Barjes
      </h2>

      <p className="my-6 sm:my-8 text-center  text-content">
        For Barjes, financial freedom means having the time to be present, the
        means to prioritize family, the space to live fully, and the foresight
        to leave something meaningful behind. The goal is to build a life that
        works for you.
      </p>
      <div className="flex flex-col sm:flex-row relative w-full justify-between px-[2%] mt-4 text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={iconTime}
            alt="Time Icon"
            width={80}
            height={80}
            quality={75}
          />
          <div className="font-semibold mt-8 font-eloquia-display">TIME</div>
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
            quality={75}
          />
          <div className="font-semibold mt-8 font-eloquia-display">FAMILY</div>
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
            quality={75}
          />
          <div className="font-semibold mt-8 font-eloquia-display">LIFE</div>
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
            quality={75}
          />
          <div className="font-semibold mt-8 font-eloquia-display">LEGACY</div>
        </div>
      </div>
      <div className="pb-8 lg:pb-0 w-full flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-18 mt-14 sm:mt-18">
        <div className="font-eloquia-display font-medium text-2xl 2xl:text-3xl text-center sm:text-left leading-none">
          Ready to make it <span className="block sm:inline">make sense?</span>
        </div>
        <div className=" min-w-full sm:min-w-0 flex flex-col">
          <GenericButton
            title="Learn the process"
            linkHref="/for-clients#process"
            backgroundColor="#0036fd"
          />
        </div>
      </div>
    </section>
  );
};

export default FinancialFreedomSection;
