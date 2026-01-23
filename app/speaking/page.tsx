import { Metadata } from "next";
import Hero from "./hero";

export const metadata: Metadata = {
  title: "Financial Speaker - Barjes Angulo",
  description:
    "Barjes Angulo is a keynote financial speaker. Book him here for your speaking event.",
  keywords: "Financial Speaker",
};
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
