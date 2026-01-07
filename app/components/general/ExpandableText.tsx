"use client";

import React from "react";

interface ExpandableTextProps {
  title: string;
  description: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  title,
  description,
  isExpanded = false,
  onToggle,
}) => {
  return (
    <details
      className="group"
      open={isExpanded}
      onToggle={(e) => {
        if (onToggle) {
          e.preventDefault();
        }
      }}
    >
      <summary
        className="flex cursor-pointer list-none items-center gap-3 select-none"
        onClick={(e) => {
          if (onToggle) {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="text-xl font-semibold group-open:hidden">+</span>
        <span className="text-xl font-semibold hidden group-open:inline">
          −
        </span>
        <h3 className="font-semibold text-xl">{title}</h3>
      </summary>
      <p className="text-sm sm:text-base mt-4 whitespace-pre-line">
        {description}
      </p>
    </details>
  );
};

export default ExpandableText;
