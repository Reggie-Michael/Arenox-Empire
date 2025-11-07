// Common prop types
export interface ComponentProps {
  isDark: boolean;
  lang: "en" | "fr";
}

export interface HeaderProps extends ComponentProps {
  toggleTheme: () => void;
  toggleLang: () => void;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isDark: boolean;
}

export interface AgitateCardProps {
  title: string;
  description: string;
  isDark: boolean;
}

export interface SolutionCardProps {
  title: string;
  description: string;
  isDark: boolean;
}
