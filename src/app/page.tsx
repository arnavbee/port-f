"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isSwimming, setIsSwimming] = useState(false);

  return (
    <div className="pt-[80px] pb-[80px] flex flex-col flex-1 items-center justify-center min-h-[calc(100vh-80px)] md:min-h-screen">
      <main className="flex flex-col lg:flex-row items-center justify-center max-w-[1200px] w-full mx-auto px-6 md:px-10 gap-[60px] md:gap-[80px] lg:gap-[140px]">
        
        {/* Left Side: The Press Pass Badge */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[340px] md:max-w-[380px] bg-[#fdfdfd] border-[2px] border-[#e0e0e0] rounded-[16px] shadow-[0_30px_60px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(255,255,255,1)] flex flex-col items-center pt-[24px] pb-[32px] px-[24px] z-10 transition-transform duration-500 hover:rotate-[-2deg] hover:scale-[1.02]">
            
            {/* Lanyard Hole */}
            <div className="w-[60px] h-[12px] bg-[#e5e5e5] rounded-full shadow-[inset_0_3px_6px_rgba(0,0,0,0.1)] mb-[32px]"></div>

            {/* Badge Header */}
            <div className="w-full flex justify-between items-start mb-[24px] font-mono text-[0.65rem] md:text-[0.7rem] uppercase font-bold text-black/40 tracking-widest">
              <div className="flex flex-col">
                <span>ID: 0x8A4F</span>
                <span>CLR: LEVEL 5</span>
              </div>
              <div className="w-[32px] h-[32px] border-2 border-black/20 rounded-full flex items-center justify-center">
                <span className="w-[12px] h-[12px] bg-red-500 rounded-full animate-pulse"></span>
              </div>
            </div>

            {/* Profile Image (Polaroid style) */}
            <div 
              className="w-full aspect-[4/5] bg-[#e5e5e5] p-[8px] pb-[24px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] mb-[32px] cursor-pointer group"
              onClick={() => setIsSwimming(!isSwimming)}
            >
              <div className="relative w-full h-full overflow-hidden bg-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={isSwimming ? "https://media.tenor.com/67jARUx8kVwAAAAC/scared-i%27m-leaving.gif" : "/profile-image.png"} 
                  alt="Arnav B. Singh" 
                  className={`absolute inset-0 w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-500 ${isSwimming ? "object-contain scale-[1.4]" : "object-[center_25%]"}`} 
                />
              </div>
            </div>

            {/* Name & Title */}
            <div className="w-full text-center mb-[24px]">
              <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tighter uppercase leading-none text-black mb-[8px]">
                Arnav B.
              </h2>
              <div className="inline-block bg-black text-white text-[0.6rem] md:text-[0.7rem] font-mono uppercase tracking-widest px-[12px] py-[4px]">
                System Architect
              </div>
            </div>

            {/* Fake Barcode */}
            <div className="w-full flex justify-center items-end gap-[3px] h-[30px] opacity-50">
              {[...Array(35)].map((_, i) => (
                <div key={i} className="bg-black" style={{ width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 15 + 15}px` }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Brutalist Stats */}
        <div className="flex-1 w-full max-w-full lg:max-w-[500px] flex flex-col justify-center">
          
          <h1 className="text-[2.8rem] md:text-[4rem] font-bold leading-[0.9] tracking-tighter uppercase text-black mb-[40px]">
            Software Engineer <br/> <span className="text-black/30">// AI Systems</span>
          </h1>

          {/* Stats Grid */}
          <div className="w-full flex flex-col border-t-2 border-black/10">
            <div className="flex flex-col md:flex-row py-[16px] md:py-[24px] border-b-2 border-black/10 items-start md:items-center">
              <span className="w-[140px] font-mono text-[0.7rem] uppercase tracking-widest text-black/40 mb-[4px] md:mb-0">Location</span>
              <span className="font-semibold text-[1.1rem]">New Delhi, India</span>
            </div>
            <div className="flex flex-col md:flex-row py-[16px] md:py-[24px] border-b-2 border-black/10 items-start md:items-center">
              <span className="w-[140px] font-mono text-[0.7rem] uppercase tracking-widest text-black/40 mb-[4px] md:mb-0">Education</span>
              <span className="font-semibold text-[1.1rem]">B.Tech ECE @ MAIT</span>
            </div>
            <div className="flex flex-col md:flex-row py-[16px] md:py-[24px] border-b-2 border-black/10 items-start md:items-center">
              <span className="w-[140px] font-mono text-[0.7rem] uppercase tracking-widest text-black/40 mb-[4px] md:mb-0">Focus</span>
              <span className="font-semibold text-[1.1rem] leading-snug">LLM Workflows <br className="hidden md:block"/> Product Strategy</span>
            </div>
          </div>
          
          {/* Action Links */}
          <div className="mt-[40px] flex flex-wrap gap-[16px]">
            <a href="https://github.com/arnavbee" className="group flex items-center justify-center gap-[12px] h-[56px] px-[32px] bg-black text-white font-mono text-[0.8rem] uppercase tracking-widest hover:bg-black/80 transition-colors">
              GitHub 
              <svg className="w-[16px] h-[16px] fill-current transition-transform duration-300 group-hover:translate-x-[4px]" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </a>
            <a href="mailto:bsingharnav@gmail.com" className="flex items-center justify-center h-[56px] w-[56px] border-2 border-black/10 text-black hover:border-black transition-colors bg-white">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://www.linkedin.com/in/arnavbxyz/" className="flex items-center justify-center h-[56px] w-[56px] border-2 border-black/10 text-black hover:border-black transition-colors bg-white">
              <svg className="w-[20px] h-[20px] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
