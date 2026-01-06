import React from "react";
import Hero from "../about/hero";
import QuoteSection from "./quotesection";
import Staythecoursesection from "./staythecoursesection";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
      <QuoteSection />
      <Staythecoursesection />
    </div>
  );
};

export default page;
