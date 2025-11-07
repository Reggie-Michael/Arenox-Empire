import React from "react";
import { translations } from "../utils/translation";
import { ComponentProps } from "../types";

const Footer: React.FC<ComponentProps> = ({ isDark, lang }) => {
  const t = translations[lang].footer;
  return (
    <footer
      className={`py-12 px-4 sm:px-6 text-center border-t ${isDark ? "border-gray-800/50 bg-[#1C1B36]" : "border-gray-200 bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-2xl font-bold tracking-wider mb-2 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {t.brandName}
        </div>
        <p
          className={`italic text-xs mb-6 ${isDark ? "text-[#B886FC]" : "text-gray-600"}`}
        >
          {t.tagline}
        </p>
        <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
