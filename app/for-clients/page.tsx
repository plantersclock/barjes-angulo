import { Metadata } from "next";
import Hero from "./hero";

export const metadata: Metadata = {
  title: "Investment Advice - Barjes Angulo",
  description:
    "Barjes Angulo integrates investment advice, financial planning, wealth management, and business solutions for clients.",
  keywords: "Investment Advice",
};
import PRBBoxes from "./prbboxes";
import Cornerstone from "./cornerstone";
import FAQ from "./faq";
import Licenses from "./licenses";
import KeepingCourse from "./keepingcourse";
import Alignment from "./alignment";

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
      <PRBBoxes />
      <KeepingCourse />
      <Alignment />
      <Cornerstone />
      <Licenses />
      <FAQ />
    </div>
  );
};

export default page;
