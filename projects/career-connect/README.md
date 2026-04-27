# 🚀 Career Connect: GNN-Powered Recruitment Intelligence

> **An advanced recruitment ecosystem using Graph Neural Networks and Semantic Search to connect talent with opportunities.**

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

---

## 🎯 Project Overview

**Career Connect** is an intelligent recruitment platform that moves beyond simple keyword matching. By leveraging **Graph Neural Networks (GNNs)** and **Deep Learning**, the system understands the underlying relationships between skills, professional experiences, and job requirements. 

It provides HR teams with a ranked list of candidates based on semantic similarity and structural data, ensuring the best fit for both technical skills and career trajectory.

---

## 🧠 AI & Machine Learning Core

### 1. Graph Neural Networks (GNN)
Unlike traditional flat databases, Career Connect models the job market as a graph.
*   **Nodes:** Candidates, Skills, Companies, Job Titles.
*   **Edges:** "Has Skill", "Worked At", "Required For".
*   **Technology:** Built with **PyTorch Geometric**. This allows the model to "infer" skills—if a candidate knows React and Redux, the GNN understands they are likely proficient in Frontend Architecture, even if that phrase isn't on their CV.

### 2. Semantic Embedding (SBERT)
We use **SBERT (Sentence-BERT)** to transform complex natural language from resumes into high-dimensional vectors. This ensures that a "Software Engineer" profile is semantically linked to "Java Developer" even if the words are different.

### 3. High-Speed Vector Search (FAISS)
To provide real-time ranking, the system utilizes **FAISS (Facebook AI Similarity Search)**. It allows the platform to search through thousands of candidate vectors and return the top matches in under 100ms.

### 4. Ensemble Ranking
Final candidate scoring is handled by a gradient boosting ensemble (**XGBoost** and **LightGBM**), which incorporates non-semantic features like years of experience, location, and education level.

---

## ✨ Key Features

- **📊 Intelligent Job Matching:** Automated ranking of CVs against job descriptions using GNN embeddings.
- **🔍 Semantic Search:** Search for candidates using natural language (e.g., "Experienced lead developers in Paris").
- **📈 Skill Gap Analysis:** Identifies missing skills for a candidate to qualify for a specific role.
- **📄 Automated CV Parsing:** Deep NLP pipeline to extract structured data from messy PDF/Word files.
- **🛡️ Recruitment Bias Mitigation:** Focuses on skills and graph-based relationships rather than simple demographic identifiers.

---

## 💻 Technical Stack

- **Backend:** FastAPI (Python), PostgreSQL, Docker.
- **AI/ML:** PyTorch Geometric, SBERT, FAISS, Scikit-learn.
- **NLP:** SpaCy (PhraseMatcher), Transformers.
- **Data:** O*NET Database integration for standardized job profiles.
- **Infrastructure:** Background workers for asynchronous processing of large document batches.

---

## 📂 Architecture

```text
career-connect/
├── backend/
│   ├── app/
│   │   ├── api/          # FastAPI Routes (Match, Parse, Search)
│   │   ├── models/       # PyTorch GNN & SBERT architectures
│   │   ├── services/     # FAISS index management & XGBoost logic
│   │   └── data/         # Graph nodes and edges processing
│   └── docker-compose.yml
└── notebooks/            # GNN training and evaluation scripts
```

---

## 🚀 Getting Started

1. **Clone and Install:**
   ```bash
   git clone https://github.com/i-aissaoui/career-connect
   pip install -r requirements.txt
   ```
2. **Download Models:**
   Ensure your trained `.pt` and FAISS index files are in `backend/app/models/`.
3. **Run Server:**
   ```bash
   uvicorn app.main:app --reload
   ```

---

*Built with passion for AI-driven recruitment and Graph Theory.*
