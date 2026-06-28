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
      "pt-[80px] md:pt-[100px] pb-[80px] flex flex-col w-full max-w-[720px] mx-auto px-6 md:px-10 min-h-screen transition-colors duration-300 animate-fade-in text-white",
      "bg-black"
    )}>
      
      {/* Header Section with Toggle */}
      <div className="w-full flex justify-end items-end mb-[32px] md:mb-[40px] border-b border-white/10 pb-[16px] md:pb-[24px] shrink-0">
        <div className="flex gap-[16px] md:gap-[24px] font-mono text-[0.7rem] tracking-wider lowercase text-[#71717A]">
          <button 
            onClick={() => setActiveTab("shipped")}
            className={cn(
              "transition-colors duration-200 border-b pb-1",
              activeTab === "shipped" ? "text-[#E4E4E7] border-[#E4E4E7]" : "border-transparent hover:text-[#A1A1AA]"
            )}
          >
            shipped
          </button>
          <button 
            onClick={() => setActiveTab("scrapped")}
            className={cn(
              "transition-colors duration-200 border-b pb-1",
              activeTab === "scrapped" ? "text-[#E4E4E7] border-[#E4E4E7]" : "border-transparent hover:text-[#A1A1AA]"
            )}
          >
            scrapped
          </button>
        </div>
      </div>

      {activeTab === "shipped" ? (
        <div className="space-y-16 animate-fade-in-up" style={{ animationFillMode: "both" }}>
          {/* Grada */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-[1.15rem] md:text-[1.25rem] font-normal tracking-tight text-[#E4E4E7]">
                <a href="https://www.grada-hq.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Grada
                </a>
              </h3>
              <span className="font-mono text-[0.65rem] text-[#71717A]">2025 &ndash; present</span>
            </div>
            <p className="text-[0.85rem] text-[#A1A1AA] font-light leading-relaxed mb-4">
              AI-powered operations platform for D2C fashion brands on Indian marketplaces. Handles PO processing, GST invoicing, barcode generation, packing lists, and catalog management — the back-office layer that breaks at scale.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-mono text-[#71717A] lowercase mb-5">
              <span>built solo</span>
              <span>·</span>
              <span>next.js</span>
              <span>·</span>
              <span>fastapi</span>
              <span>·</span>
              <span>supabase</span>
              <span>·</span>
              <span>cloudflare r2</span>
            </div>
            <div className="flex gap-5 text-[0.7rem] font-mono text-[#71717A] lowercase">
              <a href="https://www.grada-hq.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4E4E7] transition-colors border-b border-[#27272A] hover:border-[#52525B] pb-[1px]">
                visit grada ↗
              </a>
              <a href="https://github.com/arnavbee/grada" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4E4E7] transition-colors border-b border-[#27272A] hover:border-[#52525B] pb-[1px]">
                github ↗
              </a>
              <a href="https://www.youtube.com/watch?v=jnCSJCAb3Ns&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4E4E7] transition-colors border-b border-[#27272A] hover:border-[#52525B] pb-[1px]">
                demo video ↗
              </a>
            </div>
          </div>

          {/* HiringPro */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-[1.15rem] md:text-[1.25rem] font-normal tracking-tight text-[#E4E4E7]">HiringPro</h3>
              <span className="font-mono text-[0.65rem] text-[#71717A]">2025</span>
            </div>
            <p className="text-[0.85rem] text-[#A1A1AA] font-light leading-relaxed mb-4">
              AI resume screening engine.
            </p>
            <div className="flex gap-5 text-[0.7rem] font-mono text-[#71717A] lowercase">
              <a href="https://hiring-pro.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4E4E7] transition-colors border-b border-[#27272A] hover:border-[#52525B] pb-[1px]">
                see it ↗
              </a>
            </div>
          </div>

          {/* Stablecoin Surge */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-[1.15rem] md:text-[1.25rem] font-normal tracking-tight text-[#E4E4E7]">Stablecoin Surge</h3>
              <span className="font-mono text-[0.65rem] text-[#71717A]">2022</span>
            </div>
            <p className="text-[0.85rem] text-[#A1A1AA] font-light leading-relaxed mb-4">
              Independent research report on stablecoin adoption. Funded by CoinDCX × Solana Foundation.
            </p>
            <div className="flex gap-5 text-[0.7rem] font-mono text-[#71717A] lowercase">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4E4E7] transition-colors border-b border-[#27272A] hover:border-[#52525B] pb-[1px]">
                read the report ↗
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in-up" style={{ animationFillMode: "both" }}>
          {scrappedProjects.length > 0 ? (
            /* THE WHITEBOARD */
            <div className="relative w-full p-8 md:p-10 bg-[#09090B] border border-[#27272A] rounded-xl shadow-2xl overflow-hidden min-h-[300px]">
              {/* Subtle grid pattern for the whiteboard */}
              <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(#71717A 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              
              <div className="relative z-10 flex flex-wrap gap-8 justify-center md:justify-start">
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
                      <div className="bg-[#030303] p-4 h-[150px] flex flex-col border border-[#27272A]/50 relative overflow-hidden">
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="text-[0.95rem] font-normal text-[#E4E4E7] group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-[0.8rem] text-[#A1A1AA] font-light leading-snug flex-1">
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
