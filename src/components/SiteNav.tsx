"use client";

import React from "react";
import type { Locale } from "@/data/site";
import { site } from "@/data/site";

const navItems = [
  { id: "capability", label: { en: "Capability", fr: "Capacités", de: "Fähigkeiten" } },
  { id: "systems", label: { en: "Systems", fr: "Systèmes", de: "Systeme" } },
  { id: "record", label: { en: "Record", fr: "Parcours", de: "Werdegang" } },
  { id: "contact", label: { en: "Contact", fr: "Contact", de: "Kontakt" } },
];

type SiteNavProps = {
  locale: Locale;
  onLocaleChange?: (lang: Locale) => void;
};

export default function SiteNav({ locale, onLocaleChange }: SiteNavProps) {
  return (
    <header className="print:hidden fixed top-0 left-0 right-0 z-50">
      {/* dual-track accent: measured (amber) / predicted (blue) */}
      <div
        className="h-[2px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--trace-amber) 0%, var(--trace-amber) 42%, var(--grid-strong) 50%, var(--trace-blue) 58%, var(--trace-blue) 100%)",
        }}
      />
      <div className="border-b border-grid bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-6 px-4 md:px-8">
          <div className="flex min-w-0 items-center gap-3 md:gap-5">
            <a href="#home" className="group flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-grid bg-panel p-1 transition-colors group-hover:border-amber">
                <img src="/logo-bg.png" alt="Aissaoui Ismail" className="h-full w-full object-contain" />
              </span>
              <span className="hidden flex-col leading-none sm:flex">
                <span className="font-display text-sm font-bold tracking-tight text-paper">
                  AISSAOUI ISMAIL
                </span>
                <span className="mono text-[9px] uppercase tracking-[0.28em] text-dim">
                  AI · Data Science
                </span>
              </span>
            </a>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="link-underline mono text-[10px] uppercase tracking-[0.24em] text-dim transition-colors hover:text-paper"
              >
                {item.label[locale] ?? item.label.en}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden items-center gap-2 md:flex">
              <span className="blink h-1.5 w-1.5 rounded-full bg-amber" />
              <span className="mono text-[10px] uppercase tracking-[0.2em] text-dim">
                {site.location}
              </span>
            </div>

            <div className="flex items-center border border-grid">
              {(["en", "fr", "de"] as Locale[]).map((lang) => {
                const isActive = locale === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => onLocaleChange?.(lang)}
                    disabled={!onLocaleChange}
                    className={`mono px-2.5 py-1.5 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                      isActive ? "bg-amber text-ink" : "text-dim hover:text-paper"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>

            <a href="#contact" className="btn btn-primary hidden !px-4 !py-2 md:inline-flex">
              Open Channel
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
