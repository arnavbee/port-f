"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(!isHovering)}
    >
      {/* Massive blurred atmospheric background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/profile-image.png" 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-[0.15] blur-[60px] grayscale scale-110" 
        />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-90"></div>
      </div>

      {/* Cinematic Title */}
      <div className={cn(
        "relative z-10 text-center transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        isHovering ? "transform -translate-y-[12vh] md:-translate-y-[20vh] scale-90 opacity-30" : "transform translate-y-0 scale-100 opacity-100"
      )}>
        <h1 className="text-[0.6rem] md:text-[0.9rem] font-medium text-white/90 tracking-[0.8em] md:tracking-[1.8em] uppercase ml-[0.8em] md:ml-[1.8em]">
          Arnav B. Singh
        </h1>
      </div>

      {/* Hidden Bio (Reveals on Hover) */}
      <div className={cn(
        "absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[600px] px-6 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100",
        isHovering ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-[20px] pointer-events-none"
      )}>
        <h2 className="text-[0.65rem] md:text-[0.75rem] font-bold tracking-[0.2em] uppercase text-white mb-[32px] border-b border-white/20 pb-[16px] inline-block">
          Software Engineer // AI Systems
        </h2>
        
        <p className="text-[0.85rem] md:text-[0.95rem] text-white/60 leading-[2] mb-[24px] font-light">
          Based in New Delhi. Specializing in AI-native products and scalable backend systems. Creator of Grada and HiringPro.
        </p>
        
        <p className="text-[0.85rem] md:text-[0.95rem] text-white/60 leading-[2] mb-[40px] font-light">
          Passionate about LLM workflows, prompt engineering, and product strategy.
        </p>
        
        <a href="https://github.com/arnavbee" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-[12px] text-[0.65rem] md:text-[0.75rem] font-bold tracking-[0.2em] uppercase text-white hover:text-white/60 transition-colors">
          <span className="w-[32px] h-[1px] bg-white group-hover:w-[48px] transition-all duration-300"></span>
          Enter GitHub 
          <span className="w-[32px] h-[1px] bg-white group-hover:w-[48px] transition-all duration-300"></span>
        </a>
      </div>

    </div>
  );
}
