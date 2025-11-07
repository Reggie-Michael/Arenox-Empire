import React from "react";
import { SolutionCardProps } from "../types";

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  isDark,
}) => {
  return (
    <div
      className={`p-8 rounded-xl border transition-all duration-300 ${isDark ? "bg-gray-900/50 border-gray-800 hover:border-[#D4AF27]/50 hover:bg-gray-900/70" : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}
    >
      <h3
        className={`text-2xl font-bold mb-4 text-[#D4AF27]`}
      >
        {title}
      </h3>
      <p
        className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;
