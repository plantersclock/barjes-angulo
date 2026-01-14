import Image from "next/image";
import React from "react";
import dad from "../images/barjes-dad.jpg";

const QuoteSection = () => {
  return (
    <div className="grid gap-1">
      <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
        <div className="w-full rounded-md bg-theme-gray-500 ">
          <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[60%] py-12 lg:py-0">
            <p className="py-12 text-content max-w-[90%]">
              <span className="font-semibold">What my father taught me</span>
              {`
            informs every decision I make and every client I serve. It isn’t my
            abilities as a financial advisor that set me apart in the industry –
            any advisor can sell life insurance or a financial plan. For me,
            wealth is not a number on a balance sheet, it’s the freedom to live
            a life aligned with who you are and who you aspire to become.`}
              <br></br>
              <br></br>
              {`My priority is in ensuring that my clients' personal and
            financial aspirations are seamlessly integrated. Whether it’s
            securing a stable future, supporting the growth of a business, or
            preparing for life’s uncertainties, my proprietary approach helps
            clients align their finances with their vision of the life they want
            to lead.`}
            </p>
          </div>
        </div>
        <div className="w-full rounded-md  relative overflow-hidden">
          <Image
            src={dad}
            alt="Barjes with his dad"
            height={340}
            width={700}
            className="object-cover w-full h-full "
            quality={100}
            priority
          />
        </div>
      </div>
      <div
        className="relative flex items-center justify-center w-full text-white rounded-md transition-all duration-200 bg-theme-blue-100"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
        }}
      >
        <div className="mx-[10%]">
          <h2 className="text-3xl 2xl:text-4xl font-semibold font-eloquia-display pt-16 md:pt-20 max-w-3xl text-center">
            {`“Money isn’t the most important thing in the world – but it gives us
            options”`}
          </h2>
          <p className="mt-8 text-base font-semibold  pb-16 md:pb-20 text-center">
            {`BARJES’ DAD`}
          </p>
        </div>
        {/* Bottom Text */}
      </div>
    </div>
  );
};

export default QuoteSection;
