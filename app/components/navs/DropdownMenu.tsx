"use client";

import React from "react";
import Link from "next/link";
import GradientBar from "../general/GradientBar";

interface DropdownLink {
  title: string;
  href: string;
}

interface DropdownMenuProps {
  links: DropdownLink[];
  align?: "left" | "right";
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ links, align = "left" }) => {
  return (
    <div className={`absolute top-full min-w-55 z-50 ${align === "right" ? "right-0" : "left-0"}`}>
      <div className="bg-white shadow-lg rounded-md py-3 px-4 font-eloquia-text">
        {links.map((link, index) => (
          <div key={index}>
            <Link
              href={link.href}
              className="group/link flex items-center justify-between py-2 text-sm hover:font-semibold hover:text-theme-blue-900 transition-all"
            >
              <span>{link.title}</span>
              <span className="text-theme-blue-900 ml-4 opacity-0 group-hover/link:opacity-100 transition-opacity">
                →
              </span>
            </Link>
            {index < links.length - 1 && <GradientBar />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
