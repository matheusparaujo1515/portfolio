"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white via-pistache-light/10 to-white dark:from-stone-900 dark:via-pistache-dark/5 dark:to-stone-900"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-pistache shadow-lg flex-shrink-0">
          <Image
            src="/images/Perfil.jpeg"
            alt="Matheus Araújo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-pistache-dark dark:text-pistache-light font-medium mb-2">
            {t("hero.saudacao")}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-50 mb-3">
            {t("hero.nome")}
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 mb-4">
            {t("hero.titulo")}
          </p>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl">
            {t("hero.subtitulo")}
          </p>
        </div>
      </div>
    </section>
  );
}
