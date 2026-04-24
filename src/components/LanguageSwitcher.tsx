"use client";

import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const langs = [
    { code: "pt", label: "PT", countryCode: "BR" },
    { code: "en", label: "EN", countryCode: "US" },
    { code: "es", label: "ES", countryCode: "ES" },
  ];

  return (
    <div className="flex gap-1 items-center">
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`flex flex-col items-center justify-center w-10 h-10 rounded transition-colors ${
            i18n.language?.startsWith(lang.code)
              ? "bg-pistache text-white"
              : "text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700"
          }`}
        >
          <ReactCountryFlag
            countryCode={lang.countryCode}
            svg
            style={{
              width: "1.2em",
              height: "1.2em",
              borderRadius: "2px",
            }}
            className="mb-0.5 shadow-sm"
          />
          <span className="text-[10px] font-bold leading-none">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
