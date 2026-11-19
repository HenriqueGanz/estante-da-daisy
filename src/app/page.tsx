"use client";

import { useState } from "react";
import BookCard from "@/components/BookCard";
import BookForm, { type NewBookInput } from "@/components/BookForm";
import { seedBooks, type Book } from "@/lib/books";

export default function Home() {
  const [books, setBooks] = useState<Book[]>(seedBooks);
  const [showForm, setShowForm] = useState(false);

  function addBook(input: NewBookInput) {
    setBooks((prev) => [
      ...prev,
      { id: String(Date.now()), title: input.title, author: input.author, status: input.status, rating: input.rating, quote: input.quote },
    ]);
  }

  function removeBook(id: string) {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Minha biblioteca
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-[#0F172A]">
            Estante da Daisy
          </h1>
          <p className="mt-2 text-sm text-[#57534E]">
            Organize suas leituras, notas e citações favoritas em um só lugar.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="inline-flex items-center gap-2 self-start rounded-xl bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm transition-colors hover:bg-[#D97706] sm:self-auto"
        >
          <span className="text-lg leading-none">+</span>
          Adicionar Livro
        </button>
      </header>

      {showForm && (
        <section className="mt-8">
          <BookForm onAdd={addBook} />
        </section>
      )}

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#0F172A]">
            {books.length} {books.length === 1 ? "livro" : "livros"}
          </h2>
        </div>
        {books.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#D6D3D1] bg-white/60 py-16 text-center">
            <p className="text-sm text-[#78716C]">
              Sua estante está vazia. Clique em &ldquo;+ Adicionar Livro&rdquo; para começar.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.id} book={book} onDelete={removeBook} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
