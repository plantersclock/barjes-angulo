import Image from "next/image";
import React from "react";
import GenericButton from "../components/general/GenericButton";
import barjesTied from "../images/barjes-tied.jpg";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-1">
      <div className="w-full rounded-md bg-theme-blue-900 text-white">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[70%] pt-12 pb-8 lg:py-0">
          <h2 className="font-eloquia-display text-3xl xl:text-4xl 2xl:text-5xl font-semibold max-w-[95%]">
            Talking about money is a lot like getting naked in front of someone.{" "}
            <span className="text-theme-blue-300 block mt-4">
              So let’s get naked.
            </span>
          </h2>
          <p className="py-6 text-base sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-snug">
            {`Every conversation about money has a deeper, underlying meaning – identity, responsibility, legacy.`}
            <br />
            <br />
            {`In his refreshingly human keynotes, Barjes helps audiences rethink their relationship with money, success, and time. Whether speaking to entrepreneurs, advisors, or leadership teams, Barjes invites people to align their financial choices with what they truly value.`}
          </p>
          <div className="lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[55%] flex flex-col gap-y-3 mt-8">
            <GenericButton
              title="BOOK BARJES TO SPEAK"
              linkHref="#"
              backgroundColor="#0096fe"
            />
            <GenericButton
              title="POPULAR KEYNOTES"
              linkHref="#"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-7/9 relative overflow-hidden ">
        <Image
          src={barjesTied}
          alt="Barjes Family"
          height={900}
          width={700}
          className="object-cover w-full h-full "
          quality={70}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
