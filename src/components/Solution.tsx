import React from "react";
import { translations } from "../utils/translation";
import SolutionCard from "./SolutionCard";
import { ComponentProps } from "../types";

const Solution: React.FC<ComponentProps> = ({ isDark, lang }) => {
  const t = translations[lang].solution;
  return (
    <section className={`py-24 px-6 ${isDark ? "bg-[#1C1B36]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto mb-10">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5 ${isDark ? "text-white" : "text-[#1C1B36]"}`}
          >
            {t.title}
          </h2>
          <div className="text-center">
            <p
              className={`text-xl md:text-2xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {t.description}
            </p>
          </div>
        </div>
        <div
          className={`p-10 md:p-14 rounded-3xl border-2 ${isDark ? "bg-gradient-to-br from-gray-900/20 to-gray-900/20 border-gray-800/50" : "bg-gradient-to-br from-gray-50 to-gray-50 border-gray-200"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.cards.map((card, i) => (
              <SolutionCard
                key={i}
                title={card.title}
                description={card.description}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
