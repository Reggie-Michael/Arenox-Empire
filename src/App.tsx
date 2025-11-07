import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useAutoLang } from "./hooks/useAutoLang";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Agitate from "./components/Agitate";
import Solution from "./components/Solution";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function ArenoxLanding() {
  const [lang, setLang] = useAutoLang();

  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("useTheme") == "false" ? false : true
  );

  const toggleLang = (): void => {
    localStorage.setItem("useLang", lang === "en" ? "fr" : "en");
    setLang(lang === "en" ? "fr" : "en");
  };

  const toggleTheme = (): void => {
    localStorage.setItem("useTheme", String(!isDark));
    setIsDark(!isDark);
  };

  return (
    <>
      <div
        className={`min-h-screen w-full ${isDark ? "bg-[#1C1B36] text-white" : "bg-white text-gray-900"}`}
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
        <ScrollToTop isDark={isDark} />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
