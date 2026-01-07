"use client";

import React, { useState } from "react";
import barjesSitting from "../images/barjes-sitting.jpg";
import Image from "next/image";
import GradientBar from "../components/general/GradientBar";
import ExpandableText from "../components/general/ExpandableText";

const licensesData = [
  {
    title: "RICP® Retirement Income Certified Professional",
    description:
      "The RICP® designation teaches advisers techniques and best practices used to create sustainable streams of retirement income. The education covers retirement income planning, maximizing Social Security and other income sources, minimizing risks to the plan, and managing portfolios during the asset distribution phase. The designation includes three required, college-level courses that represent a total average study time of more than 150 hours. RICP® designees must meet experience, continuing education and ethics requirements. The credential is awarded by The American College, a non-profit educator founded in 1927 and the highest form of academic accreditation.",
  },
  {
    title: "How are you different from other financial advisors?",
    description:
      "We operate by appointment and run a lifestyle-based practice, not a traditional Monday–Friday, 9–5 office. This structure allows us to be intentional with our time and fully present with clients, rather than rushing meetings or fitting conversations into rigid schedules. \n\nBecause we’ve built a full support team, you don’t just get access to me—you also benefit from regular interaction with experienced team members who help manage planning, service, and follow-through. This team-based approach allows us to deliver a high level of care while staying responsive and consistent.",
  },
  {
    title: "Who is a good fit to work with your firm?",
    description:
      "We provide comprehensive financial planning, investment management, and insurance planning. Our role is to help you protect what you've built, grow with intention, and make confident decisions—not just today, but for years and generations ahead.",
  },
  {
    title: "What does the financial planning process look like?",
    description:
      "We provide comprehensive financial planning, investment management, and insurance planning. Our role is to help you protect what you've built, grow with intention, and make confident decisions—not just today, but for years and generations ahead.",
  },
];

const Licenses = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full ">
        <div className="flex flex-col justify-center mx-auto h-full w-[80%] lg:w-[75%] xl:w-[65%] py-12 lg:py-0">
          <h2 className="font-eloquia-display text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Licenses + Designations
          </h2>
          <div className="mt-8">
            {licensesData.map((item, index) => (
              <div key={index} className="mt-4">
                <ExpandableText
                  title={item.title}
                  description={item.description}
                  isExpanded={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
                <GradientBar className="mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-md aspect-7/9 relative overflow-hidden">
        <Image
          src={barjesSitting}
          alt="Barjes sitting on a stool"
          fill
          className="object-cover w-full h-full "
          quality={50}
        />
      </div>
    </div>
  );
};

export default Licenses;
