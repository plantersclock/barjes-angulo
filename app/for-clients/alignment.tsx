import React from "react";
import GenericButton from "../components/general/GenericButton";

const Alignment = () => {
  return (
    <div className="py-16 xl:pt-24">
      <div className="mx-[5%] lg:mx-[10%]">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 lg:gap-4">
          {/* Left side - Title and description */}
          <div className="lg:col-span-3 flex flex-col mt-8 mr-3">
            <h2 className="text-center sm:text-left font-eloquia-display text-3xl lg:text-4xl font-semibold leading-tight">
              Alignment at
              <br />
              every step.
            </h2>
            <p className="mt-6 text-sm lg:text-base text-center sm:text-left">
              <span className="font-semibold">
                Clear guidance requires clear compensation.
              </span>{" "}
              Barjes&apos; fees are fully transparent, client-paid, and
              structured to support ongoing advice.
            </p>
          </div>

          {/* Right side - 3 cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-1 mt-4 xl:mt-0">
            {/* Insurance Planning */}
            <div
              className="bg-[#72C3FA] text-white p-6 lg:p-8 rounded-md flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
              }}
            >
              <h3 className="text-lg lg:text-xl font-semibold leading-tight">
                Insurance Planning
              </h3>
              <p className="mt-4 text-xs lg:text-sm leading-relaxed grow">
                Focus on protecting income, assets, and family outcomes through
                life, disability, long-term care, and annuity solutions
                integrated into your broader financial plan. We evaluate
                carriers, structures, and coverage amounts to ensure suitability
                and coordination with goals.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-sm lg:text-base">No fee</p>
                <p className="text-xs italic mt-1">
                  Compensation paid directly by insurance carrier.
                </p>
              </div>
            </div>

            {/* Wealth Management + Financial Planning */}
            <div
              className="bg-[#58B5F9] text-white p-6 lg:p-8 rounded-md flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
              }}
            >
              <h3 className="text-lg lg:text-xl font-semibold leading-tight">
                Wealth Management + Financial Planning
              </h3>
              <p className="mt-4 text-xs lg:text-sm leading-relaxed grow">
                Get a clear, coordinated strategy across cash flow, investments,
                retirement income, taxes, insurance, and estate considerations —
                so every decision works together. Engagements may be one-time or
                ongoing, depending on complexity and the level of support
                required.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-sm lg:text-base">
                  Starting at $3000
                </p>
                <p className="text-xs italic mt-1">
                  For foundational planning only, ranges to $6500+ for advanced.
                </p>
              </div>
            </div>

            {/* Investment Management */}
            <div
              className="bg-[#47A8F8] text-white p-6 lg:p-8 rounded-md flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
              }}
            >
              <h3 className="text-lg lg:text-xl font-semibold leading-tight">
                Investment Management
              </h3>
              <p className="mt-4 text-xs lg:text-sm leading-relaxed grow">
                For clients who choose to delegate portfolio management, we
                design, implement, and monitor investment strategies aligned to
                your goals, risk tolerance, and time horizon. This includes
                portfolio construction, rebalancing, tax-aware reviews, and
                ongoing oversight.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-sm lg:text-base">
                  Starting at 1.35%
                </p>
                <p className="text-xs italic mt-1">
                  Asset-based, declines as assets grow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:items-end mt-8">
          <div className="max-w-full lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] flex flex-col items-center justify-center ">
            <GenericButton
              title="Book and Intro Call"
              linkHref="/contact"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alignment;
