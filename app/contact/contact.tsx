import React from "react";

import Image from "next/image";
import barjesHeadphones from "../images/barjes-headphones.jpg";
import ContactHero from "../components/contact/contacthero";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full rounded-md aspect-720/1020 relative overflow-hidden">
        <Image
          src={barjesHeadphones}
          alt="Barjes wearing headphones"
          fill
          className="object-cover w-full h-full "
          quality={100}
          priority
        />
      </div>
      <div className="w-full rounded-md grid gap-1">
        <ContactHero />
        <div
          className="relative flex items-center justify-center w-full text-white rounded-md transition-all duration-200 bg-theme-blue-300"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
          }}
        >
          <div className="mx-auto w-[80%] lg:w-[75%] xl:w-[65%] py-16">
            <h2 className="text-header">{`Schedule a Call.`}</h2>
            <div className="grid sm:grid-cols-5 gap-y-6 sm:gap-y-10 text-content font-semibold mt-12">
              <span className="col-span-2">New clients:</span>
              <div className="col-span-3">
                <Link
                  href="https://calendly.com/barjes/intro-call"
                  target="_blank"
                  className=" text-sm 2xl:text-base"
                >
                  {" "}
                  <span className="text-lg leading-none mr-2 font-eloquia-text">
                    →
                  </span>
                  BOOK AN INTRO CALL
                </Link>
              </div>
              <span className="col-span-2">Existing clients:</span>
              <div className="col-span-3 grid gap-y-2">
                <Link
                  href="https://calendly.com/barjes/barjes-angulo-brief-connect-p3-clone"
                  target="_blank"
                  className=" text-sm 2xl:text-base"
                >
                  {" "}
                  <span className="text-lg leading-none mr-2 font-eloquia-text">
                    →
                  </span>
                  BOOK A QUICK MEET
                </Link>
                <Link
                  href="https://calendly.com/barjes/planning-session-w-barjes-angulo-p3-clone"
                  target="_blank"
                  className=" text-sm 2xl:text-base"
                >
                  {" "}
                  <span className="text-lg leading-none mr-2 font-eloquia-text">
                    →
                  </span>
                  BOOK A PLANNING SESSION
                </Link>
              </div>
            </div>
          </div>
          {/* Bottom Text */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
