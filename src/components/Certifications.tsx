"use client";

import { useTranslation } from "react-i18next";
import { FiAward, FiExternalLink } from "react-icons/fi";

export default function Certifications() {
  const { t } = useTranslation();

  const certs = [
    { key: "ebac", link: "https://lms.ebaconline.com.br/certs/validate/18494-22141-55000-66839" },
    { key: "randstad", link: "https://www.dio.me/certificate/FPUGNCHD/share" },
    { key: "bairesdev", link: "https://www.dio.me/certificate/LBM1VPSZ/share" },
    { key: "powerbi", link: "https://www.udemy.com/certificate/UC-8100f714-812b-4084-a1f4-154baa4350b7/" },
    { key: "quode", link: "" },
    { key: "ibm_ai", link: "https://www.credly.com/badges/d237a708-7def-4cac-b0f4-6de5db847db8/linked_in_profile" },
    { key: "ibm_web", link: "https://www.credly.com/badges/47483536-6bd0-45f9-bbeb-f9ad93e602b4/linked_in_profile" }
  ];

  return (
    <section id="certificacoes" className="py-20 bg-stone-50 dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-12 text-center">
          {t("certificacoes.titulo", { defaultValue: "Cursos e Certificações" })}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert) => {
            const hasLink = cert.link.length > 0;
            const CardWrapper = hasLink ? 'a' : 'div';
            const wrapperProps = hasLink ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <CardWrapper
                key={cert.key}
                {...wrapperProps}
                className="flex items-start gap-4 p-6 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-[#8ebc83] dark:hover:border-[#8ebc83] hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-[#8ebc83]/10 rounded-lg text-[#8ebc83] group-hover:scale-110 transition-transform">
                  <FiAward size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <span className="text-xs font-bold text-stone-400 dark:text-stone-500 tracking-widest">{t(`certificacoes.itens.${cert.key}.data`)}</span>
                    {hasLink && <FiExternalLink size={16} className="shrink-0 text-stone-300 dark:text-stone-600 group-hover:text-[#8ebc83] dark:group-hover:text-[#8ebc83] transition-colors" />}
                  </div>
                  <h3 className="text-base font-bold text-stone-800 dark:text-stone-100 mb-1 group-hover:text-[#8ebc83] dark:group-hover:text-[#8ebc83] transition-colors leading-snug">
                    {t(`certificacoes.itens.${cert.key}.titulo`)}
                  </h3>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">
                    {t(`certificacoes.itens.${cert.key}.emissor`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t(`certificacoes.itens.${cert.key}.tags`).split(", ").map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-medium bg-[#8ebc83]/10 text-[#8ebc83] rounded border border-[#8ebc83]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}