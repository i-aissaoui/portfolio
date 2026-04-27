# 🖼️ Vision Transformer (ViT): Image Recognition with Attention

> **Applying the power of Transformers to Computer Vision by treating images as sequences of patches.**

## 🎯 Project Overview
This project implements the seminal Vision Transformer (ViT) architecture. By dividing images into (16x16) patches and processing them through a transformer encoder, the model learns global dependencies better than traditional CNNs.

## 🧠 Key Innovations
• **Patch Embedding:** Linear projection of flattened image patches into a vector space.
• **[CLS] Token:** Prepended token used as an aggregate representation for classification.
• **Multi-Head Self-Attention:** Allows the model to focus on different parts of the image simultaneously.
• **Transfer Learning:** Fine-tuned on ImageNet categories.

## 🛠️ Tech Stack
• **Framework:** PyTorch.
• **Architecture:** Transformer Encoder, GELU, LayerNorm.
