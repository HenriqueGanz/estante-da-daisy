import { useState, type FormEvent } from "react";
import type { BookStatus } from "@/lib/books";

export default function BookForm({ onAdd }: { onAdd: (book: NewBookInput) => void }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<BookStatus>("Quero Ler");
  const [rating, setRating] = useState(0);
  const [quote, setQuote] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd({ title: title.trim(), author: author.trim(), status, rating, quote: quote.trim() });
    setTitle("");
    setAuthor("");
    setStatus("Quero Ler");
    setRating(0);
    setQuote("");
  }

  const inputClass =
    "w-full rounded-xl border border-[#E7E0D2] bg-white px-3 py-2 text-sm text-[#0F172A] outline-none placeholder:text-[#A8A29E] focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#E7E0D2] bg-white p-6 shadow-sm"
    >
      <h3 className="text-base font-semibold text-[#0F172A]">Adicionar livro</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className="mb-1 block text-xs font-medium text-[#57534E]">
            Título
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex.: O Manuscrito Perdido"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="mb-1 block text-xs font-medium text-[#57534E]">
            Autor
          </label>
          <input
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Ex.: Clarice Andrade"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="mb-1 block text-xs font-medium text-[#57534E]">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as BookStatus)}
            className={inputClass}
          >
            <option>Quero Ler</option>
            <option>Lendo</option>
            <option>Lido</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating" className="mb-1 block text-xs font-medium text-[#57534E]">
            Avaliação
          </label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-label={`${n} estrelas`}
                className="text-2xl leading-none transition-transform hover:scale-110"
                style={{ color: n <= rating ? "#F59E0B" : "#D6D3D1" }}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="quote" className="mb-1 block text-xs font-medium text-[#57534E]">
            Citação favorita
          </label>
          <input
            id="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Uma frase que marcou você…"
            className={inputClass}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 rounded-xl bg-[#0F172A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
      >
        Salvar livro
      </button>
    </form>
  );
}

export interface NewBookInput {
  title: string;
  author: string;
  status: BookStatus;
  rating: number;
  quote: string;
}
