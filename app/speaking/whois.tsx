import React from "react";
import GenericButton from "../components/general/GenericButton";
import Image from "next/image";
import barjesSpeaking from "../images/barjes-speaking.jpg";

const WhoIs = () => {
  return (
    <div
      id="speaker-sheet"
      className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1"
    >
      <div className="w-full rounded-md bg-white ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[70%] py-12 lg:py-0">
          <h2 className="text-header">Who is Barjes Angulo?</h2>

          <p className="py-6 text-content">
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
          <div className=" lg:max-w-[70%] xl:max-w-[55%] 2xl:max-w-[50%] flex flex-col mt-8">
            <GenericButton
              title="GET HIS SPEAKER SHEET"
              linkHref="/files/BarjesAngulo-SpeakerSheet.pdf"
              backgroundColor="#0036fd"
              openInNewTab={true}
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
          quality={100}
        />
      </div>
    </div>
  );
};

export default WhoIs;
