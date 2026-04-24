"use client";

import { useTranslation } from "react-i18next";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  const { t } = useTranslation();

  const education = [
    {
      curso: "educacao.curso1",
      instituicao: "educacao.instituicao1",
      periodo: "educacao.periodo1",
      ongoing: true,
    },
    {
      curso: "educacao.curso2",
      instituicao: "educacao.instituicao2",
      periodo: "educacao.periodo2",
    },
    {
      curso: "educacao.curso3",
      instituicao: "educacao.instituicao3",
      periodo: "educacao.periodo3",
    },
    {
      curso: "educacao.curso4",
      instituicao: "educacao.instituicao4",
      periodo: "educacao.periodo4",
    },
  ];

  return (
    <section id="educacao" className="py-20 bg-white dark:bg-stone-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12 text-center">
          {t("educacao.titulo")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-stone-50 dark:bg-stone-800 rounded-xl p-6 border border-stone-100 dark:border-stone-700 hover:border-pistache/30 transition-colors"
            >
              <div className="p-3 rounded-lg bg-pistache/10 text-pistache-dark dark:text-pistache-light w-fit mb-4">
                <FiBookOpen size={20} />
              </div>
              <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1">{t(edu.curso)}</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">{t(edu.instituicao)}</p>
              <span className="text-sm text-pistache-dark dark:text-pistache-light font-medium">
                {t(edu.periodo)}
              </span>
              {edu.ongoing && (
                <span className="block mt-2 px-3 py-1 text-xs font-medium bg-pistache/10 text-pistache-dark dark:text-pistache-light rounded-full w-fit">
                  {t("educacao.andamento")}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
