export type Locale = "en" | "fr" | "de";

export type LocalizedString = {
  en: string;
  fr: string;
  de: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: LocalizedString;
  description: LocalizedString;
  details?: LocalizedString;
  tech: string[];
  category: "AI" | "Other";
  images?: string[]; // image URLs
  imageFolder?: string; // optional folder within public for auto-loading images
  link?: string; // demo or GitHub
};

export type Experience = {
  title: LocalizedString;
  company: string;
  location: string;
  period: string;
  description: LocalizedString;
};

export type SkillsGroup = {
  key:
  | "spoken"
  | "prog"
  | "webdev"
  | "aiml"
  | "bigdata"
  | "databases"
  | "tools"
  | "desktop";
  title: LocalizedString;
  items: string[];
};

export const site = {
  name: "AISSAOUI ISMAIL",
  role: {
    en: "Artificial Intelligence & Data Science Engineer",
    fr: "Ingénieur en Intelligence Artificielle et Science des Données",
    de: "Ingenieur für Künstliche Intelligenz und Data Science",
  } as LocalizedString,
  bio: {
    en: "Highly motivated final-year AI and Data Science student with deep ML/DL/NLP knowledge and strong end-to-end engineering skills. Built foundational transformer models (BERT, GPT, RAG) from scratch and apply them in robust applications across web (React, Next.js, FastAPI), desktop (PyQt), and databases (SQL/NoSQL). Seeking an AI Engineer or Full‑Stack ML Engineer role to contribute to model development and software architecture.",
    fr: "Étudiant en dernière année d'IA et Science des Données, très motivé, avec une maîtrise approfondie en ML/DL/NLP et de solides compétences d'ingénierie de bout en bout. A conçu des modèles transformeurs fondamentaux (BERT, GPT, RAG) depuis zéro et les a appliqués à des applications robustes web (React, Next.js, FastAPI), desktop (PyQt) et bases de données (SQL/NoSQL). À la recherche d'un poste d'Ingénieur IA ou d'Ingénieur ML Full‑Stack pour contribuer au développement de modèles et à l'architecture logicielle.",
    de: "Hochmotivierter Student im letzten Jahr in KI und Data Science mit tiefem Wissen in ML/DL/NLP und starken End‑to‑End‑Engineering‑Fähigkeiten. Habe grundlegende Transformer‑Modelle (BERT, GPT, RAG) von Grund auf aufgebaut und in robuste Anwendungen für Web (React, Next.js, FastAPI), Desktop (PyQt) und Datenbanken (SQL/NoSQL) integriert. Suche eine Rolle als AI Engineer oder Full‑Stack ML Engineer, um sowohl an Modellentwicklung als auch Softwarearchitektur mitzuwirken.",
  } as LocalizedString,
  location: "Chlef, Algeria",
  email: "ismail.aissaoui.pro@gmail.com",
  website: "https://www.reallygreatsite.com",
  phone: "+213 660 70 77 96",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace with your intro video URL
  socials: [
    { label: "GitHub", href: "https://github.com/i-aissaoui" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aissaoui-ismail-6a77a92a7" },
    { label: "Twitter", href: "https://x.com/aissaoui_i53909" },
    { label: "Instagram", href: "https://www.instagram.com/sma3il.sm" },
    { label: "WhatsApp", href: "https://wa.me/213660707796" },
  ] as SocialLink[],
  experiences: [
    {
      title: {
        en: "AI Engineer Intern — Digital Twin & Predictive Maintenance",
        fr: "Stagiaire Ingénieur IA — Jumeau Numérique & Maintenance Prédictive",
        de: "KI-Ingenieur Praktikant — Digitaler Zwilling & Prädiktive Wartung"
      },
      company: "Sonatrach",
      location: "Algeria",
      period: "2026",
      description: {
        en: "Developed a 3-tier Dual-Track Digital Twin framework for gas turbines. Engineered ultra-low latency TCNEdge (0.049ms) for emergency shutdown and MambaTS for robust near-edge analytics.",
        fr: "Développement d'un framework Jumeau Numérique à 3 niveaux pour turbines à gaz. Création du TCNEdge ultra-rapide (0,049 ms) pour l'arrêt d'urgence et du MambaTS pour les analyses robustes.",
        de: "Entwicklung eines 3-Ebenen Digitalen Zwillings für Gasturbinen. Erstellung von TCNEdge (0,049 ms) für Notabschaltungen und MambaTS für robuste Analysen am Edge."
      }
    },
    {
      title: {
        en: "Network Engineering Intern",
        fr: "Stagiaire Ingénieur Réseau",
        de: "Praktikant Netzwerktechnik"
      },
      company: "Algérie Télécom RMC Center",
      location: "Chlef, Algeria",
      period: "Sep 2024",
      description: {
        en: "Gained hands-on experience in network infrastructure management and optimization within a regional telecommunications center.",
        fr: "Expérience pratique dans la gestion et l'optimisation de l'infrastructure réseau au sein d'un centre régional de télécommunications.",
        de: "Praktische Erfahrung im Management und in der Optimierung von Netzwerkinfrastrukturen in einem regionalen Telekommunikationszentrum."
      }
    }
  ] as Experience[],
  skills: [],
  skillsGrouped: [
    {
      key: "spoken",
      title: {
        en: "Languages (Spoken)",
        fr: "Langues (parlées)",
        de: "Sprachen (gesprochen)",
      },
      items: ["Arabic (Mother Tongue)", "English (Advanced)", "French (Conversational)"],
    },
    {
      key: "prog",
      title: {
        en: "Programming Languages",
        fr: "Langages de programmation",
        de: "Programmiersprachen",
      },
      items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
    },
    {
      key: "webdev",
      title: {
        en: "Web / Development",
        fr: "Web / Développement",
        de: "Web / Entwicklung",
      },
      items: ["Next.js", "React", "HTML5", "TailwindCSS", "FastAPI"],
    },
    {
      key: "aiml",
      title: {
        en: "AI / Machine Learning",
        fr: "IA / Apprentissage automatique",
        de: "KI / Maschinelles Lernen",
      },
      items: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "SciPy",
        "Matplotlib",
        "Plotly",
        "OpenCV",
        "MLflow",
        "Machine Learning",
        "Transformers",
        "BERT",
        "GANs",
        "CNN",
        "RNN",
        "LSTM",
        "XGBoost",
        "Random Forest",
      ],
    },
    {
      key: "bigdata",
      title: { en: "Big Data", fr: "Big Data", de: "Big Data" },
      items: ["Apache Spark", "Hadoop", "Kafka", "Airflow", "Big Data"],
    },
    {
      key: "databases",
      title: { en: "Databases", fr: "Bases de données", de: "Datenbanken" },
      items: [
        "Cassandra",
        "MongoDB",
        "MySQL",
        "MariaDB",
        "SQLite",
        "Neo4j",
        "PostgreSQL",
      ],
    },
    {
      key: "tools",
      title: {
        en: "Developer Tools",
        fr: "Outils développeur",
        de: "Entwickler‑Tools",
      },
      items: ["Git", "Docker", "Linux", "Power BI", "KNIME", "GitHub"],
    },
    {
      key: "frameworks",
      title: { en: "Frameworks", fr: "Frameworks", de: "Frameworks" },
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Flask",
        "FastAPI",
      ],
    },
    {
      key: "viz",
      title: {
        en: "Visualization & Tools",
        fr: "Visualisation & Outils",
        de: "Visualisierung & Tools",
      },
      items: [
        "Power BI",
        "KNIME",
        "Matplotlib",
        "Plotly",
        "Git",
        "Docker",
        "Linux",
      ],
    },
    {
      key: "desktop",
      title: { en: "Desktop", fr: "Desktop", de: "Desktop" },
      items: ["PyQt"],
    },
  ] as SkillsGroup[],
  projects: [
    // --- MAIN AI ENGINEERING PROJECTS ---

    // 0) Industrial Gas Turbine Digital Twin (Sonatrach)
    {
      category: "AI",
      title: {
        en: "SONATRACH Gas Turbine Digital Twin",
        fr: "Jumeau Numérique de Turbine à Gaz (SONATRACH)",
        de: "Gasturbinen-Digitalzwilling (SONATRACH)",
      },
      description: {
        en: "Dual-Track Digital Twin framework solving the Hardware Latency Paradox for GE LM2500 gas turbines. Decouples Siemens Edge PLCs (TCNEdge), IoT Gateways (MambaTS), and Cloud (ST-KDFormer, KAN-PCNN).",
        fr: "Framework de jumeau numérique double-voie résolvant le paradoxe de latence matérielle pour les turbines GE LM2500. Découple le PLC Siemens (TCNEdge), la passerelle IoT (MambaTS) et le cloud.",
        de: "Dual-Track Digitaler Zwilling zur Lösung des Hardware-Latenz-Paradoxons für GE LM2500 Gasturbinen. Entkoppelt Siemens-Edge-SPS, IoT-Gateways und Cloud.",
      },
      details: {
        en: "Core Breakthroughs:\n• Tier 1 (Deep Edge): TCNEdge compiled to C++ ONNX Runtime for 0.049ms latency emergency shutdown with causality defense.\n• Tier 2 (Near Edge): MambaTS featuring missingness-aware gating for sandstorm robustness and physics-informed thermodynamic regularization.\n• Tier 3 (Cloud): Fleet-wide analytics using ST-KDFormer (Koopman Operator) and KAN-PCNN (B-spline Physics networks).",
        fr: "Avancées majeures :\n• Tier 1 (Deep Edge) : TCNEdge compilé en C++ ONNX pour un arrêt d'urgence en 0,049ms.\n• Tier 2 (Near Edge) : MambaTS avec gestion des pannes de capteurs et régularisation thermodynamique.\n• Tier 3 (Cloud) : ST-KDFormer (Opérateur Koopman) et KAN-PCNN (Réseaux Kolmogorov-Arnold).",
        de: "Kernbereiche:\n• Tier 1 (Deep Edge): TCNEdge kompiliert auf C++ ONNX für 0,049ms Abschaltlatenz.\n• Tier 2 (Near Edge): MambaTS mit Sensorfehler-Kompensation und physikalischen Regularisierungen.\n• Tier 3 (Cloud): ST-KDFormer (Koopman-Operator) und KAN-PCNN (Kolmogorov-Arnold-Netze).",
      },
      tech: ["Mamba-SSM", "TCNEdge", "ST-KDFormer", "KAN-PCNN", "ONNX Runtime", "C++ JIT", "PINN"],
      images: [
        "/ai-projects/gas_turbine_v2.png"
      ],
      link: "sonatrach/README.md",
    },

    // 0.5) Cardiovascular Medical Digital Twin
    {
      category: "AI",
      title: {
        en: "Cardiovascular Medical Digital Twin",
        fr: "Jumeau Numérique Médical Cardiovasculaire",
        de: "Kardiovaskulärer Medizinischer Digitaler Zwilling",
      },
      description: {
        en: "Physics-Informed Digital Twin forecasting patient arterial Mean Blood Pressure (MBP) in the ICU. Uses the VitalDB dataset and multi-scale state space models.",
        fr: "Jumeau numérique médical informé par la physique prédisant la pression artérielle moyenne (MBP) en soins intensifs à partir du dataset VitalDB.",
        de: "Physik-informierter medizinischer digitaler Zwilling zur Vorhersage des mittleren Blutdrucks (MBP) auf der Intensivstation unter Verwendung von VitalDB.",
      },
      details: {
        en: "Core Architecture:\n• 0D Windkessel PINN: Integrates cardiovascular ODEs using PyTorch autograd loss regularizers for physiological compliance.\n• Medical_MambaTS: Selective State Space Model achieving linear complexity O(N) for resource-constrained bedside monitors.\n• SST_KODA_MultiScale: Dual-branch hybrid routing trends to Mamba and transients to Transformers.\n• PI_DeepONet: Solves cardiovascular ODEs in sub-0.05ms using branch and trunk networks.",
        fr: "Architecture principale :\n• PINN Windkessel 0D : Intègre les équations différentielles cardiovasculaires via autograd dans PyTorch.\n• Medical_MambaTS : Modèle State-Space sélectif à complexité linéaire O(N) pour moniteurs de chevet.\n• SST_KODA_MultiScale : Routage hybride double branche pour les tendances et pics de pression.\n• PI_DeepONet : Résout les équations différentielles cardiovasculaires en moins de 0,05ms.",
        de: "Hauptarchitektur:\n• 0D Windkessel PINN: Integriert kardiovaskuläre DGLs über PyTorch-Autograd für physiologische Konformität.\n• Medical_MambaTS: Selektives Zustandsraummodell mit linearer Komplexität O(N) für bettseitige Monitore.\n• SST_KODA_MultiScale: Dual-Branch-Modell für Trends und Blutdruckspitzen.\n• PI_DeepONet: Löst kardiovaskuläre DGLs in unter 0,05ms.",
      },
      tech: ["PyTorch", "PINN", "MambaTS", "SST-KODA", "PI-DeepONet", "VitalDB", "Kafka"],
      images: [
        "/ai-projects/medical_v2.png"
      ],
      link: "medical-digital-twin/README.md",
    },

    // 0.7) Autonomous Cyber-Shield Platform
    {
      category: "AI",
      title: {
        en: "Autonomous Cyber-Shield Platform",
        fr: "Plateforme Cyber-Bouclier Autonome",
        de: "Autonome Cyber-Shield Plattform",
      },
      description: {
        en: "Artificial General Intelligence (AGI) framework designed to autonomously defend enterprise networks via Inductive GNNs and Adversarial Co-Evolution.",
        fr: "Cadre d'Intelligence Artificielle Générale (AGI) conçu pour défendre de manière autonome les réseaux d'entreprise via GNN Inductifs et Co-Évolution Adversarielle.",
        de: "AGI-Framework (Artificial General Intelligence) zur autonomen Verteidigung von Unternehmensnetzwerken mittels induktiver GNNs und adversarieller Koevolution.",
      },
      details: {
        en: "Core Architecture:\n• Topological Zero-Shot Defense: Instantly transfer models trained on 10 nodes to 10,000 node networks.\n• Geometric Deep Learning: Graph Attention Networks (GATs) for state interception.\n• Adversarial Co-Evolution: Red AI and Blue AI agents locked in millions of fictitious self-play battles.\n• Neuro-Symbolic LLM Masking: Translates strict safety policies into mathematical action masks.",
        fr: "Architecture de base :\n• Défense topologique Zero-Shot : Transfert instantané de modèles formés sur 10 nœuds à des réseaux de 10 000 nœuds.\n• Apprentissage profond géométrique : Graph Attention Networks (GATs).\n• Co-Évolution Adversarielle : Agents IA Rouge et IA Bleu en apprentissage compétitif.\n• LLM Neuro-Symbolique : Masques d'action basés sur des politiques de sécurité strictes.",
        de: "Kernarchitektur:\n• Topologische Zero-Shot-Verteidigung: Modelle, die auf 10 Knoten trainiert wurden, direkt auf 10.000 Knoten skalierbar.\n• Geometrisches Deep Learning: Graph Attention Networks (GATs).\n• Adversarielle Koevolution: Red AI und Blue AI in Self-Play-Wettbewerben.\n• Neuro-symbolisches LLM-Masking: Strenge Sicherheitspolitiken als mathematische Aktionsmasken.",
      },
      tech: ["PyTorch Geometric", "Graph Attention Networks (GAT)", "Reinforcement Learning", "CybORG", "LSTM"],
      images: [
        "/ai-projects/cyber_shield_v2.png"
      ],
      link: "engineering thesis/README.md",
    },

    // 1) Aura AI Trading Ecosystem
    {
      category: "AI",
      title: {
        en: "Aura AI Trading Ecosystem",
        fr: "Écosystème de Trading Aura AI",
        de: "Aura AI Trading-System",
      },
      description: {
        en: "Institutional-grade dual-core AI trading platform (LSTM + DQN) for Cryptocurrency and Gold markets. Features a high-performance Python backend and a real-time Next.js dashboard.",
        fr: "Plateforme de trading IA à double cœur (LSTM + DQN) pour les marchés de crypto-monnaies et de l'or. Comprend un backend Python haute performance et un tableau de bord Next.js en temps réel.",
        de: "Institutionelles KI-Trading-System (LSTM + DQN) für Krypto- und Goldmärkte. Mit Hochleistungs-Python-Backend und Echtzeit-Next.js-Dashboard.",
      },
      details: {
        en: "Overview:\n• Dual-Core AI Engine (LSTM + DQN) for trend forecasting and optimal entry/exit strategies.\n• Advanced Feature Engineering with 18+ institutional-grade technical indicators.\n• Interactive \"Time Machine\" Backtesting with gamified replay.\n• Real-Time Dashboard with WebSocket streaming and glassmorphism UI.\n\nTech Stack:\n• Backend: Python 3.11, FastAPI, TensorFlow, Keras.\n• Frontend: Next.js 14, TypeScript, Tailwind CSS, Recharts.\n• Data: Pandas, NumPy, TA-Lib.\n• Infrastructure: WebSocket, Background Workers.",
        fr: "Aperçu :\n• Moteur IA à double cœur (LSTM + DQN) pour la prévision des tendances et des stratégies d'entrée/sortie optimales.\n• Ingénierie des fonctionnalités avancée avec plus de 18 indicateurs techniques de niveau institutionnel.\n• Backtesting interactif \"Time Machine\" avec relecture ludifiée.\n• Tableau de bord en temps réel avec streaming WebSocket et interface utilisateur en glassmorphism.\n\nStack Tech :\n• Backend : Python 3.11, FastAPI, TensorFlow, Keras.\n• Frontend : Next.js 14, TypeScript, Tailwind CSS, Recharts.\n• Données : Pandas, NumPy, TA-Lib.\n• Infrastructure : WebSocket, Background Workers.",
        de: "Überblick:\n• Dual-Core AI Engine (LSTM + DQN) zur Trendprognose und für optimale Ein-/Ausstiegsstrategien.\n• Fortgeschrittenes Feature Engineering mit 18+ institutionellen technischen Indikatoren.\n• Interaktives \"Zeitmaschinen\"-Backtesting mit gamifizierter Wiedergabe.\n• Echtzeit-Dashboard mit WebSocket-Streaming und Glassmorphismus-UI.\n\nTech Stack:\n• Backend: Python 3.11, FastAPI, TensorFlow, Keras.\n• Frontend: Next.js 14, TypeScript, Tailwind CSS, Recharts.\n• Daten: Pandas, NumPy, TA-Lib.\n• Infrastruktur: WebSocket, Background Workers.",
      },
      tech: ["Python", "TensorFlow", "FastAPI", "Next.js", "LSTM", "DQN", "WebSocket"],
      imageFolder: "trading",
      images: [
        "/trading/1.png",
        "/trading/2.png",
        "/trading/3.png",
        "/trading/4.png",
        "/trading/5.png",
      ],
      link: "#",
    },

    // 1) Career Connect: GNN-Powered Recruitment Intelligence
    {
      category: "AI",
      title: {
        en: "Career Connect: GNN-Powered Recruitment Intelligence",
        fr: "Career Connect : Intelligence de Recrutement Propulsée par GNN",
        de: "Career Connect: GNN-gestützte Rekrutierungs-Intelligenz",
      },
      description: {
        en: "Advanced recruitment platform using Graph Neural Networks (GNN) and SBERT to semantically match candidates with job opportunities. Built with PyTorch Geometric and FAISS.",
        fr: "Plateforme de recrutement avancée utilisant des réseaux de neurones graphiques (GNN) et SBERT pour faire correspondre sémantiquement les candidats aux offres d'emploi.",
        de: "Fortgeschrittene Rekrutierungsplattform mit Graph Neural Networks (GNN) und SBERT für semantisches Matching von Kandidaten und Stellenangeboten.",
      },
      details: {
        en: "Architecture & AI:\n• Graph Neural Networks (PyTorch Geometric) for structural skill modeling.\n• Semantic Search with SBERT and FAISS vector indexing.\n• High-performance ranking using XGBoost and LightGBM.\n• Automated CV parsing and O*NET standardized profile matching.",
        fr: "Architecture et IA :\n• Réseaux de neurones graphiques (PyTorch Geometric) pour la modélisation structurelle des compétences.\n• Recherche sémantique avec SBERT et indexation vectorielle FAISS.\n• Classement haute performance utilisant XGBoost et LightGBM.",
        de: "Architektur & KI:\n• Graph Neural Networks (PyTorch Geometric) für strukturelle Kompetenzmodellierung.\n• Semantische Suche mit SBERT und FAISS-Vektorindexierung.\n• Hochleistungs-Ranking mit XGBoost und LightGBM.",
      },
      tech: ["Graph Neural Networks", "PyTorch Geometric", "SBERT", "FAISS", "XGBoost", "FastAPI", "React", "PostgreSQL"],
      images: [
        "/carrer-connect/1.png",
        "/carrer-connect/2.png",
        "/carrer-connect/3.png",
        "/carrer-connect/4.png",
        "/carrer-connect/5.png",
        "/carrer-connect/6.png",
        "/carrer-connect/7.png",
        "/carrer-connect/8.png",
      ],
    },

    // 2) Elliptic++: Bitcoin Fraud Detection with GNNs
    {
      category: "AI",
      title: {
        en: "Elliptic++: Bitcoin Fraud Detection with GNNs",
        fr: "Elliptic++ : Détection de Fraude Bitcoin avec GNN",
        de: "Elliptic++: Bitcoin-Betrugserkennung mit GNNs",
      },
      description: {
        en: "Blockchain security project focused on detecting illicit actors and fraudulent transactions in the Bitcoin network using graph-based learning on over 200k transactions.",
        fr: "Projet de sécurité blockchain axé sur la détection d'acteurs illicites et de transactions frauduleuses dans le réseau Bitcoin en utilisant l'apprentissage basé sur les graphes.",
        de: "Blockchain-Sicherheitsprojekt zur Erkennung illegaler Akteure und betrügerischer Transaktionen im Bitcoin-Netzwerk mittels graphbasiertem Lernen.",
      },
      details: {
        en: "Technical Scope:\n• Data: 203k Bitcoin transactions and 822k wallet addresses.\n• Graph Modeling: Capturing money flow (tx-tx) and actor interaction (addr-addr).\n• Classification: Fraud detection via Graph Neural Networks and Feature Importance analysis.",
        fr: "Portée technique :\n• Données : 203k transactions Bitcoin et 822k adresses de portefeuilles.\n• Modélisation de graphes : Capture du flux d'argent (tx-tx) et de l'interaction des acteurs (addr-addr).",
        de: "Technischer Umfang:\n• Daten: 203k Bitcoin-Transaktionen und 822k Wallet-Adressen.\n• Graph-Modellierung: Analyse des Geldflusses (tx-tx) und der Akteurinteraktion (addr-addr).",
      },
      tech: ["Graph Neural Networks", "Python", "NetworkX", "PyTorch Geometric", "Blockchain", "Data Mining"],
      images: [
        "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=1600" /* bitcoin/blockchain */
      ],
    },

    // 3) Vision Transformer (ViT) Implementation
    {
      category: "AI",
      title: {
        en: "Vision Transformer (ViT) Implementation",
        fr: "Implémentation de Vision Transformer (ViT)",
        de: "Vision Transformer (ViT) Implementierung",
      },
      description: {
        en: "Applied the power of Transformers to Computer Vision by treating images as sequences of patches. Built with pure PyTorch for state-of-the-art image identification.",
        fr: "Application de la puissance des transformeurs à la vision par ordinateur en traitant les images comme des séquences de patchs.",
        de: "Einsatz von Transformern in der Computer Vision durch die Behandlung von Bildern als Sequenzen von Patches.",
      },
      details: {
        en: "Core Features:\n• Patch Embedding and [CLS] token integration.\n• Multi-Head Self-Attention for global dependency learning.\n• Pure PyTorch implementation with fine-tuning on ImageNet data.",
        fr: "Fonctionnalités clés :\n• Embedding de patchs et intégration du token [CLS].\n• Self-Attention multi-têtes pour l'apprentissage des dépendances globales.",
        de: "Kernfunktionen:\n• Patch-Embedding und [CLS]-Token-Integration.\n• Multi-Head Self-Attention für globales Abhängigkeitslernen.",
      },
      tech: ["PyTorch", "Transformers", "Computer Vision", "Deep Learning", "GELU"],
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600" /* neural network viz */
      ],
    },

    // 4) Recognizini: Semi-Supervised Facial Recognition
    {
      category: "AI",
      title: {
        en: "Recognizini: Semi-Supervised Facial Recognition",
        fr: "Recognizini : Reconnaissance Faciale Semi-Supervisée",
        de: "Recognizini: Semi-überwachte Gesichtserkennung",
      },
      description: {
        en: "Real-time facial recognition web app that learns new identities online using Label Propagation and PCA for efficient dimensionality reduction.",
        fr: "Application web de reconnaissance faciale en temps réel qui apprend de nouvelles identités en ligne via Label Propagation et PCA.",
        de: "Echtzeit-Gesichtserkennungs-Web-App, die neue Identitäten online lernt mittels Label Propagation und PCA.",
      },
      details: {
        en: "AI Techniques:\n• PCA for 10x faster matching while preserving 95% variance.\n• Label Propagation (graph-based) to label unlabeled identities.\n• Comparison between CNN+PCA analysis and HOG+PCA methods.",
        fr: "Techniques IA :\n• PCA pour un matching 10x plus rapide.\n• Label Propagation (basé sur les graphes) pour étiqueter les identités inconnues.",
        de: "KI-Techniken:\n• PCA für 10x schnelleres Matching.\n• Label Propagation (graphbasiert) zur Kennzeichnung unbekannter Identitäten.",
      },
      tech: ["PyTorch", "OpenCV", "FastAPI", "Next.js", "PCA", "Label Propagation", "Python"],
      imageFolder: "recognizini",
      images: [
        "/recognizini/1.png",
        "/recognizini/2.png",
        "/recognizini/3.png",
      ],
      link: "recognizini/README.md",
    },

    // 5) AI Traffic Camera & License Plate Recognition
    {
      category: "AI",
      title: {
        en: "AI Traffic Camera & License Plate Recognition",
        fr: "Caméra de Trafic IA & Reconnaissance de Plaques",
        de: "KI-Verkehrskamera & Kennzeichenerkennung",
      },
      description: {
        en: "Intelligent monitoring system featuring vehicle detection, tracking, counting, speed estimation via perspective transform, and LPR (EasyOCR).",
        fr: "Système de surveillance intelligent comprenant la détection de véhicules, le suivi, le comptage et l'estimation de la vitesse.",
        de: "Intelligentes Überwachungssystem mit Fahrzeugerkennung, Tracking, Zählung und Geschwindigkeitsschätzung.",
      },
      tech: ["YOLOv8", "OpenCV", "ByteTrack", "EasyOCR", "PyTorch", "CUDA", "Computer Vision"],
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
      ],
      link: "#",
    },

    // 6) Safety Equipment Detection with YOLOv8
    {
      category: "AI",
      title: {
        en: "Safety Equipment Detection with YOLOv8",
        fr: "Détection d'Équipement de Sécurité avec YOLOv8",
        de: "Sicherheitsausrüstungserkennung mit YOLOv8",
      },
      description: {
        en: "Workplace monitoring system detecting helmets and reflective jackets in real-time using YOLOv8 with automated per-person compliance feedback.",
        fr: "Système de surveillance du lieu de travail détectant les casques et les gilets réfléchissants en temps réel.",
        de: "Arbeitsplatzüberwachungssystem zur Echtzeit-Erkennung von Helmen und Warnwesten.",
      },
      tech: ["YOLOv8", "Ultralytics", "OpenCV", "PyTorch", "Python", "Computer Vision"],
      images: [
        "/safety/1.jpeg",
        "/safety/2.png",
        "/safety/3.png",
      ],
    },

    // 7) Geo RAG — Map-based RAG Demo
    {
      category: "AI",
      title: {
        en: "Geo RAG — Map-based RAG Demo",
        fr: "Geo RAG — Démo RAG Cartographique",
        de: "Geo RAG — Kartenbasiertes RAG Demo",
      },
      description: {
        en: "Interactive RAG application integrating Chroma vector search, sentence-transformers, and a local LLM (Ollama) to generate geo-aware summaries on Folium maps.",
        fr: "Application RAG interactive intégrant la recherche vectorielle Chroma et un LLM local pour générer des résumés géographiques.",
        de: "Interaktive RAG-Anwendung mit Chroma-Vektorsuche und lokalem LLM zur Generierung kartenbasierter Zusammenfassungen.",
      },
      tech: ["ChromaDB", "LangChain", "Ollama", "Folium", "Streamlit", "Python", "RAG"],
      images: ["/geo-rag/1.png", "/geo-rag/2.png", "/geo-rag/3.png"],
    },

    // 8) Mini‑GPT & BERT (Foundational Transformers)
    {
      category: "AI",
      title: {
        en: "Foundational Transformers: Mini-GPT & BERT",
        fr: "Transformeurs Fondamentaux : Mini-GPT & BERT",
        de: "Grundlagen-Transformer: Mini-GPT & BERT",
      },
      description: {
        en: "Pure PyTorch implementations of Decoder-only (GPT) and Encoder-only (BERT) architectures from scratch for creative text generation and sentiment analysis.",
        fr: "Implémentations pures PyTorch des architectures GPT et BERT à partir de zéro.",
        de: "Reine PyTorch-Implementierungen von GPT- und BERT-Architekturen von Grund auf.",
      },
      tech: ["PyTorch", "Transformers", "NLP", "Causal Attention", "MLM", "Python"],
      imageFolder: "mini-gpt",
      images: [
        "/mini-gpt/mini-gpt-01.png",
        "/bert-sentiment/bert-sentiment-01.png",
      ],
    },

    // 9) Advanced NLP Optimization (Metaheuristics)
    {
      category: "AI",
      title: {
        en: "Advanced NLP Optimization (Metaheuristics)",
        fr: "Optimisation NLP Avancée (Métaheuristiques)",
        de: "Fortgeschrittene NLP-Optimierung (Metaheuristiken)",
      },
      description: {
        en: "DistilBERT app with hyperparameter tuning via PSO, GA, and Bayesian optimization. Real‑time convergence dashboards and algorithm comparison.",
        fr: "Application DistilBERT avec réglage d'hyperparamètres via PSO, GA et optimisation bayésienne.",
        de: "DistilBERT-App mit Hyperparameter-Tuning per PSO, GA und Bayes-Optimierung.",
      },
      tech: ["FastAPI", "PyTorch", "PSO", "Genetic Algorithm", "Bayesian Optimization", "Next.js"],
      imageFolder: "advanced-nlp",
      images: [
        "/advanced-nlp/Screenshot from 2025-11-21 08-38-13.png",
        "/advanced-nlp/Screenshot from 2025-11-21 08-38-59.png",
      ],
    },

    // 10) University Scheduling (NP-Complete Optimization)
    {
      category: "AI",
      title: {
        en: "University Scheduling Optimization",
        fr: "Optimisation de l'Emploi du Temps Universitaire",
        de: "Optimierung der Universitäts-Stundenplanung",
      },
      description: {
        en: "Automated timetabling system solving hard constraint problems using Genetic and Swarm algorithms for conflict-free resource allocation.",
        fr: "Système automatisé de planification d'examens utilisant des algorithmes d'optimisation (Génétique, PSO).",
        de: "Automatisiertes Prüfungsplanungssystem mit Optimierungsalgorithmen.",
      },
      tech: ["Python", "Genetic Algorithm", "PSO", "ACO", "Simulated Annealing"],
      imageFolder: "intelligent-scheduling",
      images: [
        "/intelligent-scheduling/Screenshot from 2025-11-21 09-45-25.png",
        "/intelligent-scheduling/Screenshot from 2025-11-21 09-46-38.png",
      ],
    },

    // --- OTHER SOFTWARE SOLUTIONS ---

    // 10) Tajer: Desktop POS System
    {
      category: "Other",
      title: {
        en: "Tajer: Professional Desktop POS",
        fr: "Tajer : POS Desktop Professionnel",
        de: "Tajer: Professionelles Desktop-POS",
      },
      description: {
        en: "A high-performance Electron-based POS application using Node.js and SQLite. Handled product variants, dynamic pricing schemas, and real-time inventory management with secure IPC architecture.",
        fr: "Application POS haute performance basée sur Electron utilisant Node.js et SQLite. Gestion des variantes de produits et schémas de prix dynamiques.",
        de: "Hochleistungs-Electron-POS mit Node.js und SQLite. Unterstützung von Produktvarianten und dynamischen Preisschemata.",
      },
      tech: ["Electron", "Node.js", "SQLite", "IPC", "JavaScript"],
      imageFolder: "tajer-pos",
      images: [
        "/tajer-pos/tajer-1.png",
        "/tajer-pos/tajer-2.png",
        "/tajer-pos/tajer-3.png",
        "/tajer-pos/tajer-4.png",
        "/tajer-pos/tajer-5.png",
        "/tajer-pos/tajer-6.png",
        "/tajer-pos/tajer-7.png",
      ],
      link: "projects/tajer-pos/README.md",
    },

    // 11) Hybrid POS & E‑commerce Sync
    {
      category: "Other",
      title: {
        en: "Hybrid POS & E‑commerce Sync",
        fr: "Sync POS Hybride & E‑commerce",
        de: "Hybride POS & E‑Commerce Synchronisation",
      },
      description: {
        en: "Enterprise retail solution connecting local stores with online websites. Dual-database architecture (SQLite + PostgreSQL) for 100% offline-online resilience.",
        fr: "Solution de vente au détail connectant les magasins physiques aux sites web en ligne.",
        de: "Handelslösung zur Verbindung von Filialen mit Online-Shops.",
      },
      tech: ["Python", "PostgreSQL", "SQLite", "API Integration", "Offline-First"],
      imageFolder: "hybrid-pos",
      images: [
        "/hybrid-pos/hybrid-pos-01.png",
      ],
    },

    // 12) My Sweety: Luxury POS (Flutter)
    {
      category: "Other",
      title: {
        en: "My Sweety: Luxury POS (Flutter)",
        fr: "My Sweety : POS de Luxe (Flutter)",
        de: "My Sweety: Luxus-POS (Flutter)",
      },
      description: {
        en: "High-fidelity POS and inventory management system for sweet shops and artisanal bakeries. Designed with a luxury aesthetic and multi-platform support (Android/Windows).",
        fr: "Système de gestion de stock et POS haute fidélité pour pâtisseries artisanales.",
        de: "Hochwertiges POS- und Lagerverwaltungssystem für Konditoreien.",
      },
      tech: ["Flutter", "Provider", "Shared Preferences", "Localization", "Windows Desktop"],
      imageFolder: "my-sweety",
      images: [
        "/my-sweety/sweety-1.png",
        "/my-sweety/sweety-2.png",
        "/my-sweety/sweety-3.png",
        "/my-sweety/sweety-4.png",
        "/my-sweety/sweety-5.png",
        "/my-sweety/sweety-6.png",
        "/my-sweety/sweety-7.png",
      ],
      link: "projects/my-sweety/README.md",
    },

    // 13) Hadj Management System
    {
      category: "Other",
      title: {
        en: "Hadj Management System",
        fr: "Système de Gestion du Hajj",
        de: "Haddsch-Managementsystem",
      },
      description: {
        en: "Comprehensive platform to manage logistics, transport, and medical scheduling for pilgrims. Centralized data handling for complex relationships.",
        fr: "Plateforme complète pour gérer la logistique, le transport et le planning médical des pèlerins.",
        de: "Umfassende Plattform für Logistik, Transport und medizinische Planung für Pilger.",
      },
      tech: ["React", "FastAPI", "PostgreSQL", "Logistics", "Scheduling"],
      images: [
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200",
      ],
    },


    // 15) Elydent: Dentist Management Platform
    {
      category: "Other",
      title: {
        en: "Elydent: Professional Dentist Management",
        fr: "Elydent : Gestion Dentaire Professionnelle",
        de: "Elydent: Professionelle Zahnarzt-Verwaltung",
      },
      description: {
        en: "Advanced clinical management platform developed with Next.js, Electron, and SQLite. Features patient charting, appointment scheduling, and automated billing with clinical precision.",
        fr: "Plateforme de gestion clinique avancée développée avec Next.js, Electron et SQLite. Gestion des dossiers patients et planification des rendez-vous.",
        de: "Fortgeschrittene klinische Verwaltungsplattform mit Next.js, Electron und SQLite. Patientenverwaltung und Terminplanung.",
      },
      tech: ["Next.js", "Electron", "SQLite", "React", "Node.js", "Clinical Management"],
      imageFolder: "elydent",
      images: [
        "/elydent/image_2026-02-10_21-00-22.png",
        "/elydent/image_2026-02-10_21-01-52.png",
        "/elydent/image_2026-02-10_21-02-32.png",
        "/elydent/image_2026-02-10_21-02-41.png",
        "/elydent/image_2026-02-10_21-02-56.png",
        "/elydent/image_2026-02-10_21-03-04.png",
        "/elydent/image_2026-02-10_21-03-14.png",
        "/elydent/image_2026-02-10_21-53-26.png",
      ],
      link: "projects/elydent/README.md",
    },
  ] as Project[],
};
