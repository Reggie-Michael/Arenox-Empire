import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Agitate from "./components/Agitate";
import Solution from "./components/Solution";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function USLanding() {
  const lang: "en" = "en"; // Fixed to English for US version

  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("useTheme") == "false" ? false : true
  );

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
          showLangToggle={false}
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
