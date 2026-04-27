"use client";

import React from "react";
// removed usePathname as it's unused
import type { Locale } from "@/data/site";

const navItems = [
  { id: "home", label: { en: "Home", fr: "Accueil", de: "Startseite" } },
  { id: "projects", label: { en: "Projects", fr: "Projets", de: "Projekte" } },
  { id: "expertise", label: { en: "Expertise", fr: "Expertise", de: "Expertise" } },
  { id: "experience", label: { en: "Experience", fr: "Expérience", de: "Erfahrung" } },
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
    <nav className='print:hidden fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl'>
      <div className='bg-[#0c0c0c]/80 backdrop-blur-2xl border border-white/5 rounded-2xl px-6 md:px-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'>
        <div className='flex items-center justify-between h-20'>
          <a
            href="#home"
            className='flex items-center gap-3 group'
          >
            <div className='w-10 h-10 rounded-xl bg-[#00d9ff]/10 border border-[#00d9ff]/20 flex items-center justify-center overflow-hidden p-1 group-hover:border-[#00d9ff]/50 transition-all'>
              <img src="/logo-bg.png" alt="AI Logo" className='w-full h-full object-contain' />
            </div>
            <span className='text-sm font-bold text-white tracking-[0.3em] uppercase hidden md:block'>
              ISMAIL
            </span>
          </a>

          <div className='hidden lg:flex items-center gap-10'>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={getSectionHref(item.id)}
                className='text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-[0.2em] transition-all relative group'
              >
                {item.label[locale] ?? item.label.en}
                <span className='absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00d9ff] group-hover:w-full transition-all duration-500'></span>
              </a>
            ))}
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center p-1 bg-white/5 rounded-full border border-white/5'>
              {["en", "fr", "de"].map((lang) => {
                const typedLang = lang as Locale;
                const isActive = locale === typedLang;
                return (
                  <button
                    key={lang}
                    type='button'
                    onClick={() => onLocaleChange?.(typedLang)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${isActive
                      ? "bg-[#00d9ff] text-black"
                      : "text-white/40 hover:text-white"
                      }`}
                    disabled={!onLocaleChange}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>

            <a
              href="#contact"
              className='hidden md:block px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#00d9ff] transition-all'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
