import React from "react";

const ContactInfo = () => {
  return (
    <div className="pt-12 lg:pt-16">
      <div className="mx-[10%] md:mx-[5%] lg:mx-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-4">
          {/* Title */}
          <div className="lg:col-span-2">
            <h2 className="font-eloquia-display text-3xl lg:text-4xl font-semibold text-theme-blue-900">
              Contact Barjes
            </h2>
          </div>

          {/* Location */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider mb-4">
              <span className="text-lg leading-none mr-2 font-eloquia-text">
                →
              </span>
              LOCATION
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sm">Florida Office</p>
                <p className="text-sm">
                  2598 E Sunrise Blvd Suite 2104
                  <br />
                  Fort Lauderdale FL, 33304
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm">New Jersey Office</p>
                <p className="text-sm">
                  100 Passaic Ave, Suite 105
                  <br />
                  Fairfield NJ, 07004
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider mb-4">
              <span className="text-lg leading-none mr-2 font-eloquia-text">
                →
              </span>
              PHONE
            </h3>
            <a href="tel:973-487-3220" className="text-sm hover:underline">
              973-487-3220
            </a>
          </div>

          {/* Email */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider mb-4">
              <span className="text-lg leading-none mr-2 font-eloquia-text">
                →
              </span>
              EMAIL
            </h3>
            <a
              href="mailto:barjes@cspgllc.com"
              className="text-sm hover:underline"
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
