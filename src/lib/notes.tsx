import React from "react";

export type FrontierNote = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  type: "note" | "reading" | "question";
  status: "raw" | "still thinking" | "useful" | "important" | "changed mind";
  tags: string[];
  sourceUrl?: string;
  thumbnail?: string;
  content: React.ReactNode;
};

export const FRONTIER_NOTES: FrontierNote[] = [
  {
    slug: "the-frontier-of-systems-and-ai",
    title: "The Frontier of Systems & AI",
    dek: "Scale, AGI, and the Future of Everything.",
    date: "2026-06-20",
    type: "reading",
    status: "important",
    tags: ["systems", "ai", "frontier"],
    sourceUrl: "https://www.youtube.com/watch?v=F_7M4Hc-usM",
    thumbnail: "https://img.youtube.com/vi/F_7M4Hc-usM/maxresdefault.jpg",
    content: (
      <div className="space-y-5">
        <p>
          The integration of autonomous AI into complex system architectures requires a shift from static design to dynamic, self-healing networks.
        </p>
        <p>
          When you build a system today, it is declarative. In the future, systems will be intent-driven.
        </p>
        
        <h3 className="text-[#E4E4E7] font-medium mt-8 mb-3 text-[0.85rem]">The Shift in Architecture</h3>
        <ol className="list-decimal pl-4 space-y-2.5 mb-6 text-[0.85rem]">
          <li><strong className="text-[#E4E4E7] font-medium">Neural Nets</strong> act as dynamic routing tables.</li>
          <li><strong className="text-[#E4E4E7] font-medium">Feedback Loops</strong> provide instantaneous structural learning.</li>
          <li><strong className="text-[#E4E4E7] font-medium">Autonomous Nodes</strong> isolate failures and self-heal.</li>
        </ol>
        
        <blockquote className="border-l-[1.5px] border-[#3F3F46] pl-4 italic text-[#71717A] my-6 py-0.5 text-[0.85rem]">
          "The true potential of the frontier is not in raw intelligence, but in structural autonomy."
        </blockquote>
        
        <p>
          If we think about a node-based approach, it's bold, but AI—as it manages and scales these environments—will eventually become the infrastructure itself.
        </p>
      </div>
    )
  },
  {
    slug: "ai-agents-browser-operators",
    title: "AI agents as browser operators",
    dek: "A note on why UI-level automation may beat API-first integrations.",
    date: "Jun 2026",
    type: "note",
    status: "still thinking",
    tags: ["ai systems", "browsers"],
    content: (
      <div className="space-y-5">
        <p>Historically we built APIs so machines could talk to machines. But most of the world's useful software is trapped behind graphical interfaces built for humans. An AI agent that operates a browser doesn't need to wait for an API integration—it just uses the web like a human does. This flips the adoption curve for automation.</p>
        <p>If UI is the universal API, the bottleneck for automation shifts from 'who can build the integration' to 'who can reliably orchestrate the browser.'</p>
        <p>A shift back to standard web views. Companies might stop building public APIs and just focus on making their web apps 'agent-friendly' via ARIA tags and semantic HTML.</p>
      </div>
    )
  },
  {
    slug: "memory-is-a-product-boundary",
    title: "Memory is a product boundary",
    dek: "Personal AI systems will be defined by their memory architectures.",
    date: "Jun 2026",
    type: "question",
    status: "useful",
    tags: ["ai systems", "ux"],
    content: (
      <div className="space-y-5">
        <p>When does an AI system stop being a tool and start becoming a collaborator? The boundary line seems to be memory. A system that remembers what we talked about yesterday has fundamentally different retention mechanics than a stateless chat interface.</p>
        <p>We are moving from prompt-engineering to context-engineering. The product that wins won't necessarily have the smartest model, but the most contextually relevant retrieval of past interactions.</p>
        <p>Local-first memory vaults that sync across different foundation models, effectively commoditizing the model layer while locking users into the memory layer.</p>
      </div>
    )
  },
  {
    slug: "software-without-dashboards",
    title: "Software without dashboards",
    dek: "What happens when software runs silently in the background?",
    date: "May 2026",
    type: "note",
    status: "raw",
    tags: ["systems", "design"],
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    content: (
      <div className="space-y-5">
        <p>Most SaaS products are just a database with a dashboard on top. If agents can query the database directly and take actions, the dashboard becomes an artifact of the past. We might be moving towards software that is entirely headless, interacting with users only through notifications or ambient updates.</p>
        <p>This changes the fundamental metrics of software from 'time-in-app' or 'DAU' to 'time-saved' and 'tasks-completed'.</p>
        <p>A new design paradigm focused on observability rather than interactivity. You don't 'use' the software; you supervise it.</p>
      </div>
    )
  },
  {
    slug: "interfaces-after-apps",
    title: "Interfaces after apps",
    dek: "Moving from discrete applications to fluid, intent-driven interfaces.",
    date: "Apr 2026",
    type: "reading",
    status: "still thinking",
    tags: ["technology", "ux"],
    sourceUrl: "https://example.com/interfaces-after-apps",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    content: (
      <div className="space-y-5">
        <p>The 'app' as a container for features is starting to feel rigid. Modern AI capabilities suggest a future where interfaces are generated on the fly based on user intent. Instead of opening an app to do a task, you state an intent, and an ephemeral interface is summoned to facilitate it.</p>
        <p>This upends the entire mobile operating system paradigm. Apps become background services, and the OS becomes the primary interface.</p>
        <p>A resurgence of command-line like interfaces but natural-language driven, with visual elements rendered dynamically as needed.</p>
      </div>
    )
  },
  {
    slug: "what-becomes-programmable-next",
    title: "What becomes programmable next?",
    dek: "Looking for the next layer of abstraction in the physical world.",
    date: "Mar 2026",
    type: "question",
    status: "important",
    tags: ["systems", "frontier"],
    content: (
      <div className="space-y-5">
        <p>Software ate the world by making information programmable. Crypto tried to make money programmable. AI is making cognition and reasoning programmable. What's next? Biology? Material science? The physical supply chain? As reasoning costs plummet, the binding constraint will be actuation in the physical world.</p>
        <p>The highest leverage opportunities exist where software hits hardware—robotics, automated logistics, and synthetic biology.</p>
        <p>We might see the emergence of 'physical APIs'—standardized interfaces for commanding physical actions in the real world.</p>
      </div>
    )
  }
];

export const CURRENTLY_THINKING_ABOUT = [
  "browsers as agent runtimes",
  "memory boundaries for personal AI",
  "software without dashboards"
];
