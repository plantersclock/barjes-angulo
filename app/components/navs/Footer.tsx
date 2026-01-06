import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerlogo from "../../images/logo-footer.png";

const Footer = () => {
  return (
    <div className="container mx-auto my-2 sm:my-6 ">
      <div className="grid grid-cols-8 w-full px-2 lg:px-12 h-20 my-12 lg:my-24">
        <div className="col-span-8 lg:col-span-3 2xl:col-span-4 lg:flex-4 flex justify-center lg:justify-start">
          <Link href="/">
            <Image
              src={footerlogo}
              alt="Barjes Logo"
              height={84}
              width={241}
              className="object-contain"
              priority
              quality={90}
            />
          </Link>
        </div>
        <div className="col-span-8 lg:col-span-5 2xl:col-span-4 grid grid-cols-2 gap-y-14 lg:grid-cols-4 w-full justify-between mt-12 lg:mt-0">
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <h3 className="font-semibold mb-2">ABOUT</h3>
            <div className="flex flex-col font-light gap-1">
              <Link href="/">Philosophy</Link>
              <Link href="/">Licenses</Link>
              <Link href="/">Disclosures</Link>
            </div>
          </div>
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <h3 className="font-semibold mb-2">EXPERTISE</h3>
            <div className="flex flex-col font-light gap-1">
              <Link href="/">Process</Link>
              <Link href="/">Financial Planning</Link>
              <Link href="/">For Adivsors</Link>
            </div>
          </div>
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <h3 className="font-semibold mb-2">SPEAKING</h3>
            <div className="flex flex-col font-light gap-1">
              <Link href="/">Keynotes</Link>
              <Link href="/">Media Kit</Link>
            </div>
          </div>
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <h3 className="font-semibold mb-2">CONTACT</h3>
            <div className="flex flex-col font-light gap-1">
              <Link href="/">Send a Message</Link>
              <Link href="/">Request to Book</Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 py-8">
          {/* Desktop */}
          <div className="hidden lg:flex  justify-between items-end pt-12">
            <div className="flex-1">
              <Link href="/" className="text-sm font-semibold">
                Privacy Policy
              </Link>
              <div className="text-[.6rem] xl:text-[.7rem]">
                ©2025, Barjes Angulo. Creative and web design by Uncommon Crowd.
              </div>
            </div>
            <div className="flex-1 flex justify-center font-bold text-2xl xl:text-3xl">
              Stay the course.
            </div>
            <div className="flex-1 flex justify-end text-sm font-semibold">
              FOLLOW
            </div>
          </div>
          {/* Mobile */}
          <div className="flex flex-col lg:hidden justify-center items-center pt-4">
            <div className="flex-1 flex justify-center font-bold text-2xl xl:text-3xl">
              Stay the course.
            </div>
            <div className="flex-1 ">
              <Link
                href="/"
                className="text-[.8rem] font-semibold flex items-center justify-center py-6"
              >
                Privacy Policy
              </Link>
              <div className="text-[.6rem] xl:text-[.7rem] text-center">
                ©2025, Barjes Angulo. Creative and web design by Uncommon Crowd.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
