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
  images?: string[]; // image URLs
  link?: string; // demo or GitHub
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
  skills: [],
  skillsGrouped: [
    {
      key: "spoken",
      title: {
        en: "Languages (Spoken)",
        fr: "Langues (parlées)",
        de: "Sprachen (gesprochen)",
      },
      items: ["Arabic (native)", "English (fluent)", "French (fluent)"],
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
    // 10) Career Connect - AI-Powered Career Platform (2024-2025)
    {
      title: {
        en: "Career Connect — AI Job Recommendation Platform",
        fr: "Career Connect — Plateforme IA de recommandation d'emplois",
        de: "Career Connect — KI‑Jobempfehlungsplattform",
      },
      description: {
        en: "AI‑powered platform that extracts skills from CVs, builds dense embeddings and delivers ranked candidate recommendations for recruiters while providing personalized job guidance for candidates.",
        fr: "Plateforme IA qui extrait les compétences des CV, construit des embeddings denses et fournit des recommandations classées aux recruteurs tout en offrant des conseils d'emploi personnalisés aux candidats.",
        de: "KI‑gestützte Plattform, die Fähigkeiten aus Lebensläufen extrahiert, dichte Embeddings erstellt und Recruitern klassifizierte Kandidatenempfehlungen liefert sowie Bewerbern personalisierte Job‑Empfehlungen anbietet.",
      },
      details: {
        en: "Project Overview:\n• AI-powered recruitment platform connecting candidates with job opportunities through intelligent matching\n• Serves both recruiters (candidate recommendations) and job seekers (personalized job suggestions)\n• End-to-end system from CV parsing to deployment\n\nCore AI Concepts:\n• Natural Language Processing: Automated skill extraction and text understanding\n• Semantic Matching: Dense embedding-based similarity for candidate-job matching\n• Graph Neural Networks: Graph-based learning for job recommendations\n• GCN Autoencoders: Graph convolutional networks for semantic matching\n• Ensemble Learning: Quad-ensemble approach for role classification\n• Hybrid Ranking: Multi-signal ranking combining learned and rule-based methods\n\nModel Performance:\n• Mean Reciprocal Rank (MRR): 0.947\n• High precision@k across all test sets\n• Mean Average Precision (MAP) optimized for top recommendations\n• Trained on combined datasets: O*NET, ESCO, Stack Overflow Developer Survey\n\nTechnologies Used:\n• ML Frameworks: (PyTorch, PyTorch Geometric, scikit-learn, XGBoost, LightGBM)\n• NLP Tools: (SpaCy, sentence-transformers, FAISS)\n• Backend: (FastAPI) with asynchronous processing\n• Frontend: (React + TypeScript) dashboard\n• Deployment: (Docker) containerization",
        fr: "Présentation :\n• Système de bout en bout combinant analyse de CV et NLP (SpaCy, PyPDF2) avec recherche par embeddings (sentence‑transformers + FAISS) et modèles de classement hybrides.\n• Recommandation d'emploi par réseaux de neurones graphiques (PyTorch Geometric) et auto‑encodeur GCN pour l'appariement sémantique.\n• Classifieurs en quad‑ensemble (XGBoost, Random Forest, LightGBM, NN) pour la classification des rôles et pipeline de classement des CV hybride (règle + apprentissage).\n• Entraîné et évalué sur O*NET, ESCO et l'enquête Stack Overflow ; métriques : MRR, precision@k, MAP (ex. MRR≈0.947).\n• Stack de production : backend Python (FastAPI), PostgreSQL, dashboard frontend (React + TypeScript), containerisé avec Docker.\n\nContributions principales : conception du système, implémentation des modèles (GNN, GCN), évaluation et intégration frontend.",
        de: "Kurzbeschreibung :\n• End‑to‑end System, das CV‑Parsing und NLP (SpaCy, PyPDF2) mit embeddingbasierter Suche (sentence‑transformers + FAISS) und hybriden Ranking‑Modellen kombiniert.\n• Job‑Empfehlung mittels Graph Neural Networks (PyTorch Geometric) und einem GCN Autoencoder für semantisches Matching.\n• Quad‑Ensemble Klassifizierer (XGBoost, Random Forest, LightGBM, NN) für Rollenklassifikation sowie ein hybrider Lebenslauf‑Ranking‑Workflow.\n• Trainiert und evaluiert auf O*NET, ESCO und Stack Overflow Survey; Metriken: MRR, precision@k, MAP (z. B. MRR≈0.947).\n• Produktionsstack: Python‑Backend (FastAPI), PostgreSQL, Frontend‑Dashboard (React + TypeScript), containerisiert mit Docker.\n\nHauptbeiträge: System‑Design, Implementierung der Modelle (GNN, GCN), Evaluation und Frontend‑Integration.",
      },
      tech: [
        "Python",
        "FastAPI",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "PyTorch",
        "PyTorch Geometric",
        "sentence-transformers (SBERT)",
        "FAISS",
        "SpaCy",
        "scikit-learn",
        "XGBoost",
        "LightGBM",
        "Graph Neural Networks",
        "Pandas",
        "NumPy",
      ],
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

    // 9) Mini‑GPT (Decoder‑only) (2025)
    {
      title: {
        en: "Mini‑GPT (Decoder‑only) (2025)",
        fr: "Mini‑GPT (décodeur seul) (2025)",
        de: "Mini‑GPT (nur Decoder) (2025)",
      },
      description: {
        en: "Developed a character‑level decoder‑only transformer with causal self‑attention to generate Shakespeare‑style text.",
        fr: "Développement d'un transformer décodeur‑seul au niveau caractère, avec self‑attention causale, pour générer du texte à la manière de Shakespeare.",
        de: "Entwicklung eines zeichenbasierten Decoder‑only‑Transformers mit kausaler Self‑Attention zur Generierung von Text im Shakespeare‑Stil.",
      },
      details: {
        en: "Project Overview:\n• Built GPT-style transformer from scratch for text generation\n• Character-level tokenization for learning fine-grained patterns\n• Trained on Shakespeare corpus for creative text generation\n\nCore Concepts:\n• Autoregressive Language Modeling: Predicting next character given context\n• Causal Self-Attention: Decoder-only attention mechanism preventing future information leakage\n• Multi-Head Attention: Parallel attention for capturing different representation aspects\n• Positional Encoding: Learned embeddings for sequence position information\n• Residual Connections: Skip connections enabling deep network training\n• Layer Normalization: Stabilizing training with pre-norm architecture\n\nText Generation Techniques:\n• Autoregressive Sampling: Sequential character-by-character generation\n• Temperature Control: Adjustable randomness for creative outputs\n• Nucleus Sampling: Top-k and top-p sampling for quality control\n• Context Window: Fixed-length context for generation\n\nKey Achievements:\n• Successfully generated coherent Shakespeare-style text\n• Learned grammar, vocabulary, and writing style patterns\n• Demonstrated deep understanding of transformer principles\n\nTechnologies Used:\n• Framework: (PyTorch) for model implementation\n• Optimization: (AdamW) optimizer with weight decay and gradient clipping\n• Training: Custom training loop with warmup and cosine annealing schedule\n• Activation: (GELU) non-linearity for feed-forward networks",
        fr: "Aperçu du projet:\n• Construction d'un transformer de style GPT depuis zéro\n• Tokenisation au niveau caractère\n• Entraîné sur le corpus de Shakespeare",
        de: "Übersicht:\n• GPT-Transformer von Grund auf gebaut\n• Zeichenbasierte Tokenisierung\n• Trainiert auf Shakespeare-Korpus"
      },
      tech: ["Python", "PyTorch", "Transformers", "NLP", "GPT Architecture", "GELU", "AdamW"],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600" /* neon tech */,
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600" /* gradient */,
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600" /* data viz */,
      ],
      link: "#",
    },
    // 8) BERT (Encoder‑only) (2025)
    {
      title: {
        en: "BERT (Encoder‑only) (2025)",
        fr: "BERT (encodeur seul) (2025)",
        de: "BERT (nur Encoder) (2025)",
      },
      description: {
        en: "Implemented a BERT‑style encoder for sentiment analysis, including pre‑training and fine‑tuning pipeline.",
        fr: "Mise en œuvre d'un encodeur type BERT pour l'analyse de sentiments, avec pipeline de pré‑entraînement et de fine‑tuning.",
        de: "Implementierung eines BERT‑ähnlichen Encoders für Sentiment‑Analyse, inkl. Pretraining‑ und Fine‑Tuning‑Pipeline.",
      },
      details: {
        en: "Project Overview:\n• Implemented BERT encoder architecture from scratch\n• Complete pre-training and fine-tuning workflow\n• Applied to sentiment analysis task\n\nCore Concepts:\n• Bidirectional Language Modeling: Learning context from both directions\n• Masked Language Modeling (MLM): Predicting randomly masked tokens (15% masking)\n• Next Sentence Prediction (NSP): Understanding sentence relationships\n• Transfer Learning: Pre-training on large corpus, fine-tuning for specific tasks\n• Multi-Layer Encoding: Stacked transformer blocks for hierarchical representations\n• Attention Mechanism: Scaled dot-product attention for token relationships\n\nFine-tuning Strategy:\n• Classification Head: Task-specific layer on [CLS] token\n• Gradual Unfreezing: Layer-wise unfreezing for optimal transfer\n• Supervised Learning: Fine-tuning on labeled sentiment data\n\nKey Results:\n• Strong performance on sentiment classification benchmarks\n• Successfully captured contextual word representations\n• Demonstrated effectiveness of BERT pre-training approach\n• Validated transfer learning for NLP tasks\n\nTechnologies Used:\n• Framework: (PyTorch) and (transformers library)\n• Tokenization: WordPiece with custom vocabulary\n• Optimization: (AdamW) with learning rate warmup\n• Activation: (GELU) non-linearity\n• Architecture: Layer normalization with residual connections",
        fr: "Aperçu:\n• Implémentation de l'encodeur BERT\n• Pipeline complet de pré-entraînement et fine-tuning\n• Application à l'analyse de sentiments",
        de: "Übersicht:\n• BERT-Encoder-Implementierung\n• Vollständige Pretraining- und Fine-Tuning-Pipeline\n• Anwendung auf Sentiment-Analyse"
      },
      tech: ["Python", "PyTorch", "Transformers", "BERT", "NLP", "MLM", "GELU", "AdamW"],
      images: [
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1600" /* neural network */,
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600" /* neon servers */,
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600" /* abstract */,
      ],
      link: "#",
    },

    // Geo RAG — Streamlit RAG demo (localized)
    {
      title: {
        en: "Geo RAG — Map-based RAG Demo",
        fr: "Geo RAG — Démo RAG cartographique",
        de: "Geo RAG — Kartenbasiertes RAG Demo",
      },
      description: {
        en: "Geo RAG is a full application (not just a demo) that integrates persisted Chroma vector search, sentence-transformers embeddings, a Streamlit user interface, and a locally hosted LLM to produce concise, context-aware natural-language summaries for geographic places. Queries are answered by retrieving relevant geo-tagged documents, constructing per-place prompts, and rendering generated answers directly in Folium marker popups on an interactive map. The app is designed for reproducible RAG experiments and portfolio presentation.",
        fr: "Geo RAG est une application complète (pas seulement une démo) qui intègre une recherche vectorielle Chroma persistée, des embeddings sentence-transformers, une interface Streamlit et un LLM local pour produire des résumés concis et contextualisés pour des lieux géographiques. Les requêtes sont traitées en récupérant des documents géolocalisés pertinents, en construisant des prompts par lieu et en affichant les réponses générées directement dans les popups Folium sur une carte interactive. L'application est conçue pour des expérimentations RAG reproductibles et une présentation portfolio.",
        de: "Geo RAG ist eine vollständige Anwendung (kein reines Demo), die persistente Chroma-Vektorsuche, sentence-transformers-Embeddings, eine Streamlit-Benutzeroberfläche und ein lokal gehostetes LLM integriert, um prägnante, kontextbezogene Textzusammenfassungen für geografische Orte zu erzeugen. Anfragen werden beantwortet, indem relevante geo-getaggte Dokumente abgerufen, ortsspezifische Prompts erzeugt und die generierten Antworten in Folium-Markern auf einer interaktiven Karte angezeigt werden. Die App ist für reproduzierbare RAG-Experimente und Portfolio-Präsentationen ausgelegt.",
      },
      details: {
        en: "Detailed application notes: Geo RAG implements a robust, production-minded RAG flow: (1) documents are embedded with sentence-transformers and persisted in a Chroma vector store; (2) a variety of retrieval fallbacks (retriever.get_relevant_documents, similarity_search, similarity_search_with_score) are used to ensure compatibility across LangChain versions; (3) per-place prompts are synthesized from retrieved context and sent to a local LLM (Ollama/phi-3 in the original implementation) using defensive call wrappers that accept callable LLMs, .predict or .generate shapes; (4) the Streamlit UI displays results on an interactive Folium map — marker popups show concise LLM-generated summaries and the map uses flyTo / fitBounds logic to animate results. Key technologies used: Python 3.11, Streamlit, ChromaDB (persisted), sentence-transformers (HuggingFace models), LangChain retrieval wrappers (defensive use), Ollama (local LLM) or alternative LLM adapters, Folium for mapping, Pandas/GeoPandas for data handling, NumPy, PyTorch (for embeddings), and standard tooling (pip, virtualenv). See `geo-rag/README.md` for setup, vector creation notebooks, and screenshot placement.",
        fr: "Notes détaillées : Geo RAG implémente un flux RAG robuste et orienté production : (1) les documents sont vectorisés avec sentence-transformers et persistés dans ChromaDB ; (2) plusieurs stratégies de récupération (retriever.get_relevant_documents, similarity_search, similarity_search_with_score) sont utilisées pour assurer la compatibilité entre les versions de LangChain ; (3) des prompts par lieu sont synthétisés à partir du contexte récupéré et envoyés à un LLM local (Ollama/phi-3 dans l'implémentation originale) en utilisant des wrappers défensifs acceptant des formes appelables, .predict ou .generate ; (4) l'interface Streamlit affiche les résultats sur une carte Folium interactive — les popups des marqueurs contiennent des résumés concis générés par le LLM et la carte utilise flyTo / fitBounds pour animer les résultats. Technologies clés : Python 3.11, Streamlit, ChromaDB (persistant), sentence-transformers (modèles HuggingFace), wrappers de récupération LangChain (usage défensif), Ollama (LLM local) ou adaptateurs alternatifs, Folium pour la cartographie, Pandas/GeoPandas pour le traitement des données, NumPy, PyTorch (pour les embeddings), et outils standards (pip, virtualenv). Voir `geo-rag/README.md` pour l'installation, la création des vecteurs et le placement des captures d'écran.",
        de: "Detaillierte Hinweise: Geo RAG implementiert einen robusten, produktionsorientierten RAG-Flow: (1) Dokumente werden mit sentence-transformers eingebettet und in einer persistenten Chroma-DB gespeichert; (2) verschiedene Retrieval-Fallbacks (retriever.get_relevant_documents, similarity_search, similarity_search_with_score) gewährleisten Kompatibilität über LangChain-Versionen hinweg; (3) ortsspezifische Prompts werden aus dem abgerufenen Kontext generiert und an ein lokales LLM (ursprünglich Ollama/phi-3) über defensive Wrapper gesendet, die callable-Objekte, .predict oder .generate unterstützen; (4) die Streamlit-Oberfläche zeigt Ergebnisse auf einer interaktiven Folium-Karte — Marker-Popups enthalten kurze, vom LLM generierte Zusammenfassungen, und die Karte nutzt flyTo / fitBounds zur Animation. Wichtige Technologien: Python 3.11, Streamlit, ChromaDB (persistiert), sentence-transformers (HuggingFace-Modelle), LangChain-Retrieval-Wrapper (defensive Nutzung), Ollama (lokales LLM) oder alternative LLM-Adapter, Folium für Karten, Pandas/GeoPandas für Datenverarbeitung, NumPy, PyTorch (für Embeddings) sowie Standard-Tools (pip, virtualenv). Siehe `geo-rag/README.md` für Einrichtung, Vektor-Erstellung und Screenshot-Platzierung.",
      },
      tech: [
        "Chroma",
        "sentence-transformers",
        "Streamlit",
        "Folium",
        "Ollama",
        "Python",
        "Pandas",
        "GeoPandas",
        "PyTorch",
      ],
      images: ["/geo-rag/1.png", "/geo-rag/2.png", "/geo-rag/3.png"],
      link: "geo-rag/README.md",
    },
    // 4) Hadj Management System (2024)
    {
      title: {
        en: "Hadj Management System (2024)",
        fr: "Système de Gestion du Hajj (2024)",
        de: "Haddsch‑Managementsystem (2024)",
      },
      description: {
        en: "Built a comprehensive web platform to manage logistics for Hajj pilgrims: group selection, travel, and medical scheduling. Centralized database and UI to handle complex relationships (flights, hotels, pilgrim info).",
        fr: "Conception d'une plateforme web complète pour gérer la logistique des pèlerins : sélection des groupes, voyages et planning médical. Base de données et UI centralisées pour des relations complexes (vols, hôtels, infos pèlerins).",
        de: "Umfassende Web‑Plattform zur Verwaltung der Logistik für Pilger: Gruppenauswahl, Reisen und medizinische Planung. Zentrale Datenbank und UI für komplexe Beziehungen (Flüge, Hotels, Pilgerdaten).",
      },
      tech: ["Web", "Database", "Scheduling"],
      images: [
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200",
      ],
      link: "#",
    },
    // 3) (moved/expanded) Hybrid POS & E‑commerce — see enriched entry later in the list
    // 2) Recognizini (2025)
    {
      title: {
        en: "Recognizini | Real‑Time Facial Recognition System (2025)",
        fr: "Recognizini | Système de reconnaissance faciale en temps réel (2025)",
        de: "Recognizini | Echtzeit‑Gesichtserkennungssystem (2025)",
      },
      description: {
        en: "Semi‑supervised face recognition web app (frontend: Next.js) that identifies faces from images/video and learns new identities online. Combines traditional CV with deep models and dimensionality reduction for efficiency.",
        fr: "Application web de reconnaissance faciale semi‑supervisée (frontend : Next.js) qui identifie des visages à partir d'images/vidéo et apprend de nouvelles identités en ligne. Combine CV traditionnel et modèles profonds avec réduction de dimension pour l'efficacité.",
        de: "Semi‑überwachte Web‑App zur Gesichtserkennung (Frontend: Next.js), die Gesichter aus Bildern/Video identifiziert und neue Identitäten online lernt. Kombiniert klassische CV‑Methoden mit Deep‑Learning und Dimensionsreduktion für Effizienz.",
      },
      details: {
        en: "Overview: Recognizini implements a semi‑supervised pipeline to improve face recognition using labeled and unlabeled data. Key techniques: (1) PCA for dimensionality reduction to speed up matching while preserving discriminative features; (2) Label Propagation (graph‑based) to spread labels from a small labeled seed set to unlabeled embeddings; (3) an online update flow that ingests user‑confirmed labels to expand the gallery in real time. The system supports real‑time interaction (image / video upload, live labeling), evaluation of models and a performance comparison between CNN+PCA (higher accuracy using 95% variance) and HOG+PCA (faster, 90% variance). Tech stack: Frontend — Next.js, TypeScript, Tailwind CSS; Backend — FastAPI (Python); ML — Python, OpenCV, scikit‑learn (PCA, LabelPropagation), PyTorch for CNN models. Contributions: UI/UX design and frontend implementation (Next.js, Tailwind), integration with the Python backend and model inference endpoints.",
        fr: "Aperçu : Recognizini met en œuvre un pipeline semi‑supervisé pour améliorer la reconnaissance faciale en utilisant des données étiquetées et non étiquetées. Techniques clés : (1) PCA pour la réduction de dimension afin d'accélérer le matching tout en conservant les caractéristiques discriminantes ; (2) Label Propagation (graphe) pour étendre les étiquettes depuis un petit jeu étiqueté aux embeddings non étiquetés ; (3) un flux de mise à jour en ligne qui intègre les labels confirmés par l'utilisateur pour étendre la galerie en temps réel. Le système prend en charge l'interaction en temps réel (upload d'images/vidéo, étiquetage), l'évaluation des modèles et une comparaison de performances entre CNN+PCA (précision supérieure, 95% variance) et HOG+PCA (plus rapide, 90% variance). Stack : Frontend — Next.js, TypeScript, Tailwind CSS ; Backend — FastAPI (Python) ; ML — Python, OpenCV, scikit‑learn (PCA, LabelPropagation), PyTorch pour les modèles CNN. Contributions : conception UI/UX et implémentation frontend (Next.js, Tailwind), intégration avec le backend Python et les endpoints d'inférence des modèles.",
        de: "Überblick: Recognizini implementiert eine semi‑überwachte Pipeline zur Verbesserung der Gesichtserkennung mit gelabelten und ungelabelten Daten. Wichtige Techniken: (1) PCA zur Dimensionsreduktion zur Beschleunigung des Matchings bei Erhalt diskriminativer Merkmale; (2) Label Propagation (graphbasiert), um Labels von einer kleinen gelabelten Seed‑Menge auf ungelabelte Embeddings zu übertragen; (3) ein Online‑Update‑Flow, der benutzerbestätigte Labels aufnimmt, um die Galerie in Echtzeit zu erweitern. Das System unterstützt Echtzeit‑Interaktion (Bild/Video‑Upload, Live‑Labeling), Modellbewertung und einen Leistungsvergleich zwischen CNN+PCA (höhere Genauigkeit bei 95% Varianz) und HOG+PCA (schneller, 90% Varianz). Tech‑Stack: Frontend — Next.js, TypeScript, Tailwind CSS; Backend — FastAPI (Python); ML — Python, OpenCV, scikit‑learn (PCA, LabelPropagation), PyTorch für CNN‑Modelle. Beiträge: UI/UX‑Design und Frontend‑Implementierung (Next.js, Tailwind), Integration mit dem Python‑Backend und den Modell‑Inference‑Endpoints.",
      },
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "OpenCV",
        "PCA",
        "Label Propagation",
        "PyTorch",
      ],
      images: [
        "/recognizini/1.png",
        "/recognizini/2.png",
        "/recognizini/3.png",
      ],
      link: "recognizini/README.md",
    },
    // Safety Equipment Detection with YOLOv8 (2025)
    {
      title: {
        en: "Safety Equipment Detection with YOLOv8 (2025)",
        fr: "Détection d'équipement de sécurité avec YOLOv8 (2025)",
        de: "Sicherheitsausrüstungserkennung mit YOLOv8 (2025)",
      },
      description: {
        en: "Real-time safety monitoring system using YOLOv8 to detect safety helmets and reflective jackets in workplace environments, providing instant feedback on missing equipment for each person detected.",
        fr: "Système de surveillance de sécurité en temps réel utilisant YOLOv8 pour détecter les casques de sécurité et gilets réfléchissants dans les environnements de travail, fournissant un retour instantané sur l'équipement manquant pour chaque personne détectée.",
        de: "Echtzeit-Sicherheitsüberwachungssystem mit YOLOv8 zur Erkennung von Schutzhelmen und Warnwesten in Arbeitsumgebungen, mit sofortigem Feedback zu fehlender Ausrüstung für jede erkannte Person.",
      },
      details: {
        en: "Project Overview:\n• Computer vision system for workplace safety monitoring\n• Detects persons, safety helmets, and reflective jackets in real-time\n• Provides per-person safety compliance feedback\n• Processes both images and video streams\n\nCore Concepts:\n• Object Detection: YOLOv8 for multi-class detection (person, helmet, jacket)\n• Bounding Box Association: IoU-based matching to associate equipment with persons\n• Real-Time Processing: Frame-by-frame video analysis with live visualization\n• Safety Compliance: Automated detection of missing safety equipment\n• Transfer Learning: Fine-tuning pre-trained YOLOv8 on custom safety dataset\n\nKey Features:\n• Multi-Object Detection: Simultaneous detection of persons and safety equipment\n• Association Logic: Intelligent matching of helmets/jackets to each person using spatial overlap\n• Visual Feedback: Thin borders around detected objects with warning labels for missing equipment\n• Video Processing: Real-time analysis of video feeds with adjustable display size (1280x720)\n• Performance Metrics: Training metrics, sample predictions, and detection accuracy analysis\n\nTraining Pipeline:\n• Dataset: Custom annotated dataset with train/valid/test splits in YOLO format\n• Model: YOLOv8n (nano) for fast inference, trained on 2 classes (Safety-Helmet, Reflective-Jacket)\n• Training: Complete training notebook with visualization of metrics and sample predictions\n• Testing: Dedicated testing notebook for evaluation and performance analysis\n• Output: Annotated images, JSON results, and comprehensive performance reports\n\nTechnologies Used:\n• Framework: (Ultralytics YOLOv8) for object detection\n• Computer Vision: (OpenCV) for video processing and visualization\n• Deep Learning: (PyTorch) with CUDA support for GPU acceleration\n• Data Processing: (NumPy) for numerical operations\n• Notebooks: Jupyter notebooks for training and testing workflows",
        fr: "Aperçu du projet:\n• Système de vision par ordinateur pour la surveillance de la sécurité au travail\n• Détecte les personnes, casques de sécurité et gilets réfléchissants en temps réel\n• Fournit un retour de conformité de sécurité par personne\n• Traite les images et flux vidéo\n\nConcepts clés:\n• Détection d'objets avec YOLOv8\n• Association de boîtes englobantes basée sur IoU\n• Traitement en temps réel\n• Conformité de sécurité automatisée\n• Transfer Learning sur dataset personnalisé",
        de: "Projektübersicht:\n• Computer-Vision-System zur Sicherheitsüberwachung am Arbeitsplatz\n• Erkennt Personen, Schutzhelme und Warnwesten in Echtzeit\n• Bietet personenbezogenes Sicherheits-Compliance-Feedback\n• Verarbeitet Bilder und Videostreams\n\nKernkonzepte:\n• Objekterkennung mit YOLOv8\n• IoU-basierte Bounding-Box-Zuordnung\n• Echtzeitverarbeitung\n• Automatisierte Sicherheitskonformität\n• Transfer Learning auf benutzerdefiniertem Datensatz"
      },
      tech: [
        "Python",
        "YOLOv8",
        "Ultralytics",
        "OpenCV",
        "PyTorch",
        "CUDA",
        "NumPy",
        "Computer Vision",
        "Object Detection",
        "Jupyter",
      ],
      images: [
        "/safety/1.jpeg",
        "/safety/2.png",
        "/safety/3.png",
      ],
      link: "#",
    },
    // AI Traffic Camera System (2025)
    {
      title: {
        en: "AI Traffic Camera System (2025)",
        fr: "Système de caméra de trafic IA (2025)",
        de: "KI-Verkehrskamera-System (2025)",
      },
      description: {
        en: "Comprehensive computer vision system for intelligent traffic monitoring with vehicle detection, tracking, counting, speed estimation, and license plate recognition. Features real-time analysis with perspective transformation for accurate speed calculation.",
        fr: "Système complet de vision par ordinateur pour la surveillance intelligente du trafic avec détection, suivi, comptage de véhicules, estimation de vitesse et reconnaissance de plaques d'immatriculation. Analyse en temps réel avec transformation de perspective pour un calcul précis de la vitesse.",
        de: "Umfassendes Computer-Vision-System für intelligente Verkehrsüberwachung mit Fahrzeugerkennung, -verfolgung, -zählung, Geschwindigkeitsschätzung und Kennzeichenerkennung. Echtzeitanalyse mit Perspektivtransformation für präzise Geschwindigkeitsberechnung.",
      },
      details: {
        en: "Project Overview:\n• Multi-phase intelligent traffic monitoring system\n• Real-time vehicle detection, tracking, and analysis\n• Speed estimation using perspective transformation\n• Optional license plate recognition\n• Comprehensive traffic flow analytics\n\nPhase 1 - Detection, Tracking & Counting:\n• YOLOv8x: State-of-the-art vehicle detection (cars, motorcycles, buses, trucks)\n• ByteTrack: Robust multi-object tracking with unique ID assignment\n• Line Zone Counting: Virtual tripwire for traffic flow analysis\n• Real-time bounding boxes with tracker IDs\n\nPhase 2 - Speed Estimation:\n• Perspective Transformation: Pixel-to-world coordinate mapping using homography matrix\n• Calibration System: User-defined calibration zone with real-world measurements\n• Speed Calculation: Distance traveled over time with frame-based tracking\n• Speed Smoothing: Multi-frame averaging for stable measurements\n• Real-time Display: Speed shown in km/h for each tracked vehicle\n\nPhase 3 - License Plate Recognition:\n• EasyOCR Integration: Deep learning-based text extraction\n• Image Preprocessing: Grayscale conversion, denoising, adaptive thresholding\n• Plate Caching: Per-vehicle plate storage to avoid redundant processing\n• Optional Feature: Enable/disable via configuration\n\nKey Technical Concepts:\n• Homography Matrix: 3×3 transformation matrix for plane-to-plane mapping\n• Perspective Transform: Converting camera view to bird's-eye view coordinates\n• IoU Tracking: Intersection over Union for object association across frames\n• Contrastive Learning: Motion prediction for robust tracking\n• OCR Pipeline: Multi-stage text recognition with confidence scoring\n\nSpeed Calculation Mathematics:\n• Convert pixel coordinates to world coordinates using homography\n• Calculate Euclidean distance: D = √((X₂-X₁)² + (Y₂-Y₁)²) meters\n• Compute speed: Speed = (D / Δt) × 3.6 km/h\n• Apply smoothing over multiple frames for stability\n\nCalibration Process:\n• Define 4-point calibration zone in video frame (pixels)\n• Measure real-world dimensions (width × height in meters)\n• System computes homography matrix automatically\n• Visual feedback with yellow quadrilateral overlay\n\nApplications & Use Cases:\n• Traffic flow monitoring and analysis\n• Speed enforcement and violation detection\n• Vehicle counting for traffic density studies\n• License plate logging for security\n• Multi-camera traffic network analysis\n\nTechnologies Used:\n• Detection: (YOLOv8x) - Ultralytics framework\n• Tracking: (ByteTrack) via supervision library\n• OCR: (EasyOCR) for license plate text extraction\n• Computer Vision: (OpenCV) for video processing and transformations\n• Utilities: (supervision) for detection and tracking tools\n• Data Processing: (NumPy, Pandas) for numerical operations\n• Optimization: Mixed precision training, GPU acceleration with CUDA",
        fr: "Aperçu du projet:\n• Système de surveillance de trafic intelligent multi-phases\n• Détection, suivi et analyse de véhicules en temps réel\n• Estimation de vitesse par transformation de perspective\n• Reconnaissance de plaques optionnelle\n• Analytique complète du flux de trafic\n\nPhase 1 - Détection, Suivi & Comptage:\n• YOLOv8x pour détection de véhicules\n• ByteTrack pour suivi multi-objets\n• Comptage par ligne virtuelle\n\nPhase 2 - Estimation de Vitesse:\n• Transformation de perspective\n• Système de calibration\n• Calcul de vitesse en km/h\n• Lissage multi-frames\n\nPhase 3 - Reconnaissance de Plaques:\n• Intégration EasyOCR\n• Prétraitement d'images\n• Cache par véhicule",
        de: "Projektübersicht:\n• Mehrstufiges intelligentes Verkehrsüberwachungssystem\n• Echtzeit-Fahrzeugerkennung, -verfolgung und -analyse\n• Geschwindigkeitsschätzung durch Perspektivtransformation\n• Optionale Kennzeichenerkennung\n• Umfassende Verkehrsflussanalyse\n\nPhase 1 - Erkennung, Verfolgung & Zählung:\n• YOLOv8x für Fahrzeugerkennung\n• ByteTrack für Multi-Objekt-Tracking\n• Linien-Zonen-Zählung\n\nPhase 2 - Geschwindigkeitsschätzung:\n• Perspektivtransformation\n• Kalibrierungssystem\n• Geschwindigkeitsberechnung in km/h\n• Multi-Frame-Glättung\n\nPhase 3 - Kennzeichenerkennung:\n• EasyOCR-Integration\n• Bildvorverarbeitung\n• Fahrzeugbezogener Cache"
      },
      tech: [
        "Python",
        "YOLOv8",
        "Ultralytics",
        "OpenCV",
        "ByteTrack",
        "EasyOCR",
        "PyTorch",
        "CUDA",
        "NumPy",
        "Pandas",
        "Computer Vision",
        "Object Detection",
        "Object Tracking",
        "OCR",
      ],
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600" /* traffic monitoring */,
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600" /* city traffic */,
        "https://images.unsplash.com/photo-1502101872923-d48509bff386?w=1600" /* highway */,
      ],
      link: "#",
    },
    // additional details for Hybrid POS & e‑commerce
    {
      title: {
        en: "Hybrid POS & E‑commerce System (2025)",
        fr: "Système Hybride POS & E‑commerce (2025)",
        de: "Hybrides POS‑ & E‑Commerce‑System (2025)",
      },
      description: {
        en: "Engineered a desktop POS synchronized with a live e‑commerce website. Designed a hybrid architecture with local (SQLite) and cloud (PostgreSQL) databases for seamless offline/online operation.",
        fr: "Conception d'un POS desktop synchronisé avec un site e‑commerce. Architecture hybride avec bases locales (SQLite) et cloud (PostgreSQL) pour un fonctionnement hors‑ligne/en ligne.",
        de: "Desktop‑POS, synchronisiert mit einer Live‑E‑Commerce‑Website. Hybride Architektur mit lokalen (SQLite) und Cloud‑Datenbanken (PostgreSQL) für nahtlosen Offline/Online‑Betrieb.",
      },
      details: {
        en: "This POS desktop app integrates with multiple e‑commerce websites (example: Shiakati Store, Celtic Wear, Jet7) for inventory sync, order processing, and customer management. Implemented a background synchronization service that batches local transactions and reconciles with the remote APIs. The architecture supports offline-first operations with conflict resolution strategies and eventual consistency. The project included secure authentication for merchant dashboards and a monitoring suite for synchronization health.",
        fr: "L'application POS desktop s'intègre à plusieurs sites e‑commerce (ex : Shiakati Store, Celtic Wear, Jet7) pour la synchronisation des stocks, le traitement des commandes et la gestion client. Service de synchronisation en arrière‑plan, batch des transactions locales et réconciliation via APIs distantes. Architecture offline‑first avec stratégies de résolution de conflits et consistance éventuelle. Authentification sécurisée et dashboard de monitoring.",
        de: "Diese POS‑Desktop‑App integriert sich mit mehreren E‑Commerce‑Websites (z. B. Shiakati Store, Celtic Wear, Jet7) für Inventarsynchronisation, Bestellverarbeitung und Kundenverwaltung. Hintergrund‑Synchronisationsdienst batcht lokale Transaktionen und reconciliert sie mit Remote‑APIs. Offline‑First‑Architektur mit Konfliktlösungsstrategien und eventual consistency. Sichere Authentifizierung und Monitoring‑Dashboard implementiert.",
      },
      tech: ["SQLite", "PostgreSQL", "Desktop", "Web"],
      images: [
        "https://images.unsplash.com/photo-1515165562835-c3b8c8d0b78f?w=1200",
      ],
      link: "#",
    },
  ] as Project[],
};
