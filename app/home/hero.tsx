import React from "react";
import Image from "next/image";
import barjesHero from "../images/barjes-hero.jpg";
import GenericButton from "../components/general/GenericButton";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[55%] aspect-3/2 relative overflow-hidden rounded-md">
        <Image
          src={barjesHero}
          alt="Barjes Hero"
          width={840}
          height={560}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="scale-[115%] ml-4"
          priority
          fetchPriority="high"
          quality={85}
        />
      </div>
      <div className="w-full lg:w-[45%] p-[8%] lg:p-[3.5%]">
        <h1 className="uppercase -mt-2 mb-4  sm:-mt-6 text-sm xl:text-base">
          financial advisor miAmi
        </h1>
        <h2 className="max-w-[85%] lg:max-w-[80%] text-header">
          <span className="text-theme-blue-900 block">The juggle is real.</span>{" "}
          {`Shouldn’t your financial plan be as meaningful as the life it
          supports?`}
        </h2>
        <p className="text-content py-5 max-w-[90%] lg:max-w-[75%] ">
          <span className="font-semibold leading-tight ">
            Work. Kids. Hobbies. Goals.
          </span>{" "}
          {`Whether you’re approaching retirement or just preparing for whatever
          comes next, your money should support the life you’ve always
          envisioned.`}
        </p>
        <div className="lg:max-w-[60%] xl:max-w-[47%] 2xl:max-w-[45%] flex flex-col gap-y-3">
          <GenericButton
            title="Work with Barjes"
            linkHref="/contact"
            backgroundColor="#0036fd"
          />
          <GenericButton
            title="Learn His Approach"
            linkHref="/for-clients"
            backgroundColor="#0096fe"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
