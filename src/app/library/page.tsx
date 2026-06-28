"use client";

import { useState } from "react";
import { RESOURCES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Library() {
  // Extract unique cleaned types and prepend "all"
  const cleanTypes = ["all", ...Array.from(new Set(RESOURCES.map(r => r.type.replace(/[()]/g, '').toLowerCase())))];
  
  const [activeType, setActiveType] = useState("all");

  const filteredResources = activeType === "all"
    ? RESOURCES
    : RESOURCES.filter(r => r.type.replace(/[()]/g, '').toLowerCase() === activeType);

  return (
    <div className="pt-[80px] md:pt-[100px] pb-[80px] min-h-screen flex flex-col px-6 md:px-10 w-full max-w-[920px] mx-auto animate-fade-in bg-black text-white">
      {/* Header Section with Filters */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 border-b border-[#27272A]/50 pb-5 shrink-0">
        <div className="font-mono text-[0.75rem] text-[#71717A] tracking-wider lowercase">
          curated links & resources
        </div>
        <div className="flex gap-6 overflow-x-auto font-mono text-[0.7rem] lowercase tracking-wider text-[#71717A] no-scrollbar">
          {cleanTypes.map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={cn(
                "transition-colors duration-200 border-b pb-1 shrink-0",
                activeType === type ? "text-[#E4E4E7] border-[#E4E4E7]" : "border-transparent hover:text-[#A1A1AA]"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Resource List */}
      <div className="flex flex-col w-full gap-2 md:gap-3">
        {filteredResources.map((resource, index) => {
          const cleanType = resource.type.replace(/[()]/g, '').toLowerCase();
          const isExternal = resource.link && resource.link !== "#";

          return (
            <a
              key={`${resource.title}-${index}`}
              href={resource.link || "#"}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center w-full py-3 md:py-3.5 px-3 md:px-4 -mx-3 md:-mx-4 group transition-all duration-300 hover:bg-white/[0.04] rounded-lg border border-transparent hover:border-white/[0.08]"
            >
              {/* Date */}
              <span className="text-[0.7rem] md:text-[0.75rem] font-mono text-[#71717A] shrink-0 w-[48px] md:w-[56px] transition-colors duration-300 group-hover:text-[#A1A1AA]">
                {resource.date}
              </span>

              {/* Title */}
              <span className="text-[0.95rem] md:text-[1.05rem] font-normal tracking-tight text-[#E4E4E7] shrink-0 transition-colors duration-300 group-hover:text-white">
                {resource.title}
              </span>

              {/* Dotted Leader Line */}
              <div className="flex-1 border-b border-dotted border-[#27272A] mx-3 md:mx-6 group-hover:border-[#52525B] transition-colors duration-300 self-center"></div>

              {/* Badge & Arrow */}
              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                <span className="text-[0.65rem] md:text-[0.7rem] font-mono text-[#71717A] group-hover:text-[#E4E4E7] transition-colors lowercase tracking-wider px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.05] group-hover:border-white/[0.15]">
                  {cleanType}
                </span>
                {isExternal && (
                  <svg className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
