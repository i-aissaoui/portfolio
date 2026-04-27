# 🔮 Aura: Advanced AI Trading Ecosystem

> **A state-of-the-art algorithmic trading platform leveraging dual-core AI architectures for Cryptocurrency and Gold (XAUUSD) market prediction.**

![Python](https://img.shields.io/badge/python-3.11-blue?style=for-the-badge&logo=python)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![XGBoost](https://img.shields.io/badge/XGBoost-111111?style=for-the-badge)

---

## 🌟 Overview

**Aura** is an institutional-grade trading solution that bridges the gap between traditional quantitative analysis and modern Deep Reinforcement Learning. It features two specialized AI architectures designed to handle the unique volatility profiles of both the Cryptocurrency and Commodities markets.

The system provides a full-stack experience: a high-performance **Python/FastAPI** backend for heavy-duty AI inference and training, and a sleek **Next.js** frontend for real-time visualization, backtesting, and monitoring.

---

## 🧠 Dual-AI Architectures

### 1. The Aura Core (Crypto Strategy)
Designed for high-volatility assets like BTC, this architecture uses a **Hybrid LSTM + DQN** approach.

*   **Tier 1: LSTM (Long Short-Term Memory)**: Acts as the "Analyst". It processes 30-candle sequences of 25+ technical indicators. By using a sliding-window approach, it captures temporal dependencies that simple feed-forward networks miss.
*   **Tier 2: DQN (Deep Q-Network)**: Acts as the "Trader". It uses **Magnitude-Aware Reinforcement Learning** where the reward function is tied directly to profit percentage `(P_next - P_now) / P_now`. This teaches the bot to prioritize "moonshots" and ignore low-volatility noise.

### 2. The Gold Bot (XAUUSD Strategy)
An institutional-grade ensemble system designed for the complex dynamics of the Gold market.

*   **Base Learner (XGBoost)**: A gradient boosting machine that handles non-linearities and captures complex feature interactions.
*   **Meta-Learner (Logistic Regression)**: A secondary layer that performs **Meta-Labeling**. It doesn't predict price direction; it predicts the *probability of the Base Learner being correct* given the current market context.
*   **Labeling (Triple Barrier Method)**: Unlike naive fixed-horizon labels, this system uses 3-class classification (Profit/Loss/Neutral) based on dynamic ATR-scaled barriers and a vertical time-limit barrier.
*   **Results**: Achieves an institutionally competitive **63.5% Precision** on profit signals by filtering out low-confidence trades.

---

## 🔬 Scientific Methodology

Aura isn't just a collection of scripts; it's built on rigorous quantitative finance principles:

-   **Triple Barrier Method**: Aligns model training with actual trade execution logic (TP/SL/Time-exit).
-   **Fractional Differentiation**: Preprocesses price data to achieve stationarity (required for ML) while preserving "long-term memory" of prices.
-   **Microstructure Features**: Includes **VPIN** (Volume-Synchronized Probability of Informed Trading) and **Amihud Illiquidity** to detect institutional activity.
-   **Regime-Aware Inference**: The system identifies 4 distinct market regimes (Low Vol/Trending, High Vol/Trending, etc.) and adjusts its risk profile dynamically.
-   **Purged Walk-Forward Validation**: Avoids temporal leakage by using a "time-serialized" split rather than random sampling, ensuring the model never "sees" the future during training.

---


## 🛠️ The Technology Stack

### **Backend (The Neural Core)**
- **Language**: Python 3.11+
- **Framework**: FastAPI (High-performance async API)
- **Deep Learning**: TensorFlow & Keras (LSTM & DQN)
- **Machine Learning**: XGBoost, Scikit-learn (Meta-Learner)
- **Optimization**: Optuna (Hyperparameter tuning)
- **Data Science**: Pandas, NumPy (Signal processing & feature engineering)
- **Real-time**: WebSockets for live data streaming and training progress.

### **Frontend (The Command Center)**
- **Framework**: Next.js 14/15 (React)
- **Language**: TypeScript (Type-safe development)
- **Styling**: Tailwind CSS (Modern, responsive UI)
- **Animations**: Framer Motion (Smooth transitions)
- **Charts**: Recharts & Specialized Candlestick components
- **Icons**: Lucide React

---

## ✨ Key Features

- **🚀 Live Inference**: Real-time predictions via persistent WebSocket connections.
- **🕒 Interactive Time Machine**: CANDLE-BY-CANDLE backtesting mode to simulate live trading environments.
- **📊 40+ Technical Indicators**: Built-in engine for RSI, MACD, Bollinger Bands, Ichimoku, VPIN (informed trading detection), and more.
- **🧵 Multi-threaded Training**: Start massive model retraining in the background without locking the UI.
- **📈 Regime Detection**: Automated classification of market states (Trending vs. Choppy) to adjust AI confidence.
- **🛡️ Magnitude Awareness**: Unlike many bots that only predict "up/down", Aura understands the *size* of the expected move.

---

## 📂 Project Structure

```text
.
├── backend/
│   ├── api/            # FastAPI Endpoints and WebSocket logic
│   ├── models/         # Saved model weights (h5, json, pkl)
│   ├── training/       # Specialized training scripts for LSTM, DQN, and XGBoost
│   ├── validation/     # Integrity and performance testing suites
│   └── data/           # Historical OHLCV datasets
├── frontend/
│   ├── app/            # Next.js App Router (Pages and Layouts)
│   ├── components/     # React components (Dashboard, Charts, Training)
│   └── lib/            # Utility functions and API clients
└── README.md           # You are here
```

---

## 🏁 Getting Started

### Prerequisites
- **Python 3.10+**
- **Node.js 18+**
- **TensorFlow-compatible hardware** (GPU recommended but not required)

### 1. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn api.main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to access the dashboard.

---

## ⚠️ Disclaimer

*This software is for educational and research purposes only. Trading financial assets involves significant risk. The developers are not responsible for any financial losses incurred through the use of this software. Always test strategies thoroughly in simulated environments before committing capital.*

---
*Built for the Future of Quant Finance.*
