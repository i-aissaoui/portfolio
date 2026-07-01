# Research Statement: Foundation Models for Oncology (fomo.fo)

## Initial Research Ideas and Starting Point
The transition from task-specific oncology models to general-purpose Foundation Models requires overcoming the inherent "messiness" of clinical data: specifically, missing modalities (e.g., a patient has an MRI but no histopathology) and irregular temporal sampling (e.g., uneven intervals between patient check-ups). 

To start this research, I propose focusing initially on the **Temporal and Multimodal Alignment Problem**. Rather than immediately attempting to pre-train a massive 3D volumetric model from scratch, I would propose a modular, state-space approach:

1. **Missingness-Aware Tokenization:** Building on the "Missingness-Aware Gate" I developed for my cardiovascular digital twin, I propose creating a tokenizer that explicitly embeds the "absence" of a modality as a learnable token rather than a zero-padded vector. This allows the foundation model to reason about *why* a test was not ordered, which often contains clinical signal.
2. **Continuous-Time State Space Modeling (SSM):** To handle irregular longitudinal patient data (e.g., tracking disease progression over months or years), standard Transformers struggle due to fixed positional encodings. I propose adapting linear-time SSMs (like Mamba) to continuous-time differential equations. This allows the model to interpolate patient state spaces at any arbitrary time $t$, effectively modeling the continuous progression of a tumor even when discrete scans are sparse.

This initial approach leverages my existing expertise in medical time-series and state-space models, acting as a stepping stone toward full 3D multimodal integration.
