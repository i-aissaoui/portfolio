# 🧠 Recognizini: Semi-Supervised Real-Time Facial Recognition

> **A smart facial recognition system that learns from new faces online using Label Propagation and PCA.**

## 🎯 Project Overview
Recognizini is a semi-supervised facial recognition platform designed for real-time identification and identity management. Unlike static systems, it can ingest new, unlabeled images and correctly classify them by spreading information from a small set of known faces.

## 🧠 AI & ML Features
• **Semi-Supervised Learning:** Implements (Label Propagation) to automatically label unknown faces based on their proximity to known clusters.
• **Dimensionality Reduction:** Uses (PCA - Principal Component Analysis) to compress high-dimensional facial embeddings, ensuring 95% variance is preserved while speeding up matching by 10x.
• **Comparison Engine:** Side-by-side performance analysis between (CNN+PCA) for accuracy vs. (HOG+PCA) for speed.
• **Online Discovery:** Real-time updates to the facial gallery as users confirm or correct identity tags.

## 🛠️ Tech Stack
• **Deep Learning:** PyTorch (FaceNet/ResNet models).
• **Computer Vision:** OpenCV.
• **Backend:** FastAPI (Python).
• **Frontend:** Next.js, Tailwind CSS.
