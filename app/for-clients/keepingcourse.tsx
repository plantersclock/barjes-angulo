import React from "react";
import GradientBar from "../components/general/GradientBar";
import CourseCard from "./components/coursecard";

import icon1 from "../images/icon-clarity.png";
import icon2 from "../images/icon-org.png";
import icon3 from "../images/icon-reporting.png";
import icon4 from "../images/icon-implementation.png";
import icon5 from "../images/icon-accountability.png";

const KeepingCourse = () => {
  return (
    <div className="mx-[10%]">
      <h2 className="font-semibold font-eloquia-display text-4xl text-center mt-20 ">
        Keeping you on course.
      </h2>
      <p className="text-center mt-4">
        A simple 5-point process will ensure your goals are met in the most
        effective, confident way possible.
      </p>
      <div className="mt-12">
        <div className="mx-[9%] hidden lg:block">
          <GradientBar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
          <CourseCard
            image={icon1}
            title="CLARITY"
            description="Planning starts with getting to know you, your lifestyle, and your goals. My team and I will address concerns, answer questions, and identify your future financial objectives."
          />
          <CourseCard
            image={icon2}
            title="ORGANIZATION"
            description="A disorganized plan diminishes your chances of success. That's why we'll coordinate all of your accounts, documents, and money flow through our wealth portal."
          />
          <CourseCard
            image={icon3}
            title="REPORTING"
            description="To chart your course, we need to understand where you currently are. We'll review financial statements, investment allocations, and retirement income projections."
          />
          <CourseCard
            image={icon4}
            title="IMPLEMENTATION"
            description="Once we're ready to take action, we'll work together to implement the steps laid out in your financial plan."
          />
          <CourseCard
            image={icon5}
            title="ACCOUNTABILITY"
            description="Onward, we'll monitor accounts, make necessary changes to your plan, expand policies, and more to ensure you can adapt to changing circumstances and are optimizing your financial standing."
          />
        </div>
      </div>
    </div>
  );
};

export default KeepingCourse;
