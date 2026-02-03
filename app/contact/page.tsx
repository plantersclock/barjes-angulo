import { Metadata } from "next";

import Contact from "./contact";

export const metadata: Metadata = {
  title: "Contact - Barjes Angulo",
  description:
    "Contact Barjes Angulo to start a conversation about financial planning, investment strategy, or advisory support.",
  keywords: "Contact",
};
import ContactInfo from "./contactinfo";

const page = () => {
  return (
    <div className="container mx-auto flex flex-col p-1">
      <Contact />
      <ContactInfo />
    </div>
  );
};

export default page;
