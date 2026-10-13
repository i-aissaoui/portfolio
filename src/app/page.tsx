"use client";

import React, { useState, useEffect } from "react";
import { site, type Locale } from "@/data/site";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import SiteNav from "@/components/SiteNav";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"), { ssr: false });

function L(str: unknown, locale: Locale) {
  if (!str) return "";
  if (typeof str === "string") return str;
  const s = str as Record<string, string>;
  return s[locale] ?? s.en ?? "";
}

const copy = {
  thesis: {
    en: "I build models that have to run where it matters — an emergency shutdown on a PLC, a blood-pressure forecast at the bedside, a fleet-wide twin in the cloud. Transformers written from scratch, physics-informed digital twins, and the software that ships them.",
    fr: "Je conçois des modèles qui tournent là où ça compte — un arrêt d'urgence sur un automate, une prévision de pression artérielle au chevet, un jumeau à l'échelle d'une flotte dans le cloud. Transformeurs écrits de zéro, jumeaux numériques informés par la physique, et le logiciel qui les déploie.",
    de: "Ich baue Modelle, die dort laufen, wo es zählt — eine Notabschaltung auf einer SPS, eine Blutdruckprognose am Krankenbett, ein flottenweiter Zwilling in der Cloud. Von Grund auf geschriebene Transformer, physik-informierte digitale Zwillinge und die Software, die sie ausliefert.",
  },
  focus: {
    en: "Deep Learning · Digital Twins · Edge AI",
    fr: "Deep Learning · Jumeaux numériques · IA embarquée",
    de: "Deep Learning · Digitale Zwillinge · Edge-KI",
  },
  openChannel: { en: "Open Channel", fr: "Ouvrir le canal", de: "Kanal öffnen" },
  download: { en: "Download CV", fr: "Télécharger le CV", de: "Lebenslauf laden" },
  availableFor: { en: "Available for", fr: "Disponible pour", de: "Verfügbar für" },
  statusOpen: { en: "open", fr: "disponible", de: "offen" },
};

function SectionHead({
  channel,
  title,
  subtitle,
}: {
  channel: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mb-12">
      <div className="mb-5 flex items-center gap-5">
        <span className="eyebrow">{channel}</span>
        <span className="rule flex-1" />
      </div>
      <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-paper md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-dim md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

type ProjectCardProps = {
  index: number;
  title: string;
  description: string;
  tech: string[];
  images?: string[];
  accent: "amber" | "blue";
  code: string;
  cta: string;
  onOpen: (i: number, e: React.MouseEvent) => void;
  featured?: boolean;
};

function ProjectCard({
  index,
  title,
  description,
  tech,
  images,
  accent,
  code,
  cta,
  onOpen,
  featured = false,
}: ProjectCardProps) {
  const image = images?.[0];
  const short = description.length > 190 ? description.slice(0, 187) + "…" : description;
  const accentText = accent === "amber" ? "text-amber" : "text-blue";
  const titleHover =
    accent === "amber" ? "group-hover:text-amber" : "group-hover:text-blue";

  return (
    <article
      onClick={(e) => onOpen(index, e)}
      className={`reveal panel panel-hover group flex cursor-pointer flex-col overflow-hidden ${
        featured ? "md:flex-row" : ""
      }`}
    >
      {image && (
        <div className={`relative overflow-hidden border-grid ${featured ? "md:h-auto md:w-1/2 md:border-r" : "h-56 border-b"}`}>
          <div className="relative h-full w-full">
            {image.startsWith("/") || image.startsWith("https://images.unsplash.com") ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[0.35] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
            ) : (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover grayscale-[0.35] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
            )}
          </div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(11,14,18,0.82) 0%, rgba(11,14,18,0.1) 45%, transparent 100%)",
            }}
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-10" : ""}`}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className={`mono text-[10px] uppercase tracking-[0.28em] ${accentText}`}>{code}</span>
          <span className="chip !text-[9px]">{tech[0]}</span>
        </div>

        <h3
          className={`font-display font-bold leading-tight text-paper transition-colors ${titleHover} ${
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-dim md:text-base">{short}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.slice(0, 5).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {tech.length > 5 && <span className="chip">+{tech.length - 5}</span>}
        </div>

        <div className={`mt-7 flex items-center gap-2 ${accentText}`}>
          <span className="mono text-[10px] uppercase tracking-[0.24em]">{cta}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale>("en");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  function openProject(i: number, e?: React.MouseEvent) {
    const p = site.projects[i];
    if (p.link && p.link.startsWith("/projects/")) {
      router.push(p.link);
      return;
    }
    if (p.category === "AI") {
      router.push(`/projects/${i}`);
      return;
    }
    const el = (e?.currentTarget as HTMLElement) ?? null;
    if (el) setOriginRect(el.getBoundingClientRect());
    setActive(i);
    setOpen(true);
  }

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ctaView = locale === "fr" ? "Voir le dossier" : locale === "de" ? "Dossier öffnen" : "Open dossier";

  const capabilityGroups = site.skillsGrouped.filter(
    (g) => !["spoken", "frameworks", "viz"].includes(g.key)
  );

  const twins = site.projects.filter((p) => p.link?.includes("digital-twin"));
  const aiProjects = site.projects.filter(
    (p) => p.category === "AI" && !p.link?.includes("digital-twin")
  );
  const otherProjects = site.projects.filter((p) => p.category === "Other");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-ink text-paper">
      <SiteNav locale={locale} onLocaleChange={(lang) => setLocale(lang)} />

      <main className="relative z-10">
        {/* ---------------- HERO ---------------- */}
        <section id="home" className="relative border-b border-grid pt-28">
          <div className="grid-field pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto grid max-w-[1600px] gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="rise">
              <div className="mb-8 flex items-center gap-5">
                <span className="eyebrow">CH-00 / Profile</span>
                <span className="rule w-24" />
              </div>

              <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-extrabold leading-[0.86] tracking-tight text-paper">
                {L(site.name, locale)}
              </h1>

              <p className="mt-6 font-display text-xl font-semibold text-amber md:text-3xl">
                {L(site.role, locale)}
              </p>

              <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-dim md:text-lg">
                {copy.thesis[locale]}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn btn-primary">
                  {copy.openChannel[locale]}
                </a>
                <a
                  href={
                    locale === "fr" ? "/resume_fr.pdf" : locale === "de" ? "/resume_de.pdf" : "/resume_en.pdf"
                  }
                  download
                  className="btn"
                >
                  {copy.download[locale]} ↓
                </a>
              </div>
            </div>

            {/* profile card */}
            <div className="reveal is-in">
              <div className="panel overflow-hidden">
                <div className="flex items-center justify-between border-b border-grid px-4 py-3">
                  <span className="mono text-[10px] uppercase tracking-[0.24em] text-dim">
                    profile · dossier
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="blink h-1.5 w-1.5 rounded-full bg-amber" />
                    <span className="mono text-[10px] uppercase tracking-[0.2em] text-dim-2">
                      {copy.statusOpen[locale]}
                    </span>
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-dim-2">
                    {copy.availableFor[locale]}
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight text-paper md:text-3xl">
                    {L(site.role, locale)}
                  </p>

                  <dl className="mt-8 divide-y divide-grid border-y border-grid">
                    <div className="flex items-baseline justify-between gap-6 py-3">
                      <dt className="mono text-[10px] uppercase tracking-[0.22em] text-dim-2">Location</dt>
                      <dd className="text-right text-sm font-light text-paper">{site.location}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-6 py-3">
                      <dt className="mono text-[10px] uppercase tracking-[0.22em] text-dim-2">Focus</dt>
                      <dd className="text-right text-sm font-light text-paper">{copy.focus[locale]}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-6 py-3">
                      <dt className="mono text-[10px] uppercase tracking-[0.22em] text-dim-2">Email</dt>
                      <dd className="text-right">
                        <a
                          href={`mailto:${site.email}`}
                          className="link-underline text-sm font-light text-amber"
                        >
                          {site.email}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {site.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="chip"
                      >
                        {s.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- CAPABILITY ---------------- */}
        <section id="capability" className="mx-auto max-w-[1600px] px-4 py-24 md:px-8 md:py-32">
          <SectionHead
            channel="CH-01 / Capability"
            title={locale === "en" ? "Capability Matrix" : locale === "fr" ? "Matrice de Compétences" : "Kompetenzmatrix"}
            subtitle={
              locale === "fr"
                ? "Une pile complète, de la manipulation de données massives à l'inférence à la frontière (edge)."
                : locale === "de"
                  ? "Ein durchgehender Stack, von der Verarbeitung großer Datenmengen bis zur Edge-Inferenz."
                  : "One continuous stack, from big-data pipelines to edge inference."
            }
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilityGroups.map((group, i) => (
              <div key={group.key} className="reveal panel group p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim-2">
                    S-{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 bg-amber/0 transition-colors group-hover:bg-amber" />
                </div>
                <h3 className="font-display text-lg font-bold text-paper">
                  {L(group.title, locale)}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- SYSTEMS ---------------- */}
        <section id="systems" className="border-y border-grid bg-panel/40">
          <div className="mx-auto max-w-[1600px] px-4 py-24 md:px-8 md:py-32">
            <SectionHead
              channel="CH-02 / Systems"
              title={locale === "en" ? "Deployed Systems" : locale === "fr" ? "Systèmes Déployés" : "Eingesetzte Systeme"}
              subtitle={
                locale === "fr"
                  ? "Une sélection de travaux fusionnant IA de pointe et ingénierie logicielle robuste."
                  : locale === "de"
                    ? "Eine Auswahl an Arbeiten, die modernste KI mit robuster Software verbinden."
                    : "A selection of work merging frontier AI with robust software engineering."
              }
            />

            {/* 01 field systems */}
            <div className="mb-16">
              <div className="mb-8 flex items-center gap-5">
                <span className="mono text-xs uppercase tracking-[0.28em] text-amber">
                  01 / Field Systems
                </span>
                <span className="rule flex-1" />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {twins.map((p) => {
                  const i = site.projects.indexOf(p);
                  return (
                    <ProjectCard
                      key={i}
                      index={i}
                      title={L(p.title, locale)}
                      description={L(p.description, locale)}
                      tech={p.tech}
                      images={p.images}
                      accent="amber"
                      code={`SYS-${String(i + 1).padStart(2, "0")} · ${p.category}`}
                      cta={ctaView}
                      onOpen={openProject}
                    />
                  );
                })}
              </div>
            </div>

            {/* 02 AI engineering */}
            <div className="mb-16">
              <div className="mb-8 flex items-center gap-5">
                <span className="mono text-xs uppercase tracking-[0.28em] text-blue">
                  02 / AI Engineering
                </span>
                <span className="rule flex-1" />
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {aiProjects.map((p) => {
                  const i = site.projects.indexOf(p);
                  return (
                    <ProjectCard
                      key={i}
                      index={i}
                      title={L(p.title, locale)}
                      description={L(p.description, locale)}
                      tech={p.tech}
                      images={p.images}
                      accent="blue"
                      code={`SYS-${String(i + 1).padStart(2, "0")}`}
                      cta={ctaView}
                      onOpen={openProject}
                    />
                  );
                })}
              </div>
            </div>

            {/* 03 software */}
            <div>
              <div className="mb-8 flex items-center gap-5">
                <span className="mono text-xs uppercase tracking-[0.28em] text-dim">
                  03 / Software & Enterprise
                </span>
                <span className="rule flex-1" />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((p) => {
                  const i = site.projects.indexOf(p);
                  return (
                    <div
                      key={i}
                      onClick={(e) => openProject(i, e)}
                      className="reveal panel panel-hover group flex cursor-pointer flex-col p-5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim-2">
                          SYS-{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="mono text-[10px] text-blue opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold leading-snug text-paper">
                        {L(p.title, locale)}
                      </h3>
                      <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-dim">
                        {L(p.description, locale)}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 3).map((t) => (
                          <span key={t} className="chip !text-[9px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- RECORD ---------------- */}
        <section id="record" className="mx-auto max-w-[1600px] px-4 py-24 md:px-8 md:py-32">
          <SectionHead
            channel="CH-03 / Record"
            title={locale === "en" ? "Record & Calibration" : locale === "fr" ? "Parcours & Calibration" : "Werdegang & Kalibrierung"}
            subtitle={
              locale === "fr"
                ? "Jamais seulement le diplôme : les systèmes construits, les équipes avec lesquelles je les ai menés, et les problèmes qu'ils résolvent."
                : locale === "de"
                  ? "Nicht nur der Abschluss: die Systeme, die ich gebaut habe, die Teams, mit denen ich sie umgesetzt habe, und die Probleme, die sie lösen."
                  : "Not just the credential — the systems built, the teams I built them with, and the problems they solve."
            }
          />

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="space-y-4">
                {site.experiences.map((exp, idx) => (
                  <div key={idx} className="reveal panel panel-hover p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="mono text-[10px] uppercase tracking-[0.28em] text-amber">
                        {exp.period}
                      </span>
                      <span className="mono text-[10px] uppercase tracking-[0.24em] text-dim-2">
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold leading-snug text-paper md:text-2xl">
                      {L(exp.title, locale)}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-blue">
                      @ {exp.company}
                    </p>
                    <p className="mt-4 text-sm font-light leading-relaxed text-dim md:text-base">
                      {L(exp.description, locale)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="reveal mt-8">
                <div className="mb-6 flex items-center gap-5">
                  <span className="mono text-xs uppercase tracking-[0.28em] text-dim">
                    Trajectory
                  </span>
                  <span className="rule flex-1" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      tag: "TARGET · 2026",
                      title: "Engineering Degree in AI",
                      body: "École Supérieure en Informatique de Sidi Bel-Abbès (ESI-SBA). Advanced neural architectures, machine learning methods, scalable intelligent systems.",
                    },
                    {
                      tag: "ORIGIN · 2021",
                      title: "Baccalaureate — Mathematical Engineering",
                      body: "Foundational training in pure mathematics, algorithmic logic, and rigorous analytical thinking.",
                    },
                  ].map((edu) => (
                    <div key={edu.tag} className="panel border-l-2 border-l-amber p-6">
                      <span className="mono text-[10px] uppercase tracking-[0.24em] text-amber">
                        {edu.tag}
                      </span>
                      <h4 className="mt-3 font-display text-lg font-bold text-paper">{edu.title}</h4>
                      <p className="mt-3 text-sm font-light leading-relaxed text-dim">{edu.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal panel h-fit p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim">
                  Calibration
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.24em] text-dim-2">
                  spoken
                </span>
              </div>
              <div className="space-y-8">
                {[
                  { label: "Arabic", level: "Mother tongue", width: "100%" },
                  { label: "English", level: "Advanced", width: "95%" },
                  { label: "French", level: "Conversational", width: "72%" },
                ].map((lang) => (
                  <div key={lang.label}>
                    <div className="mb-3 flex items-baseline justify-between">
                      <span className="font-display text-sm font-bold text-paper">{lang.label}</span>
                      <span className="mono text-[10px] uppercase tracking-[0.2em] text-dim-2">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-grid">
                      <div className="h-full bg-blue" style={{ width: lang.width }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-grid pt-8">
                <p className="font-display text-2xl font-bold leading-tight tracking-tight text-paper">
                  &ldquo;Creativity solves problems.{" "}
                  <span className="text-amber">Communication builds legacy.&rdquo;</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="border-t border-grid bg-panel/40">
          <div className="mx-auto max-w-[1600px] px-4 py-24 md:px-8 md:py-32">
            <div className="mb-10 flex items-center gap-5">
              <span className="eyebrow">CH-04 / Open Channel</span>
              <span className="rule flex-1" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div className="reveal">
                <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-paper md:text-6xl lg:text-7xl">
                  {locale === "en"
                    ? "Let's put a model where it matters."
                    : locale === "fr"
                      ? "Mettons un modèle là où ça compte."
                      : "Bringen wir ein Modell dorthin, wo es zählt."}
                </h2>
                <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-dim md:text-lg">
                  {locale === "fr"
                    ? "Disponible pour des projets critiques en IA et des architectures logicielles de haute performance."
                    : locale === "de"
                      ? "Verfügbar für kritische KI-Projekte und Hochleistungs-Softwarearchitekturen."
                      : "Available for mission-critical AI projects and high-performance software architectures."}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${site.email}`} className="btn btn-primary">
                    {site.email}
                  </a>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn">
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="reveal">
                <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim-2">
                  network nodes
                </span>
                <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-grid bg-grid sm:grid-cols-2">
                  {site.socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between bg-panel px-5 py-4 transition-colors hover:bg-panel-2"
                    >
                      <span className="mono text-xs uppercase tracking-[0.18em] text-dim group-hover:text-paper">
                        {s.label}
                      </span>
                      <span className="text-dim-2 transition-all group-hover:translate-x-0.5 group-hover:text-amber">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-grid">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim-2">
              © 2025 Aissaoui Ismail
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim-2">
              AI &amp; Data Science — Digital Twins
            </span>
          </div>
        </footer>
      </main>

      {active !== null && (
        <ProjectModal
          open={open}
          originRect={originRect}
          onClose={() => setOpen(false)}
          title={L(site.projects[active].title, locale)}
          images={site.projects[active].images}
          imageFolder={site.projects[active].imageFolder}
          details={
            site.projects[active].details?.[locale] ?? site.projects[active].description[locale]
          }
          tech={site.projects[active].tech}
        />
      )}
    </div>
  );
}
