"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSpaceMode } from "@/components/SpaceModeProvider";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardAudioRef = useRef<HTMLAudioElement | null>(null);
  const spaceAudioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isSpaceMode } = useSpaceMode();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion
    }
    
    if (isSpaceMode) {
      // Pause card audio if it was playing
      if (cardAudioRef.current && isPlaying) {
        cardAudioRef.current.pause();
        setIsPlaying(false);
      }
      // Play space mode song
      if (spaceAudioRef.current) {
        spaceAudioRef.current.play().catch(console.error);
      }
    } else {
      // Pause space mode song
      if (spaceAudioRef.current) {
        spaceAudioRef.current.pause();
      }
    }
  }, [isSpaceMode, isPlaying]);

  const toggleAudio = () => {
    if (cardAudioRef.current) {
      if (isPlaying) {
        cardAudioRef.current.pause();
        setIsPlaying(false);
      } else {
        cardAudioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  const restartAudio = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection on double click
    if (cardAudioRef.current) {
      cardAudioRef.current.currentTime = 0;
      if (!isPlaying) {
        cardAudioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={cn(
      "pt-[80px] pb-[80px] flex flex-col flex-1 items-center justify-center min-h-[calc(100vh-80px)] md:min-h-screen transition-colors duration-700",
      isSpaceMode ? "bg-black" : "bg-white"
    )}>
      
      {/* Hidden Audio Elements */}
      <audio ref={cardAudioRef} src="/song.mp3" loop />
      <audio ref={spaceAudioRef} src="/iwgh.mp3" loop />

      {isSpaceMode ? (
        <div className="fixed inset-0 z-0">
          <video 
            ref={videoRef}
            src="/medium.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <main className="flex flex-col items-center md:items-start justify-center w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 z-10 relative">
        
        {/* Aesthetic Poster Card */}
        <div className="w-full flex justify-center md:justify-start">
          
          <div className="relative w-full max-w-[400px] md:max-w-[480px] bg-[#fafafa] text-black rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-[4px] border-[#f0f0f0] flex flex-col p-6 md:p-8 z-10">
            
            {/* Top Info Row */}
            <div className="flex justify-between items-start text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest font-bold leading-[1.4] mb-8 text-black/60 relative z-20">
              <div className="max-w-[120px]">
                CONFIDENTIAL <br/> PROFILE
                <div className="font-mono text-[0.45rem] md:text-[0.5rem] mt-1.5 text-black/30 font-medium tracking-normal">
                  ID: 0x9A4F // L4
                </div>
              </div>
              <div className="text-right">
                SUBJECT <br/> ACTIVE
                <div className="font-mono text-[0.45rem] md:text-[0.5rem] mt-1.5 text-black/30 font-medium tracking-normal">
                  28.6139° N, 77.2090° E
                </div>
              </div>
            </div>

            {/* Main Titles */}
            <div className="flex flex-col mb-4 relative z-20">
              <div className="absolute right-0 top-1 text-right">
                <div className="font-mono text-[0.5rem] md:text-[0.55rem] text-black/30 uppercase tracking-widest leading-[1.6]">
                  SYS.VER: 9.4.2<br/>
                  MEM: ALLOCATED<br/>
                  TS: 1718228400
                </div>
              </div>
              <h1 className="text-[3rem] md:text-[4rem] font-semibold tracking-tight leading-none text-black">
                Arnav
              </h1>
              <h2 className="text-[1.2rem] md:text-[1.4rem] font-medium tracking-tight text-black/60 mt-1 flex items-center gap-3">
                Digital Bath
                <span className="font-mono text-[0.5rem] text-black/40 bg-black/5 px-2 py-0.5 rounded uppercase tracking-widest border border-black/10">
                  Init
                </span>
              </h2>
            </div>

            {/* Image Container with Fluid Background */}
            <div 
              className="relative w-full h-[320px] md:h-[400px] mt-2 mb-6 group z-10 rounded-[24px] overflow-hidden shadow-inner border border-black/5"
              onClick={toggleAudio}
              onDoubleClick={restartAudio}
            >
              
              {/* The Colorful Fluid Mesh Background */}
              <div className="absolute inset-0 bg-[#cdb4db]"></div>
              <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#ffafcc] rounded-full mix-blend-screen filter blur-[60px] opacity-80 animate-pulse"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#fcf6bd] rounded-full mix-blend-overlay filter blur-[50px] opacity-90"></div>
              <div className="absolute top-[30%] right-[10%] w-[50%] h-[50%] bg-[#a2d2ff] rounded-full mix-blend-multiply filter blur-[60px] opacity-60"></div>
              <div className="absolute bottom-[10%] left-[10%] w-[60%] h-[60%] bg-[#bde0fe] rounded-full mix-blend-screen filter blur-[70px] opacity-70"></div>

              {/* Engineering Crosshairs */}
              <div className="absolute top-[10%] left-[5%] w-4 h-4 border-l border-t border-black/30 pointer-events-none z-20"></div>
              <div className="absolute top-[10%] right-[5%] w-4 h-4 border-r border-t border-black/30 pointer-events-none z-20"></div>
              <div className="absolute bottom-[10%] left-[5%] w-4 h-4 border-l border-b border-black/30 pointer-events-none z-20"></div>
              <div className="absolute bottom-[10%] right-[5%] w-4 h-4 border-r border-b border-black/30 pointer-events-none z-20"></div>
              
              {/* Vertical Data Text */}
              <div className="absolute top-[20%] left-2 font-mono text-[0.45rem] md:text-[0.5rem] text-black/40 [writing-mode:vertical-rl] rotate-180 uppercase tracking-widest pointer-events-none whitespace-nowrap z-20 mix-blend-color-burn font-bold transition-colors">
                AUDIO_STATUS: {isPlaying ? "PLAYING // ACTIVE" : "MUTED // STANDBY"}
              </div>
              <div className="absolute bottom-[20%] right-2 font-mono text-[0.45rem] md:text-[0.5rem] text-black/40 [writing-mode:vertical-rl] uppercase tracking-widest pointer-events-none whitespace-nowrap z-20 mix-blend-color-burn font-bold">
                RENDER_TARGET: DOLPHIN_01
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/profile-image.png" 
                alt="Arnav" 
                className={cn(
                  "absolute inset-0 w-full h-full object-cover object-[center_30%] mix-blend-multiply contrast-[1.1] opacity-70 relative z-10 transition-all duration-1000",
                  isPlaying ? "grayscale-0" : "grayscale"
                )}
              />
            </div>

            {/* Bottom Info Row */}
            <div className="flex justify-between items-end mt-auto text-[0.65rem] md:text-[0.7rem] uppercase font-bold tracking-wider leading-[1.4] text-black/60 pt-5 border-t border-black/10">
              <div className="max-w-[150px] pb-1">
                Human / Machine <br/> Internet
              </div>
              <div className="flex items-end gap-3">
                <div className="text-right pb-1">
                  Earth
                </div>
                <div className="group/qr cursor-crosshair">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent("https://www.youtube.com/watch?v=H6JjSdO0XWA")}&color=000000&bgcolor=fafafa`}
                    className="w-[36px] h-[36px] opacity-40 mix-blend-multiply transition-all duration-300 group-hover/qr:opacity-100 group-hover/qr:scale-110" 
                    alt="Classified Data" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      )}
    </div>
  );
}
