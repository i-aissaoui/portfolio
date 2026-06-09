# 🫀 Cardiovascular Medical Digital Twin: Precision Hemodynamic Prediction

**Research Title:** *Physics-Informed Digital Twins for Precision Cardiology: Modeling 0D Lumped-Parameter Windkessel Dynamics using Multi-Scale State Space Models*

---

## 📖 Project Overview
This project targets the prediction of patient arterial blood pressure fluctuations (**Mean Blood Pressure - MBP**) in the ICU to prevent sudden iatrogenic hypotensive crises. The model processes high-frequency waveforms (100Hz) from the **VitalDB** dataset and predicts hemodynamic trajectories over a rolling sequence window.

---

## 🧠 Core Architecture

### 1. 0D Windkessel PINN (Physics-Informed Neural Network)
The core of the project integrates a **0D Lumped-Parameter Windkessel Model** of the cardiovascular system:
$$\text{Cardiac Output } (Q) = C \frac{dP}{dt} + \frac{P}{R}$$
*   **P:** Predicted Mean Blood Pressure ($MBP$).
*   **C:** Arterial compliance.
*   **R:** Systemic vascular resistance.
*   **Physics-Informed Loss:** Leverages PyTorch `autograd` to compute the time derivative of pressure ($dP/dt$) relative to the query time $t$, penalizing predictions that violate cardiovascular fluid dynamics.

### 2. Evaluated Architectures
*   **Medical_MambaTS (Edge):** Encapsulates Selective State Spaces (SSMs) to capture infinite-horizon timeseries contexts with $O(N)$ inference complexity, tailored for real-time ICU bedside monitors.
*   **SST_KODA_MultiScale (Cloud):** A dual-branch hybrid framework routing slow trend dynamics through Mamba and rapid transient spikes through Transformer branches using attention gates.
*   **PI_DeepONet (Physics):** A Deep Operator Network consisting of a Branch Net (anatomical properties) and Trunk Net (spatiotemporal coordinates) solving the Windkessel ODE.

---

## ⚙️ Shared Technological Foundations (with Gas Turbine Twin)
1.  **Stochastic Physics Integration:** Both projects employ physics-informed regularization losses to restrict parameter searches, ensuring outputs are physically and physiologically compliant.
2.  **Streaming Ingestion:** Engineered to process high-frequency waveforms and sensor telemetry in real-time.
3.  **Low-Latency Optimization:** Tailored for ultra-low latency inference to support real-time clinical bedsides and industrial edge gateways.

---

**Author:** Ismail | **Target:** ICU Hemodynamic Monitoring (VitalDB) | **Status:** Validated & Completed (2026).
