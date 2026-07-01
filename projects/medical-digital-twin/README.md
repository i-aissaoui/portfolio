# Cardiovascular Medical Digital Twin

**Project Overview**

This project implements a physics‑informed digital twin for intensive‑care patients, forecasting arterial Mean Blood Pressure (MBP) in real‑time. It leverages the high‑frequency (100 Hz) VitalDB dataset, capturing ECG, PPG, and invasive arterial line signals.

**Key Innovations**
- **0D Windkessel PINN**: A physics‑informed neural network embeds the lumped‑parameter Windkessel ODE ( Q = C·dP/dt + P/R ) directly into the loss, enforcing realistic cardiovascular dynamics.
- **Medical_MambaTS**: A selective state‑space model with linear‑time inference ( O(N) ) suited for bedside edge devices, handling 100 Hz streams with sub‑millisecond latency.
- **SST_KODA_MultiScale**: Dual‑branch architecture routing slow trends to the MambaTS and rapid transients to a Transformer, achieving robust multi‑scale prediction.
- **PI_DeepONet**: Operator learning that solves the ODE for arbitrary patient parameters, enabling zero‑retraining generalisation across patients.
- **Missingness‑Aware Gate**: Graceful handling of sensor drop‑outs by masking missing channels without contaminating the model state.

**Data Pipeline**
- Raw CSVs converted to Apache Parquet with PyArrow for zero‑copy GPU loading.
- Strict patient‑level 70/15/15 split prevents data leakage.
- Micro‑glitch forward‑fill (≤30 ms) only; longer gaps are passed to the Missingness Gate.

**Performance**
- End‑to‑end prediction latency < 1.5 ms on an NVIDIA A100.
- RMSE ≈ 3.76 mmHg (edge) vs. 2.39 mmHg (cloud) on the VitalDB test set.

**Potential Impact**
Provides clinicians with a proactive early‑warning system for hemodynamic shock, enabling timely interventions before catastrophic blood‑pressure drops.





---

*For a full academic defense script, refer to the separate `Jury_Defense_Master_Script.md` file.*

*This document breaks down every single chapter of your thesis section-by-section. It translates complex math and architecture into simple, beginner-friendly analogies, exactly the way you should explain it to the jury during your defense.*

---

## Chapter 1: Introduction - A Beginner-Friendly Breakdown
This chapter sets the stage: the medical problem, why current AI struggles, and how you fix it.

### Section 1.1: Context and Motivation
*   **The Setting:** The Intensive Care Unit (ICU). It's a chaotic environment.
*   **The Medical Villain (Hemodynamic Shock):** Blood pressure drops drastically, oxygen stops reaching organs, and the patient starts dying.
*   **The Problem with Current Medicine:** Doctors are overwhelmed by "alarm fatigue". Existing warning systems (like SOFA) only look at slow data (like a blood pressure reading taken every 4 hours). They ignore the rich, fast, continuous data coming from the 100Hz bedside sensors.
*   **The Goal:** Move from reactive (waiting for the crash) to proactive (predicting it before it happens) using a Medical Digital Twin.

### Section 1.2: Problem Statement (The 3 Engineering Roadblocks)
*   **Bottleneck 1:** Transformers are too memory-heavy $\mathcal{O}(N^2)$ and crash Edge hospital computers.
*   **Bottleneck 2:** Normal AI models crash when a sensor unplugs (Missing Data).
*   **Bottleneck 3:** Standard Physics AI takes hours to retrain for a new patient.

Takeaway for Chapter 1 (What to say to the jury):
> *"Hemodynamic shock is deadly, but current monitoring is too reactive. We need a Digital Twin to predict it. However, standard Transformers take too much memory, standard RNNs fail when sensors disconnect, and standard Physics AI takes too long to retrain. My thesis proposes a dual-architecture: a linear-time Mamba model with a custom missingness-gate running at the bedside, paired with a DeepONet in the cloud to provide real-time, physically-accurate forecasting without retraining."*

---

## Chapter 2: Literature Mapping - A Beginner-Friendly Breakdown
This chapter proves you know what other scientists have done, and why your work is better.

### Section 2.1 & 2.2: The Gap in the Research
*   **The Old Way:** Previous researchers only used "static" EHR data (like a patient's age, weight, and a blood test from 5 hours ago).
*   **The Gap:** Almost no one uses 100Hz continuous waveforms (ECG, PPG) for long-horizon forecasting because the math is too computationally heavy. You are filling this gap.

Takeaway for Chapter 2:
> *"Current literature heavily relies on slow, static Electronic Health Records to predict clinical deterioration. The major gap in the research is the lack of real-time, 100Hz continuous waveform forecasting. My work fills this gap by proving that high-frequency telemetry can be mathematically modeled in real-time without crashing hospital hardware."*

---

## Chapter 3: Clinical Background - A Beginner-Friendly Breakdown
This proves to the doctors on the jury that you actually understand biology.

### Section 3.1 & 3.2: Defining Shock and the Sensors
*   **Shock:** It isn't just "low blood pressure." It is a catastrophic, systemic failure of oxygen delivery to the cells.
*   **The Sensors:** To catch it, you monitor the Arterial Line (invasive ABP pressure), the ECG (electrical heart signals), and the PPG (optical finger pulse).

Takeaway for Chapter 3:
> *"We do not treat shock simply as a drop in numbers; we treat it as a catastrophic failure of systemic oxygen delivery. To predict it accurately, our Digital Twin fuses invasive arterial lines with non-invasive electrical ECGs and optical PPGs, capturing a complete state-space representation of the patient's cardiovascular system."*

---

## Chapter 4: Methodology & Collaboration - A Beginner-Friendly Breakdown
How you designed the actual system.

### Section 4.1 & 4.2: The "14-to-1" Architecture
*   **The Inputs (14):** You extract 14 distinct multi-modal channels simultaneously from the bedside monitor.
*   **The Output (1):** All 14 sensors are mathematically fused to predict exactly 1 target: The future Arterial Blood Pressure (ABP).
*   **Why ABP?** Because a sudden drop in arterial pressure is the mechanical trigger of shock.

Takeaway for Chapter 4:
> *"Our methodology relies on a 14-to-1 architecture. We ingest 14 high-frequency, multi-modal sensor channels directly from the patient to forecast exactly one critical target: the future Arterial Blood Pressure curve. By accurately predicting an ABP collapse 30 minutes before it happens, we give doctors the critical window needed to save the patient's life."*

---

## Chapter 5: Data Engineering - A Beginner-Friendly Breakdown
How you handled the massive, dirty data coming from the hospital.

### Section 5.1 & 5.2: I/O Optimization (The Parquet Pipeline)
*   **The CSV Bottleneck:** Loading 8.6 million data points from a text file causes "GPU Starvation" (the GPU waits while the CPU reads commas).
*   **The Solution:** You re-wrote the pipeline using Apache Parquet and PyArrow for "zero-copy" loading, maximizing GPU training speed.

### Section 5.3: Handling Missing Data
*   **Micro-glitches vs MNAR:** You only use the `ffill` function for "micro-glitches" (10-30 milliseconds). If you used `ffill` for a 10-minute sensor dropout (MNAR), you would feed the AI a flatline, causing false alarms. For MNAR, you let your Missingness Gate handle it.

Takeaway for Chapter 5:
> *"At 100Hz, standard CSV files caused massive CPU bottlenecks, starving our A100 GPU. By rewriting our pipeline to use Apache Parquet, we enabled zero-copy tensor loading. Additionally, we strictly limited standard 'forward-fill' imputation to 30-millisecond micro-glitches to avoid lethal clinical hallucinations. Real sensor dropouts are passed directly to our neural architecture."*

---

## Chapter 6: Mathematical Foundations - A Beginner-Friendly Breakdown
The core physics problem.

### Section 6.1 & 6.2: Navier-Stokes vs Windkessel
*   **The Problem:** Blood is a fluid. To perfectly simulate it, you need 3D Navier-Stokes equations, but they take days to compute on a supercomputer.
*   **The Solution:** We compress the entire human arterial tree into a "0-Dimensional" balloon model (2-Element Windkessel). It only models time, not 3D space. This makes the math fast enough for the bedside.

Takeaway for Chapter 6:
> *"While full 3D Navier-Stokes simulations provide perfect fluid dynamics, they are computationally impossible for the bedside. Therefore, our mathematical foundation relies on a 0-Dimensional lumped-parameter Windkessel model. This allows us to accurately model the global hemodynamic state over time while strictly meeting sub-millisecond latency constraints."*

---

## Chapter 7: Architectural Masterclass - A Beginner-Friendly Breakdown
How your AI actually works.

### Section 7.3: MambaTS (The Edge Champion)
*   **The Missingness-Aware Gate:** During the forward pass, if a sensor breaks, your code intercepts Mamba's raw Delta parameter and forcefully overwrites it with negative infinity ($-\infty$).
*   When $-\infty$ goes through the `Softplus` activation, it outputs `0.0`. This makes the math equal the Identity Matrix ($\bar{A}=I$), freezing the memory so it doesn't get corrupted by zeros.
*   **The Training Magic:** During backpropagation, the gradient of $-\infty$ is `0`. The AI refuses to update its weights for the broken sensor, but the other 13 sensors keep training.

### Section 7.4: SST-KODA (The Cloud Champion)
*   **Multi-Scale Routing:** You split the AI into two. Mamba watches for slow biological changes, and the Transformer watches for rapid arrhythmias.
*   **KODA:** You use a Kalman Filter logic to constantly look at the live bedside data, calculate the error, and steer the AI back on track so it doesn't hallucinate during a 30-minute prediction.

Takeaway for Chapter 7:
> *"Standard Transformers crash edge GPUs, so we built MambaTS. Standard Mamba crashes when sensors drop out, so we engineered a Missingness-Aware Gate. When a sensor drops, we inject a massive negative scalar into Delta before Softplus, freezing the state matrix to the Identity Matrix. During backprop, this zeros out the local gradient, preventing the model from learning corrupted data, while allowing the remaining 13 channels to learn cross-channel compensation."*

---

## Chapter 8: Physics-Informed Neural Networks - A Beginner-Friendly Breakdown
How you forced the AI to obey fluid dynamics.

### Section 8.2 & 8.3: Operator Learning (DeepONet)
*   Standard Physics-Constrained Neural Networks (PCNNs) learn a single math equation for a single patient. If a new patient arrives, the PCNN fails. DeepONet learns the *universal rules* of physics, achieving "zero-retraining" generalization.

### Section 8.4: Autograd ODE Residual
*   **How it learns physics:** During training, you use PyTorch Autograd to extract the mathematical derivative of the pressure ($\frac{dP}{dt}$). You drop that derivative into the 0D Windkessel equation: $Q = C \frac{dP}{dt} + \frac{P}{R}$.
*   If the AI violates that physics equation, the loss function punishes it. Because this math only happens during training, the model is insanely fast at the bedside.

Takeaway for Chapter 8:
> *"Standard PCNNs are useless for deployment because they require complete retraining for every new patient. We used DeepONet to achieve 'zero-retraining' generalization. During training, we use PyTorch Autograd to extract the temporal derivative of the predicted pressure ($\frac{dP}{dt}$) and plug it directly into the 0D Windkessel equation within the loss function. The network is forced to obey fluid dynamics, yielding physically accurate forecasting in less than 0.2 milliseconds."*

---

## Chapter 9: Explainable AI (XAI) - A Beginner-Friendly Breakdown
Why doctors can trust this system.

### Section 9.2: The Black Box Problem
*   You cannot use standard XAI tools like SHAP or LIME. SHAP requires calculating every possible feature combination (takes days at 100Hz). LIME randomly scrambles data, which destroys the biological shape of the heartbeat.

### Section 9.3, 9.4 & 9.6: Native Explainability and Metrics
*   Your AI explains itself natively using Transformer Attention Maps and SmoothGrad heatmaps (generated in 12 milliseconds).
*   **The Pointing Game vs Deletion AUC:** In computer vision, the Pointing Game is used. This fails in medicine because a heart rate drop might cause blood pressure to crash 3 seconds later (physiological delay). Instead, you used **Deletion AUC**: you delete what the AI highlighted and watch the AI's confidence crash, proving it was looking at the true causal trigger.

Takeaway for Chapter 9:
> *"We could not use standard tools like SHAP because it is computationally impossible at 100Hz, and LIME destroys temporal biological morphology. Instead, we generate SmoothGrad heatmaps natively in 12 milliseconds. Furthermore, we discarded legacy metrics like the 'Pointing Game', which fail in medicine due to physiological propagation delays. Instead, we validated our XAI using Deletion AUC, proving our AI highlights true causal triggers."*

---

## Chapter 10: Evaluation and Results - A Beginner-Friendly Breakdown
Defending your final scores in Table 10.1.

### Section 10.3: The Results Table
*   **SST-KODA (Cloud):** Got the best score (2.39 RMSE). It beat the Informer Baseline (7.62 RMSE) because standard Transformers get confused by extreme hospital noise over 30 minutes. Your Koopman logic straightened out the noise.
*   **Medical_MambaTS (Edge):** Got a 3.76 RMSE. It beat standard Mamba (4.21 RMSE) because your Missingness-Aware Gate allowed your model to survive sensor dropouts.
*   **Latency:** Both models run in under 1.5 milliseconds.

Takeaway for Chapter 10:
> *"Our Cloud model achieved a state-of-the-art 2.39 RMSE because our Koopman subspace stabilizes the chaotic noise that normally breaks Transformers over 30-minute horizons. Our Edge model beat the baseline Mamba because our custom Missingness Gate prevented state corruption during sensor dropouts. Finally, both models execute in under 1.5 milliseconds, proving they are ready for real-time ICU deployment."*

---

The above content shows the entire, complete file contents of the requested file.


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
