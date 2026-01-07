import React from "react";

import Contact from "./contact";
import ContactInfo from "./contactinfo";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Contact />
      <ContactInfo />
    </div>
  );
};

export default page;
