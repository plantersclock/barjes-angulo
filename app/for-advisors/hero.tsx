import Image from "next/image";
import React from "react";

import barjesCrouch from "../images/barjes-crouch.jpg";
import ContactAdvisor from "../components/contact/contactadvisor";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full rounded-md ">
        <ContactAdvisor />
      </div>
      <div className="w-full rounded-md aspect-7/8 relative overflow-hidden">
        <Image
          src={barjesCrouch}
          alt="Barjes Angulo crouching"
          height={800}
          width={700}
          className="object-cover w-full h-full "
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
