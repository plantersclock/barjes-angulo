"use client";

import React from "react";

interface ExpandableTextProps {
  title: string;
  description: React.ReactNode;
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
        <h3 className="font-semibold text-lg xl:text-xl">{title}</h3>
      </summary>
      <div className="text-content mt-4">{description}</div>
    </details>
  );
};

export default ExpandableText;
