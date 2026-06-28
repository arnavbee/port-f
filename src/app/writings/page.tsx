"use client";

import { useState } from "react";
import { ARTICLES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Writings() {
  // Extract unique tags and prepend "All"
  const allTags = Array.from(new Set(ARTICLES.flatMap(a => a.tags)));
  const tags = ["All", ...allTags];
  
  // Extract unique years for the left heading
  const allYears = Array.from(new Set(ARTICLES.map(a => a.year))).sort((a, b) => Number(b) - Number(a));
  const yearsHeading = allYears.join(" / ");
  
  // State for active filters
  const [activeTag, setActiveTag] = useState("All");
  const [activeYear, setActiveYear] = useState("All");

  // Filter articles
  const filteredArticles = ARTICLES.filter(a => {
    const matchesTag = activeTag === "All" || a.tags.includes(activeTag);
    const matchesYear = activeYear === "All" || a.year === activeYear;
    return matchesTag && matchesYear;
  });

  return (
    <div className="pt-[80px] md:pt-[100px] pb-[80px] min-h-screen flex flex-col px-6 md:px-10 w-full max-w-[920px] mx-auto animate-fade-in bg-black text-white">
      {/* Header Section with Filters */}
      <div className="w-full flex justify-between items-end mb-10 border-b border-[#27272A]/50 pb-5 shrink-0">
        
        {/* Left Side: Years */}
        <div className="flex gap-4 font-mono text-[0.7rem] lowercase tracking-wider text-[#71717A]">
          {allYears.map((year, index) => (
            <div key={year} className="flex gap-4">
              <button 
                onClick={() => setActiveYear(activeYear === year ? "All" : year)}
                className={cn(
                  "transition-colors duration-200 border-b pb-1",
                  activeYear === year ? "text-[#E4E4E7] border-[#E4E4E7]" : "border-transparent hover:text-[#A1A1AA]"
                )}
              >
                {year}
              </button>
              {index < allYears.length - 1 && <span className="text-[#3F3F46] border-b border-transparent pb-1">/</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-6 overflow-x-auto font-mono text-[0.7rem] lowercase tracking-wider text-[#71717A]">
          {tags.map(tag => {
          const displayName = tag === "All" ? "all" : tag.toLowerCase();
          
          return (
            <button 
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "transition-colors duration-200 border-b pb-1 shrink-0",
                activeTag === tag ? "text-[#E4E4E7] border-[#E4E4E7]" : "border-transparent hover:text-[#A1A1AA]"
              )}
            >
              {displayName}
            </button>
          );
        })}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-start">
        {filteredArticles.map((article, index) => (
          <a 
            key={`${article.title}-${index}`} 
            href={article.link || "#"}
            target={article.link?.startsWith("http") ? "_blank" : undefined}
            rel={article.link?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col group w-full cursor-pointer transition-all duration-500 hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-[16/9] bg-[#18181B] relative overflow-hidden rounded-lg mb-4">
              {article.image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-[#09090B] flex flex-col items-center justify-center border border-[#27272A] transition-colors">
                  <span className="text-[#71717A] font-mono text-[0.6rem] lowercase tracking-wider z-10">no image</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-[0.95rem] md:text-[1.05rem] font-normal tracking-tight leading-snug mb-3 transition-colors duration-300 text-[#E4E4E7] group-hover:text-white">
              {article.title}
            </h3>
            
            {/* Meta */}
            <div className="flex items-center gap-2 mt-auto text-[#71717A] font-mono text-[0.65rem] tracking-wider lowercase">
              <span>{article.year}</span>
              <span>·</span>
              <span>{article.tags[0]}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
