"use client";

import React, { useState } from "react";
import barjesSitting from "../images/barjes-sitting.jpg";
import Image from "next/image";
import GradientBar from "../components/general/GradientBar";
import ExpandableText from "../components/general/ExpandableText";
import Link from "next/link";

const licensesData = [
  {
    title: "RICP® Retirement Income Certified Professional",
    description: (
      <>
        The RICP® designation teaches advisers techniques and best practices
        used to create sustainable streams of retirement income. The education
        covers retirement income planning, maximizing Social Security and other
        income sources, minimizing risks to the plan, and managing portfolios
        during the asset distribution phase. The designation includes three
        required, college-level courses that represent a total average study
        time of more than 150 hours. RICP® designees must meet experience,
        continuing education and ethics requirements. The credential is awarded
        by The American College, a non-profit educator founded in 1927 and the
        highest form of academic accreditation.
        <br />
        <br />
        <Link
          href="https://insights.theamericancollege.edu/why-ricp/working-with-an-ricp"
          target="_blank"
          className="text-theme-blue-700 hover:font-bold"
        >
          Learn more →
        </Link>
      </>
    ),
  },
  {
    title: "LUTCF® Life Underwriter Training Council",
    description: (
      <>
        Since 1984, the LUTCF® Designation Program has been considered the first
        designation any insurance professional should earn. When an agent or
        advisor earns the LUTCF® designation, they gain fundamental, yet
        critical prospecting, selling, and practice-management skills, along
        with a thorough working knowledge of life and multi-line products and
        services.
        <br />
        <br />
        The curriculum integrates four practice specialties – life insurance and
        annuities, health and employee benefits, multi-line, and financial
        advising and investments – providing both an overview of each but also
        addressing their interdependencies, which are critical for agents and
        advisors to understand when advising clients. Topics cover real-life
        issues from multigenerational homes to single-parent households and
        special needs planning.
        <br />
        <br />
        <Link
          href="https://lutcf.naifa.org/"
          target="_blank"
          className="text-theme-blue-700 hover:font-bold"
        >
          Learn more →
        </Link>
      </>
    ),
  },
  {
    title: "CLTC Certification in Long-Term Care",
    description: (
      <>
        The Certification in Long-Term Care (CLTC) designation was created in
        1999. It focuses on the discipline of extended care planning. It
        provides professionals the critical tools necessary to discuss the
        subject of longevity and its consequences on their client&apos;s family
        and finances. Students learn how to mitigate these consequences by
        developing a plan to protect their clients and their families.
        <br />
        <br />
        The CLTC designation has been recognized and supported by The American
        College, NAIFA and major insurance carriers.
        <br />
        <br />
        <Link
          href="https://www.ltc-cltc.com/"
          target="_blank"
          className="text-theme-blue-700 hover:font-bold"
        >
          Learn more →
        </Link>
      </>
    ),
  },
  {
    title: "LACP Life and Annuity Certified Professional",
    description: (
      <>
        Certification in the Life and Annuity Certified Professional (LACP)
        Program governed by the NAIFA Certification Commission is intended
        primarily to be a benefit to the public, in selecting or employing
        members of the insurance and financial advisor profession, as well as a
        benefit to members of the insurance and financial advisor profession
        itself, in providing benchmarking and criteria for the services those
        professionals provide to the public.
        <br />
        <br />
        The purpose of the Commission is to develop and govern the Program,
        including the process through which qualified insurance and financial
        professionals can apply for and receive certification, with that process
        being valid, credible, and transparent according to standards outlined
        in the Commission&apos;s Charter and accreditation standards accepted in
        the certification industry.
        <br />
        <br />
        <Link
          href="https://belong.naifa.org/lacp"
          target="_blank"
          className="text-theme-blue-700 hover:font-bold"
        >
          Learn more →
        </Link>
      </>
    ),
  },
  {
    title: "Licenses",
    description: (
      <ul className="list-disc list-outside ml-5">
        <li>Series 65</li>
        <li>Life and Health Insurance</li>
      </ul>
    ),
  },
];

const Licenses = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      id="licenses"
      className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1"
    >
      <div className="w-full ">
        <div className="flex flex-col justify-center mx-auto h-full w-[90%] lg:w-[90%] xl:w-[65%] py-12 lg:py-0">
          <h2 className="text-header font-semibold">Licenses + Designations</h2>
          <div className="mt-2 xl:mt-8">
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
          quality={100}
        />
      </div>
    </div>
  );
};

export default Licenses;
