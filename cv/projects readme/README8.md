# Career Connect 🚀

Career Connect is a powerful AI-driven platform designed to bridge the gap between job seekers and their ideal career paths. It uses advanced NLP and Gemini AI to analyze resumes, extract skills, and rank candidates against O*NET job profiles.

## 🌟 Features

- **CV Analysis:** Extracts contact information, skills, and experience from PDF resumes.
- **Skill Matching:** Uses SpaCy's `en_core_web_trf` and custom PhraseMatcher to identify industry-standard skills.
- **O*NET Integration:** Ranks candidates against 1000+ official job profiles.
- **AI Career Insights:** Leverages Google Gemini to provide deep analysis and recommendations.
- **Professional Reports:** Generates comprehensive PDF analysis reports for recruitment teams.

## 🏗️ Project Structure

```text
career-connect/
├── frontend/           # Next.js 15 Frontend
│   ├── src/components/ # UI Components
│   └── src/app/        # App Router Pages
├── backend/            # FastAPI Backend
│   ├── app/            # Source Code
│   │   ├── api/        # Routes
│   │   ├── core/       # Configuration
│   │   └── services/   # Business Logic
│   ├── data/           # O*NET & Skills Data
│   └── reports/        # Generated PDF Reports
└── README.md
```

## 🚀 Getting Started

### Backend Setup

1. **Navigate to backend:**
   ```bash
   cd backend
   ```
2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   python -m spacy download en_core_web_trf
   ```
3. **Configure Environment:**
   Create a `.env` file in the `backend` folder:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```
4. **Run the server:**
   ```bash
   python -m app.main
   ```

### Frontend Setup

1. **Navigate to frontend:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment:**
   Create a `.env.local` file in the `frontend` folder:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```
4. **Run the app:**
   ```bash
   npm run dev
   ```

## 🛠️ Technology Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, GSAP, Radix UI.
- **Backend:** FastAPI, Python 3.10+, SpaCy (NLP), PyPDF2, ReportLab.
- **AI:** Google Generative AI (Gemini 1.5).

## 📄 License

MIT
