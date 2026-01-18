import React from "react";
import ExpandableText from "../components/general/ExpandableText";
import GradientBar from "../components/general/GradientBar";
import GenericButton from "../components/general/GenericButton";
import Link from "next/link";

const faqData = [
  {
    title: "What services do you provide?",
    description: (
      <>
        We provide comprehensive financial planning, investment management, and
        insurance planning. Our role is to help you{" "}
        <span className="font-semibold">
          protect what you&apos;ve built, grow with intention, and make
          confident decisions
        </span>
        —not just today, but for years and generations ahead.
      </>
    ),
  },
  {
    title: "How are you different from other financial advisors?",
    description: (
      <>
        We operate by appointment and run a{" "}
        <span className="font-semibold">lifestyle-based practice</span>, not a
        traditional Monday–Friday, 9–5 office. This structure allows us to be
        intentional with our time and fully present with clients, rather than
        rushing meetings or fitting conversations into rigid schedules.
        <br />
        <br />
        Because we&apos;ve built a full support team, you don&apos;t just get
        access to me—you also benefit from regular interaction with experienced
        team members who help manage planning, service, and follow-through. This
        team-based approach allows us to deliver a high level of care while
        staying responsive and consistent.
      </>
    ),
  },
  {
    title: "Who is a good fit to work with your firm?",
    description: (
      <>
        We work best with families and professionals{" "}
        <span className="font-semibold">new to money</span> who want clarity,
        structure, and a trusted long-term partner.
        <br />
        <br />
        We intentionally operate as a{" "}
        <span className="font-semibold">mid-sized firm</span>. We are not a
        large corporate institution, which allows us to remain flexible,
        personable, and highly responsive—while still offering the systems,
        expertise, and depth typically associated with much larger firms.
      </>
    ),
  },
  {
    title: "What does the financial planning process look like?",
    description: (
      <>
        Our process is structured but adaptable. We start by understanding your
        full financial picture, then build and stress-test strategies around
        real-life scenarios. From there, we help implement recommendations and
        stay involved as your life and priorities evolve.
      </>
    ),
  },
  {
    title: "How are fees structured?",
    description: (
      <>
        Fees vary based on the scope and complexity of work:
        <ul className="list-disc list-outside ml-5 my-4 space-y-2">
          <li>
            <span className="font-semibold">Financial planning</span> is
            typically a one-time or annual fee.
          </li>
          <li>
            <span className="font-semibold">Investment management</span> is
            charged as a percentage of assets we manage.
          </li>
          <li>
            <span className="font-semibold">Insurance planning</span> does not
            have a separate planning fee; compensation is built into the product
            if implemented.
          </li>
        </ul>
        All fees are discussed clearly before engagement.
      </>
    ),
  },
  {
    title: "Do I need to move all my accounts to work with you?",
    description: (
      <>
        No. Some clients work with us strictly for planning or insurance
        guidance, while others choose to consolidate assets for simplicity and
        coordination. We only recommend changes if they improve clarity,
        efficiency, or outcomes.
      </>
    ),
  },
  {
    title: "How often will we meet?",
    description: (
      <>
        Most clients meet with us once or twice per year in a formal setting,
        with ongoing communication throughout the year. As life events
        arise—career changes, family milestones, or major decisions—we connect
        as needed.
      </>
    ),
  },
  {
    title: "How do you approach investing?",
    description: (
      <>
        We use disciplined, globally diversified portfolios designed around your
        time horizon, cash-flow needs, and risk tolerance—not short-term market
        predictions. The focus is on steady progress, cost control, and
        alignment with your financial plan.
      </>
    ),
  },
  {
    title: "How does insurance fit into the plan?",
    description: (
      <>
        Insurance is about protection, not performance. We focus on protecting
        income, covering liabilities, and ensuring your family&apos;s financial
        security—using strong, highly rated carriers and reviewing coverage
        regularly.
      </>
    ),
  },
  {
    title: "How do you work with my CPA or attorney?",
    description: (
      <>
        With your permission, we collaborate directly with your CPA, attorney,
        or other professionals. Our role is to help align financial, tax, and
        legal decisions so everything works together seamlessly.
      </>
    ),
  },
  {
    title: "How do I access my financial plan online?",
    description: (
      <>
        Your financial plan is available through our secure wealth management
        portal powered by
        <span className="font-semibold"> eMoney</span>. You can access your plan
        anytime at:
        <br /> <br />
        <Link
          href="https://wealth.emaplan.com/ema/ria/anglefifth"
          target="_blank"
          className="text-theme-blue-700 hover:font-bold"
        >
          https://wealth.emaplan.com/ema/ria/anglefifth
        </Link>
        <br />
        <br />
        Once onboarding is complete, you&apos;ll receive an email invitation to
        create your login. Inside the portal, you can view your net worth, cash
        flow, planning scenarios, and key documents—all in one place.
      </>
    ),
  },
  {
    title: "How do I access my investment accounts?",
    description: (
      <>
        Your investment accounts are held at{" "}
        <span className="font-semibold">Charles Schwab</span>, one of the
        largest independent custodians in the industry. You can access your
        accounts directly at:
        <br /> <br />
        <Link
          href="https://client.schwab.com/Areas/Access/Login?&kc=y&sim=y"
          target="_blank"
          className="text-theme-blue-700 hover:font-bold"
        >
          https://client.schwab.com
        </Link>
        <br />
        <br />
        Schwab will send instructions to set up your secure login. If you need
        help at any point, our team is happy to assist.
      </>
    ),
  },
  {
    title: "What happens if my situation changes?",
    description: (
      <>
        Life changes—and that&apos;s expected. Whether it&apos;s a new job,
        business opportunity, inheritance, or unexpected challenge, we revisit
        your plan and adjust strategies so your decisions stay intentional and
        aligned with what matters most.
      </>
    ),
  },
  {
    title: "Is this a long-term relationship?",
    description: (
      <>
        From time to time, we take on{" "}
        <span className="font-semibold">defined planning projects</span> for
        specific decisions or transitions. That said, our primary focus is
        building{" "}
        <span className="font-semibold">
          long-term, collaborative partnerships
        </span>{" "}
        with our clients. We do our best work when we can evolve alongside you
        and guide decisions over time—not just transactions.
      </>
    ),
  },
  {
    title: "How do referrals work?",
    description: (
      <>
        If someone important to you could benefit from clarity and thoughtful
        guidance, we&apos;re always happy to have a conversation. Thoughtful
        introductions are the highest compliment we receive.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="bg-linear-to-l from-[#F9F9F9] from-70% to-white">
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
          <div className="lg:max-w-[40%] xl:max-w-[40%] 2xl:max-w-[30%] flex flex-col items-center justify-center ">
            <GenericButton
              title="BOOK AN INTRO CALL"
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
