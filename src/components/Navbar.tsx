"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSpaceMode } from "./SpaceModeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { isSpaceMode, toggleSpaceMode } = useSpaceMode();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Writings", path: "/writings" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center py-[20px] md:py-[32px] px-4 sm:px-6 md:px-10 max-w-[1100px] mx-auto transition-all duration-300",
      isSpaceMode ? "bg-transparent text-white" : "bg-black/80 text-white backdrop-blur-md"
    )}>
      <div className="flex gap-[16px] sm:gap-[24px] md:gap-[32px]">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={cn(
              "text-[0.9rem] md:text-[1rem] tracking-tight transition-colors duration-300",
              pathname === link.path 
                ? "text-white font-semibold"
                : "text-white/60 hover:text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className="flex items-center gap-[12px] sm:gap-[16px] md:gap-[24px]">
        {/* Space Mode Toggle */}
        <button 
          onClick={toggleSpaceMode}
          aria-label="Toggle Space Mode"
          className={cn(
            "transition-all duration-300",
            isSpaceMode ? "text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-white/60 hover:text-white"
          )}
        >
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <div className="w-[1px] h-[16px] mx-1 bg-white/20"></div>
        <a href="https://x.com/bsngarnav" aria-label="X (Twitter)" className="transition-colors duration-300 text-white/60 hover:text-white" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://substack.com/@arnavbs" aria-label="Substack" className="transition-colors duration-300 text-white/60 hover:text-white" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
        </a>
        <a href="https://github.com/arnavbee" aria-label="GitHub" className="transition-colors duration-300 text-white/60 hover:text-white" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="mailto:hello@arnavbs.com" aria-label="Email" className="transition-colors duration-300 text-white/60 hover:text-white" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>
    </nav>
  );
}
