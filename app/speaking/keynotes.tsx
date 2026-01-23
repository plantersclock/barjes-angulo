import React from "react";
import KeynoteBlock from "./components/keynoteblock";

const Keynotes = () => {
  return (
    <section id="keynotes" className="relative">
      <h2 className="text-header text-center mb-20 lg:mt-22">
        Popular Keynotes
      </h2>
      <div className="grid lg:grid-cols-3 gap-1 relative">
        <KeynoteBlock
          titleText="From Transaction to Trust"
          boldText="A practical roadmap for advisors "
          regularText="moving from commission-based models to fee-based relationships–covering mindset, client communication, and operational shifts that support long-term growth."
          bullet1="How to reframe your value from “product” to ongoing guidance"
          bullet2="What clients need to hear during a pricing and model transition"
          bullet3="Structural changes that make a fee-based practice go from
                stressful to sustainable"
          backgroundColor="#72C3FA"
          linkText="BOOK THIS KEYNOTE"
          linkHref="#booking"
        />
        <KeynoteBlock
          titleText="The Modern Advisory Practice"
          boldText="An inside look "
          regularText="at how virtual resources, smart delegation, and the right infrastructure can free advisors from day-to-day friction without sacrificing quality or control."
          bullet1={`Where virtual support creates the highest leverage (and where it doesn’t)`}
          bullet2={`How to regain time without breaking compliance or client trust`}
          bullet3={`Systems that allow advisors to focus on planning instead of admin`}
          backgroundColor="#58B5F9"
          linkText="BOOK THIS KEYNOTE"
          linkHref="#booking"
        />
        <KeynoteBlock
          titleText="Workflow That Works"
          boldText="A workflow-focused session "
          regularText="on reducing bottlenecks, clarifying ownership, and creating momentum across advisory teams–so work moves forward instead of piling up."
          bullet1="How to identify friction points slowing your team down"
          bullet2="Simple workflow structures that improve accountability and follow-through"
          bullet3="Ways to align people, process, and technology for smoother execution"
          backgroundColor="#47A8F8"
          linkText="BOOK THIS KEYNOTE"
          linkHref="#booking"
        />
      </div>
    </section>
  );
};

export default Keynotes;
