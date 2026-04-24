"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function Hero() {
  const { t } = useTranslation();

  // Valores de posição para as 3 bolas
  const orb1X = useMotionValue(0);
  const orb1Y = useMotionValue(0);
  
  const orb2X = useMotionValue(0);
  const orb2Y = useMotionValue(0);
  
  const orb3X = useMotionValue(0);
  const orb3Y = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const mX = clientX - left;
    const mY = clientY - top;

    // Bola 1: Foge (Espelhada total)
    orb1X.set(width - mX);
    orb1Y.set(height - mY);

    // Bola 2: Segue o mouse (Lentamente)
    orb2X.set(mX);
    orb2Y.set(mY);

    // Bola 3: Foge com distorção (Diferente da Bola 1)
    orb3X.set(width - (mX * 0.5));
    orb3Y.set(height - (mY * 1.2));
  }

  // Molas (Springs) com físicas diferentes para não parecer mecânico
  const sX1 = useSpring(orb1X, { damping: 50, stiffness: 400 });
  const sY1 = useSpring(orb1Y, { damping: 50, stiffness: 400 });

  const sX2 = useSpring(orb2X, { damping: 40, stiffness: 100 }); // Mais solta
  const sY2 = useSpring(orb2Y, { damping: 40, stiffness: 100 });

  const sX3 = useSpring(orb3X, { damping: 70, stiffness: 200 }); // Mais pesada
  const sY3 = useSpring(orb3Y, { damping: 70, stiffness: 200 });

  // Gradientes gerados dinamicamente
  const bg1 = useMotionTemplate`radial-gradient(circle 350px at ${sX1}px ${sY1}px, rgba(142, 188, 131, 0.45), transparent 70%)`;
  const bg2 = useMotionTemplate`radial-gradient(circle 200px at ${sX2}px ${sY2}px, rgba(142, 188, 131, 0.35), transparent 80%)`;
  const bg3 = useMotionTemplate`radial-gradient(circle 450px at ${sX3}px ${sY3}px, rgba(169, 209, 159, 0.25), transparent 80%)`; // Tom pistache mais claro

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center py-24 md:py-32 bg-white dark:bg-stone-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Camadas do fundo dinâmico */}
      <motion.div className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply dark:mix-blend-lighten" style={{ background: bg1 }} />
      <motion.div className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply dark:mix-blend-lighten" style={{ background: bg2 }} />
      <motion.div className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply dark:mix-blend-lighten" style={{ background: bg3 }} />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-[#8ebc83] shadow-lg flex-shrink-0 bg-white">
          <Image
            src="/images/Perfil.jpeg"
            alt="Matheus Araújo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-[#8ebc83] font-medium mb-2">
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