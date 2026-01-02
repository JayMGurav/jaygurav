import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}


export const formatTitle = (str: string): string => {
  return str
    .replace(/[-_]/g, ' ') // 1. Clean separators first
    .toLowerCase()         // 2. Normalize to lowercase
    .replace(/\b\w/g, (char) => char.toUpperCase()); // 3. Capitalize first letter of every word
};