"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isSwimming, setIsSwimming] = useState(false);

  return (
    <div className="pt-[80px] md:pt-[100px] pb-[40px] h-screen flex flex-col px-6 md:px-10 w-full max-w-[1100px] mx-auto overflow-hidden">
      <main className="flex flex-col md:flex-row w-full h-full gap-[40px] md:gap-[80px] relative">
        
        {/* Massive Name Overlay (Absolute to break grid) */}
        <div className="absolute bottom-[5%] md:bottom-[10%] left-[-2%] z-20 pointer-events-none mix-blend-difference hidden md:block">
          <h1 className="text-[5rem] md:text-[8rem] lg:text-[11rem] leading-[0.8] font-light text-white tracking-[-0.04em] uppercase whitespace-nowrap">
            Arnav
          </h1>
        </div>

        {/* Left Side: Lookbook Image */}
        <div className="w-full md:w-[55%] h-[50vh] md:h-full relative overflow-hidden" onClick={() => setIsSwimming(!isSwimming)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={isSwimming ? "https://media.tenor.com/67jARUx8kVwAAAAC/scared-i%27m-leaving.gif" : "/profile-image.png"} 
            alt="Arnav" 
            className={`w-full h-full grayscale contrast-[1.1] ${isSwimming ? "object-contain scale-[1.4]" : "object-cover object-[center_25%]"}`}
          />
          <div className="absolute inset-0 bg-black/5"></div>
          
          {/* Mobile Name Overlay */}
          <div className="absolute bottom-[24px] left-[24px] md:hidden z-20 pointer-events-none">
            <h1 className="text-[3rem] leading-[0.9] font-light text-white tracking-[-0.02em] uppercase mix-blend-difference">
              Arnav
            </h1>
          </div>
        </div>

        {/* Right Side: Hyper-Minimalist Bio */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-end pb-[20px] md:pb-[40px] z-10">
          <div className="max-w-[320px] ml-auto">
            <h2 className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-black mb-[32px] border-b border-black/10 pb-[16px]">
              Software Engineer // AI Systems
            </h2>
            
            <p className="text-[0.85rem] text-black/60 leading-[1.8] mb-[24px] font-medium text-justify">
              Based in New Delhi. Specializing in AI-native products and scalable backend systems. Recently completed B.Tech in Electronics & Communication Engineering at MAIT, GGSIPU.
            </p>
            
            <p className="text-[0.85rem] text-black/60 leading-[1.8] mb-[40px] font-medium text-justify">
              Creator of Grada (fashion operations) and HiringPro (AI screening). Passionate about LLM workflows, prompt engineering, and product strategy.
            </p>
            
            <a href="https://github.com/arnavbee" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-[12px] text-[0.75rem] font-bold tracking-[0.1em] uppercase text-black hover:text-black/50 transition-colors">
              <span className="w-[32px] h-[1px] bg-black group-hover:w-[48px] transition-all duration-300"></span>
              View GitHub 
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
