import type { Book } from "@/lib/books";
import { statusStyles } from "@/lib/books";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Avaliação: ${rating} de 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          style={{ color: n <= rating ? "#F59E0B" : "#D6D3D1" }}
          className="text-base leading-none"
        >
          ★
        </span>
      ))}
      {rating === 0 && (
        <span className="ml-1 text-xs text-[#78716C]">Sem nota</span>
      )}
    </div>
  );
}

export default function BookCard({
  book,
  onDelete,
}: {
  book: Book;
  onDelete: (id: string) => void;
}) {
  const s = statusStyles[book.status];

  return (
    <article className="flex flex-col rounded-2xl border border-[#E7E0D2] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold leading-snug text-[#0F172A]">{book.title}</h2>
          <p className="mt-1 text-sm text-[#57534E]">{book.author}</p>
        </div>
        <button
          type="button"
          onClick={() => onDelete(book.id)}
          aria-label={`Excluir ${book.title}`}
          className="shrink-0 rounded-lg p-2 text-[#A8A29E] transition-colors hover:bg-[#FEF2F2] hover:text-[#EF4444]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: s.bg, color: s.text }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.dot }} />
          {book.status}
        </span>
        <Stars rating={book.rating} />
      </div>

      <blockquote className="mt-4 border-l-2 border-[#F59E0B] pl-3 text-sm italic leading-relaxed text-[#57534E]">
        &ldquo;{book.quote}&rdquo;
      </blockquote>
    </article>
  );
}
