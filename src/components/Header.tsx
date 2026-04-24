"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const CONTACT = {
  email: "matheus.araujo.data@outlook.com",
  whatsapp: "https://wa.me/5561982399701",
  phone: "tel:+5561982399701",
  linkedin: "https://www.linkedin.com/in/matheus-p-araujo/",
  github: "https://github.com/matheusparaujo1515",
};

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: "inicio", href: "#inicio" },
    { key: "sobre", href: "#sobre" },
    { key: "experiencia", href: "#experiencia" },
    { key: "educacao", href: "#educacao" },
    { key: "habilidades", href: "#habilidades" },
    { key: "projetos", href: "#projetos" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md z-50 border-b border-stone-200 dark:border-stone-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-bold text-pistache-dark text-lg">
          Matheus<span className="text-stone-700 dark:text-stone-200">.data</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-stone-600 dark:text-stone-300 hover:text-pistache-dark dark:hover:text-pistache-light transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="E-mail"
              className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              <FiMail size={16} />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href={CONTACT.phone}
              aria-label="Telefone"
              className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              <FiPhone size={16} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-stone-500 dark:text-stone-400 hover:text-pistache-dark dark:hover:text-pistache-light hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
            >
              <FaGithub size={16} />
            </a>
          </div>
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="md:hidden p-2 text-stone-600 dark:text-stone-300 hover:text-pistache-dark dark:hover:text-pistache-light transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-stone-600 dark:text-stone-300 hover:text-pistache-dark dark:hover:text-pistache-light transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-stone-200 dark:border-stone-700">
            <a href={`mailto:${CONTACT.email}`} className="p-2 rounded-full text-stone-500 dark:text-stone-400"><FiMail size={16} /></a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-stone-500 dark:text-stone-400"><FaWhatsapp size={16} /></a>
            <a href={CONTACT.phone} className="p-2 rounded-full text-stone-500 dark:text-stone-400"><FiPhone size={16} /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-stone-500 dark:text-stone-400"><FaLinkedinIn size={16} /></a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-stone-500 dark:text-stone-400"><FaGithub size={16} /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
