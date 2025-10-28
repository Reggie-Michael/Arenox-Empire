import { useEffect, useState } from "react";

export function useAutoLang() {
  const [lang, setLang] = useState(() => {
    // 1. Check localStorage first
    const saved = localStorage.getItem("useLang");
    if (saved) return saved;

    // 2. Detect browser language
    const browserLang = navigator.language || navigator.languages?.[0] || "en";
    console.log(
      "Detected browser language:",
      browserLang,
      navigator.language || navigator.languages?.[0]
    );
    const normalized = browserLang.toLowerCase();

    // 3. Match French or English
    if (normalized.startsWith("fr")) return "fr";
    if (normalized.startsWith("en")) return "en";

    // 4. Default fallback
    return "en";
  });

  // Keep it synced with localStorage for next time
  useEffect(() => {
    localStorage.setItem("useLang", lang);
  }, [lang]);

  return [lang, setLang] as const;
}
