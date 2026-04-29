"use client";

import { useTranslation } from "react-i18next";
import I18nProvider from "@/components/I18nProvider";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowLeft, FiGithub } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

export default function AnaliseCredito() {
  const { t } = useTranslation();

  const insights = [
    "projetos.projeto2.insight1",
    "projetos.projeto2.insight2",
    "projetos.projeto2.insight3",
    "projetos.projeto2.insight4",
    "projetos.projeto2.insight5",
    "projetos.projeto2.insight6",
  ];

  return (
    <ThemeProvider>
      <I18nProvider>
        <Header />
        <main className="pt-24 pb-16 min-h-screen bg-white dark:bg-stone-900">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light mb-8 transition-colors"
            >
              <FiArrowLeft size={14} />
              {t("projetos.titulo")}
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-6">
              {t("projetos.projeto2.titulo_pagina")}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {t("projetos.projeto2.tecnologias")
                .split(", ")
                .map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-pistache/10 text-pistache-dark dark:text-pistache-light rounded-full"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            <div className="bg-white dark:bg-stone-800 rounded-xl p-8 shadow-sm border border-stone-100 dark:border-stone-700 mb-8">
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                {t("projetos.projeto2.descricao")}
              </p>
            </div>

            <div className="bg-white dark:bg-stone-800 rounded-xl p-8 shadow-sm border border-stone-100 dark:border-stone-700 mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
                {t("projetos.insights")}
              </h2>
              <ul className="space-y-3">
                {insights.map((insight, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 dark:text-stone-300">
                    <FaCheckCircle className="text-pistache mt-0.5 flex-shrink-0" size={16} />
                    {t(insight)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-800 rounded-xl p-8 shadow-sm border border-stone-100 dark:border-stone-700 mb-8">
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
                {t("projetos.projeto2.resultados_titulo")}
              </h2>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                {t("projetos.projeto2.resultados")}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/matheusparaujo1515/EBAC-Data-Science/tree/main/Mod01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pistache text-white rounded-lg hover:bg-pistache-dark transition-colors font-medium"
              >
                <FiGithub size={18} />
                GitHub
              </a>
              <Link
                href="/#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-200 rounded-lg hover:border-pistache dark:hover:border-pistache hover:text-pistache-dark dark:hover:text-pistache-light transition-colors font-medium"
              >
                <FiArrowLeft size={18} />
                {t("projetos.voltar")}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  );
}
