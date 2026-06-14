"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSpaceMode } from "@/components/SpaceModeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { isSpaceMode, toggleSpaceMode } = useSpaceMode();

  const links = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center py-[20px] md:py-[32px] px-4 sm:px-6 md:px-10 max-w-[1100px] mx-auto transition-colors duration-700 bg-transparent">
      <div className="flex gap-[16px] sm:gap-[24px] md:gap-[32px]">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={cn(
              "text-[0.9rem] md:text-[1rem] tracking-tight transition-colors duration-200",
              pathname === link.path ? "text-foreground font-semibold" : "text-foreground/60 hover:text-foreground"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className="flex items-center gap-[12px] sm:gap-[16px] md:gap-[24px]">
        <button 
          onClick={toggleSpaceMode}
          aria-label="Toggle Space Mode"
          className={cn(
            "transition-colors hover:text-foreground",
            isSpaceMode ? "text-foreground" : "text-foreground/60"
          )}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]">
            <circle cx="12" cy="12" r="6"/>
            <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(-45 12 12)"/>
          </svg>
        </button>
        <div className="w-[1px] h-[16px] bg-foreground/20 mx-1"></div>
        <a href="#" aria-label="X (Twitter)" className="transition-colors text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>

        <a href="https://in.pinterest.com/arnavbsss/" aria-label="Pinterest" className="transition-colors text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg>
        </a>
        <a href="https://soundcloud.com/arnav-b-779948090" aria-label="SoundCloud" className="transition-colors text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M11.84 16.591v-6.791c.002-.128.026-.254.07-.376l.325-1.126a.222.222 0 0 1 .425 0l.324 1.126c.045.122.069.248.07.376v6.79a.214.214 0 0 1-.212.214h-.79a.214.214 0 0 1-.213-.213zm-1.896 0V10.28c0-.12.02-.239.057-.353l.245-.851a.208.208 0 0 1 .398 0l.246.851c.038.114.057.234.057.353v6.31c0 .118-.096.213-.213.213h-.577a.214.214 0 0 1-.213-.213zm-1.802 0v-5.63a.62.62 0 0 1 .046-.247l.19-.537a.191.191 0 0 1 .358 0l.19.537c.03.078.046.162.046.247v5.63c0 .118-.096.213-.213.213h-.404a.214.214 0 0 1-.213-.213zm-1.662 0V11.58c0-.07.012-.138.035-.2l.144-.397a.172.172 0 0 1 .324 0l.145.397c.023.062.034.13.034.2v5.011c0 .118-.095.213-.212.213h-.258a.214.214 0 0 1-.212-.213zm-1.523 0v-4.32a.4.4 0 0 1 .022-.132l.102-.275a.154.154 0 0 1 .288 0l.101.275c.014.043.022.088.022.132v4.32c0 .118-.096.213-.213.213h-.109a.214.214 0 0 1-.213-.213zm-1.353 0v-3.565c0-.038.006-.075.017-.111l.068-.184a.138.138 0 0 1 .258 0l.069.184c.011.036.017.073.017.111v3.565c0 .118-.096.213-.214.213h-.002a.214.214 0 0 1-.213-.213zm-1.168-.154v-2.613a.17.17 0 0 1 .012-.061l.033-.087a.12.12 0 0 1 .226 0l.033.087c.008.019.012.04.012.061v2.613a.214.214 0 0 1-.212.214.214.214 0 0 1-.104-.314zm13.385.154V8.528c.003-.129.03-.257.081-.378l.421-1.002a.23.23 0 0 1 .425 0l.422 1.002c.05.121.077.249.08.378v8.063a.214.214 0 0 1-.213.214h-1.003a.214.214 0 0 1-.213-.214zm10.158-1.597c0 1.066-.867 1.93-1.936 1.93h-6.242a.214.214 0 0 1-.213-.213V6.262a.214.214 0 0 1 .305-.193c3.082 1.411 4.544 5.08 3.239 8.212 2.827-.14 4.847 2.308 4.847 4.148z"/></svg>
        </a>
        <a href="https://github.com/arnavbee" aria-label="GitHub" className="transition-colors text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="https://substack.com/@arnavbs" aria-label="Substack" className="transition-colors text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
        </a>
        <a href="mailto:hello@arnavbs.com" aria-label="Email" className="transition-colors text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <svg className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
      </div>
    </nav>
  );
}
