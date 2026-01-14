import Image from "next/image";
import React from "react";
import GenericButton from "../components/general/GenericButton";
import barjesThinking from "../images/barjes-thinking.jpg";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[65%] py-12 lg:py-0">
          <h2 className="text-header">
            Most people die on the way DOWN from Mount Everest.
          </h2>

          <p className="py-6 text-content max-w-[90%]">
            <span className="font-semibold">Morbid, but true.</span>
            {` Reaching the peak of your career is one thing, but navigating the descent toward retirement takes more than savings and spreadsheets. To maintain the life you want to live (now and when you approach retirement) you need strategy, clarity, and a plan that integrates your values, protects your time, and supports the future you’re intentionally building.`}
          </p>
          <div className="lg:max-w-[55%] xl:max-w-[47%] 2xl:max-w-[50%] flex flex-col">
            <GenericButton
              title="Book an intro call"
              linkHref="#"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-square relative overflow-hidden">
        <Image
          src={barjesThinking}
          alt="Barjes Hero for Clients"
          fill
          className="object-cover w-full h-full "
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
