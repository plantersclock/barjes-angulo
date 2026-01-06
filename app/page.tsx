import React from "react";

import Hero from "./home/hero";

import LinkBoxes from "./home/linkboxes";
import TwoBoxSection1 from "./home/twoboxsection1";
import TwoBoxSection2 from "./home/twoboxsection2";
import FinancialFreedomSection from "./home/financialfreedomsection";
import Contact from "./components/contact/contact";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
      <LinkBoxes />
      <TwoBoxSection1 />
      <FinancialFreedomSection />
      <TwoBoxSection2 />
      <Contact />
    </div>
  );
};

export default page;
