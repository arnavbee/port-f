"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSpaceMode } from "@/components/SpaceModeProvider";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardAudioRef = useRef<HTMLAudioElement | null>(null);
  
  const { isSpaceMode } = useSpaceMode();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const spaceAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isSpaceMode) {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
      if (spaceAudioRef.current) {
        spaceAudioRef.current.play().catch(console.error);
      }
    } else {
      if (spaceAudioRef.current) {
        spaceAudioRef.current.pause();
      }
    }
  }, [isSpaceMode]);

  useEffect(() => {
    cardAudioRef.current = new Audio("/song.mp3");
    cardAudioRef.current.loop = true;
    cardAudioRef.current.volume = 0.4;
  }, []);

  const toggleAudio = () => {
    if (!cardAudioRef.current) return;
    
    if (isPlaying) {
      cardAudioRef.current.pause();
    } else {
      cardAudioRef.current.play().catch(e => console.error("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={cn(
      "pt-[80px] md:pt-[100px] pb-[80px] w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 min-h-screen transition-colors duration-300 animate-fade-in text-white flex flex-col justify-center"
    )}>
      {/* Hidden Audio Elements */}
      <audio ref={spaceAudioRef} src="/iwgh.mp3" loop />

      {isSpaceMode ? (
        <div className="fixed inset-0 z-0 bg-black animate-fade-in">
          <video 
            ref={videoRef}
            src="/vidgm_h264.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 lg:gap-20 relative z-10">
          {/* LEFT: TEXT */}
        <section className="animate-fade-in-up flex-1 max-w-[600px] pt-2 md:pt-4" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
          <h1 className="text-[2.2rem] md:text-[3.2rem] lg:text-[3.5rem] font-medium tracking-tight leading-tight mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            Hi, I&apos;m Arnav.
          </h1>
          
          <div className="space-y-7 text-[1rem] md:text-[1.1rem] text-[#A1A1AA] leading-relaxed font-light">
            <p>
              I build AI-powered systems for operational workflows that still run the traditional way.
            </p>
            
            <p>
              Right now, I&apos;m building <a href="https://www.grada-hq.com" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/20 hover:border-white transition-all pb-[1px]">Grada</a> — automating invoicing, purchase orders, and catalog operations for fashion brands selling on 
              <span className="inline-flex items-center gap-[6px] mx-[6px] align-middle translate-y-[-1px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.google.com/s2/favicons?domain=myntra.com&sz=64" alt="Myntra" title="Myntra" className="h-[16px] w-auto rounded-[3px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.google.com/s2/favicons?domain=ajio.com&sz=64" alt="Ajio" title="Ajio" className="h-[16px] w-auto rounded-[3px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.google.com/s2/favicons?domain=amazon.in&sz=64" alt="Amazon" title="Amazon" className="h-[16px] w-auto rounded-[3px]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.google.com/s2/favicons?domain=flipkart.com&sz=64" alt="Flipkart" title="Flipkart" className="h-[16px] w-auto rounded-[3px]" />
              </span>.
            </p>
            
            <p>
              I also <Link href="/writings" className="text-white border-b border-white/20 hover:border-white transition-all pb-[1px]">write</Link> about technology, leverage, and systems.
            </p>

            <p>
              I&apos;m drawn to high-agency environments: places where the roadmap is unclear, the problem is real, and the system still needs to be designed from first principles.
            </p>
          </div>

          <div className="flex gap-8 mt-12 text-[0.95rem] font-medium tracking-wide">
            <Link href="/projects" className="group flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors">
              <span className="text-white/40 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300">→</span> See my work
            </Link>
            <Link href="/about" className="group flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors">
              <span className="text-white/40 group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300">→</span> About & Contact
            </Link>
          </div>
        </section>

        {/* RIGHT: THE CARD */}
        <section className="animate-fade-in-up w-full md:w-auto flex-shrink-0 flex justify-center md:justify-end" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
          <div className="relative w-full aspect-[4/5] max-w-[380px] lg:max-w-[420px] md:w-[380px] lg:w-[420px] group">
            {/* The base layer (blur/glow) */}
            <div className="absolute inset-0 bg-[#A1A1AA] blur-[100px] opacity-[0.08] rounded-full group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none"></div>
            
            {/* The main card body */}
            <div className="absolute inset-0 rounded-[20px] bg-[#09090B] border border-[#27272A] shadow-2xl overflow-hidden flex flex-col p-6 lg:p-8 group-hover:border-[#52525B] transition-colors duration-500">
              
              {/* Header */}
              <div className="flex justify-between items-center text-[0.65rem] font-mono tracking-widest text-[#71717A] uppercase mb-8">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4E4E7]/60 animate-pulse"></span>
                  System Active
                </span>
                <span>V.2.0.4</span>
              </div>

              {/* Visual Graphic Area / Audio Toggle */}
              <div 
                className="w-full flex-1 rounded-[12px] overflow-hidden mb-6 border border-[#27272A]/50 relative bg-[#030303] flex flex-col justify-between p-3 cursor-pointer group/audio"
                onClick={toggleAudio}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/um.png" 
                  alt="Arnav" 
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover object-[center_30%] mix-blend-screen opacity-70 transition-all duration-700",
                    isPlaying ? "grayscale-0 scale-105" : "grayscale"
                  )}
                />
                
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "12px 12px" }}></div>
                
                <div className="relative z-10 flex justify-between w-full font-mono text-[0.6rem] text-white uppercase tracking-widest drop-shadow-md bg-black/40 px-2 py-1 rounded">
                  <span>[ AUDIO: {isPlaying ? "ACTIVE" : "STANDBY"} ]</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[#27272A] flex justify-between items-center text-[0.6rem] font-mono tracking-widest text-[#71717A] uppercase">
                <span>Engineer</span>
                <span>New Delhi</span>
              </div>

            </div>
          </div>
        </section>
        </div>
      )}
    </div>
  );
}
