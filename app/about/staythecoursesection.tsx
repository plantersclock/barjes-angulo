import Image from "next/image";
import React from "react";
import barjesNinja from "../images/barjes-martial-arts.jpg";
import GenericButton from "../components/general/GenericButton";

const Staythecoursesection = () => {
  return (
    <div
      id="philosophy"
      className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1"
    >
      <div className="w-full  ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[60%] py-12 lg:py-0">
          <h2 className="text-header">Stay the course.</h2>
          <h3 className="text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl leading-none mt-8 text-theme-blue-700 font-semibold">
            {`“You’ve experienced tens, perhaps hundreds, of retirements. I’m only
            doing it once.”`}
          </h3>
          <p className="py-6 text-content max-w-[90%]">
            {`When a client said this to me, it helped me understand my true role
            for those I work with: mentorship. My goal isn’t just to guide
            clients toward success but to provide the accountability and
            structure needed to stay the course, even when motivation fails or a
            scarcity mindset creeps in. `}
            <br></br>
            <br></br>{" "}
            {`For over two decades – over countless clients, many
            mentees (advisors as well as Ju Jitsu students) and more than a few
            meaningful speaking opportunities – Barjes’ philosophy has remained
            simple and realistic: money is a tool for living a meaningful,
            fulfilling life. Because at the end of the day, money is only as
            meaningful as the life it fulfills.`}
          </p>
          <div className="lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[55%] flex flex-col">
            <GenericButton
              title="BOOK AN INTRO CALL"
              linkHref="/contact"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-square relative overflow-hidden">
        <Image
          src={barjesNinja}
          alt="Barjes doing martial arts"
          fill
          className="object-cover w-full h-full "
          quality={100}
        />
      </div>
    </div>
  );
};

export default Staythecoursesection;
