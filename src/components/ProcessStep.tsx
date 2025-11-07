import React from "react";
import { ProcessStepProps } from "../types";

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  isDark,
}) => {
  return (
    <div
      className={`p-8 rounded-2xl text-center relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group ${isDark ? "bg-gray-900/50 hover:bg-gray-900/80" : "bg-white hover:bg-gray-50 shadow-md"}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${isDark ? "bg-[#D4AF27]" : "bg-[#D4AF27]"}`}
      />
      <div
        className={`text-5xl font-black mb-6 group-hover:scale-110 transition-transform duration-300 text-[#D4AF27]`}
      >
        {number}
      </div>
      <h3
        className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-[#1C1B36]"}`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;
