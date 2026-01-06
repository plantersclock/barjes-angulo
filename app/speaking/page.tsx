import React from "react";
import Hero from "./hero";
import WhoIs from "./whois";
import Book from "./book";
import Keynotes from "./keynotes";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
      <WhoIs />
      <Keynotes />
      <Book />
    </div>
  );
};

export default page;
