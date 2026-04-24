"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      className="p-2 rounded-full text-stone-500 hover:text-pistache-dark hover:bg-stone-100 dark:text-stone-400 dark:hover:text-pistache-light dark:hover:bg-stone-700 transition-colors"
    >
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}
