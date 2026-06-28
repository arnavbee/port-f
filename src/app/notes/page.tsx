"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FRONTIER_NOTES } from "@/lib/notes";
import { cn } from "@/lib/utils";

type FilterType = "all" | "notes" | "reading" | "questions";

export default function NotesIndexPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        const input = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (input) input.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredNotes = FRONTIER_NOTES.filter((note) => {
    // Type filter
    if (filter !== "all") {
      const mappedFilter = filter === "notes" ? "note" : filter === "questions" ? "question" : filter;
      if (note.type !== mappedFilter) return false;
    }

    // Search filter
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      const matchesTitle = note.title.toLowerCase().includes(q);
      const matchesDek = note.dek.toLowerCase().includes(q);
      const matchesTags = note.tags.some(tag => tag.toLowerCase().includes(q));
      const matchesStatus = note.status.toLowerCase().includes(q);
      
      if (!matchesTitle && !matchesDek && !matchesTags && !matchesStatus) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="pt-[100px] md:pt-[140px] pb-[80px] w-full max-w-[720px] mx-auto px-4 sm:px-6 min-h-screen text-white animate-fade-in-up">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-[1.5rem] md:text-[1.7rem] font-normal tracking-tight mb-2 lowercase">
          frontier notes
        </h1>
        <p className="text-[0.9rem] text-[#A1A1AA] font-light leading-relaxed">
          systems, ai, technology, and things that feel early.
        </p>
      </header>

      {/* Controls */}
      <div className="mb-10 space-y-5">
        <div className="relative">
          <input
            type="search"
            placeholder="Search notes... (press '/' to focus)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-[#E4E4E7] placeholder:text-[#52525B] py-2 outline-none text-[0.9rem] transition-colors font-light"
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.currentTarget.blur();
              }
            }}
          />
        </div>

        <div className="flex flex-wrap gap-5 text-[0.8rem] lowercase tracking-wide text-[#71717A]">
          {(["all", "notes", "reading", "questions"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "hover:text-[#E4E4E7] transition-colors pb-1 border-b border-transparent",
                filter === f && "text-[#E4E4E7] border-[#E4E4E7]"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-0">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Link 
              key={note.slug} 
              href={`/notes/${note.slug}`}
              className="block group py-6 border-b border-[#27272A]/30 hover:border-[#52525B]/50 transition-colors"
            >
              <h2 className="text-[1rem] md:text-[1.05rem] font-medium text-[#E4E4E7] group-hover:text-white transition-colors mb-1.5 leading-tight">
                {note.title}
              </h2>
              <p className="text-[0.85rem] md:text-[0.9rem] text-[#A1A1AA] font-light mb-2.5 leading-relaxed">
                {note.dek}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] text-[#71717A] lowercase font-mono">
                <span>{note.date}</span>
                <span>&middot;</span>
                <span>{note.type}</span>
                {note.tags[0] && (
                  <>
                    <span>&middot;</span>
                    <span>{note.tags[0]}</span>
                  </>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div className="py-12 text-[#71717A] text-[0.95rem] font-light lowercase">
            no notes found.
          </div>
        )}
      </div>
    </div>
  );
}
