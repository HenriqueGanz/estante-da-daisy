export type BookStatus = "Quero Ler" | "Lendo" | "Lido";

export interface Book {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  rating: number;
  quote: string;
}

export const statusStyles: Record<BookStatus, { bg: string; text: string; dot: string }> = {
  "Quero Ler": { bg: "#E0F2FE", text: "#0369A1", dot: "#38BDF8" },
  Lendo: { bg: "#FEF3C7", text: "#B45309", dot: "#F59E0B" },
  Lido: { bg: "#E2E8F0", text: "#0F172A", dot: "#0F172A" },
};

export const seedBooks: Book[] = [
  {
    id: "1",
    title: "O Manuscrito Perdido",
    author: "Clarice Andrade",
    status: "Lendo",
    rating: 4,
    quote: "As palavras que não escrevemos também contam uma história.",
  },
  {
    id: "2",
    title: "A Arquitetura das Palavras",
    author: "Heitor Vasconcelos",
    status: "Quero Ler",
    rating: 0,
    quote: "Cada frase é uma ponte entre o que sentimos e o que dizemos.",
  },
  {
    id: "3",
    title: "Crônicas do Castelo na Nuvem",
    author: "Marina Duarte",
    status: "Lido",
    rating: 5,
    quote: "Há castelos que só existem enquanto alguém os imagina.",
  },
];
