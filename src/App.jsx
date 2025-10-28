import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { translations } from "./utils/translation";
import ContactForm from "./component/ContactForm";
import { useAutoLang } from "./hooks/useAutoLang";

const Header = ({ isDark, toggleTheme, lang, toggleLang }) => {
  const t = translations[lang];
  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? "bg-slate-950/90 border-b border-yellow-600/10" : "bg-white/90 border-b border-indigo-100"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div
          className={`text-3xl font-bold tracking-widest ${isDark ? "bg-gradient-to-r from-yellow-500 via-purple-400 to-purple-600 bg-clip-text text-transparent" : "text-indigo-900"}`}
        >
          {t.brandName}
        </div>
        <div className="flex gap-3">
          <button
            onClick={toggleLang}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${isDark ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
          >
            {lang === "en" ? "🇫🇷 FR" : "🇬🇧 EN"}
          </button>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${isDark ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30" : "bg-indigo-100 text-indigo-900 hover:bg-indigo-200"}`}
          >
            {isDark ? t.lightMode : t.darkMode}
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ isDark, lang }) => {
  const t = translations[lang].hero;
  return (
    <section
      className={`min-h-[90dvh] flex items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden ${isDark ? "bg-slate-950" : "bg-white"}`}
    >
      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-50 animate-pulse" : "bg-gradient-radial from-indigo-50 via-transparent to-transparent opacity-70"}`}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
          <span className={isDark ? "text-purple-600" : "text-indigo-900"}>
            {t.title1}
            <br />
            {t.title2}
          </span>
          <span
            className={
              isDark
                ? "bg-gradient-to-r from-yellow-400 via-purple-400 to-purple-600 bg-clip-text text-transparent"
                : "text-yellow-700"
            }
          >
            {t.title3}
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl ${isDark ? "text-slate-300" : "text-gray-700"} max-w-4xl mx-auto mb-12 leading-relaxed`}
        >
          {t.subtitle}
        </p>
        <a
          href="#contact"
          className={`inline-block px-12 py-5 text-lg font-bold rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 ${isDark ? "bg-gradient-to-r from-yellow-500 to-purple-500 text-slate-950 shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40" : "bg-indigo-900 text-white shadow-indigo-900/30 hover:shadow-2xl hover:shadow-indigo-900/40"}`}
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

const WhatWeDo = ({ isDark, lang }) => {
  const t = translations[lang].whatWeDo;
  return (
    <section
      className={`py-24 px-6 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 ${isDark ? "bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent" : "text-indigo-900"}`}
        >
          {t.title}
        </h2>
        <div className="text-center mb-16">
          <p
            className={`text-xl md:text-2xl ${isDark ? "text-slate-300" : "text-gray-700"} leading-relaxed`}
          >
            {t.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

const AgitateCard = ({ title, description, isDark }) => {
  return (
    <div
      className={`p-8 rounded-xl border-l-4 hover:translate-x-3 transition-all duration-300 ${isDark ? "bg-slate-900/50 border-yellow-500 hover:bg-slate-900/80" : "bg-white border-yellow-700 hover:bg-gray-50 shadow-md"}`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${isDark ? "text-yellow-400" : "text-yellow-700"}`}
      >
        {title}
      </h3>
      <p
        className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-gray-700"}`}
      >
        {description}
      </p>
    </div>
  );
};

const Agitate = ({ isDark, lang }) => {
  const t = translations[lang].agitate;
  return (
    <section
      className={`py-24 px-6 ${isDark ? "bg-slate-900/30" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 ${isDark ? "bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent" : "text-indigo-900"}`}
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

const ProcessStep = ({ number, title, description, isDark }) => {
  return (
    <div
      className={`p-8 rounded-2xl text-center relative overflow-hidden hover:-translate-y-2 transition-all duration-300 group ${isDark ? "bg-slate-900/50 hover:bg-slate-900/80" : "bg-white hover:bg-gray-50 shadow-md"}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${isDark ? "bg-gradient-to-r from-yellow-400 to-purple-500" : "bg-gradient-to-r from-indigo-900 to-yellow-700"}`}
      />
      <div
        className={`text-5xl font-black mb-6 group-hover:scale-110 transition-transform duration-300 ${isDark ? "text-yellow-400" : "text-yellow-700"}`}
      >
        {number}
      </div>
      <h3
        className={`text-xl font-bold mb-4 ${isDark ? "text-slate-100" : "text-indigo-900"}`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed ${isDark ? "text-slate-400" : "text-gray-600"}`}
      >
        {description}
      </p>
    </div>
  );
};

const SolutionCard = ({ title, description, isDark }) => {
  return (
    <div
      className={`p-8 rounded-xl border transition-all duration-300 ${isDark ? "bg-slate-900/50 border-yellow-500/20 hover:border-yellow-500/40 hover:bg-slate-900/70" : "bg-white border-indigo-200 hover:border-indigo-300 hover:bg-gray-50"}`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${isDark ? "text-yellow-400" : "text-yellow-700"}`}
      >
        {title}
      </h3>
      <p
        className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-gray-700"}`}
      >
        {description}
      </p>
    </div>
  );
};

const Solution = ({ isDark, lang }) => {
  const t = translations[lang].solution;
  return (
    <section className={`py-24 px-6 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto mb-10">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5 ${isDark ? "bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent" : "text-indigo-900"}`}
          >
            {t.title}
          </h2>
          <div className="text-center">
            <p
              className={`text-xl md:text-2xl leading-relaxed ${isDark ? "text-slate-300" : "text-gray-700"}`}
            >
              {t.description}
            </p>
          </div>
        </div>
        <div
          className={`p-10 md:p-14 rounded-3xl border-2 ${isDark ? "bg-gradient-to-br from-purple-900/20 to-yellow-900/20 border-yellow-500/30" : "bg-gradient-to-br from-indigo-50 to-yellow-50 border-indigo-200"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

const Footer = ({ isDark, lang }) => {
  const t = translations[lang].footer;
  return (
    <footer
      className={`py-14 px-6 text-center border-t ${isDark ? "border-yellow-500/10 bg-slate-950" : "border-indigo-100 bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-3xl font-bold tracking-widest mb-3 ${isDark ? "bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent" : "text-indigo-900"}`}
        >
          {t.brandName}
        </div>
        <p
          className={`italic text-sm mb-6 ${isDark ? "text-purple-400" : "text-indigo-600"}`}
        >
          {t.tagline}
        </p>
        <p className={`text-sm ${isDark ? "text-slate-500" : "text-gray-500"}`}>
          {t.copyright}
        </p>
      </div>
    </footer>
  );
};

export default function ArenoxLanding() {
  const [lang, setLang] = useAutoLang();

  const [isDark, setIsDark] = useState(
    localStorage.getItem("useTheme") ?? false
  );
  const toggleLang = () => {
    localStorage.setItem("useLang", lang === "en" ? "fr" : "en");

    setLang(lang === "en" ? "fr" : "en");
  };

  const toggleTheme = () => {
    localStorage.setItem("useTheme", String(!isDark));
    setIsDark(!isDark);
  };
  return (
    <>
      <div
        className={`min-h-screen w-full ${isDark ? "bg-slate-950 text-slate-100" : "bg-white text-gray-900"}`}
      >
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
          lang={lang}
          toggleLang={toggleLang}
        />
        <Hero isDark={isDark} lang={lang} />
        <WhatWeDo isDark={isDark} lang={lang} />
        <Agitate isDark={isDark} lang={lang} />
        <Solution isDark={isDark} lang={lang} />
        <ContactForm isDark={isDark} lang={lang} />
        <Footer isDark={isDark} lang={lang} />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
