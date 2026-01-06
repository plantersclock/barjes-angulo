import React from "react";
import PRBBlock from "./components/prbblock";

import finLogo from "../images/financial-planning-logo.png";
import wealthLogo from "../images/wealth-logo.png";
import businessLogo from "../images/business-logo.png";

const PRBBoxes = () => {
  return (
    <div className="grid md:grid-cols-3 gap-1">
      <PRBBlock
        titleText="Financial Planning + Strategy"
        paragraph1={`We’ll work together to create a clear and strategic financial plan that supports what you value most and adapts as your life evolves.`}
        paragraph2={`Whether you're growing what you’ve built or protecting it for what’s next, we’ll make sure your money works with the life you actually want to live.`}
        sideText="PLANNING"
        backgroundColor="#59C4FF"
        linkText="Book This Keynote"
        linkHref="#"
        image={finLogo}
      />
      <PRBBlock
        titleText="Wealth Management + Retirement Planning"
        paragraph1={`If retirement is on the horizon, now is the time to get clear. In these next few years, the decisions you make will shape the life you get to live after work.`}
        paragraph2={`We’ll take a thoughtful look at what you’ve built, what you need, and what matters most then create a strategy that protects your time, your lifestyle, and your future.`}
        sideText="RETIREMENT"
        backgroundColor="#32B6FF"
        linkText="Book This Keynote"
        linkHref="#"
        image={wealthLogo}
      />
      <PRBBlock
        titleText="Business Solutions"
        paragraph1={`Your business isn’t separate from your life – it’s a big part of it. We’ll look at the full picture: your goals, your values, and where you want both your business and life to go next.`}
        paragraph2={`From goal projection and needs analysis to valuation, exit strategies, and hands-on implementation, you’ll have clarity and purpose at every stage.`}
        sideText="BUSINESS"
        backgroundColor="#10A9FF"
        linkText="Book This Keynote"
        linkHref="#"
        image={businessLogo}
      />
    </div>
  );
};

export default PRBBoxes;
