"use client";

import { useTranslation } from "react-i18next";
import { FaPython, FaDatabase } from "react-icons/fa";
import { FiBarChart2, FiCpu, FiShield, FiTrendingUp } from "react-icons/fi";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    { key: "python", icon: FaPython, color: "text-yellow-600 dark:text-yellow-400" },
    { key: "sql", icon: FaDatabase, color: "text-blue-500 dark:text-blue-400" },
    { key: "powerbi", icon: FiBarChart2, color: "text-amber-600 dark:text-amber-400" },
    { key: "ml", icon: FiCpu, color: "text-purple-600 dark:text-purple-400" },
    { key: "governanca", icon: FiShield, color: "text-teal-600 dark:text-teal-400" },
    { key: "admin", icon: FiTrendingUp, color: "text-rose-600 dark:text-rose-400" },
  ];

  return (
    <section id="habilidades" className="py-20 bg-white dark:bg-stone-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-950 dark:text-stone-50 mb-12 text-center">
          {t("habilidades.titulo")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.key}
                className="bg-stone-50 dark:bg-stone-900 rounded-xl p-6 shadow-sm border border-stone-100 dark:border-stone-800 hover:shadow-md hover:border-[#8ebc83]/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-stone-800 group-hover:scale-110 transition-transform">
                    <Icon size={24} className={skill.color} />
                  </div>
                  <h3 className="font-semibold text-stone-900 dark:text-stone-100">
                    {t(`habilidades.${skill.key}.nome`)}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {t(`habilidades.${skill.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}