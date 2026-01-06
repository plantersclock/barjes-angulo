import React from "react";
import GenericButton from "../components/general/GenericButton";
import Image from "next/image";
import barjesSpeaking from "../images/barjes-speaking.jpg";

const WhoIs = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full rounded-md bg-white ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[70%] py-12 lg:py-0">
          <h2 className="font-eloquia-display text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Who is Barjes Angulo?
          </h2>

          <p className="py-6 text-base sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-snug">
            {`Barjes Angulo is a financial
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
          <div className="lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[50%] flex flex-col mt-8">
            <GenericButton
              title="GET HIS SPEAKER SHEET"
              linkHref="#"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-7/9 relative overflow-hidden">
        <Image
          src={barjesSpeaking}
          alt="Barjes Speaking"
          height={900}
          width={700}
          className="object-cover w-full h-full "
          quality={70}
        />
      </div>
    </div>
  );
};

export default WhoIs;
