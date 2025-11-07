import React from "react";
import { translations } from "../utils/translation";
import { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({
  isDark,
  toggleTheme,
  lang,
  toggleLang,
}) => {
  const t = translations[lang];
  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? "bg-[#1C1B36]/90 border-b border-[#D4AF27]/10" : "bg-white/90 border-b border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/logo2.png"
            alt="Arenox"
            className="h-8 w-auto"
          />
          <span
            className={`text-lg font-bold tracking-wider ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {t.brandName}
          </span>
        </div>

        {/* Right side controls */}
        <div className="flex gap-4 items-center">
          {/* Find out how CTA - golden button - hidden on mobile */}
          <a
            href="#contact"
            className={`hidden sm:inline-block px-5 py-2 rounded-lg font-semibold transition-all text-[#1C1B36] bg-[#D4AF27] hover:opacity-90 text-xs sm:text-sm`}
          >
            {lang === "en" ? "Find out how" : "Découvrez comment"}
          </a>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={`px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer text-sm ${isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
          >
            {lang === "en" ? "🇫🇷 FR" : "🇬🇧 EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer text-sm ${isDark ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
