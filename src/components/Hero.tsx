import React from "react";
import { translations } from "../utils/translation";
import { ComponentProps } from "../types";

const Hero: React.FC<ComponentProps> = ({ isDark, lang }) => {
  const t = translations[lang].hero;
  return (
    <section
      className={`min-h-[90dvh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-12 sm:pt-32 sm:pb-20 relative overflow-hidden ${isDark ? "bg-[#1C1B36]" : "bg-white"}`}
    >
      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-radial from-[#D4AF27]/10 via-transparent to-transparent opacity-30 animate-pulse" : "bg-gradient-radial from-[#D4AF27]/5 via-transparent to-transparent opacity-50"}`}
      />
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
            <span className={isDark ? "text-white" : "text-[#1C1B36]"}>
              {t.title}
              <br />
            </span>
            <span className={isDark ? "text-[#D4AF27]" : "text-[#D4AF27]"}>
              {t.highlight}
            </span>
          </h1>
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            <span className="font-semibold block mb-2">
              {t.subtitle.split("\n")[0]}
            </span>
            <span
              className={`block ${isDark ? "text-gray-400/80" : "text-gray-600/80"}`}
            >
              {t.subtitle.split("\n").slice(1).join("\n")}
            </span>
          </p>
          <a
            href="#contact"
            className={`inline-block mt-6 sm:mt-8 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl ${isDark ? "bg-[#D4AF27] text-[#1C1B36] hover:opacity-90" : "bg-[#D4AF27] text-[#1C1B36] hover:opacity-90"}`}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
