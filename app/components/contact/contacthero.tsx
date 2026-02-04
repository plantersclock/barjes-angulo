"use client";

import React, { useState } from "react";

const ContactHero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "general",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: formData.get("description") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex flex-col justify-center  h-full  w-full text-white rounded-md transition-all duration-200 bg-theme-blue-900">
      <div className="mx-auto w-[80%] lg:w-[75%] xl:w-[65%] py-24 lg:py-12">
        <h1 className="uppercase mb-4  -mt-6 text-sm xl:text-base">
          Contact Us
        </h1>
        <h2 className="text-header">{`I'm listening.`}</h2>
        <p className="mt-6  text-content ">
          I may not be available 24/7, but I&apos;m all in when it counts. Reach
          out for financial planning and media or speaking opportunities below.
          <br />
          <br />
          <span className="font-semibold">
            Already a client or looking to become one?
          </span>{" "}
          Book a meeting with me.
        </p>

        {submitStatus === "success" ? (
          <div className="mt-10 p-4 border-white border-2 rounded-md relative">
            <button
              onClick={() => setSubmitStatus("idle")}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl leading-none"
              aria-label="Close message"
            >
              &times;
            </button>
            <p className="font-semibold pr-6">
              Thank you for reaching out! I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-10">
            <div className="flex flex-col gap-y-2 gap-x-6 xl:gap-x-8 w-full lg:max-w-[80%]">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                aria-label="Full name"
                required
                className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email address"
                required
                className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                aria-label="Phone number"
                className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
              />
              <input
                type="text"
                name="description"
                placeholder="How can I help?"
                aria-label="How can I help?"
                className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
              />
            </div>

            {submitStatus === "error" && (
              <p className="text-red-300 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative flex flex-col items-start lg:max-w-[50%] xl:max-w-[45%] 2xl:max-w-[42%] mt-8"
            >
              <div
                className="flex items-center justify-center text-white text-sm py-2 px-6 rounded-sm transition-all duration-200 w-full"
                style={{ backgroundColor: isSubmitting ? "#666" : "#0096fe" }}
              >
                <span className="text-lg leading-none mr-2 font-eloquia-text">
                  →
                </span>
                {isSubmitting ? "SENDING..." : "CONTACT BARJES"}
              </div>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactHero;
