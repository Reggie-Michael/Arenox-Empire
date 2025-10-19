import React, { useState } from "react";

// Translations object
const translations = {
  en: {
    brandName: "ARENOX",
    lightMode: "☀️ Light",
    darkMode: "🌙 Dark",
    hero: {
      title1: "Custom Solutions.",
      title2: "Deals Closed ",
      title3: "Fast.",
      subtitle:
        "You do what you do best, and that's obviously not tech or marketing. You could learn, or leave it to us. We take care of the rest, bringing you to your next success milestone.",
      cta: "Let's Work Together",
    },
    whatWeDo: {
      title: "So... Why You?",
      description:
        "Custom solutions made to fit just your problem. No ready-made template that claimed to have worked for 1,000 others. Of course yours is different, and our solution? Also different and covers all around.",
      steps: [
        {
          title: "Analysis Made For You",
          description:
            "We dig deep into your specific situation, not cookie-cutter templates.",
        },
        {
          title: "Tools Fit Your Need",
          description:
            "Custom-built solutions that actually match your business model.",
        },
        {
          title: "Drive Sales & Close Deals",
          description:
            "Systems that convert leads into paying customers consistently.",
        },
        {
          title: "Make Profit",
          description:
            "Watch your revenue grow while we handle the technical heavy lifting.",
        },
      ],
    },
    agitate: {
      title: "Your Other Options? Let's Be Honest...",
      cards: [
        {
          title: "The Big Agency Route",
          description:
            "That competitor making 3x more with Facebook ads? His agency didn't take him seriously from the start. They still don't. They've got 100 other clients just like you. You're just another number in their pipeline.",
        },
        {
          title: "The Freelancer Lottery",
          description:
            "Or you could try that one guy next door showing Photoshopped screenshots of how he made X company $1 million in 3 months. The go-lucky lottery we all want, right? Yeah, good luck with that.",
        },
        {
          title: 'The "Work Harder" Myth',
          description:
            "Or we could work harder, like we aren't doing anything right now, and somehow our hard work pays off because you've been sitting on your legs before? Yeah, try that.",
        },
      ],
    },
    solution: {
      title: "The Reality Check",
      description:
        "Your competitors are making 5x more while you're still figuring out why your marketing isn't working. They didn't get lucky. They got smart.",
      cards: [
        {
          title: "We're In The Trenches With You",
          description:
            "Your loss, our loss. Your win, our win. Not looking for quick cash to buy shoes. We need you to stick around so we can buy a house. Real partnership.",
        },
        {
          title: "Top Dogs Only",
          description:
            "No apprentice touching your account. No work passed down. The people who can afford your refund handle your project. That's how serious we are.",
        },
        {
          title: "Custom Built, Not Templates",
          description:
            "Present your issue, we tailor the solution. Fast. Few complaints because we're right next to you making sure it works.",
        },
        {
          title: "We Cut The Noise",
          description:
            "You don't need to care about funky new trends. We know the drill and focus only on what actually gets you results.",
        },
      ],
    },
    contact: {
      title: "Ready to Stop Bleeding Money?",
      subtitle:
        "Your competitors aren't waiting. Neither should you. Share your details and we'll reach out with a fix. Let's talk.",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Phone Number (Optional)",
        issue: "What's Your Most Critical Issue?",
        issueOptions: {
          placeholder: "What's Your Most Critical Issue?",
          marketing: "Marketing Not Converting",
          tech: "Tech/Systems Holding Me Back",
          sales: "Sales Pipeline Issues",
          growth: "Can't Scale Fast Enough",
          other: "Something Else",
        },
        brief: "Brief Info About Your Business",
        details: "More Details - What's Really Keeping You Up at Night?",
        submit: "We'll Reach Out With a Fix. Let's Talk.",
        alertRequired: "Please fill in all required fields",
        alertSuccess: "Thanks! We'll reach out shortly with a solution.",
      },
    },
    footer: {
      brandName: "ARENOX EMPIRE",
      tagline: "Evolving Beyond",
      copyright:
        "© 2025 Arenox Empire. One breath, One step, One win at a time.",
    },
  },
  fr: {
    brandName: "ARENOX",
    lightMode: "☀️ Clair",
    darkMode: "🌙 Sombre",
    hero: {
      title1: "Solutions Sur Mesure.",
      title2: "Contrats Conclus ",
      title3: "Rapidement.",
      subtitle:
        "Vous faites ce que vous faites de mieux, et ce n'est évidemment pas la technologie ou le marketing. Vous pourriez apprendre, ou nous laisser faire. Nous nous occupons du reste, vous amenant à votre prochain jalon de succès.",
      cta: "Travaillons Ensemble",
    },
    whatWeDo: {
      title: "Alors... Pourquoi Vous?",
      description:
        "Des solutions sur mesure adaptées à votre problème. Pas de modèle prêt à l'emploi qui prétend avoir fonctionné pour 1 000 autres. Bien sûr, le vôtre est différent, et notre solution ? Également différente et couvre tout.",
      steps: [
        {
          title: "Analyse Faite Pour Vous",
          description:
            "Nous creusons en profondeur dans votre situation spécifique, pas de modèles génériques.",
        },
        {
          title: "Outils Adaptés À Vos Besoins",
          description:
            "Solutions personnalisées qui correspondent réellement à votre modèle d'affaires.",
        },
        {
          title: "Stimulez Les Ventes & Concluez",
          description:
            "Des systèmes qui convertissent les prospects en clients payants de manière cohérente.",
        },
        {
          title: "Réalisez Des Bénéfices",
          description:
            "Regardez vos revenus croître pendant que nous gérons le travail technique lourd.",
        },
      ],
    },
    agitate: {
      title: "Vos Autres Options? Soyons Honnêtes...",
      cards: [
        {
          title: "La Route Des Grandes Agences",
          description:
            "Ce concurrent qui gagne 3 fois plus avec les publicités Facebook ? Son agence ne l'a jamais pris au sérieux dès le début. Et elle ne le fait toujours pas. Ils ont 100 autres clients comme vous. Vous n'êtes qu'un numéro dans leur pipeline.",
        },
        {
          title: "La Loterie Des Freelances",
          description:
            "Ou vous pourriez essayer ce type d'à côté qui montre des captures d'écran Photoshopées de comment il a fait gagner 1 million de dollars à l'entreprise X en 3 mois. La loterie chanceuse que nous voulons tous, n'est-ce pas ? Ouais, bonne chance avec ça.",
        },
        {
          title: 'Le Mythe Du "Travaillez Plus Dur"',
          description:
            "Ou nous pourrions travailler plus dur, comme si nous ne faisions rien en ce moment, et d'une manière ou d'une autre notre travail acharné porte ses fruits parce que vous étiez assis sur vos jambes avant ? Ouais, essayez ça.",
        },
      ],
    },
    solution: {
      title: "La Vérification De La Réalité",
      description:
        "Vos concurrents gagnent 5 fois plus pendant que vous essayez encore de comprendre pourquoi votre marketing ne fonctionne pas. Ils n'ont pas eu de chance. Ils ont été intelligents.",
      cards: [
        {
          title: "Nous Sommes Dans Les Tranchées",
          description:
            "Votre perte, notre perte. Votre victoire, notre victoire. Nous ne cherchons pas de l'argent rapide pour acheter des chaussures. Nous avons besoin que vous restiez pour pouvoir acheter une maison. Un vrai partenariat.",
        },
        {
          title: "Seulement Les Meilleurs",
          description:
            "Aucun apprenti ne touche à votre compte. Aucun travail transmis. Les personnes qui peuvent se permettre votre remboursement gèrent votre projet. C'est à quel point nous sommes sérieux.",
        },
        {
          title: "Construit Sur Mesure",
          description:
            "Présentez votre problème, nous adaptons la solution. Rapidement. Peu de plaintes car nous sommes juste à côté de vous pour nous assurer que ça fonctionne.",
        },
        {
          title: "Nous Éliminons Le Bruit",
          description:
            "Vous n'avez pas besoin de vous soucier des nouvelles tendances farfelues. Nous connaissons le processus et nous concentrons uniquement sur ce qui vous apporte vraiment des résultats.",
        },
      ],
    },
    contact: {
      title: "Prêt À Arrêter De Perdre?",
      subtitle:
        "Vos concurrents n'attendent pas. Vous non plus ne devriez pas. Partagez vos détails et nous vous contacterons avec une solution. Parlons-en.",
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        phone: "Numéro De Téléphone (Optionnel)",
        issue: "Quel Est Votre Problème Critique?",
        issueOptions: {
          placeholder: "Quel Est Votre Problème Le Plus Critique?",
          marketing: "Le Marketing Ne Convertit Pas",
          tech: "La Technologie Me Retient",
          sales: "Problèmes De Pipeline De Ventes",
          growth: "Je Ne Peux Pas Évoluer Assez Vite",
          other: "Autre Chose",
        },
        brief: "Info Sur Votre Entreprise",
        details: "Plus De Détails - Qu'est-ce Qui Vous Empêche De Dormir?",
        submit: "Nous Vous Contacterons. Parlons-En.",
        alertRequired: "Veuillez remplir tous les champs obligatoires",
        alertSuccess:
          "Merci! Nous vous contacterons bientôt avec une solution.",
      },
    },
    footer: {
      brandName: "ARENOX EMPIRE",
      tagline: "Évoluer Au-Delà",
      copyright:
        "© 2025 Arenox Empire. Une respiration, Un pas, Une victoire à la fois.",
    },
  },
};

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
      className={`min-h-screen flex items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden ${isDark ? "bg-slate-950" : "bg-white"}`}
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

const ContactForm = ({ isDark, lang }) => {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
    brief: "",
    details: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.issue ||
      !formData.brief ||
      !formData.details
    ) {
      alert(t.form.alertRequired);
      return;
    }
    console.log("Form submitted:", formData);
    alert(t.form.alertSuccess);
    setFormData({
      name: "",
      email: "",
      phone: "",
      issue: "",
      brief: "",
      details: "",
    });
  };
  const inputClasses = isDark
    ? "w-full px-5 py-4 bg-slate-950/60 border border-yellow-500/25 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-yellow-400 focus:bg-slate-950/90 focus:ring-2 focus:ring-yellow-400/20 transition-all"
    : "w-full px-5 py-4 bg-white border border-indigo-200 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-gray-50 focus:ring-2 focus:ring-indigo-200 transition-all";
  return (
    <section
      id="contact"
      className={`py-24 px-6 ${isDark ? "bg-gradient-to-br from-purple-900/15 via-slate-900/30 to-yellow-900/15" : "bg-gradient-to-br from-indigo-50 via-gray-50 to-yellow-50"}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 ${isDark ? "bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent" : "text-indigo-900"}`}
        >
          {t.title}
        </h2>
        <p
          className={`text-center text-xl mb-14 max-w-2xl mx-auto leading-relaxed ${isDark ? "text-slate-300" : "text-gray-700"}`}
        >
          {t.subtitle}
        </p>
        <div
          className={`p-10 md:p-14 rounded-3xl border shadow-2xl ${isDark ? "bg-slate-900/40 border-yellow-500/20" : "bg-white border-indigo-100"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.form.name}
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.form.email}
              className={inputClasses}
            />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t.form.phone}
            className={`${inputClasses} mb-6`}
          />
          <select
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className={`${inputClasses} mb-6 cursor-pointer`}
          >
            <option value="">{t.form.issueOptions.placeholder}</option>
            <option value="marketing">{t.form.issueOptions.marketing}</option>
            <option value="tech">{t.form.issueOptions.tech}</option>
            <option value="sales">{t.form.issueOptions.sales}</option>
            <option value="growth">{t.form.issueOptions.growth}</option>
            <option value="other">{t.form.issueOptions.other}</option>
          </select>
          <textarea
            name="brief"
            value={formData.brief}
            onChange={handleChange}
            placeholder={t.form.brief}
            rows={3}
            className={`${inputClasses} mb-6 resize-y`}
          />
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder={t.form.details}
            rows={5}
            className={`${inputClasses} mb-8 resize-y`}
          />
          <button
            onClick={handleSubmit}
            className={`w-full px-10 py-5 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${isDark ? "bg-gradient-to-r from-yellow-500 to-purple-500 text-slate-950 shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40" : "bg-indigo-900 text-white shadow-indigo-900/30 hover:shadow-2xl hover:shadow-indigo-900/40"}`}
          >
            {t.form.submit}
          </button>
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
  const [lang, setLang] = useState(localStorage.getItem("useLang") ?? "fr");
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
  );
}
