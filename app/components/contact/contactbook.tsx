"use client";

import React, { useState } from "react";

const ContactBook = () => {
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
      formType: "booking",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      organization: formData.get("organization") as string,
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
      <div className="mx-auto w-[80%] lg:w-[75%] xl:w-[65%] py-12">
        <h2 className="text-header">{`Book an in-person experience.`}</h2>
        <p className="mt-6 leading-snug 2xl:leading-tight text-2xl font-eloquia-text font-light">
          Use the form to contact Barjes for keynotes, panels, and other live
          events.
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
                type="text"
                name="organization"
                placeholder="Organization"
                aria-label="Organization"
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
              className="w-full lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[50%] mt-8 inline-flex items-center gap-2 px-4 2xl:px-6 py-3 sm:py-2 2xl:py-3 text-white text-xs 2xl:text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: isSubmitting ? "#666" : "#0096fe",
                clipPath:
                  "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
              }}
            >
              <div className="w-full text-center lg:text-left flex justify-center items-center">
                <span className="text-lg leading-none mr-2 font-eloquia-text">→</span>
                <span className="font-eloquia-text text-sm">
                  {isSubmitting ? "SENDING..." : "REQUEST A BOOKING"}
                </span>
              </div>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactBook;
