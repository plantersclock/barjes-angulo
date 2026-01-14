import React from "react";
import ExpandableText from "../components/general/ExpandableText";
import GradientBar from "../components/general/GradientBar";
import GenericButton from "../components/general/GenericButton";

const faqData = [
  {
    title: "What services do you provide?",
    description:
      "We provide comprehensive financial planning, investment management, and insurance planning. Our role is to help you protect what you've built, grow with intention, and make confident decisions—not just today, but for years and generations ahead.",
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

const FAQ = () => {
  return (
    <div className="bg-linear-to-l from-[#F9F9F9] from-70% to-white">
      <div className="flex flex-col mx-[10%] sm:mx-[5%] lg:mx-[15%] xl:mx-[23%] 2xl:mx-[20%] ">
        <h2 className="mt-22 mb-8 text-header text-center">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className="mt-4">
            <ExpandableText title={item.title} description={item.description} />
            <GradientBar className="mt-4" />
          </div>
        ))}
        <div className="flex items-center justify-center py-18">
          <div className="lg:max-w-[30%] xl:max-w-[30%] 2xl:max-w-[30%] flex flex-col items-center justify-center ">
            <GenericButton
              title="Learn my approach"
              linkHref="#"
              backgroundColor="#0036fd"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
