import { Metadata } from "next";
import Hero from "../about/hero";

export const metadata: Metadata = {
  title: "About - Barjes Angulo",
  description:
    "Read about Barjes Angulo, a financial mentor helping clients build financial structure, and a life-forward approach to money.",
  keywords: "About",
};
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
