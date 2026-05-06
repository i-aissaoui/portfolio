# 🏭 Industrial Gas Turbine Digital Twin: Generative Surrogate Architecture
**Final Master's Thesis Project (2026)**

This repository contains the full end-to-end implementation for a scientifically rigorous, **Hardware-Software Co-Designed Digital Twin** for the Sonatrach GE LM2500 Gas Turbine. 

This project bridges the gap between raw thermodynamic sensor data, state-of-the-art Deep Learning (Mamba-SSM, Koopman Theory, xLSTM), and an offline, air-gapped 3D Desktop Application for industrial operators.

---

## 🔬 Core Architectural Breakthroughs

### 1. Hardware-Software Co-Design (The Latency Paradox)
We proved mathematically and empirically that Cloud GPUs suffer from a PCIe/Kernel bottleneck for single-turbine processing (~0.01 ms overhead). Therefore, inference is strictly split:
*   **Edge Computing (PLC):** TCN (Dilated Convolutions) and **C++ JIT Compiled xLSTM**. By bypassing the Python interpreter via `@torch.jit.script`, we achieved an inference speed of `0.04ms`, allowing for instant anomaly detection directly on the turbine's local CPU.
*   **Cloud Computing (Server):** **KDFormer** (Koopman Matrix Theory) is used exclusively for massive fleet-scale batch monitoring where GPU matrix multiplication scales efficiently.

### 2. Generative Mamba-SSM Surrogate (The "What-If" Simulator)
Unlike traditional predictive maintenance that outputs a passive RUL (Remaining Useful Life) number, we implemented a Control-Theory based State-Space Model:
$$ h_{t} = A \cdot h_{t-1} + B \cdot [Sensors_t, Valves_t] $$
This acts as a true generative simulator. An operator can artificially input a catastrophic command (e.g., "Surge Fuel Valve to 500%") and the Mamba-SSM will autoregressively generate the physical explosion curve of the exhaust temperatures in real-time.

### 3. Physics-Informed Neural Networks (PINN)
Data-driven models hallucinate. Our custom PyTorch PINN loss functions penalize positive time derivatives: $\frac{d(RUL)}{dt} \le 0$. If the network predicts the turbine is "healing itself", the loss spikes, forcing the AI to strictly obey thermodynamic monotonicity.

### 4. Explainable AI (Gradient Saliency)
The "Black Box" is broken using $\left| \frac{\partial RUL}{\partial X} \right|$ heatmaps. When a failure is imminent, the AI takes the derivative of its output relative to the 14 input sensors to visually isolate exactly which mechanical component is degrading.

---

## 📂 Complete Repository Structure

```text
SONATRACH1/
│
├── 📂 notebooks/                        # 🧠 The Core AI Brain
│   ├── 3_SONATRACH_XAI_SIMULATOR.ipynb  # Runs KDFormer + Generates XAI Sensor Heatmaps
│   ├── 4_GENERATIVE_MAMBA_SIMULATOR.ipynb # Runs the Mamba "What-If" Counterfactual Engine
│   └── 5_xLSTM_CPP_JIT_OPTIMIZATION.ipynb # Benchmarks Python vs C++ JIT on Edge CPUs
│
├── 📂 Master_Thesis_XAI_Prognostics/    # 🎓 The Official LaTeX Thesis Source Code
│   ├── Chapters/                        # EDA, Math Proofs, & Code snippets
│   └── main.pdf                         # The compiled 70+ page Master's Thesis
│
├── 📂 desktop_app/                      # 🖥️ The Air-Gapped Industrial UI
│   └── (Electron + React/Three.js)      # Subscribes to AI telemetry and renders the 3D turbine
│
├── 📂 3d-models/                        # 🧊 The WebGL/Three.js Assets
│   └── turbine_mesh.glb                 # high-fidelity 3D geometry of the GE LM2500
│
├── 📄 Master_Fleet_Trainer.py           # The master script that trains ALL architectures
└── 📄 PROJECT_README.md                 # Project documentation
```

---

**Author:** Ismail | **Target:** Sonatrach LM2500 Fleet | **Status:** Validated & Completed (2026).
