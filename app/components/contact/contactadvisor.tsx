"use client";

import React, { useState } from "react";

const ContactAdvisor = () => {
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
      formType: "advisor",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      practiceWebsite: formData.get("practiceWebsite") as string,
    };

    try {
      const nameParts = data.name.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const [emailResult] = await Promise.allSettled([
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email, firstName, lastName }),
        }),
      ]);

      if (
        emailResult.status === "rejected" ||
        (emailResult.status === "fulfilled" && !emailResult.value.ok)
      ) {
        const errorMsg =
          emailResult.status === "fulfilled"
            ? (await emailResult.value.json()).error
            : "Failed to send message";
        throw new Error(errorMsg || "Failed to send message");
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
          Financial Advisor Coaching
        </h1>
        <h2 className="text-header">{`The advisor's advisor.`}</h2>
        <p className="mt-6 text-content">
          <span className="font-semibold">
            Barjes supports advisors who want to run their practice with more
            clarity, less friction, and better work-life integration.
          </span>{" "}
          <br />
          <br />
          That&apos;s why 1:1 mentorships, small group masterminds, and a
          working book club are taking shape. This is hands-on,
          advisor-to-advisor work focused on the realities of running a practice
          day to day – workflow, decision-making, client experience, and the
          systems behind it all. Participation will be limited and intentionally
          focused. <br />
          <br />
          Join the waitlist for early access and to help shape what&apos;s
          offered first.
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
                name="practiceWebsite"
                placeholder="Practice Website"
                aria-label="Practice website URL"
                className="flex-1 px-3 py-1 bg-white border border-white  placeholder-black/80 text-black"
              />
            </div>

            {submitStatus === "error" && (
              <p className="text-red-300 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative flex flex-col items-start lg:max-w-[60%] xl:max-w-[55%] 2xl:max-w-[45%] mt-8"
            >
              <div
                className="flex items-center justify-center text-white text-sm py-2 px-6 rounded-sm transition-all duration-200 w-full"
                style={{ backgroundColor: isSubmitting ? "#666" : "#0096fe" }}
              >
                <span className="text-lg leading-none mr-2 font-eloquia-text">
                  →
                </span>
                {isSubmitting ? "SENDING..." : "JOIN THE WAITLIST"}
              </div>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactAdvisor;
