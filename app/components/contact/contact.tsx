"use client";

import React, { useState } from "react";

const Contact = () => {
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
      email: formData.get("email") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to subscribe");
      }

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to subscribe",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full text-white rounded-md transition-all duration-200 bg-theme-blue-900">
      {/* Triangle in top-right corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[10vw] sm:border-l-[5vw] lg:border-l-[2vw] border-l-transparent border-t-[10vw] sm:border-t-[5vw] lg:border-t-[2vw] border-t-white"></div>
      <div className="mx-[10%] py-14">
        <h2 className="text-header">Notes from Barjes</h2>
        <p className="mt-3 text-content">
          Occasional insights on planning, perspective, and staying aligned –
          shared when there&apos;s something worth saying.
        </p>

        {submitStatus === "success" ? (
          <div className="mt-8 p-4 border-white border-2 rounded-md relative">
            <button
              onClick={() => setSubmitStatus("idle")}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl leading-none"
              aria-label="Close message"
            >
              &times;
            </button>
            <p className="font-semibold pr-6">
              Perfect. You&apos;re on the list. Thanks for subscribing!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
            <div className="flex flex-col md:flex-row gap-y-2 gap-x-6 xl:gap-x-8 w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                aria-label="First name"
                className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                aria-label="Last name"
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
            </div>

            {submitStatus === "error" && (
              <p className="text-red-300 text-sm">{errorMessage}</p>
            )}

            <div className="flex justify-end mt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-sm font-semibold disabled:opacity-50"
              >
                <span className="text-sm font-light leading-none mr-2 font-eloquia-text">
                  →
                </span>
                {isSubmitting ? "SUBSCRIBING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        )}
      </div>
      {/* Bottom Text */}

      <div className="absolute left-0 bottom-0 leading-none font-eloquia-display w-full  text-5xl 2xl:text-5xl font-semibold  p-0 -mx-[.2rem] -my-[.5rem] 2xl:-my-2 ">
        SUBSCRIBE
      </div>
    </section>
  );
};

export default Contact;
