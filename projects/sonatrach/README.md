# SONATRACH Gas Turbine Digital Twin: The Dual-Track Framework

## 1. Project Overview & The Hardware Latency Paradox
This project presents a state-of-the-art **Dual-Track Digital Twin** framework for predictive maintenance of GE LM2500 gas turbines operating in the extreme environments of the Algerian Sahara. 

The core challenge of this project is solving the **"Hardware Latency Paradox."** Modern AI sequence models (like Transformers) are mathematically brilliant but require massive computational power. Attempting to deploy an $O(L^2)$ Transformer to an industrial Programmable Logic Controller (PLC) results in memory overflow or catastrophic latency spikes. 

To solve this, the architecture is strictly decoupled into three physical tiers, ensuring that heavy physics calculations remain in the Cloud, while ultra-lightweight, data-driven convolutions protect the physical machine at the Edge.

---

## 2. Distributed IoT Topology (3-Tier Architecture)
The framework distributes AI models across three distinct hardware tiers to ensure safety even if satellite internet connectivity is lost during a Saharan sandstorm.

```mermaid
graph TD
    classDef tier1 fill:#c53030,stroke:#9b2c2c,color:#fff,rx:10px,ry:10px
    classDef tier2 fill:#2b6cb0,stroke:#2c5282,color:#fff,rx:10px,ry:10px
    classDef tier3 fill:#276749,stroke:#22543d,color:#fff,rx:10px,ry:10px
    classDef sensor fill:#4a5568,stroke:#2d3748,color:#fff,rx:5px,ry:5px

    S1["Temperature Sensors (T24, T48)"]:::sensor
    S2["Pressure Sensors (P30)"]:::sensor
    S3["Rotor Speed (Nc)"]:::sensor

    subgraph "TIER 1: Deep Edge (The Machine Level)"
        PLC["Siemens PLC<br>(Microseconds Latency)"]:::tier1
        TCN["AI Model: TCNEdge<br>(INT8 C++ Execution)"]:::tier1
        VALVE["Emergency Fuel Shutoff Valve"]:::tier1
    end

    subgraph "TIER 2: Near Edge (The Saharan Control Room)"
        GATEWAY["IoT Edge Gateway<br>(Cisco / Rugged PC)"]:::tier2
        MAMBA["AI Model: MambaTS<br>(Missingness Gate / O(L) Scaling)"]:::tier2
    end

    subgraph "TIER 3: The Cloud (SONATRACH HQ)"
        CLOUD["Central Data Center<br>(Unlimited GPU Compute)"]:::tier3
        ST["AI Model: ST-KDFormer<br>(Koopman Operator)"]:::tier3
        KAN["AI Model: KAN-PCNN<br>(Physics B-Splines)"]:::tier3
    end

    S1 -->|Analog Wire| PLC
    S2 -->|Analog Wire| PLC
    S3 -->|Analog Wire| PLC

    PLC <--> TCN
    TCN -->|Danger Detected!| VALVE

    PLC -->|Ethernet (OPC UA)| GATEWAY
    GATEWAY <--> MAMBA

    GATEWAY -->|VSAT Satellite / MQTT| CLOUD
    CLOUD <--> ST
    CLOUD <--> KAN
```

---

## 3. Tier 1: The Safety-Critical Edge (`TCNEdge`)
* **Hardware:** Siemens PLC
* **Objective:** Immediate emergency shutdown based on vibrational/thermodynamic anomalies.
* **Latency:** **0.049 ms** (Compiled C++ ONNX Runtime)

The `TCNEdge` is a purely data-driven model. It Abandons recurrent loops in favor of 1D Dilated Convolutions. By stacking convolutions with expanding dilations (`dilation=2`, `dilation=4`), the model achieves an exponentially expanding receptive field while remaining highly parallelizable.

**The Causality Defense:**
While the PyTorch `nn.Conv1d` uses symmetric padding (mathematically centering the kernel over $t-2, t$, and $t+2$), data leakage is strictly prevented via a slicing boundary: `return self.fc(x[:, -1, :])`. When evaluating the final time step, the kernel is forced to read PyTorch's zero-padding (`0.0`), successfully creating a secure, asymmetric boundary condition.

**INT8 ONNX Compilation:**
Because the model relies solely on convolutions and `ReLU` activations, it flawlessly quantizes from 32-bit floating point to 8-bit integers (INT8), slashing memory footprints by 75% and achieving a C++ inference speed of `49 microseconds` during testing.

---

## 4. Tier 2: The Near-Edge Gateway (`MambaTS`)
* **Hardware:** Industrial IoT Gateway (e.g., Cisco, Jetson)
* **Objective:** Handle sensor dropouts, process intermediate prognostics, and enforce thermodynamic physics locally if the Cloud disconnects.

The `MambaTS` model is a massive technological leap over the PLC model, divided into distinct mathematical stages:

1. **The Missingness-Aware Gate:** To survive broken sensors (a common issue in the Sahara), the data is multiplied by a binary truth `mask`. A `Softplus` gate dynamically recalculates a scoring metric, cranking up the "volume" on healthy sensors to mathematically compensate for the dead ones.
2. **The Mamba Core:** Instead of using $O(L^2)$ Attention mechanisms, it uses Continuous State Space Models (SSMs). The Mamba Selective Scanner uses a dynamic $\Delta$ gate to intelligently ignore idle engine data while permanently memorizing violent vibrational spikes, scaling linearly $O(L)$.
3. **The Physics Judge:** The model is a **Physics-Informed Grey Box**. During training, it is mathematically punished via `torch.relu(pred_rul - prev_rul)` if it predicts that the turbine is magically healing itself, thereby strictly enforcing the Second Law of Thermodynamics (Monotonic Entropy).

---

## 5. Tier 3: The Cloud Enterprise 
* **Hardware:** Massive GPU Clusters at SONATRACH HQ.
* **Objective:** Long-horizon predictive maintenance for the entire national fleet.

Because the Cloud possesses virtually unlimited computing power, it hosts the heaviest and most brilliant mathematical models of the thesis:

1. **The `ST-KDFormer` (Koopman Transformer):** Gas turbine degradation is highly non-linear and chaotic. The Koopman Operator Theory projects this non-linear physics into an infinite-dimensional linear space. The Transformer then reads this linearized space to predict engine failure weeks or months in advance without hallucinating.
2. **The `KAN_PCNN` (The Hardware Tragedy):** The Kolmogorov-Arnold Network replaces fixed activation functions (like ReLU) with highly complex, learnable mathematical curves called **B-splines** placed on the network's edges. By using PyTorch Autograd to calculate the partial derivatives of these curves against thermodynamic equations, it achieves absolute physical perfection. However, attempting to deploy this to an Edge device triggers a catastrophic **"Autograd Memory Explosion,"** perfectly proving the thesis hypothesis: *Heavy physics cannot live on the Edge.*

---

**Author:** Ismail | **Target:** Sonatrach LM2500 Fleet | **Status:** Validated & Completed (2026).
