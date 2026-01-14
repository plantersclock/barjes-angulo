import Image from "next/image";
import React from "react";
import barjesFamily from "../images/barjes-family.webp";
import GenericButton from "../components/general/GenericButton";

const TwoBoxSection1 = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-1">
      <div className="w-full rounded-md bg-theme-gray-500 ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[60%] py-12 lg:py-0">
          <h2 className="text-header">
            Most financial advisors focus on maximizing returns.{" "}
            <span className="text-theme-blue-900">
              But what about maximizing meaning?
            </span>
          </h2>
          <p className="py-6 text-content max-w-[90%]">
            {`Barjes’ (bar-jess) approach to financial strategy is life-forward.
            His process starts with who you want to be and what you want to
            achieve, and continues with financial planning and support that
            helps you activate the life you want to live.`}
          </p>
          <div className="lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[55%] flex flex-col">
            <GenericButton
              title="BOOK AN INTRO CALL"
              linkHref="#"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-square relative overflow-hidden ">
        <Image
          src={barjesFamily}
          alt="Barjes Family"
          fill
          className="object-cover w-full h-full "
          quality={100}
        />
      </div>
    </div>
  );
};

export default TwoBoxSection1;
