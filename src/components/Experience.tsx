"use client";

import { useTranslation } from "react-i18next";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      cargo: "experiencia.cargo1",
      empresa: "experiencia.empresa1",
      periodo: "experiencia.periodo1",
      items: [
        "experiencia.desc1_item1",
        "experiencia.desc1_item2",
        "experiencia.desc1_item3",
        "experiencia.desc1_item4",
      ],
      current: true,
    },
    {
      cargo: "experiencia.cargo2",
      empresa: "experiencia.empresa2",
      periodo: "experiencia.periodo2",
      items: [
        "experiencia.desc2_item1",
        "experiencia.desc2_item2",
        "experiencia.desc2_item3",
        "experiencia.desc2_item4",
      ],
    },
    {
      cargo: "experiencia.cargo3",
      empresa: "experiencia.empresa3",
      periodo: "experiencia.periodo3",
      items: [
        "experiencia.desc3_item1",
        "experiencia.desc3_item2",
        "experiencia.desc3_item3",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12 text-center">
          {t("experiencia.titulo")}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-sm border border-stone-100 dark:border-stone-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-pistache/10 text-pistache-dark dark:text-pistache-light flex-shrink-0">
                  <FiBriefcase size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                      {t(exp.cargo)}
                    </h3>
                    <span
                      className={`text-sm font-medium ${
                        exp.current
                          ? "text-pistache-dark dark:text-pistache-light"
                          : "text-stone-500 dark:text-stone-400"
                      }`}
                    >
                      {t(exp.periodo)}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
                    {t(exp.empresa)}
                  </p>
                  <ul className="space-y-2">
                    {exp.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-300"
                      >
                        <span className="text-pistache mt-1">•</span>
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                  {exp.current && (
                    <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-pistache/10 text-pistache-dark dark:text-pistache-light rounded-full">
                      {t("experiencia.atual")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
