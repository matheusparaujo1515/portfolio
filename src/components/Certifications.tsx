"use client";

import { useTranslation } from "react-i18next";
import { FiAward, FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  const { t } = useTranslation();

  const certs = [
    {
      id: "sc900",
      title: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
      issuer: "Microsoft",
      date: "2026",
      link: "https://www.linkedin.com/in/matheus-p-araujo/details/certifications/"
    },
    {
      id: "ai300",
      title: "Microsoft Azure AI Fundamentals (AI-300)",
      issuer: "Microsoft",
      date: "2026",
      link: "https://www.linkedin.com/in/matheus-p-araujo/details/certifications/"
    },
    {
      id: "aws",
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "2025",
      link: "https://www.linkedin.com/in/matheus-p-araujo/details/certifications/"
    }
  ];

  return (
    <section id="certificacoes" className="py-20 bg-stone-50 dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12 text-center">
          {t("certificacoes.titulo", { defaultValue: "Cursos e Certificações" })}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <a 
              key={cert.id} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-[#8ebc83] dark:hover:border-[#8ebc83] hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-[#8ebc83]/10 rounded-lg text-[#8ebc83] group-hover:scale-110 transition-transform">
                <FiAward size={28} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-stone-400 dark:text-stone-500 tracking-widest">{cert.date}</span>
                  <FiExternalLink size={16} className="text-stone-300 dark:text-stone-600 group-hover:text-[#8ebc83] dark:group-hover:text-[#8ebc83] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-stone-800 dark:text-stone-100 mb-1 group-hover:text-[#8ebc83] dark:group-hover:text-[#8ebc83] transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}