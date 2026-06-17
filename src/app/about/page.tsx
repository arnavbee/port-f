"use client";

import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className={cn(
      "pt-[120px] md:pt-[160px] pb-[80px] flex flex-col w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 min-h-screen transition-colors duration-300 animate-fade-in",
      "bg-[#030303] text-white selection:bg-white/20 selection:text-white"
    )}>
      
      {/* ABOUT SECTION */}
      <section className="mb-[80px] md:mb-[120px] max-w-[720px] animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
        <h2 className="text-[0.75rem] uppercase tracking-[0.2em] font-semibold text-[#52525B] mb-10 border-b border-[#27272A] pb-4">
          Background
        </h2>
        
        <div className="space-y-7 text-[1rem] md:text-[1.1rem] text-[#A1A1AA] leading-relaxed font-light">
          <p>
            I came up through web3 research, moved into building AI products, and somewhere in between figured out I work best at the start of things — when the problem is real but the approach isn&apos;t obvious yet.
          </p>
          
          <p>
            I&apos;ve shipped products solo. I&apos;ve written things that found large audiences. I understand Indian marketplace operations from the inside. I&apos;m looking for the next thing worth going deep on.
          </p>
          
          <p className="text-[#E4E4E7] font-normal pt-2">
            Currently: closing Grada&apos;s first paying customer and open to Founder&apos;s Office conversations.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mb-[60px] max-w-[720px] animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
        <h2 className="text-[0.75rem] uppercase tracking-[0.2em] font-semibold text-[#52525B] mb-10 border-b border-[#27272A] pb-4">
          Connect
        </h2>
        
        <div className="flex flex-wrap gap-8 text-[0.95rem] font-medium mb-10">
          <a href="mailto:hello@arnavbs.com" className="text-[#A1A1AA] hover:text-white transition-colors">Email</a>
          <a href="https://twitter.com/arnavbsingh" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">X</a>
          <a href="https://github.com/arnavbee" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">GitHub</a>
          <a href="https://soundcloud.com/arnav-b-779948090" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">SoundCloud</a>
          <a href="https://in.pinterest.com/arnavbsss/" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-white transition-colors">Pinterest</a>
        </div>

      </section>

    </div>
  );
}
