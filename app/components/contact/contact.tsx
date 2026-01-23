import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full text-white rounded-md transition-all duration-200 bg-theme-blue-900">
      {/* Triangle in top-right corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[10vw] sm:border-l-[5vw] lg:border-l-[2vw] border-l-transparent border-t-[10vw] sm:border-t-[5vw] lg:border-t-[2vw] border-t-white"></div>
      <div className="mx-[10%] py-14">
        <h2 className="text-header">Notes from Barjes</h2>
        <p className="mt-3 text-content">
          Occasional insights on planning, perspective, and staying aligned –
          shared when there&apos;s something worth saying.
        </p>
        <form className="flex flex-col gap-3 mt-8">
          <div className="flex flex-col md:flex-row gap-y-2 gap-x-6 xl:gap-x-8 w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              aria-label="First name"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              aria-label="Last name"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email address"
              className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
            />
          </div>
          <div className="flex justify-end mt-1">
            <button type="submit" className="text-sm font-semibold">
              <span className="text-sm font-light leading-none mr-2 font-eloquia-text">
                →
              </span>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      {/* Bottom Text */}

      <div className="absolute left-0 bottom-0 leading-none font-eloquia-display w-full  text-5xl 2xl:text-5xl font-semibold  p-0 -mx-[.2rem] -my-[.5rem] 2xl:-my-2 ">
        SUBSCRIBE
      </div>
    </section>
  );
};

export default Contact;
