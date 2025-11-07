import React from "react";
import { translations } from "../utils/translation";
import ProcessStep from "./ProcessStep";
import { ComponentProps } from "../types";

const WhatWeDo: React.FC<ComponentProps> = ({ isDark, lang }) => {
  const t = translations[lang].whatWeDo;
  return (
    <section
      className={`py-24 px-6 ${isDark ? "bg-gray-900/30" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 ${isDark ? "text-white" : "text-[#1C1B36]"}`}
        >
          {t.title}
        </h2>
        <div className="text-center mb-16">
          <p
            className={`text-xl md:text-2xl ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}
          >
            {t.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.steps.map((step, i) => (
            <ProcessStep
              key={i}
              number={`0${i + 1}`}
              title={step.title}
              description={step.description}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
