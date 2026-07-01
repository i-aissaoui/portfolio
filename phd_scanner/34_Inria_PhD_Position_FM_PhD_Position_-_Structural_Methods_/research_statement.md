# Research Statement: Structural Methods for Mixed Model/Data Digital Twin Engineering

## Context and Research Trajectory
The challenge of aligning first-principles physics models with empirical, high-frequency data is the defining bottleneck in modern Digital Twin engineering. In my previous research on Gas Turbine and Cardiovascular Digital Twins, I initially relied on optimization-based data assimilation and deep learning architectures (e.g., PI-DeepONet, Spatial-Temporal Transformers) to reconcile telemetry with theoretical bounds. While these methods excel at interpolating well-behaved dynamics, they inherently struggle to scale across massive, sparse differential-algebraic equation (DAE) systems without encountering unstable parameter identification or unexplainable local minima. 

The approach proposed by the EDT Catalyst program—shifting from pure optimization to structural analysis of DAEs—presents a mathematically rigorous and scalable alternative that I am highly motivated to pursue.

## Proposed Research Direction
My research within the HYCOMES team will focus on leveraging graph-based structural analysis to isolate model/data mismatches without requiring full state-space exploration. 

1. **Parity Space Construction via MSOs:** I intend to investigate algorithms for extracting Minimal Structurally Overdetermined (MSO) subsystems from large-scale Modelica models. By isolating these mathematically redundant subsystems, we can create parity spaces that act as localized diagnostic tools. If experimental data violates an MSO parity constraint, the structural mismatch is localized immediately, bypassing the need for computationally prohibitive global optimization.
2. **Handling Data Sparsity and Noise:** Building on my prior work with "Missingness-Aware" neural architectures, I will explore how structural parity equations handle noisy, irregularly sampled real-world data. Specifically, I will investigate statistical residual analysis to differentiate between true structural deficiencies in the DAEs and mere sensor noise.
3. **Scalable Graph Algorithmic Implementation:** Given that digital twins for industrial applications involve millions of equations, I aim to utilize polynomial-time bipartite graph matching algorithms to identify MSOs efficiently. 

By unifying my practical background in data-driven engineering with the rigorous structural analysis of DAEs, I aim to develop scalable tools that definitively close the gap between theoretical models and real-world system behaviors.
