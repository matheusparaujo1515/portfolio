"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { DnaGraphic, CreditGraphic, VisionGraphic } from "./ProjectGraphics";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: "projeto1",
      href: "/projetos/classificacao-diabetes",
      tech: t("projetos.projeto1.tecnologias"),
    },
    {
      key: "projeto2",
      href: "/projetos/analise-credito",
      tech: t("projetos.projeto2.tecnologias"),
    },
    {
      key: "projeto3",
      href: "/projetos/deteccao-residuos",
      tech: t("projetos.projeto3.tecnologias"),
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-stone-50 dark:bg-stone-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12 text-center">
          {t("projetos.titulo")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.key}
              className="bg-white dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 hover:shadow-lg transition-all group"
            >
              {/* Container da Arte Dinâmica */}
              <div className="relative h-48 flex items-center justify-center bg-stone-50 dark:bg-stone-700/50 overflow-hidden transition-colors duration-300">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  {proj.key === "projeto1" ? (
                    <DnaGraphic />
                  ) : proj.key === "projeto2" ? (
                    <CreditGraphic />
                  ) : (
                    <VisionGraphic />
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                  {t(`projetos.${proj.key}.nome`)}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 mb-4 leading-relaxed line-clamp-3">
                  {t(`projetos.${proj.key}.resumo`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-[#8ebc83]/10 text-[#8ebc83] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={proj.href}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#8ebc83] hover:gap-2 transition-all"
                >
                  {t("projetos.ver_mais")}
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}