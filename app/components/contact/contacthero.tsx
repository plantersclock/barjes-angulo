import React from "react";
import GenericButton from "../general/GenericButton";

const ContactHero = () => {
  return (
    <div className="relative flex flex-col justify-center  h-full  w-full text-white rounded-md transition-all duration-200 bg-theme-blue-900">
      <div className="mx-auto w-[80%] lg:w-[75%] xl:w-[65%] py-12">
        <h1 className="text-header">{`I'm listening.`}</h1>
        <p className="mt-6  text-content ">
          I may not be available 24/7, but I’m all in when it counts. Reach out
          for financial planning and media or speaking opportunities below.
          <br />
          <br />
          <span className="font-semibold">
            Already a client or looking to become one?
          </span>{" "}
          Book a meeting with me.
        </p>
        <form className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col gap-y-2 gap-x-6 xl:gap-x-8 w-full lg:max-w-[80%]">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
            <input
              type="text"
              name="description"
              placeholder="How can I help?"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
          </div>
          <button
            type="submit"
            className="relative flex flex-col items-start lg:max-w-[50%] xl:max-w-[45%] 2xl:max-w-[42%]   mt-8"
          >
            <GenericButton
              title="CONTACT BARJES"
              linkHref="#"
              backgroundColor="#0096fe"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactHero;
