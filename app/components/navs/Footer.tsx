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
              quality={100}
            />
          </Link>
        </div>
        <div className="col-span-8 lg:col-span-5 2xl:col-span-4 grid grid-cols-2 gap-y-14 lg:grid-cols-4 w-full justify-between mt-12 lg:mt-0">
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <Link href="/about" className="font-semibold mb-2">
              ABOUT
            </Link>
            <div className="flex flex-col font-light gap-1 select-none">
              <Link href="/about#philosophy">Philosophy</Link>
              <Link href="/for-clients#licenses">Licenses</Link>
              <Link href="/">Disclosures</Link>
            </div>
          </div>
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <Link href="/for-clients" className="font-semibold mb-2">
              EXPERTISE
            </Link>
            <div className="flex flex-col font-light gap-1 select-none">
              <Link href="/for-clients">Process</Link>
              <Link href="/for-clients">Financial Planning</Link>
              <Link href="/for-advisors">For Advisors</Link>
            </div>
          </div>
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <Link href="/speaking" className="font-semibold mb-2">
              SPEAKING
            </Link>
            <div className="flex flex-col font-light gap-1 select-none">
              <Link href="/speaking#keynotes">Keynotes</Link>
              <Link href="/">Media Kit</Link>
            </div>
          </div>
          <div className="flex flex-col text-sm mx-auto lg:mx-0">
            <Link href="/contact" className="font-semibold mb-2">
              CONTACT
            </Link>
            <div className="flex flex-col font-light gap-1 select-none">
              <Link href="/contact">Send a Message</Link>
              <Link href="/speaking#booking">Request to Book</Link>
              <Link href="/contact">Schedule a Call</Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 py-8">
          {/* Desktop */}
          <div className="hidden lg:flex  justify-between items-end pt-12">
            <div className="flex-1">
              <Link href="/" className="text-sm font-semibold select-none">
                Privacy Policy
              </Link>
              <Link
                href="https://www.uncommoncrowd.com"
                target="_blank"
                className="text-[.6rem] xl:text-[.7rem] leading-tight block py-2"
              >
                {`Advisory services are provided through Cornerstone Planning
                Group, Inc., an independent advisory firm registered with the
                Securities and Exchange Commission.`}
              </Link>
              <Link
                href="https://www.uncommoncrowd.com"
                target="_blank"
                className="text-[.6rem] xl:text-[.7rem]  block"
              >
                ©2025, Barjes Angulo. Creative and web design by Uncommon Crowd.
              </Link>
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
                className="text-[.8rem] font-semibold flex items-center justify-center pt-4 select-none"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.uncommoncrowd.com"
                target="_blank"
                className="text-[.6rem] xl:text-[.7rem] text-center leading-tight block "
              >
                {`Advisory services are provided through Cornerstone Planning
                Group, Inc., an independent advisory firm registered with the
                Securities and Exchange Commission.`}
              </Link>
              <Link
                href="https://www.uncommoncrowd.com"
                target="_blank"
                className="text-[.6rem] xl:text-[.7rem] text-center block mt-2"
              >
                ©2025, Barjes Angulo. Creative and web design by Uncommon Crowd.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
