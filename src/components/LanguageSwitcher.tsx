"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const langs = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  return (
    <div className="flex gap-1 items-center">
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
            i18n.language?.startsWith(lang.code)
              ? "bg-pistache text-white"
              : "text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
