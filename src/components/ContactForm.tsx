import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { translations } from "../utils/translation";
import { ComponentProps } from "../types";

interface FormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

const ContactForm: React.FC<ComponentProps> = ({ isDark, lang }) => {
  const t = translations[lang].contact;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e?: FormEvent<HTMLButtonElement>): Promise<void> => {
    // 1️⃣ Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.details
    ) {
      toast.error(t.form.alertRequired);
      return;
    }

    setIsLoading(true);

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
        details: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = isDark
    ? "w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-[#7C4DEF] focus:bg-gray-900/80 focus:ring-2 focus:ring-[#7C4DEF]/20 transition-all"
    : "w-full px-5 py-4 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 outline-none focus:border-[#7C4DEF] focus:bg-gray-50 focus:ring-2 focus:ring-[#7C4DEF]/20 transition-all";

  return (
    <section
      id="contact"
      className={`py-24 px-6 ${
        isDark ? "bg-[#1C1B36]" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 ${
            isDark ? "text-white" : "text-[#1C1B36]"
          }`}
        >
          {t.title}
        </h2>
        <p
          className={`text-center text-xl mb-14 max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t.subtitle}
        </p>

        <div
          className={`p-10 md:p-14 rounded-3xl border shadow-2xl ${
            isDark
              ? "bg-gray-900/40 border-gray-800/50"
              : "bg-white border-gray-200"
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
            className={`w-full px-10 py-5 text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl ${
              isDark
                ? "bg-[#D4AF27] text-[#1C1B36] hover:opacity-90"
                : "bg-[#D4AF27] text-[#1C1B36] hover:opacity-90"
            } ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Submitting..." : t.form.submit}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
