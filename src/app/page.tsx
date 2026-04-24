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
        <section id='home' className='relative pt-40 pb-24 overflow-hidden border-b border-white/5'>
          <div className='relative z-10 mx-auto max-w-6xl'>
            {/* System Status Indicator */}
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d9ff]/5 border border-[#00d9ff]/20 mb-8 animate-pulse'>
              <span className='w-2 h-2 rounded-full bg-[#00d9ff] shadow-[0_0_8px_#00d9ff]'></span>
              <span className='text-[10px] font-bold uppercase tracking-widest text-[#00d9ff]'>
                {locale === "fr" ? "Système Actif" : locale === "de" ? "System Aktiv" : "System Active"}
              </span>
            </div>

            {/* Name with Space Grotesk */}
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] display-font'>
              <span className='block opacity-50 text-4xl md:text-5xl lg:text-6xl mb-2 font-medium tracking-normal'>
                {locale === "fr" ? "Je suis" : locale === "de" ? "Ich bin" : "I am"}
              </span>
              <TextType
                text={L(site.name, locale)}
                as="span"
                typingSpeed={100}
                pauseDuration={2000}
                showCursor={false}
                loop={false}
                className="text-white"
              />
            </h1>

            {/* Elite Role */}
            <div className='mb-10'>
              <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight'>
                <SplitText
                  text={locale === "fr"
                    ? "Ingénieur en IA & Full-Stack"
                    : locale === "de"
                      ? "KI & Full-Stack Ingenieur"
                      : "AI & Full-Stack Engineer"}
                  tag="span"
                  className="text-[#00d9ff] text-glow-cyan"
                  delay={50}
                  duration={0.5}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </h2>
            </div>

            {/* Premium Description */}
            <p className='text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl font-light'>
              {locale === "fr"
                ? "Conception de systèmes d'IA de pointe, des architectures Transformers aux écosystèmes d'entreprise robustes. Spécialisé en Deep Learning, NLP et ingénierie logicielle haute performance."
                : locale === "de"
                  ? "Entwicklung wegweisender KI-Systeme, von Transformer-Architekturen bis hin zu robusten Unternehmens-Ökosystemen. Spezialisiert auf Deep Learning, NLP und Hochleistungs-Software-Engineering."
                  : "Architecting the next generation of intelligence, from foundational Transformer models to robust enterprise ecosystems. Specializing in Deep Learning, NLP, and high-performance software engineering."}
            </p>

            {/* Glassmorphism CTAs */}
            <div className='flex flex-wrap items-center gap-6'>
              <a
                href='#contact'
                className='px-10 py-5 bg-[#00d9ff] text-black font-bold rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]'
              >
                {locale === "fr" ? "Collaborer" : locale === "de" ? "Zusammenarbeiten" : "Let's Collaborate"}
              </a>

              <a
                href={locale === "fr" ? "/resume_fr.pdf" : locale === "de" ? "/resume_de.pdf" : "/resume_en.pdf"}
                download
                className='px-10 py-5 glass-card font-bold rounded-full hover:bg-white/10 transition-all duration-500 flex items-center gap-3 border-white/20'
              >
                <span>{locale === "fr" ? "Curriculum Vitae" : locale === "de" ? "Lebenslauf" : "Download Resume"}</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                </svg>
              </a>
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
              spotlightRadius={300}
              particleCount={15}
              glowColor="0, 217, 255"
              customCards={[
                {
                  color: '#0c0c0c',
                  title: locale === 'fr' ? 'Langages' : locale === 'de' ? 'Sprachen' : 'Languages',
                  description: 'Python • TypeScript • JavaScript • Java • SQL • C++',
                  label: '💻 CODE'
                },
                {
                  color: '#0c0c0c',
                  title: locale === 'fr' ? 'Frameworks ML/DL' : locale === 'de' ? 'ML/DL Frameworks' : 'ML/DL Frameworks',
                  description: 'PyTorch • TensorFlow • Keras • Scikit-learn • JAX',
                  label: '🧠 NEURAL'
                },
                {
                  color: '#0c0c0c',
                  title: locale === 'fr' ? 'Architecture IA' : locale === 'de' ? 'KI-Architektur' : 'AI Architecture',
                  description: 'Transformers • RAG • LLMs • BERT • CNN • RNN • GANs',
                  label: '🏗️ SYSTEMS'
                },
                {
                  color: '#0c0c0c',
                  title: locale === 'fr' ? 'Science des Données' : locale === 'de' ? 'Data Science' : 'Data Science',
                  description: 'Pandas • NumPy • SciPy • Plotly • Matplotlib • OpenCV',
                  label: '📊 DATA'
                },
                {
                  color: '#0c0c0c',
                  title: 'Full-Stack',
                  description: 'React • Next.js • TailwindCSS • Node.js • FastAPI • Flask',
                  label: '🌐 WEB'
                },
                {
                  color: '#0c0c0c',
                  title: locale === 'fr' ? 'Stockage' : locale === 'de' ? 'Speicher' : 'Storage',
                  description: 'PostgreSQL • MongoDB • Redis • Pinecone • MySQL',
                  label: '🗄️ INFRA'
                },
                {
                  color: '#0c0c0c',
                  title: 'Engineering',
                  description: 'Spark • Hadoop • Kafka • Airflow • Docker • Git',
                  label: '⚡ SPEED'
                },
                {
                  color: '#0c0c0c',
                  title: locale === 'fr' ? 'Apprentissage par Renforcement' : locale === 'de' ? 'Bestärkendes Lernen' : 'Reinforcement Learning',
                  description: 'Deep Q-Learning • PPO • Actor-Critic • Policy Gradients',
                  label: '🤖 AUTONOMY'
                }
              ]}
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
                    className='project-card group rounded-2xl overflow-hidden bg-[#12002b]/60 border border-[#22104a] hover:border-[#00d9ff]/30 backdrop-blur-sm opacity-0 translate-y-6 transition-all duration-700 ease-out hover:transform hover:scale-[1.02]'
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
                      <div className='absolute inset-0 bg-gradient-to-t from-[#12002b] via-[#12002b]/50 to-transparent'></div>
                    </div>

                    <div className='p-6'>
                      <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-xl font-bold text-white group-hover:text-[#00d9ff] transition-colors'>
                          {title}
                        </h3>
                        <span className='px-2 py-0.5 rounded text-[10px] bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20 font-bold uppercase'>AI/ML</span>
                      </div>
                      <p className='text-white/70 text-sm mb-4 line-clamp-2'>
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
                    className='project-card glass-card group cursor-pointer rounded-3xl overflow-hidden opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col h-full hover:border-[#00d9ff]/30'
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
                      <div className='absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent'></div>
                    </div>

                    <div className='p-8 flex flex-col flex-1'>
                      <h3 className='text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#00d9ff] transition-colors display-font'>
                        {title}
                      </h3>
                      <p className='text-white/50 text-sm leading-relaxed mb-6 line-clamp-2 font-light'>
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


        {/* Education Section - Cerebral Tech Style */}
        <section id='education' className='py-32 border-t border-white/5'>
          <div className='max-w-6xl mx-auto mb-20'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='w-12 h-[1px] bg-[#00d9ff]'></span>
              <span className='text-[#00d9ff] font-bold uppercase tracking-widest text-xs'>
                {locale === "fr" ? "Formation" : locale === "de" ? "Ausbildung" : "Background"}
              </span>
            </div>
            <h2 className='text-5xl md:text-7xl font-bold text-white display-font tracking-tighter'>
              {locale === "fr" ? "Parcours Académique" : locale === "de" ? "Akademischer Weg" : "Legacy of Learning"}
            </h2>
          </div>

          <div className='max-w-6xl mx-auto space-y-12'>
            {/* Master's Degree */}
            <div className='glass-card p-8 md:p-12 rounded-[40px] hover:border-[#00d9ff]/20'>
              <div className='flex flex-col md:flex-row gap-8 md:items-center'>
                <div className='flex-shrink-0'>
                  <div className='text-5xl md:text-6xl font-bold text-white/10 display-font'>21—26</div>
                </div>
                <div className='flex-1'>
                  <h3 className='text-3xl md:text-4xl font-bold text-white mb-4 display-font'>
                    {locale === "fr"
                      ? "Diplôme d'Ingénieur en IA & Science des Données"
                      : locale === "de"
                        ? "Ingenieurabschluss in KI & Data Science"
                        : "Engineering Degree in AI & Data Science"}
                  </h3>
                  <p className='text-[#00d9ff] text-xl font-medium mb-2'>
                    {locale === "fr"
                      ? "École Supérieure d'Informatique (ESI-SBA)"
                      : locale === "de"
                        ? "Höhere Schule für Informatik (ESI-SBA)"
                        : "Higher School of Computer Science (ESI-SBA)"}
                  </p>
                  <p className='text-white/40 font-light flex items-center gap-2'>
                    <span>📍 Algeria</span>
                    <span className='w-1 h-1 rounded-full bg-white/20'></span>
                    <span>{locale === "fr" ? "En cours" : locale === "de" ? "In Bearbeitung" : "Ongoing"}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Baccalaureate */}
            <div className='group rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all'>
              <div className='flex flex-col md:flex-row gap-8 md:items-center'>
                {/* Date Badge */}
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-24 h-24 rounded-xl bg-[#00d9ff]/10 border border-[#00d9ff]/20'>
                    <div className='text-base font-bold text-[#00d9ff]'>2021</div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 space-y-3'>
                  <h3 className='text-2xl font-bold text-white leading-tight'>
                    {locale === "fr"
                      ? "Baccalauréat en génie mathématique"
                      : locale === "de"
                        ? "Abitur in Mathematischer Ingenieurwissenschaft"
                        : "Baccalaureate in Mathematical Engineering"}
                  </h3>
                  <div>
                    <span className='inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md text-white/90 bg-white/5 border border-white/10'>
                      {locale === "fr" ? "Baccalauréat" : locale === "de" ? "Abitur" : "Baccalaureate"}
                    </span>
                  </div>
                  <p className='text-base text-[#00d9ff] font-semibold'>
                    {locale === "fr" ? "Lycée" : locale === "de" ? "Gymnasium" : "High School"}
                  </p>
                  <div className='flex flex-wrap items-center gap-3 text-sm'>
                    <span className='flex items-center gap-1.5 text-white/70 font-medium'>
                      🏆 {locale === "fr"
                        ? "Mention Très Bien"
                        : locale === "de"
                          ? "Sehr Gut"
                          : "Honors (Très Bien)"}
                    </span>
                    <span className='text-white/30'>•</span>
                    <span className='text-white/50'>📍 Algeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Section - Cerebral Tech Style */}
        <section id='languages' className='py-32 border-t border-white/5'>
          <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-16 display-font tracking-tighter'>
              {locale === "fr"
                ? "Systèmes de Communication"
                : locale === "de"
                  ? "Kommunikationssysteme"
                  : "Communication Systems"}
            </h2>
            <div className='flex flex-wrap gap-6 justify-center'>
              {(() => {
                const spoken = site.skillsGrouped?.find((g) => g.key === "spoken");
                return spoken?.items.map((lang) => (
                  <span
                    key={lang}
                    className='px-10 py-5 text-xl font-bold uppercase rounded-[20px] text-white/90 glass-card border-white/10 hover:border-[#00d9ff]/30 transition-all'
                  >
                    {lang}
                  </span>
                ));
              })()}
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
                  'Twitter': 'twitter.svg'
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
