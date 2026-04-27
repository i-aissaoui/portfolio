# RAG - Geo RAG (Retrieval-Augmented Generation) Streamlit App

## Overview

This project is a compact Retrieval-Augmented Generation (RAG) demo built with Streamlit. It combines:

- A persisted vector database (Chroma) containing geo-tagged documents (places, cities).
- Sentence-transformers embeddings to vectorize text for similarity search.
- A local LLM (Ollama / phi-3) to generate natural-language answers from retrieved context.
- A Folium map embedded in the Streamlit app which shows results as markers; clicking a marker shows an LLM-generated answer about the place.

The app demonstrates a reproducible RAG pipeline: user query -> retrieval -> LLM prompt -> generated answer. It was implemented to be resilient to changing LangChain APIs by using defensive retrieval and LLM-invocation fallbacks.

## Highlights / Features

- Enter-to-submit query form (press Enter to search).
- Robust retrieval fallbacks: supports a `retriever` object or direct `Chroma` similarity search methods.
- Per-place LLM answers: each map marker popup contains an LLM-generated summary/answer specific to that place (not just raw DB text).
- Map animation: when a single place is returned the map animates (flyTo) from world view to the location; when multiple places are returned the map fits bounds.
- Light map theme (CartoDB positron) with readable white popup cards and black text (portfolio-friendly visuals).
- Defensive LLM calls: supports multiple calling shapes (.predict, .generate, callable) to handle different local or library wrappers.
- Simple, self-contained codebase suitable for showcasing in a portfolio.

## Repository Structure

- `app.py` - Main Streamlit application. Implements the RAG flow, UI layout, retrieval fallbacks, and Folium map integration.
- `geo_knowledge.csv` - Source CSV with geographic knowledge (lightweight dataset used for vectorization or seeding the DB).
- `data/` - Supporting data files, e.g., `worldcities.csv`.
- `geo_db/` - Persisted Chroma database and binary index files (this folder is created after running the vectorization pipeline).
- `rag_vector_creation.ipynb` - Notebook used to create vectors and populate the `geo_db` Chroma persistence directory.
- `data_retrieving.ipynb` - Notebook for exploring and preparing the original data.
- `requirements.txt` - Python dependencies used to run the project.

## Setup & Requirements

Prerequisites

- Python 3.11 (the environment used while working on this project).
- A local Ollama server (if you want to use the same local LLM model) or another LLM-compatible endpoint.
- Optional: GPU for faster embedding/model operations (the code forces embeddings to CPU by default to avoid device inconsistencies).

Install dependencies

It's recommended to use a virtual environment. From the project root:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Notes:

- The project uses `sentence-transformers` embeddings via a LangChain wrapper and `Chroma` as the vector store. If you only want to run the Streamlit UI without vector creation, ensure `geo_db` exists in the project root.
- If you don't run Ollama locally, you can adapt the LLM wrapper in `app.py` to use OpenAI, local llama bindings, or another provider; the `call_llm` helper includes fallbacks for common call shapes.

## Running the App

From the project root with the virtualenv activated:

```bash
streamlit run app.py
```

Open the printed Local URL in your browser (usually http://localhost:8501).

If the `geo_db` persistence directory is missing, run the `rag_vector_creation.ipynb` notebook (or create the Chroma DB with your own vectors) before starting the app.

## Design and Implementation Notes

- The app avoids high-level LangChain chains that changed across versions. Instead it performs retrieval and LLM calls directly to keep the demo stable.
- Retrieval fallbacks: The code tries `retriever.get_relevant_documents(query)` first, then other possible retriever methods, and finally falls back to `db.similarity_search(...)` or `db.similarity_search_with_score(...)` for compatibility.
- LLM invocation fallbacks: The `call_llm` helper attempts to call the LLM as a callable, then `.predict`, then `.generate`, and normalizes the output to text. This eases portability across local and hosted LLM wrappers.
- Popup generation: For each returned place the app constructs a per-place prompt and calls the LLM to create concise answers shown in the map popups.
- Embeddings: If you encounter a Torch device-related error with sentence-transformers, the current code sets `model_kwargs={"device":"cpu"}` to avoid meta-tensor device issues.

## Limitations & Future Work

- The current version makes one LLM call per returned place — this can be slow or costly. Consider batching prompts or caching per-place answers for production or portfolio demos.
- The app currently uses the `Ollama` wrapper from a community/langchain package; that wrapper is deprecated in some LangChain versions. Upgrading to the recommended `langchain-ollama` package or adapting to your LLM provider is suggested.
- Add caching (file-based or in-memory) for per-place generated summaries to improve responsiveness.
- Add tests and small CI to validate vector creation and retrieval behavior.

## How to include in your portfolio

Below is a short blurb you can paste into your portfolio describing this project. It emphasizes the key technical decisions and the demo value for showcase:

"Geo RAG — A lightweight Streamlit demo that combines Chroma vector search, sentence-transformers embeddings, and a local LLM to build a Retrieval-Augmented Generation (RAG) workflow. The app accepts natural-language queries, retrieves geo-tagged documents, and shows LLM-generated summaries per location on an interactive Folium map. Implemented defensive code to handle rapidly changing LangChain APIs and local LLM wrappers, and styled for readability and portfolio presentation."

If you'd like a shorter one-liner for a project list:

"Geo RAG — Streamlit demo using Chroma + sentence-transformers + local LLM to build a map-based RAG demo with per-place generated summaries."

## Attribution / License

This repository currently does not include an explicit license file. If you want to open-source the project, add a `LICENSE` file (MIT is a common permissive choice).

## Contact / Questions

If you'd like me to:

- tailor the README tone (concise or detailed) for a resume or portfolio website,
- add a demo GIF or screenshots and update the README,
- add a polished `requirements.txt` or `environment.yml` to ease reproduction,

tell me which you'd like and I'll make those changes.
