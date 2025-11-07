import React from "react";
import { AgitateCardProps } from "../types";

const AgitateCard: React.FC<AgitateCardProps> = ({
  title,
  description,
  isDark,
}) => {
  return (
    <div
      className={`p-8 rounded-xl border-l-4 hover:translate-x-3 transition-all duration-300 ${isDark ? "bg-gray-900/50 border-[#D4AF27] hover:bg-gray-900/80" : "bg-white border-[#D4AF27] hover:bg-gray-50 shadow-md"}`}
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

export default AgitateCard;
