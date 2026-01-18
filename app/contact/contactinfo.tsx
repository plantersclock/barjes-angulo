import React from "react";

const ContactInfo = () => {
  return (
    <div className="pt-12 lg:pt-16">
      <div className="mx-[10%] md:mx-[5%] lg:mx-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          {/* Title */}
          <div className="lg:col-span-2">
            <h2 className="text-header text-theme-blue-900">Contact Barjes</h2>
          </div>

          {/* Location */}
          <div className="lg:col-span-1">
            <h3 className="text-content font-semibold tracking-wider mb-4">
              <span className="text-lg leading-none mr-2 font-eloquia-text">
                →
              </span>
              LOCATION
            </h3>
            <div className="space-y-4 ml-6">
              <div>
                <p className="font-semibold text-content">Florida Office</p>
                <p className="text-content">
                  1555 Bonaventure Blvd
                  <br />
                  #1018
                  <br />
                  Weston, FL 33326
                </p>
              </div>
              <div>
                <p className="font-semibold text-content">New Jersey Office</p>
                <p className="text-content">
                  350 Passaic Ave #201
                  <br />
                  Fairfield NJ, 07004
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="lg:col-span-1">
            <h3 className="text-content font-semibold tracking-wider mb-4">
              <span className="text-lg leading-none mr-2 font-eloquia-text">
                →
              </span>
              PHONE
            </h3>
            <a
              href="tel:973-487-3220"
              className="ml-6 text-content hover:font-bold"
            >
              {`973 - 487 - 3220`}
            </a>
          </div>

          {/* Email */}
          <div className="lg:col-span-1">
            <h3 className="text-content font-semibold tracking-wider mb-4">
              <span className="text-lg leading-none mr-2 font-eloquia-text">
                →
              </span>
              EMAIL
            </h3>
            <a
              href="mailto:barjes@cspgllc.com"
              className="ml-6 text-content hover:font-bold"
            >
              barjes@cspgllc.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
