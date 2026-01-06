import Link from "next/link";
import React from "react";

interface GenericButtonProps {
  title: string;
  linkHref: string;
  backgroundColor: string;
  cornerColor?: string;
  minWidth?: string;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  title,
  linkHref,
  backgroundColor,
  cornerColor,
  minWidth,
}) => {
  return (
    <Link
      href={linkHref}
      className={`w-full inline-flex items-center gap-2 px-4 2xl:px-6 py-2 2xl:py-3 text-white text-xs 2xl:text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity relative ${
        minWidth || ""
      }`}
      style={{ backgroundColor }}
    >
      {/* Triangle in top-right corner */}
      <div
        className={`absolute top-0 right-0 w-0 h-0 border-l-[3vw] sm:border-l-[1.5vw] lg:border-l-[.8vw] border-l-transparent border-t-[3vw] sm:border-t-[1.5vw] lg:border-t-[.8vw] ${
          cornerColor || "border-t-white"
        }`}
      ></div>
      <div className="w-full text-center lg:text-left">
        <span className="text-lg leading-none mr-2 font-eloquia-text">→</span>
        <span className="font-eloquia-text">{title}</span>
      </div>
    </Link>
  );
};

export default GenericButton;
