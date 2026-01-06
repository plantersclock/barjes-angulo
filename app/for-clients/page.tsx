import React from "react";
import Hero from "./hero";
import PRBBoxes from "./prbboxes";
import Cornerstone from "./cornerstone";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
      <PRBBoxes />
      <Cornerstone />
    </div>
  );
};

export default page;
