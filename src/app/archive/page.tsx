"use client";

import { useState } from "react";
import { RESOURCES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Archive() {
  // Extract unique types and prepend "All"
  const types = ["All", ...Array.from(new Set(RESOURCES.map(r => r.type)))];
  
  // State for active filter
  const [activeType, setActiveType] = useState("All");

  // Filter resources
  const filteredResources = activeType === "All" 
    ? RESOURCES 
    : RESOURCES.filter(r => r.type === activeType);

  return (
    <div className="pt-[80px] md:pt-[96px] pb-[40px] min-h-screen flex flex-col px-6 md:px-10 w-full max-w-[1100px] mx-auto bg-black text-white animate-fade-in">
      {/* Header Section with Filters */}
      <div className="w-full flex justify-end gap-[16px] md:gap-[24px] mb-[32px] md:mb-[40px] border-b border-foreground/10 pb-[16px] md:pb-[24px] shrink-0 overflow-x-auto">
        {types.map(type => {
          // Clean up the type for display
          const displayName = type === "All" ? "all" : type.replace(/[()]/g, '').toLowerCase();
          
          return (
            <button 
              key={type}
              onClick={() => setActiveType(type)}
              className={cn(
                "font-medium text-[0.75rem] md:text-[0.85rem] tracking-widest transition-colors duration-200",
                activeType === type ? "text-foreground" : "text-foreground/30 hover:text-foreground/60"
              )}
            >
              {displayName}
            </button>
          );
        })}
      </div>

      {/* Raw Input Log */}
      <div className="flex flex-col w-full gap-[4px] md:gap-[8px]">
        {filteredResources.map((resource, index) => (
          <a 
            key={`${resource.title}-${index}`} 
            href={resource.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full py-[8px] md:py-[10px] group md:px-[12px] md:-mx-[12px] transition-all duration-300 hover:bg-white/5 rounded-[8px]"
          >
            {/* Date */}
            <span className="text-[0.75rem] md:text-[0.8rem] font-mono text-white/40 shrink-0 w-[48px] md:w-[56px] transition-colors duration-300 group-hover:text-white/60">
              {resource.date}
            </span>
            
            {/* Title */}
            <span className="text-[1.1rem] md:text-[1.2rem] font-medium tracking-tight text-white/80 shrink-0 transition-colors duration-300 group-hover:text-white">
              {resource.title}
            </span>
            
            {/* Dots */}
            <div className="flex-1 border-b border-dotted border-white/10 mx-[12px] md:mx-[24px] group-hover:border-white/30 transition-colors duration-300 self-center"></div>
            
            {/* Type */}
            <span className="text-[0.7rem] md:text-[0.75rem] font-mono text-white/40 shrink-0 transition-colors duration-300 group-hover:text-white/60">
              {resource.type}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
