import React from "react";

interface GradientBarProps {
  className?: string;
}

const GradientBar: React.FC<GradientBarProps> = ({ className = "" }) => {
  return (
    <div
      className={`h-1 w-full bg-linear-to-r from-[#0315ad] to-[#08a4ff] ${className}`}
    />
  );
};

export default GradientBar;
