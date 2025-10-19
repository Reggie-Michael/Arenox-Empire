import { useState } from "react";
import toast from "react-hot-toast";
import { translations } from "../utils/translation";

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

  const [isLoading, setIsLoading] = useState(false); // 🔹 loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // 1️⃣ Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.issue ||
      !formData.brief ||
      !formData.details
    ) {
      toast.error(t.form.alertRequired);
      return;
    }

    setIsLoading(true); // start loading

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || "Failed to submit form");
      }

      toast.success(t.form.alertSuccess);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        issue: "",
        brief: "",
        details: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(
        error?.message || "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false); // stop loading
    }
  };

  const inputClasses = isDark
    ? "w-full px-5 py-4 bg-slate-950/60 border border-yellow-500/25 rounded-xl text-slate-100 placeholder-slate-500 outline-none focus:border-yellow-400 focus:bg-slate-950/90 focus:ring-2 focus:ring-yellow-400/20 transition-all"
    : "w-full px-5 py-4 bg-white border border-indigo-200 rounded-xl text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-400 focus:bg-gray-50 focus:ring-2 focus:ring-indigo-200 transition-all";

  return (
    <section
      id="contact"
      className={`py-24 px-6 ${
        isDark
          ? "bg-gradient-to-br from-purple-900/15 via-slate-900/30 to-yellow-900/15"
          : "bg-gradient-to-br from-indigo-50 via-gray-50 to-yellow-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 ${
            isDark
              ? "bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent"
              : "text-indigo-900"
          }`}
        >
          {t.title}
        </h2>
        <p
          className={`text-center text-xl mb-14 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-slate-300" : "text-gray-700"
          }`}
        >
          {t.subtitle}
        </p>

        <div
          className={`p-10 md:p-14 rounded-3xl border shadow-2xl ${
            isDark
              ? "bg-slate-900/40 border-yellow-500/20"
              : "bg-white border-indigo-100"
          }`}
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
            disabled={isLoading}
            className={`w-full px-10 py-5 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? "bg-gradient-to-r from-yellow-500 to-purple-500 text-slate-950 shadow-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/40"
                : "bg-indigo-900 text-white shadow-indigo-900/30 hover:shadow-2xl hover:shadow-indigo-900/40"
            } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isLoading ? t.form.submitting || "Submitting..." : t.form.submit}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
