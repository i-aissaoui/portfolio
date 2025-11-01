export type Locale = "en" | "fr" | "de";

export const LOCALES: Locale[] = ["en", "fr", "de"];

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const lang = (navigator.language || navigator.languages?.[0] || "en").toLowerCase();
  if (lang.startsWith("fr")) return "fr";
  if (lang.startsWith("de")) return "de";
  return "en";
}
