import React from "react";
import GenericButton from "../general/GenericButton";

const ContactAdvisor = () => {
  return (
    <div className="relative flex flex-col justify-center  h-full  w-full text-white rounded-md transition-all duration-200 bg-theme-blue-900">
      {/* Triangle in top-right corner */}

      <div className="mx-auto w-[80%] lg:w-[75%] xl:w-[65%] py-12">
        <h1 className="text-header">{`The advisor's advisor.`}</h1>
        <p className="mt-6 text-content">
          <span className="font-semibold">
            Barjes supports advisors who want to run their practice with more
            clarity, less friction, and better work-life integration.
          </span>{" "}
          <br />
          <br />
          That’s why 1:1 mentorships, small group masterminds, and a working
          book club are taking shape. This is hands-on, advisor-to-advisor work
          focused on the realities of running a practice day to day – workflow,
          decision-making, client experience, and the systems behind it all.
          Participation will be limited and intentionally focused. <br />
          <br />
          Join the waitlist for early access and to help shape what’s offered
          first.
        </p>
        <form className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col gap-y-2 gap-x-6 xl:gap-x-8 w-full lg:max-w-[80%]">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              aria-label="Full name"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email address"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
            <input
              type="text"
              name="practiceWebsite"
              placeholder="Practice Website"
              aria-label="Practice website URL"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
          </div>
          <button
            type="submit"
            className="relative flex flex-col items-start lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[45%]   mt-8"
          >
            <GenericButton
              title="JOIN THE WAITLIST"
              linkHref="#"
              backgroundColor="#0096fe"
            />
          </button>
        </form>
      </div>
      {/* Bottom Text */}
    </div>
  );
};

export default ContactAdvisor;
