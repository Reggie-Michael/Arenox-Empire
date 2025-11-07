import React from "react";
import { translations } from "../utils/translation";
import AgitateCard from "./AgitateCard";
import { ComponentProps } from "../types";

const Agitate: React.FC<ComponentProps> = ({ isDark, lang }) => {
  const t = translations[lang].agitate;
  return (
    <section
      className={`py-24 px-6 ${isDark ? "bg-gray-900/30" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-[#1C1B36]"}`}
        >
          {t.title}
        </h2>
        <div className="space-y-6">
          {t.cards.map((card, i) => (
            <AgitateCard
              key={i}
              title={card.title}
              description={card.description}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agitate;
