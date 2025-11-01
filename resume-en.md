# AISSAOUI Ismail
**Artificial Intelligence & Data Science Engineer**

---

## CONTACT
- **Phone:** +213 660 70 77 96
- **Email:** ismail.aissaoui.pro@gmail.com
- **Location:** Chlef, Algeria
- **Website:** www.reallygreatsite.com
- **GitHub:** [github.com/i-aissaoui](https://github.com/i-aissaoui)
- **LinkedIn:** [linkedin.com/in/aissaoui-ismail-6a77a92a7](https://www.linkedin.com/in/aissaoui-ismail-6a77a92a7)

---

## PROFILE

Highly motivated final-year AI and Data Science student (Ingénieur d'État) with a unique combination of deep AI knowledge and practical, end-to-end software engineering skills. Possesses a strong command of Machine Learning, Deep Learning, and NLP, demonstrated by building foundational transformer models (like BERT, GPT, and RAG) from the ground up.

Skilled in applying this core AI expertise to build and deploy robust applications, utilizing advanced full-stack web (React, Next.js, FastAPI), desktop (PyQt), and database (SQL/NoSQL) technologies. Eager to secure a challenging role as an AI Engineer or Full-Stack ML Engineer where I can contribute both my model development and software architecture skills.

---

## EDUCATION

**High School of Computer Science (ESI-SBA)**  
*Sidi Bel Abbès, Algeria*  
**Master of Engineering in Computer Science (Ingénieur d'État)** | 2021 – 2026  
Specialization: Artificial Intelligence & Data Science

---

## SKILLS

### Programming Languages
Python, TypeScript, JavaScript, Java, SQL

### Web Development
- **Frontend:** Next.js, React, HTML5, TailwindCSS
- **Backend:** FastAPI

### Data Science & Machine Learning
- **Frameworks:** TensorFlow, PyTorch, Keras, Scikit-learn
- **Libraries:** Pandas, NumPy, SciPy, Matplotlib, Plotly, OpenCV
- **MLOps:** MLflow
- **Techniques:** Transformers, BERT, GANs, CNN, RNN, LSTM, XGBoost, Random Forest

### Big Data Technologies
Apache Spark, Hadoop, Kafka, Airflow

### Databases
- **SQL:** MySQL, MariaDB, SQLite, PostgreSQL
- **NoSQL:** MongoDB, Cassandra, Neo4j

### Developer Tools
Docker, Git, GitHub, Linux, Power BI, KNIME

### Desktop Development
PyQt

### Languages
- Arabic (Native)
- English (Fluent)
- French (Fluent)

---

## PROJECTS

### Career Connect | AI Job Recommendation Platform (2024-2025)

AI-powered platform that extracts skills from CVs, builds dense embeddings and delivers ranked candidate recommendations for recruiters while providing personalized job guidance for candidates.

**Key Features:**
- AI-powered recruitment platform connecting candidates with job opportunities through intelligent matching
- Serves both recruiters (candidate recommendations) and job seekers (personalized job suggestions)
- Natural Language Processing: Automated skill extraction and text understanding
- Semantic Matching: Dense embedding-based similarity for candidate-job matching
- Graph Neural Networks: Graph-based learning for job recommendations
- Ensemble Learning: Quad-ensemble approach for role classification

**Model Performance:**
- Mean Reciprocal Rank (MRR): 0.947
- High precision@k across all test sets
- Trained on combined datasets: O*NET, ESCO, Stack Overflow Developer Survey

**Technologies:** Python, FastAPI, React, TypeScript, PostgreSQL, Docker, PyTorch, PyTorch Geometric, sentence-transformers (SBERT), FAISS, SpaCy, scikit-learn, XGBoost, LightGBM, Graph Neural Networks

---

### Mini-GPT (Decoder-only) (2025)

Developed a character-level decoder-only transformer with causal self-attention to generate Shakespeare-style text.

**Key Features:**
- Built GPT-style transformer from scratch for text generation
- Character-level tokenization for learning fine-grained patterns
- Autoregressive Language Modeling: Predicting next character given context
- Causal Self-Attention: Decoder-only attention mechanism preventing future information leakage
- Multi-Head Attention: Parallel attention for capturing different representation aspects
- Successfully generated coherent Shakespeare-style text

**Technologies:** Python, PyTorch, Transformers, NLP, GPT Architecture, GELU, AdamW

---

### BERT (Encoder-only) (2025)

Implemented a BERT-style encoder for sentiment analysis, including pre-training and fine-tuning pipeline.

**Key Features:**
- Implemented BERT encoder architecture from scratch
- Complete pre-training and fine-tuning workflow
- Bidirectional Language Modeling: Learning context from both directions
- Masked Language Modeling (MLM): Predicting randomly masked tokens (15% masking)
- Next Sentence Prediction (NSP): Understanding sentence relationships
- Transfer Learning: Pre-training on large corpus, fine-tuning for specific tasks
- Strong performance on sentiment classification benchmarks

**Technologies:** Python, PyTorch, Transformers, BERT, NLP, MLM, GELU, AdamW

---

### Vision Transformer (ViT) (2025)

Built a ViT from scratch, including patch embedding and positional encoding, trained for image classification tasks.

**Key Features:**
- Implemented Vision Transformer architecture from scratch
- Applied transformers to computer vision tasks
- Patch Embedding: Treating image patches as sequence tokens
- Self-Attention for Vision: Global attention across all image patches
- Positional Encoding: Learnable 1D encodings for spatial relationships
- Data Augmentation: Random crops, flips, color jitter for robustness

**Technologies:** Python, PyTorch, Computer Vision, Transformers, ViT, GELU, AdamW

---

### Geo RAG | Map-based RAG Demo (2025)

Geo RAG is a full application that integrates persisted Chroma vector search, sentence-transformers embeddings, a Streamlit user interface, and a locally hosted LLM to produce concise, context-aware natural-language summaries for geographic places.

**Key Features:**
- Documents embedded with sentence-transformers and persisted in Chroma vector store
- Variety of retrieval fallbacks for compatibility across LangChain versions
- Per-place prompts synthesized from retrieved context and sent to local LLM
- Streamlit UI displays results on interactive Folium map
- Marker popups show concise LLM-generated summaries

**Technologies:** Chroma, sentence-transformers, Streamlit, Folium, Ollama, Python, Pandas, GeoPandas, PyTorch

---

### Recognizini | Real-Time Facial Recognition System (2025)

Semi-supervised face recognition web app (frontend: Next.js) that identifies faces from images/video and learns new identities online. Combines traditional CV with deep models and dimensionality reduction for efficiency.

**Key Features:**
- Semi-supervised pipeline to improve face recognition using labeled and unlabeled data
- PCA for dimensionality reduction to speed up matching while preserving discriminative features
- Label Propagation (graph-based) to spread labels from labeled seed set to unlabeled embeddings
- Online update flow that ingests user-confirmed labels to expand gallery in real time
- Real-time interaction (image/video upload, live labeling)
- Performance comparison between CNN+PCA (higher accuracy, 95% variance) and HOG+PCA (faster, 90% variance)

**Technologies:** Next.js, TypeScript, Tailwind CSS, FastAPI, Python, OpenCV, PCA, Label Propagation, PyTorch

---

### Safety Equipment Detection with YOLOv8 (2025)

Real-time safety monitoring system using YOLOv8 to detect safety helmets and reflective jackets in workplace environments, providing instant feedback on missing equipment for each person detected.

**Key Features:**
- Computer vision system for workplace safety monitoring
- Detects persons, safety helmets, and reflective jackets in real-time
- Object Detection: YOLOv8 for multi-class detection (person, helmet, jacket)
- Bounding Box Association: IoU-based matching to associate equipment with persons
- Real-Time Processing: Frame-by-frame video analysis with live visualization
- Transfer Learning: Fine-tuning pre-trained YOLOv8 on custom safety dataset

**Technologies:** Python, YOLOv8, Ultralytics, OpenCV, PyTorch, CUDA, NumPy, Computer Vision, Object Detection, Jupyter

---

### AI Traffic Camera System (2025)

Comprehensive computer vision system for intelligent traffic monitoring with vehicle detection, tracking, counting, speed estimation, and license plate recognition. Features real-time analysis with perspective transformation for accurate speed calculation.

**Key Features:**
- Multi-phase intelligent traffic monitoring system
- YOLOv8x: State-of-the-art vehicle detection (cars, motorcycles, buses, trucks)
- ByteTrack: Robust multi-object tracking with unique ID assignment
- Line Zone Counting: Virtual tripwire for traffic flow analysis
- Perspective Transformation: Pixel-to-world coordinate mapping using homography matrix
- Speed Calculation: Distance traveled over time with frame-based tracking
- EasyOCR Integration: Deep learning-based text extraction for license plates

**Technologies:** Python, YOLOv8, Ultralytics, OpenCV, ByteTrack, EasyOCR, PyTorch, CUDA, NumPy, Pandas, Computer Vision, Object Detection, Object Tracking, OCR

---

### Hadj Management System (2024)

Built a comprehensive web platform to manage logistics for Hajj pilgrims: group selection, travel, and medical scheduling. Centralized database and UI to handle complex relationships (flights, hotels, pilgrim info).

**Technologies:** Web, Database, Scheduling

---

### Hybrid POS & E-commerce System (2025)

Engineered a desktop POS synchronized with a live e-commerce website. Designed a hybrid architecture with local (SQLite) and cloud (PostgreSQL) databases for seamless offline/online operation.

**Key Features:**
- Desktop POS app integrates with multiple e-commerce websites (Shiakati Store, Celtic Wear, Jet7)
- Inventory sync, order processing, and customer management
- Background synchronization service that batches local transactions
- Offline-first operations with conflict resolution strategies and eventual consistency
- Secure authentication for merchant dashboards
- Monitoring suite for synchronization health

**Technologies:** SQLite, PostgreSQL, Desktop, Web

---

*Resume last updated: 2025*