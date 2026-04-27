# 🤖 Mini-GPT: Character-Level Transformer from Scratch

> **A pure PyTorch implementation of a Decoder-only Transformer trained to write like Shakespeare.**

## 🎯 Project Overview
This project is a deep dive into the architecture that powers modern LLMs. Built without high-level library shortcuts, it implements a GPT-style transformer from the ground up to understand causal attention and autoregressive generation.

## 🧠 Technical Architecture
• **Causal Self-Attention:** Prevents the model from "looking into the future" during character prediction.
• **Multi-Head Attention:** Enables parallel processing of different context features.
• **Decoder Blocks:** Stacked transformer layers with (LayerNorm), (Residual Connections), and (GELU) activations.
• **Positional Encoding:** Learns the order of characters in a sequence.

## 🧪 Training & Generation
• **Dataset:** Tiny Shakespeare.
• **Optimizer:** (AdamW) with weight decay.
• **Techniques:** Temperature scaling and Top-K sampling for creative text generation.
