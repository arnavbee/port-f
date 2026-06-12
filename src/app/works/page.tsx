"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  video?: string;
};

// Mock Data
const SHIPPED_PROJECTS: Project[] = [
  {
    title: "Grada",
    description: "Fashion operations with AI integrations to streamline workflows.",
    tags: ["Next.js", "AI", "Tailwind"],
    image: "/gradn.png",
    link: "https://grada-web.vercel.app",
    github: "https://github.com/arnavbee/grada",
    video: "https://youtu.be/jnCSJCAb3Ns"
  }
];

const SCRAPPED_PROJECTS: Project[] = [
  {
    title: "GPT Vault",
    description: "A specialized dashboard interface for managing language models.",
    tags: ["Next.js", "GPT", "Dashboard"],
    image: "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=1200&auto=format&fit=crop",
    link: "https://gpt-dashboard-xi.vercel.app"
  },
  {
    title: "Physical AI",
    description: "Hardware integration layer for large language models.",
    tags: ["Robotics", "LLM", "Python"],
    image: "/physical_ai_thumb.png",
    link: "https://physical-ai-dashboard-ten.vercel.app"
  },
  {
    title: "Digital Garden",
    description: "My personal digital garden and knowledge base (Not Anymore).",
    tags: ["Archive", "Notes", "Web"],
    image: "/digital_garden_bw.png",
    link: "https://qweb-two.vercel.app"
  }
];

export default function Works() {
  const [filter, setFilter] = useState<"shipped" | "scrapped">("shipped");
  const [flippedProject, setFlippedProject] = useState<string | null>(null);
  
  const projects = filter === "shipped" ? SHIPPED_PROJECTS : SCRAPPED_PROJECTS;

  const handleFilterChange = (newFilter: "shipped" | "scrapped") => {
    setFilter(newFilter);
    setFlippedProject(null);
  };

  const toggleFlip = (title: string) => {
    setFlippedProject(prev => prev === title ? null : title);
  };

  return (
    <div className="pt-[80px] md:pt-[96px] pb-[40px] h-screen flex flex-col px-6 md:px-10 w-full max-w-[1100px] mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="w-full flex justify-end mb-[24px] md:mb-[40px] border-b border-[#eaeaea] pb-[16px] md:pb-[24px] shrink-0">
        {/* Toggle Switch */}
        <div className="flex gap-[16px] md:gap-[24px]">
          <button
            onClick={() => handleFilterChange("shipped")}
            className={cn(
              "text-[0.75rem] md:text-[0.85rem] font-medium transition-opacity duration-200",
              filter === "shipped" ? "text-black" : "text-black/40 hover:opacity-80"
            )}
          >
            Shipped
          </button>
          <span className="text-black/20 font-medium text-[0.75rem] md:text-[0.85rem]">/</span>
          <button
            onClick={() => handleFilterChange("scrapped")}
            className={cn(
              "text-[0.75rem] md:text-[0.85rem] font-medium transition-opacity duration-200",
              filter === "scrapped" ? "text-black" : "text-black/40 hover:opacity-80"
            )}
          >
            Scrapped
          </button>
        </div>
      </div>

      {/* Projects Area */}
      {filter === "shipped" ? (
        <div className="flex-1 w-full min-h-0 flex items-center gap-[16px] md:gap-[40px] pb-[16px] md:pb-[32px] overflow-x-auto snap-x snap-mandatory" style={{ justifyContent: projects.length > 2 ? 'flex-start' : 'center' }}>
          {projects.map((project) => (
            <div 
              key={project.title} 
              onClick={() => toggleFlip(project.title)}
              className="relative flex flex-col group overflow-hidden h-[70vh] md:h-full max-h-[85vh] w-full max-w-[85vw] md:w-auto md:max-w-none aspect-[3/4] bg-[#f0f0f0] cursor-pointer rounded-[16px] shadow-2xl shrink-0 snap-center"
            >
              {/* Poster Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.image} 
                alt={project.title} 
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-[1.03]",
                  flippedProject === project.title ? "scale-[1.03]" : ""
                )}
              />

              {/* Mobile Blur Overlay for Readability */}
              <div className={cn(
                "absolute inset-0 bg-white/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none transition-all duration-300 z-10",
                flippedProject === project.title ? "opacity-100" : "opacity-0"
              )}></div>
              
              {/* Ultra-Minimal Edge Overlay */}
              <div className="absolute inset-0 p-[24px] md:p-[40px] flex flex-col justify-between z-20 text-black pointer-events-none">
                
                {/* Top Edge */}
                <div className="flex justify-between items-start w-full">
                  {/* Title (Always Visible) */}
                  <h3 className="text-[2rem] md:text-[3.5rem] font-medium leading-none tracking-tight pointer-events-auto">{project.title}</h3>
                  
                  {/* Tags (Visible on Hover/Tap) */}
                  <div className={cn(
                    "flex gap-[16px] text-[0.8rem] md:text-[0.85rem] font-semibold uppercase tracking-widest mt-2 transition-opacity duration-300",
                    flippedProject === project.title ? "opacity-100" : "opacity-0 md:group-hover:opacity-70"
                  )}>
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom Edge */}
                <div className="flex justify-between items-end w-full">
                  {/* Description (Visible on Hover/Tap) */}
                  <p className={cn(
                    "text-[0.9rem] md:text-[1.15rem] max-w-[90%] md:max-w-[65%] leading-relaxed font-medium transition-opacity duration-300",
                    flippedProject === project.title ? "opacity-100" : "opacity-0 md:group-hover:opacity-80"
                  )}>
                    {project.description}
                  </p>

                  {/* Icons (Visible on Hover/Tap) */}
                  <div className={cn(
                    "flex gap-[16px] transition-opacity duration-300 pointer-events-auto",
                    flippedProject === project.title ? "opacity-100" : "opacity-0 md:group-hover:opacity-60"
                  )}>
                    {project.video && (
                      <a href={project.video} className="transition-opacity duration-200 hover:opacity-100" aria-label="Demo Video" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="transition-opacity duration-200 hover:opacity-100" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[20px] h-[20px] fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="transition-opacity duration-200 hover:opacity-100" aria-label="External Link" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 w-full min-h-0 pb-[32px] md:pb-[64px] flex justify-center items-stretch pt-[20px] px-0 md:px-[20px]">
          
          {/* Whiteboard Container */}
          <div className="relative w-full max-w-[1400px] bg-[#fdfdfd] border-[6px] border-[#f0f0f0] rounded-[16px] shadow-[inset_0_0_60px_rgba(0,0,0,0.02),0_20px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col items-center">
            
            {/* Whiteboard Frame Highlights */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/80 z-10 pointer-events-none"></div>
            
            {/* Whiteboard Marker Tray */}
            <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-[#e5e5e5] border-t border-gray-300 flex justify-center md:justify-end items-end px-[40px] z-30 pointer-events-none">
              {/* Fake Markers */}
              <div className="w-[40px] h-[8px] bg-blue-600/80 rounded-t-sm mb-[2px] shadow-sm rotate-[-2deg]"></div>
              <div className="w-[60px] h-[10px] bg-black/80 rounded-t-sm mb-[2px] ml-[12px] shadow-sm rotate-[1deg]"></div>
              <div className="w-[30px] h-[8px] bg-red-500/80 rounded-t-sm mb-[2px] ml-[8px] shadow-sm rotate-[-1deg]"></div>
            </div>

            {/* Fixed Board Area for Polaroids (No Scroll) */}
            <div className="w-full flex-1 flex items-start justify-start z-10 px-[24px] md:px-[64px] pb-[40px]">
              <div className="flex flex-wrap justify-start items-start gap-[24px] md:gap-[40px] w-full pt-[10px] md:pt-[20px]">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                onClick={() => toggleFlip(project.title)}
                className={cn(
                  "relative flex flex-col group w-[140px] md:w-[160px] lg:w-[180px] aspect-[4/5] bg-white p-[6px] md:p-[8px] pb-[16px] md:pb-[24px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-pointer transition-transform duration-500 hover:z-50 md:hover:scale-[1.15] md:hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]",
                  index % 2 === 0 ? "rotate-[-4deg]" : "rotate-[5deg]",
                  index === 1 ? "mt-[20px] md:mt-[40px] rotate-[2deg]" : "",
                  index === 2 ? "rotate-[-2deg] -mt-[10px]" : "",
                  flippedProject === project.title ? "z-50 scale-[1.10] shadow-[0_15px_40px_rgba(0,0,0,0.15)]" : ""
                )}
              >
                {/* Tape Effect */}
                <div className="absolute top-[-8px] md:top-[-10px] left-1/2 -translate-x-1/2 w-[60px] md:w-[80px] h-[16px] md:h-[20px] bg-white/40 backdrop-blur-sm shadow-sm rotate-[-2deg] z-20" style={{ background: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(0,0,0,0.05)' }}></div>

                {/* Polaroid Image */}
                <div className="relative w-full h-full overflow-hidden bg-black/5 mb-[12px] md:mb-[16px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.2] opacity-80 md:group-hover:grayscale-0 md:group-hover:contrast-100 md:group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  {/* Overlay to give it a rough paper vibe initially */}
                  <div className="absolute inset-0 bg-[#f4eade] mix-blend-multiply opacity-30 md:group-hover:opacity-0 transition-opacity duration-700"></div>
                </div>
                
                {/* Sharpie Text */}
                <div className="flex flex-col items-center text-center mt-auto">
                  <h3 className="text-[0.75rem] md:text-[0.9rem] font-bold tracking-tighter uppercase leading-none opacity-80 group-hover:opacity-100 transition-opacity text-black">{project.title}</h3>
                  <span className="text-[0.5rem] md:text-[0.55rem] uppercase font-bold tracking-[0.2em] text-black/40 mt-[4px] group-hover:text-black/70 transition-colors">W I P</span>
                </div>

                {/* Hidden Links overlay (Polaroid flip vibe) */}
                <div className={cn(
                  "absolute inset-0 bg-white/95 transition-opacity duration-300 z-10 flex flex-col justify-center items-center gap-[12px] md:gap-[16px]",
                  flippedProject === project.title ? "opacity-100 pointer-events-auto" : "opacity-0 md:group-hover:opacity-100 pointer-events-none md:group-hover:pointer-events-auto"
                )}>
                   <p className="text-center px-[8px] md:px-[16px] text-[0.6rem] md:text-[0.7rem] font-medium text-black/70 leading-relaxed font-mono">{project.description}</p>
                   <div className="flex gap-[12px] md:gap-[16px] text-black">
                    {project.video && (
                      <a href={project.video} className="transition-transform duration-200 hover:scale-110" aria-label="Demo Video" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="transition-transform duration-200 hover:scale-110" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="transition-transform duration-200 hover:scale-110" aria-label="External Link" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      </a>
                    )}
                   </div>
                </div>

              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
