import Image from "next/image";
import React from "react";
import barjesLaptopHero from "../images/barjes-laptop.jpg";
import GenericButton from "../components/general/GenericButton";

const TwoBoxSection1 = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-1">
      <div className="w-full ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[60%] py-12 lg:py-0">
          <h2 className="font-eloquia-display text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            {`I didn't build my business to live life around it. `}
            <span className="text-theme-blue-700">So why are you?</span>
          </h2>
          <p className="py-6 text-base sm:text-xs md:text-sm lg:text-xs 2xl:text-base max-w-[90%] leading-5">
            <span className="font-semibold">
              {`Like you, I’m a self-made business owner.`}
            </span>{" "}
            {`I also have a life that extends far beyond what my clients may see.
            Among other things, I have a wife, kids, and a passion for Ju Jitsu.
            I’m committed to living my life to the fullest – no exceptions – and
            believe that everyone should have the opportunity to do the same.`}
          </p>
          <div className="lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[55%] flex flex-col">
            <GenericButton
              title="Learn my approach"
              linkHref="#"
              backgroundColor="#0036fd"
              cornerColor="border-t-white"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-7/6 relative overflow-hidden">
        <Image
          src={barjesLaptopHero}
          alt="Barjes About Hero"
          height={600}
          width={700}
          className="object-cover w-full h-full "
          quality={80}
          priority
        />
      </div>
    </div>
  );
};

export default TwoBoxSection1;
