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
    <div className="pt-[80px] md:pt-[96px] pb-[40px] min-h-screen flex flex-col px-6 md:px-10 w-full max-w-[1100px] mx-auto animate-fade-in bg-black text-white">
      {/* Header Section with Filters */}
      <div className="w-full flex justify-between items-end mb-[32px] md:mb-[40px] border-b border-white/10 pb-[16px] md:pb-[24px] shrink-0">
        
        {/* Left Side: Years */}
        <div className="flex gap-[8px] md:gap-[12px] font-medium text-[0.75rem] md:text-[0.85rem] tracking-widest lowercase">
          {allYears.map((year, index) => (
            <div key={year} className="flex gap-[8px] md:gap-[12px]">
              <button 
                onClick={() => setActiveYear(activeYear === year ? "All" : year)}
                className={cn(
                  "transition-opacity duration-200",
                  activeYear === year ? "opacity-100" : "opacity-40 hover:opacity-60"
                )}
              >
                {year}
              </button>
              {index < allYears.length - 1 && <span className="opacity-20">/</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-[16px] md:gap-[24px] overflow-x-auto">
          {tags.map(tag => {
          const displayName = tag === "All" ? "all" : tag.toLowerCase();
          
          return (
            <button 
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "font-medium text-[0.75rem] md:text-[0.85rem] tracking-widest transition-opacity duration-200 lowercase",
                activeTag === tag ? "opacity-100" : "opacity-30 hover:opacity-60"
              )}
            >
              {displayName}
            </button>
          );
        })}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full items-start">
        {filteredArticles.map((article, index) => (
          <a 
            key={`${article.title}-${index}`} 
            href={article.link || "#"}
            target={article.link?.startsWith("http") ? "_blank" : undefined}
            rel={article.link?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col group w-full cursor-pointer transition-all duration-500 hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-[16/9] bg-white/5 relative overflow-hidden rounded-[8px] mb-[16px]">
              {article.image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 block"
                  />
                </>
              ) : (
                <div className="absolute inset-0 bg-foreground/5 flex flex-col items-center justify-center border border-foreground/10 transition-colors">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>
                  <span className="opacity-40 font-mono text-[0.6rem] uppercase tracking-widest z-10">Image Pending</span>
                </div>
              )}
            </div>
            
            {/* Meta */}
            <div className="flex justify-between items-center mb-[8px]">
              <span className="text-[0.7rem] md:text-[0.75rem] font-mono text-white/40 shrink-0">
                {article.year}
              </span>
              <span className="text-[0.65rem] md:text-[0.7rem] font-mono text-white/60 shrink-0 lowercase">
                ({article.tags[0]})
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[1.1rem] md:text-[1.2rem] font-medium tracking-tight leading-tight">
              {article.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
