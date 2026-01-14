import React from "react";
import ContactBook from "../components/contact/contactbook";
import Image from "next/image";
import barjesChair from "../images/barjes-chair.jpg";

const Book = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-1">
      <div className="w-full rounded-md aspect-7/8 relative overflow-hidden">
        <Image
          src={barjesChair}
          alt="Barjes Angulo crouching"
          fill
          className="object-cover w-full h-full "
          quality={100}
          priority
        />
      </div>
      <div className="w-full rounded-md ">
        <ContactBook />
      </div>
    </div>
  );
};

export default Book;
