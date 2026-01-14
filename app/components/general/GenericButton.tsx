import Link from "next/link";
import React from "react";

interface GenericButtonProps {
  title: string;
  linkHref: string;
  backgroundColor: string;
  minWidth?: string;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  title,
  linkHref,
  backgroundColor,
  minWidth,
}) => {
  return (
    <Link
      href={linkHref}
      className={`w-full inline-flex items-center gap-2 px-4 2xl:px-6 py-2 2xl:py-3 text-white text-xs 2xl:text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity ${
        minWidth || ""
      }`}
      style={{
        backgroundColor,
        clipPath:
          "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)",
      }}
    >
      <div className="w-full text-center lg:text-left flex justify-center">
        <span className="text-lg leading-none mr-2 font-eloquia-text">→</span>
        <span className="font-eloquia-text">{title}</span>
      </div>
    </Link>
  );
};

export default GenericButton;
