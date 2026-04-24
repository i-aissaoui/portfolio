"use client";

import React, { useState, useEffect } from "react";
import { site, type Locale } from "@/data/site";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import ProjectModal from "@/components/ProjectModal";
import MagicBento from "@/components/MagicBento";
import TextType from "@/components/TextType";
import SplitText from "@/components/SplitText";

function L(str: unknown, locale: Locale) {
  if (!str) return "";
  if (typeof str === "string") return str;
  const s = str as Record<string, string>;
  return s[locale] ?? s.en ?? "";
}

export default function Home() {
  // locale is now stateful so we can switch languages at runtime
  const [locale, setLocale] = useState<Locale>("en");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);

  function openProject(i: number, e?: React.MouseEvent) {
    const el = (e?.currentTarget as HTMLElement) ?? null;
    if (el) setOriginRect(el.getBoundingClientRect());
    setActive(i);
    setOpen(true);
  }

  useEffect(() => {
    // Wait for DOM to be ready
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-6");
            }
          });
        },
        { threshold: 0.15 }
      );

      const cards = document.querySelectorAll(".project-card");
      cards.forEach((el) => observer!.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className='relative w-full text-foreground overflow-x-hidden min-h-screen bg-[#0c0c0c]'>
      <SiteNav locale={locale} onLocaleChange={(lang) => setLocale(lang)} />
      <main className='relative z-10 mx-auto w-full max-w-[1920px] px-6 sm:px-8 lg:px-12'>
        {/* Hero Section - Elite AI Engineer Style */}
        <section id='home' className='relative pt-40 pb-24 overflow-hidden bg-grid-slate-900 hero-glow-border'>
          {/* Ambient Glows */}
          <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d9ff]/10 blur-[120px] rounded-full pointer-events-none'></div>

          <div className='relative z-10 mx-auto px-6 sm:px-12 lg:px-24'>

            <div className='absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40 pointer-events-none select-none overflow-hidden brain-visual-mask z-0'>
              <Image
                src="/the_mind.png"
                alt="Brain Visual"
                fill
                className='object-contain object-right transform translate-x-10 scale-110 lg:scale-125'
              />
            </div>

            <div className='relative z-20 max-w-4xl'>
              <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] display-font'>
                <span className='block opacity-30 text-4xl md:text-5xl lg:text-7xl mb-4 font-medium tracking-normal'>
                  {locale === "fr" ? "Je suis" : locale === "de" ? "Ich bin" : "I am"}
                </span>
                {L(site.name, locale)}
              </h1>

              <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-10'>
                <span className='text-[#00d9ff]'>
                  {locale === "fr"
                    ? "Ingénieur en IA & Full-Stack"
                    : locale === "de"
                      ? "KI & Full-Stack Ingenieur"
                      : "AI & Full-Stack Engineer"}
                </span>
              </h2>

              <p className='text-white/60 text-lg md:text-2xl leading-relaxed mb-16 max-w-2xl font-light text-left'>
                {locale === "fr"
                  ? "Conception de systèmes d'IA de pointe, des architectures Transformers aux écosystèmes d'entreprise robustes. Spécialisé en Deep Learning et ingénierie logicielle."
                  : locale === "de"
                    ? "Entwicklung wegweisender KI-Systeme, von Transformer-Architekturen bis hin zu robusten Unternehmens-Ökosystemen. Spezialisiert auf Deep Learning und Software-Engineering."
                    : "Architecting the next generation of intelligence, from foundational Transformer models to robust enterprise ecosystems. Specializing in Deep Learning and high-performance software engineering."}
              </p>

              <div className='flex flex-wrap items-center gap-6'>
                <a
                  href='#contact'
                  className='px-10 py-5 bg-[#00d9ff] text-black font-bold rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(0,217,255,0.3)]'
                >
                  {L({ en: "Let's Collaborate", fr: "Collaborer", de: "Zusammenarbeiten" }, locale)}
                </a>

                <a
                  href={locale === "fr" ? "/resume_fr.pdf" : locale === "de" ? "/resume_de.pdf" : "/resume_en.pdf"}
                  download
                  className='px-10 py-5 glass-card font-bold rounded-full hover:bg-white/10 transition-all duration-500 flex items-center gap-3 border-white/20 text-white'
                >
                  <span>{L({ en: "Download Resume", fr: "Curriculum Vitae", de: "Lebenslauf" }, locale)}</span>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Expertise Section - MagicBento */}
        <section id='expertise' className='py-32'>
          <div className='max-w-6xl mx-auto mb-20'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='w-12 h-[1px] bg-[#00d9ff]'></span>
              <span className='text-[#00d9ff] font-bold uppercase tracking-widest text-xs'>
                {locale === "fr" ? "Compétences" : locale === "de" ? "Fähigkeiten" : "Expertise"}
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl font-bold text-white mb-6 display-font tracking-tighter'>
              {locale === "fr"
                ? "Moteurs d'Intelligence"
                : locale === "de"
                  ? "Intelligenz-Motoren"
                  : "Motors of Intelligence"}
            </h2>
            <p className='text-white/50 text-lg max-w-2xl font-light'>
              {locale === "fr"
                ? "Une pile technologique complète pour l'ère de l'IA, de la manipulation de données massives au déploiement de modèles de pointe."
                : locale === "de"
                  ? "Ein umfassender Technologie-Stack für das KI-Zeitalter, von der Verarbeitung großer Datenmengen bis hin zum Einsatz modernster Modelle."
                  : "A comprehensive technology stack for the AI era, from big data manipulation to cutting-edge model deployment."}
            </p>
          </div>

          <div className='relative min-h-[800px] md:min-h-[1000px] lg:min-h-[1200px] rounded-3xl overflow-visible mx-auto'>
            <MagicBento
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={200}
              particleCount={4}
              glowColor="0, 217, 255"
              customCards={site.skillsGrouped.map(group => ({
                color: '#0c0c0c',
                title: L(group.title, locale),
                description: group.items.join(' • '),
                label: group.key.toUpperCase()
              }))}
            />
          </div>
        </section>

        {/* Projects Section - Elite AI Engineer Style */}
        <section id='projects' className='py-32'>
          <div className='max-w-6xl mx-auto mb-20'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='w-12 h-[1px] bg-[#00d9ff]'></span>
              <span className='text-[#00d9ff] font-bold uppercase tracking-widest text-xs'>
                {locale === "fr" ? "Réalisations" : locale === "de" ? "Projekte" : "Portfolio"}
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl font-bold text-white mb-6 display-font tracking-tighter'>
              {locale === "fr"
                ? "Systèmes Déployés"
                : locale === "de"
                  ? "Eingesetzte Systeme"
                  : "Deployed Systems"}
            </h2>
            <p className='text-white/50 text-lg max-w-2xl font-light'>
              {locale === "fr"
                ? "Une sélection de mes travaux les plus sophistiqués, fusionnant l'IA de pointe avec des solutions logicielles robustes."
                : locale === "de"
                  ? "Eine Auswahl meiner anspruchsvollsten Arbeiten, die modernste KI mit robusten Softwarelösungen verbindet."
                  : "A curated selection of my most sophisticated work, merging cutting-edge AI with robust software solutions."}
            </p>
          </div>

          {/* AI Engineering Projects */}
          <div className='mb-24'>
            <div className='flex items-center gap-6 mb-12 max-w-6xl mx-auto'>
              <h3 className='text-2xl md:text-3xl font-bold text-white/90 display-font uppercase tracking-wider'>
                01. {locale === "fr" ? "Ingénierie IA" : locale === "de" ? "KI-Engineering" : "AI Engineering"}
              </h3>
              <div className='h-[1px] flex-1 bg-white/5'></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
              {site.projects.filter(p => p.category === "AI").map((p) => {
                const i = site.projects.indexOf(p);
                const title = L(p.title, locale);
                const desc = L(p.description, locale);
                const shortDesc = desc.length > 150 ? desc.slice(0, 147) + "…" : desc;
                const image = p.images?.[0] || "/window.svg";
                return (
                  <article
                    key={i}
                    onClick={(e) => openProject(i, e)}
                    className='project-card group cursor-pointer rounded-3xl overflow-hidden bg-[#0c0c0c]/80 border border-white/5 hover:border-[#00d9ff]/30 backdrop-blur-xl opacity-0 translate-y-6 transition-all duration-700 ease-out hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,217,255,0.15)] flex flex-col h-full'
                  >
                    <div className='relative h-48 overflow-hidden'>
                      {(image.startsWith("/") || image.startsWith("https://images.unsplash.com")) ? (
                        <Image
                          src={image}
                          alt={title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className='object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                      ) : (
                        <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                      )}
                      <div className='absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent'></div>
                    </div>

                    <div className='p-6'>
                      <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-xl font-bold text-white group-hover:text-[#00d9ff] transition-colors'>
                          {title}
                        </h3>
                        <span className='px-2 py-0.5 rounded text-[10px] bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20 font-bold uppercase'>AI/ML</span>
                      </div>
                      <p className='text-white/40 text-base md:text-lg mb-6 leading-relaxed font-light line-clamp-3'>
                        {shortDesc}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {p.tech.slice(0, 4).map((t) => (
                          <span key={t} className='px-2 py-1 text-[10px] font-semibold uppercase rounded-md text-white/90 bg-white/5 border border-white/10'>{t}</span>
                        ))}
                        {p.tech.length > 4 && <span className='px-2 py-1 text-[10px] font-semibold text-white/60'>+{p.tech.length - 4}</span>}
                      </div>

                      <button
                        onClick={(e) => openProject(i, e)}
                        className='w-full px-4 py-2 rounded-lg bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 text-sm font-semibold hover:bg-[#00d9ff]/20 transition-all shadow-lg hover:shadow-[#00d9ff]/10'
                      >
                        {locale === "fr" ? "Voir le projet" : locale === "de" ? "Projekt ansehen" : "View Project"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Full-Stack & Enterprise Solutions */}
          <div>
            <div className='flex items-center gap-6 mb-12 max-w-6xl mx-auto'>
              <h3 className='text-2xl md:text-3xl font-bold text-white/90 display-font uppercase tracking-wider'>
                02. {locale === "fr" ? "Full-Stack & Entreprise" : locale === "de" ? "Full-Stack & Enterprise" : "Full-Stack & Enterprise"}
              </h3>
              <div className='h-[1px] flex-1 bg-white/5'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
              {site.projects.filter(p => p.category === "Other").map((p) => {
                const i = site.projects.indexOf(p);
                const title = L(p.title, locale);
                const desc = L(p.description, locale);
                const shortDesc = desc.length > 100 ? desc.slice(0, 97) + "…" : desc;
                const image = p.images?.[0] || "/window.svg";
                return (
                  <article
                    key={i}
                    onClick={(e) => openProject(i, e)}
                    className='project-card group cursor-pointer rounded-[2.5rem] overflow-hidden bg-[#0c0c0c]/80 border border-white/5 hover:border-[#00d9ff]/30 backdrop-blur-xl opacity-0 translate-y-6 transition-all duration-700 ease-out hover:transform hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,217,255,0.15)] flex flex-col h-full'
                  >
                    <div className='relative h-48 overflow-hidden'>
                      {(image.startsWith("/") || image.startsWith("https://images.unsplash.com")) ? (
                        <Image
                          src={image}
                          alt={title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className='object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0'
                        />
                      ) : (
                        <img src={image} alt={title} className='w-full h-full object-cover grayscale group-hover:grayscale-0' />
                      )}
                      <div className='absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent'></div>
                    </div>

                    <div className='p-8 flex flex-col flex-1'>
                      <h3 className='text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00d9ff] transition-colors display-font'>
                        {title}
                      </h3>
                      <p className='text-white/40 text-base md:text-lg mb-6 leading-relaxed font-light line-clamp-3'>
                        {desc}
                      </p>
                      <div className='mt-auto flex flex-wrap gap-2'>
                        {p.tech.slice(0, 3).map(t => (
                          <span key={t} className='px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest'>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>


        {/* Professional Experience Section */}
        <section id='experience' className='py-32 bg-black/10'>
          <div className='max-w-6xl mx-auto mb-20 px-6'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='w-12 h-[1px] bg-[#00d9ff]'></span>
              <span className='text-[#00d9ff] font-bold uppercase tracking-widest text-xs display-font'>
                {locale === "fr" ? "Expertise Industrielle" : locale === "de" ? "Industrielle Erfahrung" : "Industrial Intelligence"}
              </span>
            </div>
            <h2 className='text-5xl md:text-8xl font-bold text-white mb-20 display-font tracking-tighter'>
              Experience
            </h2>

            <div className='space-y-12'>
              {site.experiences.map((exp, idx) => (
                <div key={idx} className='group relative glass-card p-10 md:p-16 overflow-hidden rounded-[3rem] hover:border-[#00d9ff]/30 transition-all bg-[#0c0c0c]/80 backdrop-blur-3xl'>
                  <div className='absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none'>
                    <span className='text-9xl font-bold display-font'>0{idx + 1}</span>
                  </div>
                  <div className='relative z-10'>
                    <div className='flex flex-wrap items-center justify-between gap-6 mb-8'>
                      <h3 className='text-3xl md:text-5xl font-bold text-white display-font tracking-tight'>{L(exp.title, locale)}</h3>
                      <div className='flex items-center gap-4'>
                        <span className='w-8 h-[1px] bg-white/20'></span>
                        <span className='text-xl md:text-2xl font-medium text-white/40 display-font uppercase tracking-widest'>{exp.period}</span>
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center gap-6 mb-10 text-white/60'>
                      <div className='flex items-center gap-2'>
                        <span className='text-[#00d9ff] text-xl font-bold'>@</span>
                        <span className='text-2xl font-bold text-white/90 underline decoration-[#00d9ff]/30 decoration-2 underline-offset-8'>{exp.company}</span>
                      </div>
                      <span className='hidden md:block w-1.5 h-1.5 rounded-full bg-[#00d9ff]/40'></span>
                      <span className='text-xl font-light italic'>{exp.location}</span>
                    </div>
                    <p className='text-white/50 text-xl md:text-2xl leading-relaxed max-w-5xl font-light'>
                      {L(exp.description, locale)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='timeline' className='py-32 border-t border-white/5 bg-[#0c0c0c]'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='mb-20'>
              <h2 className='text-5xl md:text-7xl font-bold text-white mb-4 display-font tracking-tighter'>
                Chronology & Signals
              </h2>
              <p className='text-white/40 text-xl font-light max-w-2xl'>
                Mapping the temporal evolution of logical frameworks and communication bandwidth.
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20'>
              {/* System Trajectory - Timeline */}
              <div className='lg:col-span-2 relative glass-card p-10 md:p-12 rounded-[2.5rem] bg-[#111111]/50 border-white/5'>
                <div className='flex items-center gap-3 mb-10 opacity-60'>
                  <svg className='w-5 h-5 text-[#00d9ff]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  <h3 className='text-sm font-bold uppercase tracking-[0.2em] text-white'>System Trajectory</h3>
                </div>

                <div className='relative pl-12 border-l border-white/10 space-y-16'>
                  {/* Item 1 */}
                  <div className='relative'>
                    <div className='absolute -left-[3.25rem] top-0 w-10 h-10 rounded-full bg-[#0c0c0c] border border-[#00d9ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)]'>
                      <div className='w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse'></div>
                    </div>
                    <div>
                      <span className='text-[10px] font-bold text-[#00d9ff] uppercase tracking-widest block mb-1'>Target 2026</span>
                      <h4 className='text-3xl md:text-5xl font-bold text-white mb-4 display-font'>Engineering Degree in AI</h4>
                      <p className='text-white/40 text-lg leading-relaxed max-w-xl'>
                        École Supérieure en Informatique de Sidi Bel-Abbès (ESI-SBA). Specializing in advanced neural architectures, machine learning methodologies, and scalable intelligent systems.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className='relative'>
                    <div className='absolute -left-[3.25rem] top-0 w-10 h-10 rounded-full bg-[#0c0c0c] border border-white/10 flex items-center justify-center'>
                      <div className='w-2 h-2 rounded-full bg-white/20'></div>
                    </div>
                    <div>
                      <span className='text-[10px] font-bold text-white/30 uppercase tracking-widest block mb-1'>Origin 2021</span>
                      <h4 className='text-3xl md:text-4xl font-bold text-white/80 mb-4 display-font'>Baccalaureate</h4>
                      <p className='text-white/30 text-base leading-relaxed max-w-xl'>
                        Mathematical Engineering. Foundational training in pure mathematics, algorithmic logic, and rigorous analytical thinking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Linguistic Nodes - Skills */}
              <div className='relative glass-card p-10 md:p-12 rounded-[2.5rem] bg-[#111111]/50 border-white/5'>
                <div className='flex items-center gap-3 mb-12 opacity-60'>
                  <svg className='w-5 h-5 text-[#00d9ff]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                  </svg>
                  <h3 className='text-sm font-bold uppercase tracking-[0.2em] text-white'>Linguistic Nodes</h3>
                </div>

                <div className='space-y-10'>
                  {[
                    { label: "Arabic", level: "Fluency", width: "100%" },
                    { label: "English", level: "Fluency", width: "100%" },
                    { label: "French", level: "Fluency", width: "100%" },
                    { label: "German", level: "Intermediate", width: "65%" },
                  ].map((lang) => (
                    <div key={lang.label}>
                      <div className='flex justify-between items-end mb-3'>
                        <span className='text-xs font-bold uppercase tracking-widest text-white/80'>{lang.label}</span>
                        <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-white/30'>{lang.level}</span>
                      </div>
                      <div className='h-1.5 w-full bg-white/5 rounded-full overflow-hidden'>
                        <div
                          className='h-full bg-gradient-to-r from-[#00d9ff]/50 to-[#00d9ff] rounded-full shadow-[0_0_10px_#00d9ff33]'
                          style={{ width: lang.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section - Quote & Connect */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-end pt-12 border-t border-white/5'>
              <div>
                <p className='text-4xl md:text-5xl font-bold text-white display-font tracking-tighter leading-tight'>
                  &ldquo;Creativity solves problems. <br />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#7c3aed]'>
                    Communication builds legacy.&rdquo;
                  </span>
                </p>
              </div>

              <div className='flex flex-col gap-6 md:items-end'>
                <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-white/30'>Establish Connection</span>
                <div className='flex flex-col gap-3 md:items-end'>
                  <a href='mailto:init@ismail.dev' className='text-white hover:text-[#00d9ff] transition-all text-sm font-medium'>init@ismail.dev</a>
                  <a href='https://github.com/ismail-ai' target='_blank' rel='noopener noreferrer' className='text-white hover:text-[#00d9ff] transition-all text-sm font-medium'>GitHub @ismail-ai</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Elite AI Engineer Style */}
      <footer id='contact' className='py-40 bg-[#0c0c0c] border-t border-white/5'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/5 border border-[#00d9ff]/20 mb-8'>
            <span className='w-2 h-2 rounded-full bg-[#00d9ff]'></span>
            <span className='text-[10px] font-bold uppercase tracking-widest text-[#00d9ff]'>
              {locale === "fr" ? "Prêt pour le déploiement" : locale === "de" ? "Bereit für den Einsatz" : "Ready for Deployment"}
            </span>
          </div>

          <h2 className='text-5xl md:text-8xl font-bold text-white mb-8 display-font tracking-tighter'>
            {locale === "fr" ? "Initialiser le Contact" : locale === "de" ? "Kontakt Initialisieren" : "Initiate Contact"}
          </h2>

          <p className='text-white/40 text-xl max-w-2xl mx-auto mb-16 font-light'>
            {locale === "fr"
              ? "Disponible pour des projets critiques en IA et des architectures logicielles de haute performance."
              : locale === "de"
                ? "Verfügbar für kritische KI-Projekte und Hochleistungs-Softwarearchitekturen."
                : "Available for mission-critical AI projects and high-performance software architectures."}
          </p>

          <div className='flex flex-wrap items-center gap-6 justify-center mb-24'>
            <a
              href={`mailto:${site.email}`}
              className='px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-[#00d9ff] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
            >
              Email Agent
            </a>
            <div className='flex gap-4'>
              {site.socials.map((s) => {
                const logoMap: { [key: string]: string } = {
                  'GitHub': 'github.svg',
                  'LinkedIn': 'linkedin.svg',
                  'Twitter': 'twitter.svg',
                  'Instagram': 'instagram.svg',
                  'WhatsApp': 'whatsapp.svg',
                };
                const logoFile = logoMap[s.label] || 'globe.svg';
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-5 glass-card rounded-full hover:border-[#00d9ff]/50 transition-all'
                  >
                    <img src={`/${logoFile}`} alt={s.label} className='w-6 h-6 brightness-0 invert' />
                  </a>
                );
              })}
            </div>
          </div>

          <div className='pt-12 border-t border-white/5'>
            <p className='text-xs text-white/20 uppercase tracking-[0.3em] font-bold'>
              © 2025 ISMAIL AISSAOUI — ARCHITECTING INTELLIGENCE
            </p>
          </div>
        </div>
      </footer>

      {
        active !== null && (
          <ProjectModal
            open={open}
            originRect={originRect}
            onClose={() => setOpen(false)}
            title={L(site.projects[active].title, locale)}
            images={site.projects[active].images}
            imageFolder={site.projects[active].imageFolder}
            details={
              site.projects[active].details?.[locale] ??
              site.projects[active].description[locale]
            }
            tech={site.projects[active].tech}
          />
        )
      }
    </div >
  );
}
