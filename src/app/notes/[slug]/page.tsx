import { notFound } from "next/navigation";
import Link from "next/link";
import { FRONTIER_NOTES } from "@/lib/notes";

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const note = FRONTIER_NOTES.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="pt-[60px] md:pt-[80px] pb-[120px] w-full max-w-[640px] mx-auto px-4 sm:px-6 min-h-screen text-white animate-fade-in-up">
      
      <div className="mb-10">
        <Link href="/notes" className="text-[0.7rem] text-[#71717A] hover:text-[#E4E4E7] transition-colors">
          &larr; Index
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-[1.15rem] md:text-[1.25rem] font-normal tracking-tight mb-1 leading-tight text-[#E4E4E7]">
          {note.title}
        </h1>
        
        <div className="flex items-center gap-3 text-[0.65rem] text-[#71717A] mb-6 font-mono">
          <span>{note.date}</span>
          {note.sourceUrl && (
            <a href={note.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#E4E4E7] transition-colors border-b border-[#27272A] hover:border-[#52525B] pb-[1px]">
              Source Link ↗
            </a>
          )}
        </div>
      </header>

      {note.thumbnail && (
        <div className="w-full aspect-[16/9] bg-[#18181B] rounded-lg overflow-hidden mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={note.thumbnail} 
            alt={note.title} 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      <article className="text-[#A1A1AA] font-light text-[0.85rem] leading-relaxed">
        {note.content}
      </article>

    </div>
  );
}

export async function generateStaticParams() {
  return FRONTIER_NOTES.map((note) => ({
    slug: note.slug,
  }));
}
