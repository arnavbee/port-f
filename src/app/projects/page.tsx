"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const scrappedProjects = [
  {
    title: "Digital Garden",
    description: "My personal digital garden and knowledge base (Not Anymore).",
    tags: ["Archive", "Notes", "Web"],
    image: "/digital_garden_bw.png",
    link: "https://qweb-two.vercel.app",
    year: "2023"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"shipped" | "scrapped">("shipped");

  return (
    <div className={cn(
      "pt-[120px] md:pt-[160px] pb-[80px] flex flex-col w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 min-h-screen transition-colors duration-300 animate-fade-in text-white",
      "bg-black"
    )}>
      
      {/* Header Section with Toggle */}
      <div className="w-full flex justify-between items-end mb-[32px] md:mb-[40px] border-b border-white/10 pb-[16px] md:pb-[24px] shrink-0">
        <div className="flex gap-[8px] md:gap-[12px] font-medium text-[0.75rem] md:text-[0.85rem] tracking-widest lowercase">
          <button 
            onClick={() => setActiveTab("shipped")}
            className={cn(
              "transition-opacity duration-200",
              activeTab === "shipped" ? "opacity-100" : "opacity-40 hover:opacity-60"
            )}
          >
            shipped
          </button>
          <span className="opacity-20">/</span>
          <button 
            onClick={() => setActiveTab("scrapped")}
            className={cn(
              "transition-opacity duration-200",
              activeTab === "scrapped" ? "opacity-100" : "opacity-40 hover:opacity-60"
            )}
          >
            scrapped
          </button>
        </div>
      </div>

      {activeTab === "shipped" ? (
        <div className="space-y-16 max-w-[800px] animate-fade-in-up" style={{ animationFillMode: "both" }}>
          {/* Grada */}
          <div>
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-[1.5rem] font-semibold">
                <a href="https://www.grada-hq.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                  Grada
                </a>
              </h3>
              <span className="font-mono text-[0.8rem] text-white/40">2025 – present</span>
            </div>
            <p className="text-[1.1rem] text-white/70 leading-relaxed mb-6">
              AI-powered operations platform for D2C fashion brands on Indian marketplaces. Handles PO processing, GST invoicing, barcode generation, packing lists, and catalog management — the back-office layer that breaks at scale.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[0.85rem] font-mono text-white/50 mb-6">
              <span>Built solo.</span>
              <span>Next.js 14</span>
              <span>·</span>
              <span>FastAPI</span>
              <span>·</span>
              <span>Supabase</span>
              <span>·</span>
              <span>Cloudflare R2</span>
            </div>
            <div className="flex gap-4">
              <a href="https://www.grada-hq.com" target="_blank" rel="noopener noreferrer" className="text-[1rem] font-semibold hover:text-white/70 transition-colors">
                [Visit Grada ↗]
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[1rem] font-semibold hover:text-white/70 transition-colors">
                [GitHub ↗]
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[1rem] font-semibold hover:text-white/70 transition-colors">
                [Demo Video ↗]
              </a>
            </div>
          </div>

          {/* HiringPro */}
          <div>
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-[1.5rem] font-semibold">HiringPro</h3>
              <span className="font-mono text-[0.8rem] text-white/40">2025</span>
            </div>
            <p className="text-[1.1rem] text-white/70 leading-relaxed mb-6">
              AI resume screening engine. Built as a live Next.js app in 48 hours.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[1rem] font-semibold hover:text-white/70 transition-colors">
              [See it ↗]
            </a>
          </div>

          {/* Stablecoin Surge */}
          <div>
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-[1.5rem] font-semibold">Stablecoin Surge</h3>
              <span className="font-mono text-[0.8rem] text-white/40">2022</span>
            </div>
            <p className="text-[1.1rem] text-white/70 leading-relaxed mb-6">
              Independent research report on stablecoin adoption. Funded by CoinDCX × Solana Foundation.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[1rem] font-semibold hover:text-white/70 transition-colors">
              [Read the report ↗]
            </a>
          </div>
        </div>
      ) : (
        <div className="max-w-[800px] animate-fade-in-up" style={{ animationFillMode: "both" }}>
          {scrappedProjects.length > 0 ? (
            /* THE WHITEBOARD */
            <div className="relative w-full p-8 md:p-12 bg-[#09090B] border border-[#27272A] rounded-[16px] shadow-2xl overflow-hidden min-h-[300px]">
              {/* Subtle grid pattern for the whiteboard */}
              <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(#71717A 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
              
              <div className="relative z-10 flex flex-wrap gap-10 justify-center md:justify-start">
                {scrappedProjects.map((project: any, i: number) => {
                  const rotations = ["-rotate-2", "rotate-3", "-rotate-1", "rotate-2"];
                  const rotateClass = rotations[i % rotations.length];
                  
                  return (
                    <a 
                      key={project.title}
                      href={project.link || "#"}
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className={cn(
                        "group relative flex flex-col w-[260px] p-3 pb-8 bg-[#18181B] border border-[#27272A] shadow-2xl transition-all duration-300 hover:z-20 hover:scale-105 hover:shadow-black/50",
                        rotateClass,
                        !project.link && "cursor-default"
                      )}
                    >
                      {/* The Tape */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-white/10 backdrop-blur-md border border-white/5 shadow-sm rotate-2 z-10"></div>
                      
                      {/* Content Image Area */}
                      <div className="bg-[#030303] p-4 h-[160px] flex flex-col border border-[#27272A]/50 relative overflow-hidden">
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="text-[1.1rem] font-medium text-[#E4E4E7] group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-[0.85rem] text-[#A1A1AA] font-light leading-snug flex-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Bottom Label Area */}
                      <div className="mt-4 px-2 flex justify-between items-center">
                        <div className="flex gap-2 font-mono text-[0.6rem] text-[#71717A] uppercase tracking-wider">
                          <span>{project.year || "Archive"}</span>
                          <span>·</span>
                          <span>{project.tags?.[0] || "Draft"}</span>
                        </div>
                        {project.link && (
                          <span className="text-[#71717A] group-hover:text-white transition-colors text-sm">↗</span>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-[#71717A]">No scrapped projects to show.</p>
          )}
        </div>
      )}

    </div>
  );
}
