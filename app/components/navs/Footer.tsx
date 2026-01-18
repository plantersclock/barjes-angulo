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
              <Link href="/for-clients#process">Process</Link>
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
              <a
                href="/files/Privacy-Policy.pdf"
                download="Privacy-Policy.pdf"
                className="text-sm font-semibold select-none"
              >
                Privacy Policy
              </a>
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
            <div className="flex flex-1 gap-4 items-center">
              <div className="flex-1 flex justify-end text-sm font-semibold">
                FOLLOW
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/barjesangulo/"
                  target="_blank"
                  className="text-theme-blue-900"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/barj3s/"
                  target="_blank"
                  className="text-theme-blue-900"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/barjes.angulo"
                  target="_blank"
                  className="text-theme-blue-900"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="flex flex-col lg:hidden justify-center items-center pt-4">
            <div className="flex-1 flex justify-center font-bold text-2xl xl:text-3xl">
              Stay the course.
            </div>
            <div className="flex-1 ">
              <a
                href="/files/Privacy-Policy.pdf"
                download="Privacy-Policy.pdf"
                className="text-[.8rem] font-semibold flex items-center justify-center pt-4 select-none"
              >
                Privacy Policy
              </a>
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
