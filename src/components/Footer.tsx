"use client";

import { useTranslation } from "react-i18next";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

const CONTACT = {
  email: "matheus.araujo.data@outlook.com",
  whatsapp: "https://wa.me/5561982399701",
  phone: "tel:+5561982399701",
  linkedin: "https://linkedin.com/in/matheusaraujodata",
  github: "https://github.com/matheusaraujodata",
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#inicio" className="font-bold text-xl text-pistache">
              Matheus<span className="text-stone-200 dark:text-stone-300">.data</span>
            </a>
            <p className="text-sm text-stone-400 mt-1">
              {t("contato.titulo")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="E-mail"
              className="p-3 rounded-full bg-stone-800 dark:bg-stone-800 text-stone-300 hover:bg-pistache hover:text-white transition-colors"
            >
              <FiMail size={18} />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-stone-800 text-stone-300 hover:bg-pistache hover:text-white transition-colors"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href={CONTACT.phone}
              aria-label="Telefone"
              className="p-3 rounded-full bg-stone-800 text-stone-300 hover:bg-pistache hover:text-white transition-colors"
            >
              <FiPhone size={18} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-stone-800 text-stone-300 hover:bg-pistache hover:text-white transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-stone-800 text-stone-300 hover:bg-pistache hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Matheus Araújo. {t("contato.direitos")}</p>
        </div>
      </div>
    </footer>
  );
}
