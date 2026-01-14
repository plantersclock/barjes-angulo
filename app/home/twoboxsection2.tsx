import Image from "next/image";
import React from "react";
import barjesHeadshot from "../images/barjes-headshot.webp";
import GenericButton from "../components/general/GenericButton";

const TwoBoxSection2 = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full rounded-md bg-theme-gray-500 ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[65%] py-12 lg:py-0">
          <h2 className="text-header">Your personal CLFO</h2>
          <h3 className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold">
            (Chief Life-first Financial Officer)
          </h3>
          <p className="py-6 text-content max-w-[90%]">
            <span className="font-semibold">Barjes Angulo</span>
            {` is a financial
            strategist, mentor, and speaker who helps self-made business owners
            align their wealth with what matters most. With over two decades of
            experience, Barjes brings a lifestyle-first approach to financial
            advising – one that integrates personal values, business goals, and
            long-term vision so life influences work, not the other way around.`}
            <br></br>
            <br></br>{" "}
            {`A first-generation success story himself, Barjes
            understands the challenges and pride that come with carving your own
            path. He’s known for guiding clients through life’s financial
            complexities with strategic insight, genuine care, grounded
            accountability, and a deep respect for their time, families, and
            aspirations.`}
          </p>
          <div className="lg:max-w-[60%] xl:max-w-[47%] 2xl:max-w-[45%] flex flex-col">
            <GenericButton
              title="Learn More"
              linkHref="#"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-square relative overflow-hidden">
        <Image
          src={barjesHeadshot}
          alt="Barjes Headshot"
          fill
          className="object-cover w-full h-full "
          quality={100}
        />
      </div>
    </div>
  );
};

export default TwoBoxSection2;
