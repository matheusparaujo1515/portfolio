"use client";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-20 bg-white dark:bg-stone-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-10 text-center">
          {t("sobre.titulo")}
        </h2>
        <div className="space-y-6 text-stone-600 dark:text-stone-300 leading-relaxed">
          <p>{t("sobre.paragrafo1")}</p>
          <p>{t("sobre.paragrafo2")}</p>
          <p>{t("sobre.paragrafo3")}</p>
        </div>
      </div>
    </section>
  );
}
