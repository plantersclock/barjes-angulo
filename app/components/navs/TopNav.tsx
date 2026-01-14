"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../images/logo.png";
import GenericButton from "../general/GenericButton";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="container mx-auto h-20 my-2 sm:my-6 px-2 lg:px-6 lg:pl-12 flex items-center">
        {/* Mobile Layout */}
        <div className="flex lg:hidden w-full justify-between items-center">
          {/* Centered Logo */}
          <div className="flex-1" />
          <div className="relative h-18 w-20">
            <Link href="/">
              <Image
                src={logo}
                alt="Barjes Logo"
                fill
                className="object-contain"
                priority
                quality={100}
              />
            </Link>
          </div>
          {/* Hamburger Button */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors select-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full">
          <div className="flex w-[60%]">
            <div className="relative h-22 w-[10%] xl:w-[8%]">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Barjes Logo"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                />
              </Link>
            </div>
            <div className="flex self-center gap-8 text-xs xl:text-sm ml-8 font-eloquia-text select-none">
              <Link
                href="/about"
                className="hover:text-theme-blue-900 hover:font-semibold transition-colors "
              >
                ABOUT
              </Link>
              <Link
                href="/for-clients"
                className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
              >
                FOR CLIENTS
              </Link>
              <Link
                href="/speaking"
                className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
              >
                SPEAKING
              </Link>
              <Link
                href="/for-advisors"
                className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
              >
                FOR ADVISORS
              </Link>
              <Link
                href="/contact"
                className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
          <div className="flex w-[40%] items-center gap-6 justify-end mr-8">
            <Link
              href="/CLIENT ACCESS"
              className="font-eloquia-text text-xs xl:text-sm hover:text-theme-blue-900 hover:font-semibold transition-colors select-none"
            >
              CLIENT ACCESS
            </Link>
            <div className="lg:max-w-[60%] xl:max-w-[47%] 2xl:max-w-[45%]">
              <GenericButton
                title="Work With Barjes"
                linkHref="#"
                backgroundColor="#0036fd"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-100 bg-white text-black">
          <div className="container mx-auto px-6 py-6">
            {/* Close button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors select-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 font-eloquia-text text-lg select-none">
              <Link
                href="/about"
                className="hover:text-theme-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/for-clients"
                className="hover:text-theme-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FOR CLIENTS
              </Link>
              <Link
                href="/speaking"
                className="hover:text-theme-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SPEAKING
              </Link>
              <Link
                href="/for-advisors"
                className="hover:text-theme-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FOR ADVISORS
              </Link>
              <Link
                href="/contact"
                className="hover:text-theme-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                href="/client-access"
                className="hover:text-theme-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CLIENT ACCESS
              </Link>

              {/* Mobile CTA Button */}
              <div className="mt-8">
                <GenericButton
                  title="Work With Barjes"
                  linkHref="#"
                  backgroundColor="#0036fd"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
