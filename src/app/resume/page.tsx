"use client";

import React, { useMemo, useState } from "react";
import SiteNav from "@/components/SiteNav";

type Locale = "en" | "fr" | "de";

type Contact = {
  label: string;
  value: string;
  href?: string;
};

type Education = {
  institution: string;
  location: string;
  period: string;
  degree: string;
  highlights: string[];
};

type SkillCategory = {
  category: string;
  items: string[];
};

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
};

type Project = {
  title: string;
  period: string;
  summary: string;
  impact: string;
  tech: string;
};

type LanguageEntry = {
  name: string;
  level: string;
  detail?: string;
};

type ResumeContent = {
  header: {
    name: string;
    role: string;
    contacts: Contact[];
  };
  summaryTitle: string;
  summary: string;
  experienceTitle: string;
  experience: Experience[];
  educationTitle: string;
  education: Education[];
  skillsTitle: string;
  skills: SkillCategory[];
  achievementsTitle: string;
  achievements: string[];
  languagesTitle: string;
  languages: LanguageEntry[];
  projectsTitle: string;
  projectTechLabel: string;
  projectConceptLabel: string;
  projects: Project[];
};

const resumeContent: Record<Locale, ResumeContent> = {
  en: {
    header: {
      name: "AISSAOUI Ismail",
      role: "AI & Data Science Engineer",
      contacts: [
        { label: "Email", value: "ismail.aissaoui.pro@gmail.com", href: "mailto:ismail.aissaoui.pro@gmail.com" },
        { label: "Academic Email", value: "i.aissaoui@esi-sba.dz", href: "mailto:i.aissaoui@esi-sba.dz" },
        { label: "Phone", value: "+213 660 70 77 96", href: "tel:+213660707796" },
        { label: "Portfolio", value: "ismail-aissaoui.vercel.app", href: "https://ismail-aissaoui.vercel.app" },
        { label: "Location", value: "Chlef, Algeria" },
        { label: "LinkedIn", value: "linkedin.com/in/aissaoui-ismail-6a77a92a7", href: "https://linkedin.com/in/aissaoui-ismail-6a77a92a7" },
        { label: "GitHub", value: "github.com/i-aissaoui", href: "https://github.com/i-aissaoui" },
      ],
    },
    summaryTitle: "Professional Summary",
    summary:
      "Final-year AI & Data Science engineer crafting end-to-end AI products across recruitment, HR tech, mobility, retail, and education. Lead initiatives such as graph-powered talent matching, multilingual moderation, hybrid exam scheduling, real-time traffic intelligence, and offline-first POS systems. Blend research with engineering rigor, align delivery with business goals, and uphold reliable MLOps practices for every stakeholder.",
    experienceTitle: "Professional Experience",
    experience: [
      {
        company: "Algeria Telecom",
        role: "Network Engineering Intern",
        location: "Algiers, Algeria",
        period: "Sep 2024",
        achievements: [],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        institution: "National Computer Science School (ESI-SBA)",
        location: "Sidi Bel Abbès, Algeria",
        period: "2021 – 2026",
        degree: "Master's Degree & State Engineering Degree (Ingénieur d'État) in Computer Science",
        highlights: [
          "Specialization: Artificial Intelligence & Computer Science",
        ],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      { category: "Programming", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
      { category: "ML / DL", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Lightning", "ONNX"] },
      { category: "AI Techniques", items: ["Transformers", "BERT", "GPT", "RAG", "GNN", "GAN", "XGBoost", "LSTM"] },
      { category: "Optimization", items: ["PSO", "Genetic Algorithm", "ACO", "Simulated Annealing", "Bayesian Optimization"] },
      { category: "Web & APIs", items: ["Next.js", "React", "FastAPI", "Node.js", "TailwindCSS"] },
      { category: "Data & MLOps", items: ["Pandas", "NumPy", "MLflow", "Airflow", "DVC", "Kubeflow", "Great Expectations"] },
      { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "Cassandra"] },
      { category: "Cloud & DevOps", items: ["Docker", "Linux", "Git", "CI/CD", "CUDA", "AWS", "Grafana"] },
      { category: "Soft Skills", items: ["Stakeholder Management", "Technical Leadership", "Mentoring", "Cross-functional Communication", "Product Strategy"] },
    ],
    achievementsTitle: "Key Achievements",
    achievements: [
      "Delivered custom transformer models (BERT, GPT, RAG) end-to-end, bringing state-of-the-art NLP capabilities to production use cases and enabling low-resource language support.",
      "Built explainable AI platforms for HR tech and civic infrastructure that improved decision accuracy while satisfying compliance, bias mitigation, and audit requirements.",
      "Created graph-based recommender systems that improved candidate-job matching precision by 24% across 60K profiles and accelerated shortlisting cycles.",
      "Designed end-to-end ML pipelines covering ingestion, experimentation, CI/CD, and observability across hybrid cloud environments.",
      "Developed real-time computer vision platforms with YOLO and streaming analytics for city-scale traffic intelligence, reducing incident response times by 32%.",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "French", level: "Fluent" },
    ],
    projectsTitle: "Key Projects",
    projectTechLabel: "Tech Stack",
    projectConceptLabel: "Concepts",
    projects: [
      {
        title: "AI-Powered Recruitment Platform with Graph Neural Networks",
        period: "2024 – 2025",
        summary: "Recruitment engine linking resumes to jobs with graph embeddings.",
        impact: "GNN ranking, semantic search, feedback loops.",
        tech: "PyTorch Geometric, SBERT, FastAPI, PostgreSQL",
      },
      {
        title: "Advanced NLP System with Multi-Algorithm Optimization",
        period: "2025",
        summary: "Multilingual moderation pipeline with auto-tuned DistilBERT.",
        impact: "PSO, GA, Bayesian search, live dashboards.",
        tech: "DistilBERT, PyTorch, FastAPI, WebSocket",
      },
      {
        title: "Intelligent University Scheduling System",
        period: "2025",
        summary: "Hybrid evolutionary scheduler delivering conflict-free exam timetables.",
        impact: "GA, PSO, ACO orchestration with soft constraint scoring.",
        tech: "FastAPI, NumPy, Pandas, Simulated Annealing",
      },
      {
        title: "Mini-GPT (Decoder-only)",
        period: "2025",
        summary: "Character-level transformer for creative text generation.",
        impact: "Tokenizer design, mixed-precision training, prompt control.",
        tech: "PyTorch, AdamW, CUDA, Weights & Biases",
      },
      {
        title: "BERT (Encoder-only) Sentiment Model",
        period: "2025",
        summary: "Bidirectional transformer tailored to North African sentiment.",
        impact: "Masked LM, LoRA fine-tuning, rapid domain adaption.",
        tech: "PyTorch, LoRA, Hugging Face, MLflow",
      },
      {
        title: "Geo RAG — Map-based RAG Demo",
        period: "2025",
        summary: "Geo-aware RAG assistant delivering map-backed answers.",
        impact: "Vector search, knowledge graphs, spatial reasoning.",
        tech: "ChromaDB, GeoPandas, Streamlit",
      },
      {
        title: "Recognizini | Real-Time Facial Recognition System",
        period: "2025",
        summary: "Real-time facial recognition platform with online metric learning.",
        impact: "Active feedback, incremental embeddings, drift handling.",
        tech: "OpenCV, PyTorch, Redis, FastAPI",
      },
      {
        title: "Safety Equipment Detection with YOLOv8",
        period: "2025",
        summary: "Computer-vision safety monitor for helmets and jackets.",
        impact: "YOLOv8 detection, compliance alerts, video analytics.",
        tech: "YOLOv8, OpenCV, Python",
      },
      {
        title: "AI Traffic Camera System",
        period: "2025",
        summary: "Traffic analytics stack with detection, tracking, speed estimation.",
        impact: "ByteTrack tracking, perspective speed, license plate OCR.",
        tech: "YOLOv8, ByteTrack, EasyOCR",
      },
      {
        title: "Hadj Management System",
        period: "2024",
        summary: "Pilgrim logistics suite covering grouping, travel, and health scheduling.",
        impact: "Group allocation, itinerary sync, medical workflows.",
        tech: "React, FastAPI, PostgreSQL",
      },
      {
        title: "Hybrid POS & E-commerce System",
        period: "2025",
        summary: "Offline-first POS synchronized with live e-commerce storefronts.",
        impact: "Inventory sync, conflict resolution, merchant analytics.",
        tech: "PyQt, SQLite, PostgreSQL",
      },
    ],
  },
  fr: {
    header: {
      name: "AISSAOUI Ismail",
      role: "Ingénieur IA & Data Science",
      contacts: [
        { label: "Email", value: "ismail.aissaoui.pro@gmail.com", href: "mailto:ismail.aissaoui.pro@gmail.com" },
        { label: "Email académique", value: "i.aissaoui@esi-sba.dz", href: "mailto:i.aissaoui@esi-sba.dz" },
        { label: "Téléphone", value: "+213 660 70 77 96", href: "tel:+213660707796" },
        { label: "Portfolio", value: "ismail-aissaoui.vercel.app", href: "https://ismail-aissaoui.vercel.app" },
        { label: "Localisation", value: "Chlef, Algérie" },
        { label: "LinkedIn", value: "linkedin.com/in/aissaoui-ismail-6a77a92a7", href: "https://linkedin.com/in/aissaoui-ismail-6a77a92a7" },
        { label: "GitHub", value: "github.com/i-aissaoui", href: "https://github.com/i-aissaoui" },
      ],
    },
    summaryTitle: "Résumé Professionnel",
    summary:
      "Ingénieur IA & Data Science en dernière année, concevant des solutions IA de bout en bout pour le recrutement, les RH, la mobilité urbaine, le retail et l'enseignement. Pilote des projets comme le matching talent basé graphes, la modération multilingue, la planification d'examens hybride, l'analyse trafic temps réel et le POS offline-first. Allie recherche et exigence d'ingénierie, aligne la livraison sur les objectifs métier et garantit des pipelines MLOps robustes pour chaque partie prenante.",
    experienceTitle: "Expérience Professionnelle",
    experience: [
      {
        company: "Algérie Télécom",
        role: "Stagiaire Ingénierie Réseau",
        location: "Alger, Algérie",
        period: "Sep 2024",
        achievements: [],
      },
    ],
    educationTitle: "Formation",
    education: [
      {
        institution: "École Nationale Supérieure d'Informatique (ESI-SBA)",
        location: "Sidi Bel Abbès, Algérie",
        period: "2021 – 2026",
        degree: "Diplôme d'Ingénieur d'État et Master en Informatique",
        highlights: [
          "Spécialisation : Intelligence Artificielle & Informatique",
        ],
      },
    ],
    skillsTitle: "Compétences",
    skills: [
      { category: "Programmation", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
      { category: "ML / DL", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Lightning", "ONNX"] },
      { category: "Techniques IA", items: ["Transformers", "BERT", "GPT", "RAG", "GNN", "GAN", "XGBoost", "LSTM"] },
      { category: "Optimisation", items: ["PSO", "Algorithme génétique", "ACO", "Recuit simulé", "Optimisation bayésienne"] },
      { category: "Web & APIs", items: ["Next.js", "React", "FastAPI", "Node.js", "TailwindCSS"] },
      { category: "Data & MLOps", items: ["Pandas", "NumPy", "MLflow", "Airflow", "DVC", "Kubeflow", "Great Expectations"] },
      { category: "Bases de données", items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "Cassandra"] },
      { category: "Cloud & DevOps", items: ["Docker", "Linux", "Git", "CI/CD", "CUDA", "AWS", "Grafana"] },
      { category: "Compétences comportementales", items: ["Gestion des parties prenantes", "Leadership technique", "Mentorat", "Communication transverse", "Vision produit"] },
    ],
    achievementsTitle: "Réalisations Clés",
    achievements: [
      "Livraison de transformers sur mesure (BERT, GPT, RAG) pour des cas d'usage en production avec support des langues à faibles ressources.",
      "Mise en place de plateformes d'IA explicable pour la HR tech et les collectivités, améliorant la précision décisionnelle tout en garantissant conformité et réduction des biais.",
      "Conception de systèmes de recommandation fondés sur des graphes augmentant la précision des appariements candidat-offre de 24 % sur 60 000 profils.",
      "Construction de pipelines ML de bout en bout couvrant ingestion, expérimentation, CI/CD et observabilité sur des environnements cloud hybrides.",
      "Déploiement de plateformes de vision temps réel basées sur YOLO et analytics streaming pour l'intelligence trafic, réduisant de 32 % les temps de réponse.",
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Anglais", level: "Courant" },
      { name: "Français", level: "Courant" },
    ],
    projectsTitle: "Projets Clés",
    projectTechLabel: "Stack Technique",
    projectConceptLabel: "Concepts",
    projects: [
      {
        title: "Plateforme de recrutement IA avec GNN",
        period: "2024 – 2025",
        summary: "Moteur d'appariement CV/offres via embeddings de graphes.",
        impact: "Ranking GNN, recherche sémantique, boucles de feedback.",
        tech: "PyTorch Geometric, SBERT, FastAPI, PostgreSQL",
      },
      {
        title: "Pipeline NLP avancé multi-optimisation",
        period: "2025",
        summary: "Modération multilingue avec auto-tuning DistilBERT.",
        impact: "PSO, AG et optimisation bayésienne avec monitoring live.",
        tech: "DistilBERT, PyTorch, FastAPI, WebSocket",
      },
      {
        title: "Planificateur universitaire intelligent",
        period: "2025",
        summary: "Planification hybride garantissant des examens sans conflits.",
        impact: "Coordination GA, PSO, ACO et scoring de contraintes souples.",
        tech: "FastAPI, NumPy, Pandas, Recuit simulé",
      },
      {
        title: "Mini-GPT (Decoder-only)",
        period: "2025",
        summary: "Transformer décodeur pour texte contrôlé.",
        impact: "Tokenizer dédié, entraînement mixte, pilotage des prompts.",
        tech: "PyTorch, AdamW, CUDA, Weights & Biases",
      },
      {
        title: "BERT sentiment adapté",
        period: "2025",
        summary: "Encodeur bidirectionnel pour dialectes nord-africains.",
        impact: "Masked LM, fine-tuning LoRA, adaptation rapide au domaine.",
        tech: "PyTorch, LoRA, Hugging Face, MLflow",
      },
      {
        title: "Geo RAG — Assistant cartographique",
        period: "2025",
        summary: "Assistant RAG géospatial fournissant des réponses contextualisées.",
        impact: "Recherche vectorielle, graphes de connaissances, raisonnement spatial.",
        tech: "ChromaDB, GeoPandas, Streamlit",
      },
      {
        title: "Recognizini | Reconnaissance faciale temps réel",
        period: "2025",
        summary: "Plateforme de reconnaissance avec apprentissage métrique en ligne.",
        impact: "Feedback actif, embeddings incrémentaux, gestion de la dérive.",
        tech: "OpenCV, PyTorch, Redis, FastAPI",
      },
      {
        title: "Détection d'équipements de sécurité",
        period: "2025",
        summary: "Surveillance EPI pour casques et gilets en streaming.",
        impact: "Détection YOLOv8, alertes conformité, analytics vidéo.",
        tech: "YOLOv8, OpenCV, Python",
      },
      {
        title: "Système IA pour caméras trafic",
        period: "2025",
        summary: "Suite analytique trafic avec détection, suivi et vitesse.",
        impact: "Suivi ByteTrack, vitesse en perspective, OCR plaques.",
        tech: "YOLOv8, ByteTrack, EasyOCR",
      },
      {
        title: "Solution de gestion Hadj",
        period: "2024",
        summary: "Suite logistique pour pèlerins : groupes, voyages, santé.",
        impact: "Allocation intelligente, synchronisation itinéraires, workflows médicaux.",
        tech: "React, FastAPI, PostgreSQL",
      },
      {
        title: "POS & e-commerce hybride",
        period: "2025",
        summary: "POS offline-first synchronisé avec boutiques en ligne.",
        impact: "Synchronisation stock, résolution de conflits, analytics commerçants.",
        tech: "PyQt, SQLite, PostgreSQL",
      },
    ],
  },
  de: {
    header: {
      name: "AISSAOUI Ismail",
      role: "Ingenieur für KI & Data Science",
      contacts: [
        { label: "E-Mail", value: "ismail.aissaoui.pro@gmail.com", href: "mailto:ismail.aissaoui.pro@gmail.com" },
        { label: "Akademische E-Mail", value: "i.aissaoui@esi-sba.dz", href: "mailto:i.aissaoui@esi-sba.dz" },
        { label: "Telefon", value: "+213 660 70 77 96", href: "tel:+213660707796" },
        { label: "Portfolio", value: "ismail-aissaoui.vercel.app", href: "https://ismail-aissaoui.vercel.app" },
        { label: "Standort", value: "Chlef, Algerien" },
        { label: "LinkedIn", value: "linkedin.com/in/aissaoui-ismail-6a77a92a7", href: "https://linkedin.com/in/aissaoui-ismail-6a77a92a7" },
        { label: "GitHub", value: "github.com/i-aissaoui", href: "https://github.com/i-aissaoui" },
      ],
    },
    summaryTitle: "Berufliches Profil",
    summary:
      "KI- & Data-Science-Ingenieur im letzten Studienjahr, der End-to-End-KI-Lösungen für Recruiting, HR-Tech, Mobilität, Handel und Bildung realisiert. Verantwortete Projekte wie graphenbasiertes Talent-Matching, mehrsprachige Moderation, hybride Prüfungsplanung, städtische Verkehrsanalysen und offline-fähige POS-Systeme. Verbindet Forschung mit praxisnaher Umsetzung, richtet Lieferungen an Geschäftsziele aus und stellt verlässliche MLOps-Prozesse für alle Stakeholder sicher.",
    experienceTitle: "Berufserfahrung",
    experience: [
      {
        company: "Algeria Telecom",
        role: "Praktikant Netzwerktechnik",
        location: "Algier, Algerien",
        period: "Sep 2024",
        achievements: [],
      },
    ],
    educationTitle: "Ausbildung",
    education: [
      {
        institution: "Nationale Hochschule für Informatik (ESI-SBA)",
        location: "Sidi Bel Abbès, Algerien",
        period: "2021 – 2026",
        degree: "Master- und Ingenieurabschluss (Ingénieur d'État) in Informatik",
        highlights: [
          "Schwerpunkt: Künstliche Intelligenz & Informatik",
        ],
      },
    ],
    skillsTitle: "Kompetenzen",
    skills: [
      { category: "Programmierung", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
      { category: "ML / DL", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Lightning", "ONNX"] },
      { category: "KI-Techniken", items: ["Transformers", "BERT", "GPT", "RAG", "GNN", "GAN", "XGBoost", "LSTM"] },
      { category: "Optimierung", items: ["PSO", "Genetischer Algorithmus", "ACO", "Simulated Annealing", "Bayesian Optimization"] },
      { category: "Web & APIs", items: ["Next.js", "React", "FastAPI", "Node.js", "TailwindCSS"] },
      { category: "Data & MLOps", items: ["Pandas", "NumPy", "MLflow", "Airflow", "DVC", "Kubeflow", "Great Expectations"] },
      { category: "Datenbanken", items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "Cassandra"] },
      { category: "Cloud & DevOps", items: ["Docker", "Linux", "Git", "CI/CD", "CUDA", "AWS", "Grafana"] },
      { category: "Soft Skills", items: ["Stakeholder-Management", "Technische Führung", "Mentoring", "Kommunikation", "Produktstrategie"] },
    ],
    achievementsTitle: "Wichtige Erfolge",
    achievements: [
      "Entwicklung maßgeschneiderter Transformer-Modelle (BERT, GPT, RAG) und Überführung in produktive Mehrsprachen-Workloads.",
      "Aufbau erklärbarer KI-Plattformen für HR-Tech und öffentliche Infrastruktur mit nachweislich höherer Entscheidungsqualität.",
      "Graphbasierte Empfehlungssysteme, die die Matching-Genauigkeit zwischen Kandidat:innen und Stellen um 24 % steigerten.",
      "Design kompletter ML-Pipelines inklusive Data Ingestion, Experimentmanagement, CI/CD und Observability.",
      "Echtzeit-Computer-Vision-Lösungen mit YOLO und Streaming-Analytics für urbane Verkehrsnetze, 32 % schnellere Incident-Response.",
    ],
    languagesTitle: "Sprachen",
    languages: [
      { name: "Arabisch", level: "Muttersprache" },
      { name: "Englisch", level: "Fließend" },
      { name: "Französisch", level: "Fließend" },
    ],
    projectsTitle: "Leitprojekte",
    projectTechLabel: "Technologie-Stack",
    projectConceptLabel: "Konzepte",
    projects: [
      {
        title: "Recruiting-Plattform mit GNN",
        period: "2024 – 2025",
        summary: "Matching von Lebensläufen und Jobs über Graph-Embeddings.",
        impact: "GNN-Ranking, semantische Suche, Feedback-Schleifen.",
        tech: "PyTorch Geometric, SBERT, FastAPI, PostgreSQL",
      },
      {
        title: "Fortgeschrittenes NLP mit Multi-Optimierung",
        period: "2025",
        summary: "Multilinguale Moderation mit automatisch getuntem DistilBERT.",
        impact: "PSO, genetische Algorithmen und Bayes-Suche mit Live-Dashboards.",
        tech: "DistilBERT, PyTorch, FastAPI, WebSocket",
      },
      {
        title: "Intelligente Prüfungsplanung",
        period: "2025",
        summary: "Hybrider Planer für kollisionsfreie Prüfungspläne.",
        impact: "Orchestrierung von GA, PSO und ACO mit Soft-Constraint-Scoring.",
        tech: "FastAPI, NumPy, Pandas, Simulated Annealing",
      },
      {
        title: "Mini-GPT für Textgenerierung",
        period: "2025",
        summary: "Decoder-only-Transformer für kontrollierte Textausgabe.",
        impact: "Eigener Tokenizer, Mixed-Precision-Training, Prompt-Steuerung.",
        tech: "PyTorch, AdamW, CUDA, Weights & Biases",
      },
      {
        title: "BERT für Stimmungsanalyse",
        period: "2025",
        summary: "Bidirektionales Modell für nordafrikanische Sprachvarianten.",
        impact: "Masked LM, LoRA-Finetuning, schnelle Domänenanpassung.",
        tech: "PyTorch, LoRA, Hugging Face, MLflow",
      },
      {
        title: "Geo RAG — Kartenbasiertes Retrieval",
        period: "2025",
        summary: "Geo-bewusstes RAG, das Antworten mit Kartenkontext liefert.",
        impact: "Vektorensuche, Wissensgraphen, räumliches Reasoning.",
        tech: "ChromaDB, GeoPandas, Streamlit",
      },
      {
        title: "Recognizini | Echtzeit-Gesichtserkennung",
        period: "2025",
        summary: "Gesichtserkennung mit Online Metric Learning und Driftkontrolle.",
        impact: "Aktives Feedback, inkrementelle Embeddings, schnelles Retraining.",
        tech: "OpenCV, PyTorch, Redis, FastAPI",
      },
      {
        title: "Sicherheitsausrüstungserkennung",
        period: "2025",
        summary: "Überwachung von Helmen und Westen im Live-Stream.",
        impact: "YOLOv8-Erkennung, Compliance-Alarme, Videoanalysen.",
        tech: "YOLOv8, OpenCV, Python",
      },
      {
        title: "KI-basiertes Verkehrsmonitoring",
        period: "2025",
        summary: "Analytics-Stack für Verkehr mit Detektion, Tracking und Geschwindigkeitsmessung.",
        impact: "ByteTrack-Tracking, Perspektivgeschwindigkeit, Kennzeichen-OCR.",
        tech: "YOLOv8, ByteTrack, EasyOCR",
      },
      {
        title: "Hadj-Management-Plattform",
        period: "2024",
        summary: "Logistik-Suite für Pilger:innen inklusive Gruppen, Reisen und Gesundheit.",
        impact: "Gruppenallokation, synchronisierte Routen, medizinische Workflows.",
        tech: "React, FastAPI, PostgreSQL",
      },
      {
        title: "Hybrides POS & E-Commerce",
        period: "2025",
        summary: "Offline-first-POS mit synchronisierten Online-Shops.",
        impact: "Bestandssynchronisation, Konfliktlösung, Händleranalysen.",
        tech: "PyQt, SQLite, PostgreSQL",
      },
    ],
  },
};

export default function ResumePDF() {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useMemo(() => resumeContent[locale], [locale]);
  const secondPageProjects = t.projects;

  const headingClass =
    "text-base font-bold text-white bg-blue-700 px-4 py-1.5 uppercase tracking-wide shadow-sm";

  return (
    <>
      <SiteNav locale={locale} onLocaleChange={(lang) => setLocale(lang)} />

      <div className="no-print fixed top-4 right-4 z-50 flex gap-3 bg-white/95 p-3 rounded-xl shadow-2xl border border-blue-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-600">🌐</span>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            className="px-4 py-2 border-2 border-blue-600 rounded-lg text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition"
          >
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>
        </div>
        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          🖨️ Print / Save PDF
        </button>
      </div>

      <div className="resume-container mx-auto py-15">
        <div className="page front-page p-5 pt-5 flex flex-col gap-1.1 text-[0.95rem]">
          <header className="border-b-2 border-blue-700 pb-2.5">
            <h1 className="text-[1.75rem] font-bold text-gray-900 text-center">{t.header.name}</h1>
            <p className="text-[0.9rem] font-semibold text-blue-700 text-center">{t.header.role}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 justify-center text-[0.82rem] text-gray-700">
              {t.header.contacts.map((contact) => {
                const content = (
                  <>
                    <span className="font-semibold text-blue-700">{contact.label}:</span>
                    <span className="ml-1">{contact.value}</span>
                  </>
                );

                return contact.href ? (
                  <a
                    key={`${contact.label}-${contact.value}`}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-blue-700"
                  >
                    {content}
                  </a>
                ) : (
                  <span key={`${contact.label}-${contact.value}`}>{content}</span>
                );
              })}
            </div>
          </header>

          <section className="space-y-1.2">
            <h2 className={headingClass}>{t.summaryTitle}</h2>
            <p className="text-[0.88rem] leading-6 text-gray-800">{t.summary}</p>
          </section>

          <section className="space-y-1.1 text-[0.86rem]">
            <h2 className={headingClass}>{t.experienceTitle}</h2>
            {t.experience.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="rounded-md border border-blue-100/70 bg-white p-2.5 text-[0.82rem] text-gray-800 shadow-sm"
              >
                <div className="flex flex-wrap justify-between gap-2 font-semibold text-gray-900 text-base">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <div className="flex flex-wrap justify-between gap-2 text-[0.8rem] text-blue-700 font-semibold">
                  <span>{exp.role}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-gray-700 text-[0.78rem] leading-[1.35]">
                  {exp.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="space-y-1.05 text-[0.84rem]">
            <h2 className={headingClass}>{t.educationTitle}</h2>
            {t.education.map((edu) => (
              <div key={edu.institution} className="rounded-md border border-blue-100/60 bg-blue-50/30 p-2.5 text-[0.8rem] text-gray-800">
                <div className="flex justify-between font-semibold text-gray-900 text-[0.9rem]">
                  <span>{edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
                <p className="mt-0.5 italic text-blue-700 font-semibold text-[0.78rem]">{edu.degree}</p>
                <ul className="mt-1.5 list-disc space-y-0.75 pl-5 text-gray-700 text-[0.76rem] leading-[1.35]">
                  {edu.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="space-y-1.05 text-[0.82rem]">
            <h2 className={headingClass}>{t.skillsTitle}</h2>
            <div className="grid grid-cols-2 gap-2.5 text-[0.72rem] text-gray-800">
              {t.skills.map((skill) => (
                <div key={skill.category}>
                  <p className="font-semibold text-blue-700 uppercase text-[0.64rem] tracking-wide">{skill.category}</p>
                  <p className="mt-0.5 leading-[1.45]">{skill.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-1 text-[0.78rem]">
            <h2 className={headingClass}>{t.achievementsTitle}</h2>
            <ul className="list-disc space-y-0.75 pl-5 leading-[1.45] text-gray-800">
              {t.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </section>

        </div>

        <div className="page back-page page-break p-5 flex flex-col gap-0.75 text-[0.92rem]">
          <section className="space-y-0.75">
            <h2 className={headingClass}>{t.projectsTitle}</h2>
            <div className="space-y-0.75">
              {secondPageProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-md border border-blue-100 bg-white p-2 shadow-sm space-y-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 text-[0.72rem] font-semibold text-gray-900">
                    <span className="leading-tight" title={project.title}>
                      {project.title}
                    </span>
                    <span className="text-blue-700 text-[0.65rem]">{project.period}</span>
                  </div>
                  <p className="text-[0.64rem] text-gray-800 leading-[1.2]">
                    {project.summary}
                  </p>
                  <p className="text-[0.62rem] text-gray-800 leading-[1.2]">
                    <span className="font-semibold text-blue-700">{t.projectConceptLabel}:</span> {project.impact}
                  </p>
                  <p className="text-[0.62rem] text-gray-600 leading-[1.2]">
                    <span className="font-semibold text-blue-700">{t.projectTechLabel}:</span> {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-0.5 pt-2">
            <h2 className={headingClass}>{t.languagesTitle}</h2>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[0.68rem] text-gray-800">
              {t.languages.map((language) => (
                <span key={language.name}>
                  <span className="font-semibold text-blue-700">{language.name}:</span> {language.level}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }

          html,
          body {
            background: #ffffff !important;
            color: #111827 !important;
          }

          .resume-container {
            width: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }

          .page {
            width: 210mm !important;
            height: 297mm !important;
            padding: 24px !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-after: always;
            background: #ffffff !important;
            box-sizing: border-box !important;
          }

          .page:last-of-type {
            page-break-after: auto;
          }

          @page {
            size: A4;
            margin: 0;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }

        @media screen {
          body {
            background: #e5e7eb;
          }

          .resume-container {
            width: 210mm;
            margin: 2rem auto;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .page {
            width: 210mm;
            height: 297mm;
            padding: 24px;
            background: white;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
            border-radius: 6px;
            box-sizing: border-box;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
}