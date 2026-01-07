import React from "react";
import Hero from "./hero";
import PRBBoxes from "./prbboxes";
import Cornerstone from "./cornerstone";
import FAQ from "./faq";
import Licenses from "./licenses";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
      <PRBBoxes />
      <Cornerstone />
      <Licenses />
      <FAQ />
    </div>
  );
};

export default page;
