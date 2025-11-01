# Recognizini

Recognizini is a semi-supervised face recognition project showcasing a real-time web application that combines classical computer vision and deep learning to recognize and learn new faces on the fly.

## Overview

The application demonstrates a semi-supervised pipeline that leverages labeled and unlabeled data to improve recognition accuracy. Main features:

- Semi-supervised learning with Label Propagation to expand labels from a small labeled seed set to unlabeled embeddings.
- Dimensionality reduction using PCA to speed up nearest-neighbor matching while preserving discriminative features.
- Real-time interaction: upload images or video, label identities, and update the gallery online.
- Performance comparison between CNN+PCA (higher accuracy, 95% variance) and HOG+PCA (faster, 90% variance).

## Technologies

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: FastAPI (Python)
- ML: Python, OpenCV, scikit-learn (PCA, LabelPropagation), PyTorch
- Tooling: pip, virtualenv

## Key contributions

- UI/UX design and frontend implementation using Next.js and Tailwind.
- Integration with the Python backend and model inference endpoints.

## Screenshots

Place screenshots inside `public/recognizini/` as `1.png`, `2.png`, `3.png`. The portfolio expects these filenames to display the project images.

## Running locally (notes)

This repo only contains the portfolio front-end side. To run the full Recognizini system you would typically:

1. Start the FastAPI backend that hosts inference endpoints and optional streaming routes.
2. Start the Next.js frontend (this portfolio) if you want integrated UI views.
3. Ensure the model weights and datasets are prepared for the backend (not included here).

## License

MIT
