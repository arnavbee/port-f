"use client";

import { useState } from "react";

export default function Home() {
  const [isSwimming, setIsSwimming] = useState(false);

  return (
    <div className="pt-[80px] pb-12 flex flex-col flex-1 items-center justify-center min-h-screen">
      <main className="flex flex-col md:flex-row items-center justify-center max-w-[1100px] w-full mx-auto px-6 md:px-10 gap-10 md:gap-[80px]">
        {/* Left Side: Profile Card */}
        <div className="flex-1 flex justify-center md:justify-start w-full">
          <div className="w-full max-w-[360px] md:max-w-[460px] bg-white border border-[#eaeaea] rounded-[24px] p-[24px] md:p-[32px] flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            {/* Header */}
            <div className="flex justify-between items-center text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.15em] uppercase text-foreground/50 mb-[32px]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                Confidential Profile
              </span>
              <span>Subject Active</span>
            </div>

            {/* Title */}
            <div className="mb-[32px]">
              <h2 className="text-[5rem] md:text-[6.5rem] leading-[0.8] font-light text-foreground tracking-[-0.05em] uppercase">
                A.B.S.
              </h2>
              <p className="text-[1.1rem] md:text-[1.25rem] text-foreground/60 font-medium tracking-tight mt-[16px]">
                Selected obsessions
              </p>
            </div>

            {/* Image */}
            <div 
              className="w-full rounded-[12px] md:rounded-[16px] overflow-hidden mb-[32px] border border-black/5 cursor-pointer relative"
              onClick={() => setIsSwimming(!isSwimming)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={isSwimming ? "https://media.tenor.com/67jARUx8kVwAAAAC/scared-i%27m-leaving.gif" : "/profile-image.png"} 
                alt="Arnav B. Singh" 
                className="w-full h-auto" 
              />
            </div>

            {/* Footer */}
            <div className="mt-auto pt-[24px] border-t border-[#eaeaea] flex justify-between items-center text-[0.75rem] md:text-[0.8rem] font-semibold text-foreground/50 tracking-[0.05em] uppercase">
              <span>Software Engineer (AI / LLM)</span>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 w-full max-w-full md:max-w-[500px] text-left">
          <h1 className="text-[2rem] md:text-[2.5rem] font-semibold mb-[24px] tracking-[-0.02em] text-foreground">
            Hi, I'm Arnav
          </h1>
          <p className="text-[1.05rem] text-foreground/80 mb-[20px]">
            I'm a Software Engineer specializing in AI and LLM Systems, based in New Delhi. I recently completed my B.Tech in Electronics & Communication Engineering at MAIT, GGSIPU.
          </p>
          <p className="text-[1.05rem] text-foreground/80 mb-[20px]">
            I love building AI-native products and scalable backend systems. I've developed platforms like Grada for fashion operations and HiringPro for AI resume screening. I'm also passionate about AI workflows, prompt engineering, and product strategy.
          </p>
          <p className="text-[1.05rem] text-foreground/80 mb-[20px]">
            You can check out my code and technical projects on GitHub. Welcome to my space!
          </p>
          
          <div>
            <a href="https://github.com/arnavbee" className="group inline-flex items-center gap-[8px] mt-[16px] py-[12px] px-[24px] border border-[#eaeaea] rounded-[8px] text-foreground text-[1rem] font-medium transition-opacity duration-200 ease-[ease] bg-white hover:opacity-80">
              GitHub 
              <svg className="w-[16px] h-[16px] fill-current transition-transform duration-200 ease-[ease] group-hover:translate-x-[4px]" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
