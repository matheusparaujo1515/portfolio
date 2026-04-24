"use client";

import I18nProvider from "@/components/I18nProvider";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  );
}