import { Metadata } from "next";

import Hero from "./hero";

export const metadata: Metadata = {
  title: "Financial Advisor Coaching - Barjes Angulo",
  description:
    "Barjes Angulo offers hands-on financial advisor coaching and mentorship to help you run a better-balanced practice.",
  keywords: "Financial Advisor Coaching",
};

const page = () => {
  return (
    <div className="container mx-auto grid gap-1 p-1">
      <Hero />
    </div>
  );
};

export default page;
