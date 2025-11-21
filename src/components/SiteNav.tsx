"use client";

import React from "react";
// removed usePathname as it's unused
import type { Locale } from "@/data/site";

const navItems = [
  { id: "home", label: { en: "Home", fr: "Accueil", de: "Startseite" } },
  { id: "projects", label: { en: "Projects", fr: "Projets", de: "Projekte" } },
  { id: "expertise", label: { en: "Skills", fr: "Compétences", de: "Fähigkeiten" } },
  { id: "education", label: { en: "Education", fr: "Formation", de: "Ausbildung" } },
  { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
];

// no resume item in navbar

type SiteNavProps = {
  locale: Locale;
  onLocaleChange?: (lang: Locale) => void;
};

export default function SiteNav({ locale, onLocaleChange }: SiteNavProps) {
  const getSectionHref = (id: string) => `#${id}`;

  return (
    <nav className='print:hidden fixed top-0 left-0 right-0 z-50 bg-white/[0.02] backdrop-blur-xl border-b border-white/10'>
      <div className='max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12'>
        <div className='flex items-center justify-between h-20'>
          <a
            href="#home"
            className='text-xl font-bold text-white hover:text-[#00d9ff] transition-colors'
          >
            <span className='text-[#00d9ff]'>&lt;</span>
            ismail
            <span className='text-[#00d9ff]'>/&gt;</span>
          </a>

          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={getSectionHref(item.id)}
                className='text-sm font-medium text-white/70 hover:text-[#00d9ff] transition-colors relative group'
              >
                {item.label[locale] ?? item.label.en}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d9ff] group-hover:w-full transition-all duration-300'></span>
              </a>
            ))}
            {/* Resume link removed as requested */}
          </div>

          <div className='flex items-center gap-2 bg-white/[0.05] backdrop-blur-md p-1.5 rounded-lg border border-white/10'>
            {["en", "fr", "de"].map((lang) => {
              const typedLang = lang as Locale;
              const isActive = locale === typedLang;
              return (
                <button
                  key={lang}
                  type='button'
                  onClick={() => onLocaleChange?.(typedLang)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${
                    isActive
                      ? "bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  disabled={!onLocaleChange}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
