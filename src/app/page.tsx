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
    <div className='relative w-full text-foreground overflow-x-hidden min-h-screen pt-24'>
      <SiteNav locale={locale} onLocaleChange={(lang) => setLocale(lang)} />

      <main className='relative z-10 mx-auto w-full max-w-[1920px] px-6 sm:px-8 lg:px-12'>
        {/* Hero Section - Developer Style */}
        <section id='home' className='pt-32 pb-20'>
          <div className='mx-auto max-w-5xl'>
            {/* Greeting */}
            <div className='flex items-center gap-2 mb-4'>
              <span className='text-white/70 text-base md:text-lg'>
                {locale === "fr" ? "Salut" : locale === "de" ? "Hallo" : "Hi there"}
              </span>
              <span className='text-xl'>👋</span>
            </div>

            {/* Name with I'm prefix and TextType animation */}
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight'>
              {locale === "fr" ? "Je suis " : locale === "de" ? "Ich bin " : "I'm "}
              <span className='block md:inline'>
                <TextType
                  text={L(site.name, locale)}
                  as="span"
                  typingSpeed={100}
                  pauseDuration={2000}
                  showCursor={false}
                  loop={false}
                  className=""
                />
              </span>
            </h1>

            {/* Role/Title with SplitText animation - NO 'A' prefix */}
            <h2 className='text-xl md:text-3xl lg:text-4xl font-medium mb-6'>
              <SplitText
                text={locale === "fr"
                  ? "Ingénieur en IA & Data Science"
                  : locale === "de"
                    ? "KI & Data Science Ingenieur"
                    : "AI & Data Science Engineer"}
                tag="span"
                className="text-[#00d9ff] font-bold"
                delay={50}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </h2>

            {/* Description */}
            <p className='text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl'>
              {locale === "fr"
                ? "Développeur Full-Stack passionné par l'IA, spécialisé dans la création d'applications web modernes et de modèles de Machine Learning. Construction de solutions innovantes avec React, Next.js, FastAPI, et des architectures transformer (BERT, GPT, RAG) pour des expériences utilisateur intelligentes."
                : locale === "de"
                  ? "Full-Stack-Entwickler mit Leidenschaft für KI, spezialisiert auf moderne Webanwendungen und Machine Learning-Modelle. Entwicklung innovativer Lösungen mit React, Next.js, FastAPI und Transformer-Architekturen (BERT, GPT, RAG) für intelligente Benutzererlebnisse."
                  : "Full-Stack Developer and AI enthusiast, specializing in building modern web applications and machine learning models. Creating innovative solutions with React, Next.js, FastAPI, and transformer architectures (BERT, GPT, RAG) for intelligent user experiences."}
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap items-center gap-4'>
              <a
                href='#contact'
                className='group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.05] border border-white/20 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/10 hover:border-[#00d9ff]/50 transition-all duration-300 relative overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#00d9ff]/0 via-[#00d9ff]/10 to-[#00d9ff]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
                <span className='relative z-10'>
                  {locale === "fr"
                    ? "Me Contacter"
                    : locale === "de"
                      ? "Kontaktieren"
                      : "Get in Touch"}
                </span>
                <svg className='w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              </a>

              {/* Download Resume Button */}
              <a
                href={locale === "fr" ? "/resume_fr.pdf" : locale === "de" ? "/resume_de.pdf" : "/resume_en.pdf"}
                download
                className='group inline-flex items-center gap-3 px-8 py-4 bg-[#00d9ff]/10 border border-[#00d9ff]/30 backdrop-blur-md text-[#00d9ff] font-semibold rounded-xl hover:bg-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300 relative overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#00d9ff]/0 via-[#00d9ff]/20 to-[#00d9ff]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
                <svg className='w-5 h-5 relative z-10' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <span className='relative z-10'>
                  {locale === "fr"
                    ? "Télécharger CV"
                    : locale === "de"
                      ? "Lebenslauf herunterladen"
                      : "Download Resume"}
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Expertise Section - MagicBento */}
        <section id='expertise' className='py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-3'>
              {locale === "fr"
                ? "Domaines d'Expertise"
                : locale === "de"
                  ? "Fachgebiete"
                  : "Areas of Expertise"}
            </h2>
            <p className='text-white/60 text-base'>
              {locale === "fr"
                ? "Explorez mes compétences interactives"
                : locale === "de"
                  ? "Erkunden Sie meine interaktiven Fähigkeiten"
                  : "Explore my interactive capabilities"}
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
              glowColor="132, 0, 255"
              customCards={[
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Langages de Programmation' : locale === 'de' ? 'Programmiersprachen' : 'Programming Languages',
                  description: 'Python • TypeScript • JavaScript • Java • SQL',
                  label: locale === 'fr' ? '💻 Code' : locale === 'de' ? '💻 Code' : '💻 Code'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Frameworks ML/DL' : locale === 'de' ? 'ML/DL Frameworks' : 'ML/DL Frameworks',
                  description: 'PyTorch • TensorFlow • Keras • Scikit-learn',
                  label: locale === 'fr' ? '🔧 Frameworks' : locale === 'de' ? '🔧 Frameworks' : '🔧 Frameworks'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Concepts IA/ML' : locale === 'de' ? 'KI/ML-Konzepte' : 'AI/ML Concepts',
                  description: 'Transformers • BERT • RAG • GANs • CNN • RNN • LSTM • XGBoost • Random Forest',
                  label: locale === 'fr' ? '🧠 Concepts' : locale === 'de' ? '🧠 Konzepte' : '🧠 Concepts'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Bibliothèques Data Science' : locale === 'de' ? 'Data Science Bibliotheken' : 'Data Science Libraries',
                  description: 'Pandas • NumPy • SciPy • Matplotlib • Plotly • OpenCV • MLflow',
                  label: locale === 'fr' ? '📊 Data' : locale === 'de' ? '📊 Daten' : '📊 Data'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Web & Backend' : locale === 'de' ? 'Web & Backend' : 'Web & Backend',
                  description: 'React • Next.js • FastAPI • Flask • HTML5 • TailwindCSS',
                  label: locale === 'fr' ? '🌐 Web' : locale === 'de' ? '🌐 Web' : '🌐 Web'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Bases de Données' : locale === 'de' ? 'Datenbanken' : 'Databases',
                  description: 'PostgreSQL • MongoDB • MySQL • Cassandra • Neo4j • SQLite',
                  label: locale === 'fr' ? '🗄️ DB' : locale === 'de' ? '🗄️ DB' : '🗄️ DB'
                },
                {
                  color: '#0a0020',
                  title: 'Big Data',
                  description: 'Apache Spark • Hadoop • Kafka • Airflow',
                  label: '⚡ Big Data'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Outils Développeur' : locale === 'de' ? 'Entwicklertools' : 'Developer Tools',
                  description: 'Git • Docker • Linux • Power BI • GitHub',
                  label: locale === 'fr' ? '🛠️ DevOps' : locale === 'de' ? '🛠️ DevOps' : '🛠️ DevOps'
                },
                {
                  color: '#0a0020',
                  title: locale === 'fr' ? 'Applications Desktop' : locale === 'de' ? 'Desktop Apps' : 'Desktop Apps',
                  description: 'PyQt',
                  label: locale === 'fr' ? '🖥️ Desktop' : locale === 'de' ? '🖥️ Desktop' : '🖥️ Desktop'
                }
              ]}
            />
          </div>
        </section>

        {/* Projects Section - Modern Cards */}
        <section id='projects' className='py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-3'>
              {locale === "fr"
                ? "Projets Sélectionnés"
                : locale === "de"
                  ? "Ausgewählte Projekte"
                  : "Featured Projects"}
            </h2>
            <p className='text-white/60 text-base'>
              {locale === "fr"
                ? "Découvrez mes réalisations récentes"
                : locale === "de"
                  ? "Entdecken Sie meine neuesten Arbeiten"
                  : "Explore my recent work"}
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto'>
            {site.projects.map((p, i) => {
              const title = L(p.title, locale);
              const desc = L(p.description, locale);
              const shortDesc =
                desc.length > 150 ? desc.slice(0, 147) + "…" : desc;
              const image = p.images?.[0] || "/window.svg";
              return (
                <article
                  key={i}
                  className='project-card group rounded-2xl overflow-hidden bg-[#12002b]/60 border border-[#22104a] hover:border-[#3a1558] backdrop-blur-sm opacity-0 translate-y-6 transition-all duration-700 ease-out hover:transform hover:scale-[1.02]'
                >
                  <div className='relative h-48 overflow-hidden'>
                    {image.startsWith("/") ||
                      image.startsWith("https://images.unsplash.com") ? (
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                      />
                    ) : (
                      // Fallback for external images not in remotePatterns
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                      />
                    )}
                    <div className='absolute inset-0 bg-gradient-to-t from-[#12002b] via-[#12002b]/50 to-transparent'></div>
                  </div>

                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-[#a78bfa] transition-colors'>
                      {title}
                    </h3>
                    <p className='text-white/70 text-sm mb-4 line-clamp-2'>
                      {shortDesc}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {p.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className='px-2 py-1 text-[10px] font-semibold uppercase rounded-md text-white/90 bg-white/5 border border-white/10'
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 4 && (
                        <span className='px-2 py-1 text-[10px] font-semibold text-white/60'>
                          +{p.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        openProject(i, e)
                      }
                      className='w-full px-4 py-2 rounded-lg bg-[#6332db] text-white text-sm font-semibold hover:bg-[#7848e8] transition-colors shadow-lg hover:shadow-xl'
                    >
                      {locale === "fr"
                        ? "Voir le projet"
                        : locale === "de"
                          ? "Projekt ansehen"
                          : "View Project"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>


        {/* Education Section - Modern Timeline */}
        <section id='education' className='py-20'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-3'>
              {locale === "fr"
                ? "Formation"
                : locale === "de"
                  ? "Ausbildung"
                  : "Education"}
            </h2>
            <p className='text-white/60 text-base'>
              {locale === "fr"
                ? "Mon parcours académique"
                : locale === "de"
                  ? "Mein akademischer Werdegang"
                  : "My academic journey"}
            </p>
          </div>

          <div className='max-w-5xl mx-auto space-y-6'>
            {/* Master's Degree */}
            <div className='group rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all'>
              <div className='flex flex-col md:flex-row gap-8 md:items-center'>
                {/* Date Badge */}
                <div className='flex-shrink-0'>
                  <div className='flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-[#00d9ff]/10 border border-[#00d9ff]/20'>
                    <div className='text-base font-bold text-[#00d9ff]'>2021</div>
                    <div className='text-sm text-white/30 my-1'>—</div>
                    <div className='text-base font-bold text-[#00d9ff]'>2026</div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 space-y-3'>
                  <h3 className='text-2xl font-bold text-white leading-tight'>
                    {locale === "fr"
                      ? "Diplôme d'ingénieur en IA et Science des Données"
                      : locale === "de"
                        ? "Ingenieurabschluss in KI und Data Science"
                        : "Engineering Degree in AI and Data Science"}
                  </h3>
                  <div>
                    <span className='inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md text-white/90 bg-white/5 border border-white/10'>
                      {locale === "fr" ? "Master" : locale === "de" ? "Master" : "Master's Degree"}
                    </span>
                  </div>
                  <p className='text-base text-[#00d9ff] font-semibold'>
                    {locale === "fr"
                      ? "École supérieure d'informatique (ESI-SBA)"
                      : locale === "de"
                        ? "Höhere Schule für Informatik (ESI-SBA)"
                        : "Higher School of Computer Science (ESI-SBA)"}
                  </p>
                  <p className='text-sm text-white/50 flex items-center gap-2'>
                    📍 Algeria
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

        {/* Languages Section */}
        <section id='languages' className='py-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-8'>
              {locale === "fr"
                ? "Langues Parlées"
                : locale === "de"
                  ? "Gesprochene Sprachen"
                  : "Spoken Languages"}
            </h2>
            <div className='flex flex-wrap gap-3 justify-center'>
              {(() => {
                const spoken = site.skillsGrouped?.find((g) => g.key === "spoken");
                return spoken?.items.map((lang) => (
                  <span
                    key={lang}
                    className='px-6 py-3 text-sm font-semibold uppercase rounded-lg text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm'
                  >
                    {lang}
                  </span>
                ));
              })()}
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Blurry Transparent Full Width */}
      <footer id='contact' className='mt-20 py-16 bg-white/[0.02] backdrop-blur-xl border-t border-white/10'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-3'>
            {locale === "fr"
              ? "Restons en contact"
              : locale === "de"
                ? "Lass uns verbinden"
                : "Let's Connect"}
          </h2>
          <p className='text-white/60 text-base mb-10'>
            {locale === "fr"
              ? "N'hésitez pas à me contacter pour toute opportunité ou collaboration"
              : locale === "de"
                ? "Kontaktieren Sie mich gerne für Gelegenheiten oder Zusammenarbeit"
                : "Feel free to reach out for opportunities or collaborations"}
          </p>

          <div className='flex flex-wrap items-center gap-4 justify-center mb-12'>
            <a
              href={`mailto:${site.email}`}
              className='group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex-shrink-0'
              aria-label='Email'
            >
              <svg
                className='w-6 h-6 min-w-[24px] min-h-[24px] text-white/80 group-hover:text-white transition-colors'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
              >
                <path
                  d='M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v.5l9 6 9-6v-.5z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <a
              href={`tel:${site.phone}`}
              className='group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex-shrink-0'
              aria-label='Phone'
            >
              <svg
                className='w-6 h-6 min-w-[24px] min-h-[24px] text-white/80 group-hover:text-white transition-colors'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
              >
                <path
                  d='M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.1.37 2.17.74 3.18a2 2 0 0 1-.45 2.11L9.91 11.09a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c1 .37 2.08.62 3.18.74A2 2 0 0 1 22 16.92z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            {site.socials.map((s) => {
              // Map social label to logo filename
              const logoMap: { [key: string]: string } = {
                'GitHub': 'github.svg',
                'LinkedIn': 'linkedin.svg',
                'Twitter': 'twitter.svg',
                'Instagram': 'instagram.svg',
                'WhatsApp': 'whatsapp.svg'
              };
              const logoFile = logoMap[s.label] || 'globe.svg';

              return (
                <a
                  key={s.href}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex-shrink-0'
                  aria-label={s.label}
                >
                  <img
                    src={`/${logoFile}`}
                    alt={s.label}
                    width='24'
                    height='24'
                    className='w-6 h-6 min-w-[24px] min-h-[24px] brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity'
                    style={{ display: 'block', width: '24px', height: '24px' }}
                  />
                </a>
              );
            })}
          </div>

          <div className='border-t border-white/10 pt-8 mt-8'>
            <p className='text-sm text-white/60 mb-4'>
              {locale === "fr"
                ? "« La créativité résout les problèmes. La communication construit l'avenir. »"
                : locale === "de"
                  ? "„Kreativität löst Probleme. Kommunikation baut Zukunft.“"
                  : "\"Creativity solves problems. Communication builds futures.\""}
            </p>
            <p className='text-xs text-white/40'>
              © 2025 Ismail Aissaoui •{" "}
              {locale === "fr"
                ? "Construit avec Next.js & TailwindCSS"
                : locale === "de"
                  ? "Gebaut mit Next.js & TailwindCSS"
                  : "Built with Next.js & TailwindCSS"}
            </p>
          </div>
        </div>
      </footer>

      {active !== null && (
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
      )}
    </div>
  );
}
