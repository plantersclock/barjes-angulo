import React from "react";
import PillarCard from "../components/general/PillarCard";
import Link from "next/link";

const LinkBoxes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
      <Link href="/for-advisors" className=" col-span-1 aspect-square  ">
        <PillarCard
          boldText="I'm a family guy, so I'm not available 24/7."
          regularText="I've spent my entire life building a business outside of the business I've built. You should too."
          sideText="HUMAN"
          backgroundColor="#40bbff"
          linkText="LEARN ABOUT BARJES"
          linkHref="#"
        />
      </Link>
      <Link href="/for-advisors" className=" col-span-1 aspect-square  ">
        <PillarCard
          boldText="A lot of people can manage your money, but few will hold you accountable."
          regularText="My process strategizes wealth while helping support you in the life you want to live and the legacy you want to leave."
          sideText="ADVISOR"
          backgroundColor="#0096fe"
          linkText="LEARN THE PROCESS"
          linkHref="#"
        />
      </Link>
      <Link href="/for-advisors" className=" col-span-1 aspect-square ">
        <PillarCard
          boldText="Becoming a financial advisor can consume you."
          regularText="I can help you build (or rebuild) a financial practice that is successful, sustainable, and fulfilling."
          sideText="MENTOR"
          backgroundColor="#006efe"
          linkText="SIGN UP"
          linkHref="#"
        />
      </Link>
      <Link href="/for-advisors" className=" col-span-1 aspect-square  ">
        <PillarCard
          boldText="There is no way around it: money is life."
          regularText="I talk about what it really takes to align money with meaning and how to find clarity in uncertainty."
          sideText="SPEAKER"
          backgroundColor="#0036fd"
          linkText="BOOK BARJES"
          linkHref="#"
        />
      </Link>
    </div>
  );
};

export default LinkBoxes;
