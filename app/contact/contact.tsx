import React from "react";

import Image from "next/image";
import barjesHeadphones from "../images/barjes-headphones.jpg";
import ContactHero from "../components/contact/contacthero";

const Contact = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full rounded-md aspect-7/8 relative overflow-hidden">
        <Image
          src={barjesHeadphones}
          alt="Barjes wearing headphones"
          fill
          className="object-cover w-full h-full "
          quality={100}
          priority
        />
      </div>
      <div className="w-full rounded-md ">
        <ContactHero />
      </div>
    </div>
  );
};

export default Contact;
