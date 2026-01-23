"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../images/BarjesAngulo_Mark_Enhanced.svg";
import GenericButton from "../general/GenericButton";
import GradientBar from "../general/GradientBar";
import DropdownMenu from "./DropdownMenu";

const forClientsLinks = [
  { title: "Services", href: "/for-clients#services" },
  { title: "Process", href: "/for-clients#process" },
  { title: "Licenses + Designations", href: "/for-clients#licenses" },
  { title: "Frequently Asked Questions", href: "/for-clients#faq" },
];

const clientAccessLinks = [
  { title: "eMoney", href: "https://wealth.emaplan.com/ema/ria/anglefifth" },
  {
    title: "Charles Schwab",
    href: "https://client.schwab.com/Areas/Access/Login?&kc=y&sim=y",
  },
];

const speakingLinks = [
  { title: "Popular Keynotes", href: "/speaking#keynotes" },
  { title: "Speaker Sheet", href: "/files/BarjesAngulo-SpeakerSheet.pdf", openInNewTab: true },
];

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isForClientsOpen, setIsForClientsOpen] = useState(false);
  const [isSpeakingOpen, setIsSpeakingOpen] = useState(false);
  const [isClientAccessOpen, setIsClientAccessOpen] = useState(false);
  const [mobileForClientsOpen, setMobileForClientsOpen] = useState(false);
  const [mobileSpeakingOpen, setMobileSpeakingOpen] = useState(false);
  const [mobileClientLoginOpen, setMobileClientLoginOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="container mx-auto h-20 my-2 sm:my-6 px-2 xl:px-6 lg:pl-12 flex items-center">
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
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
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
          <div className="flex w-[50%]">
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
            <div className="flex self-center gap-4 xl:gap-8 text-xs xl:text-sm ml-8 font-eloquia-text select-none">
              <Link
                href="/about"
                className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
              >
                ABOUT
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsForClientsOpen(true)}
                onMouseLeave={() => setIsForClientsOpen(false)}
              >
                <Link
                  href="/for-clients"
                  className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
                >
                  FOR CLIENTS
                </Link>
                {isForClientsOpen && <DropdownMenu links={forClientsLinks} />}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsSpeakingOpen(true)}
                onMouseLeave={() => setIsSpeakingOpen(false)}
              >
                <Link
                  href="/speaking"
                  className="hover:text-theme-blue-900 hover:font-semibold transition-colors"
                >
                  SPEAKING
                </Link>
                {isSpeakingOpen && <DropdownMenu links={speakingLinks} />}
              </div>
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
          <div className="flex w-[50%] items-center gap-4 xl:gap-6 justify-end mr-8">
            <div
              className="relative"
              onMouseEnter={() => setIsClientAccessOpen(true)}
              onMouseLeave={() => setIsClientAccessOpen(false)}
            >
              <div className="font-eloquia-text text-xs xl:text-sm hover:text-theme-blue-900 hover:font-semibold transition-colors select-none cursor-pointer ">
                CLIENT ACCESS
              </div>
              {isClientAccessOpen && (
                <DropdownMenu links={clientAccessLinks} openInNewTab={true} />
              )}
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 xl:gap-4">
              <Link
                href="https://www.linkedin.com/in/barjesangulo/"
                target="_blank"
                className="text-theme-blue-900 hover:opacity-70 transition-opacity"
                aria-label="Barjes Angulo LinkedIn profile"
              >
                <svg
                  className="w-4 h-4 xl:w-4 xl:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/barj3s/"
                target="_blank"
                className="text-theme-blue-900 hover:opacity-70 transition-opacity"
                aria-label="Barjes Angulo Instagram profile"
              >
                <svg
                  className="w-4 h-4 xl:w-4 xl:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/barjes.angulo"
                target="_blank"
                className="text-theme-blue-900 hover:opacity-70 transition-opacity"
                aria-label="Barjes Angulo Facebook page"
              >
                <svg
                  className="w-4 h-4 xl:w-4 xl:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
            </div>
            <div className="lg:max-w-[60%] xl:max-w-[47%] 2xl:max-w-[45%]">
              <GenericButton
                title="Work With Barjes"
                linkHref="/contact"
                backgroundColor="#0036fd"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-100 bg-white text-black overflow-y-auto">
          <div className="container mx-auto px-6 py-6">
            {/* Close button */}
            <div className="flex justify-end mb-4">
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
            <div className="flex flex-col select-none">
              {/* Home */}
              <div>
                <Link
                  href="/"
                  className="py-4 block hover:text-theme-blue-900 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <GradientBar />
              </div>

              {/* About */}
              <div>
                <Link
                  href="/about"
                  className="py-4 block hover:text-theme-blue-900 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <GradientBar />
              </div>

              {/* For Clients - Expandable */}
              <div>
                <div className="w-full py-4 flex items-center justify-between">
                  <Link
                    href="/for-clients"
                    className="hover:text-theme-blue-900 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Clients
                  </Link>
                  <button
                    onClick={() =>
                      setMobileForClientsOpen(!mobileForClientsOpen)
                    }
                    className="text-theme-blue-700  font-medium font-eloquia-text"
                  >
                    {mobileForClientsOpen ? "↓" : "→"}
                  </button>
                </div>
                {mobileForClientsOpen && (
                  <div className="pl-6 pb-4 flex flex-col gap-3">
                    {forClientsLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-gray-600 hover:text-theme-blue-900 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
                <GradientBar />
              </div>

              {/* Speaking - Expandable */}
              <div>
                <div className="w-full py-4 flex items-center justify-between">
                  <Link
                    href="/speaking"
                    className="hover:text-theme-blue-900 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Speaking
                  </Link>
                  <button
                    onClick={() => setMobileSpeakingOpen(!mobileSpeakingOpen)}
                    className="text-theme-blue-700 font-medium font-eloquia-text"
                  >
                    {mobileSpeakingOpen ? "↓" : "→"}
                  </button>
                </div>
                {mobileSpeakingOpen && (
                  <div className="pl-6 pb-4 flex flex-col gap-3">
                    {speakingLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="text-gray-600 hover:text-theme-blue-900 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
                <GradientBar />
              </div>

              {/* For Advisors */}
              <div>
                <Link
                  href="/for-advisors"
                  className="py-4 block hover:text-theme-blue-900 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Advisors
                </Link>
                <GradientBar />
              </div>

              {/* Client Login - Expandable */}
              <div>
                <div className="w-full py-4 flex items-center justify-between">
                  <span>Client Login</span>
                  <button
                    onClick={() =>
                      setMobileClientLoginOpen(!mobileClientLoginOpen)
                    }
                    className="text-theme-blue-700 font-medium font-eloquia-text"
                  >
                    {mobileClientLoginOpen ? "↓" : "→"}
                  </button>
                </div>
                {mobileClientLoginOpen && (
                  <div className="pl-6 pb-4 flex flex-col gap-3">
                    {clientAccessLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        className="text-gray-600 hover:text-theme-blue-900 transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
                <GradientBar />
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-8" onClick={() => setIsMenuOpen(false)}>
                <GenericButton
                  title="Work With Barjes"
                  linkHref="/contact"
                  backgroundColor="#0036fd"
                />
              </div>

              {/* Follow Section */}
              <div className="flex items-center justify-end gap-6 mt-8">
                <span className="font-semibold text-sm">FOLLOW</span>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.linkedin.com/in/barjesangulo/"
                    target="_blank"
                    className="text-theme-blue-900"
                    aria-label="Barjes Angulo LinkedIn profile"
                  >
                    <svg
                      className="w-6 h-6"
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
                    aria-label="Barjes Angulo Instagram profile"
                  >
                    <svg
                      className="w-6 h-6"
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
                    aria-label="Barjes Angulo Facebook page"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
