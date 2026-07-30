"use client";

import { ChevronDown } from "lucide-react";

interface Props {
  title: string;
  content: string;
  open: boolean;
  onClick: () => void;
}

export default function FeatureAccordion({
  title,
  content,
  open,
  onClick,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
      >
        <h3 className="font-semibold">{title}</h3>

        <ChevronDown
          size={20}
          className={`transition duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-600 leading-8">{content}</p>
        </div>
      </div>
    </div>
  );
}
