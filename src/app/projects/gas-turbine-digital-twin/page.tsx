"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GasTurbineProject() {
  const router = useRouter();

  const images = [
    "/ai-projects/gas_turbine_v2.png", // Keep the original cover
    "/gas_turbine/1.png",
    "/gas_turbine/2.png",
    "/gas_turbine/3.png",
    "/gas_turbine/4.png"
  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="font-semibold uppercase tracking-widest text-xs">Back to Portfolio</span>
          </button>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#00d9ff] border border-[#00d9ff]/30 px-3 py-1 rounded-full bg-[#00d9ff]/10">
            AI Engineering
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font tracking-tight leading-tight">
            A Dual-Track Cloud–Edge Digital Twin <br/>
            <span className="text-white/40">for Gas Turbine Predictive Maintenance</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/50">
            <span className="uppercase tracking-widest text-sm font-semibold">Author: Ismail Aissaoui</span>
            <span className="w-2 h-2 rounded-full bg-[#00d9ff]"></span>
            <span className="uppercase tracking-widest text-sm font-semibold">Sonatrach</span>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-[0_0_50px_rgba(0,217,255,0.1)]">
            <Image 
              src={images[activeImage]} 
              alt="Project Visual" 
              fill 
              className="object-contain bg-[#111]"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === idx ? 'border-[#00d9ff] scale-105' : 'border-white/10 opacity-50 hover:opacity-100'}`}
              >
                <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Project Context & Motivation
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                In the oil and gas industry, aeroderivative gas turbines operate under extreme thermodynamic stress, where undetected degradation in components like the High-Pressure Turbine (HPT) can lead to catastrophic failure. Traditional maintenance is strictly schedule-based, leading to unnecessary downtime. Furthermore, modeling high-frequency thermodynamic deterioration (e.g., NASA N-CMAPSS data) using standard deep learning (like LSTMs) results in severe computational bottlenecks and a failure to capture complex, non-linear degradation physics across different turbine fleets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Core Objective
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                This thesis proposes the construction of a proactive Gas Turbine Digital Twin to predict the Remaining Useful Life (RUL) and detect early anomalies. By hybridizing lightning-fast state-space sequence models with heavy physics-aware cloud architectures, the system achieves real-time, zero-latency inference on industrial edge devices while maintaining deep generalization capabilities across heterogeneous fleets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Architectural Contributions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light mb-6">
                The project successfully engineers three distinct, novel algorithmic architectures to overcome both computational and physical limitations:
              </p>
              <ul className="space-y-6">
                <li className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Mamba-SSM (Edge Tier)</h3>
                  <p className="text-white/60 font-light">A hardware-aware state space model that achieves linear-time O(L) scaling. Engineered specifically for low-compute Programmable Logic Controllers (PLCs), it utilizes a SiLU Gating Branch to filter sensor noise, acting as a "smart valve" to provide real-time degradation indices and RUL tracking directly on the asset.</p>
                </li>
                <li className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">ST-KDFormer (Cloud Tier)</h3>
                  <p className="text-white/60 font-light">A Spatio-Temporal Koopman-Distributed Transformer. It utilizes Koopman Operator theory to lift the non-stationary, non-linear thermodynamic deterioration into an infinite-dimensional linear space. Crucially, it monitors the Koopman Spectral Radius (ρ), serving as a mathematical certificate of stability to guarantee safe turbine operation.</p>
                </li>
                <li className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">MAML Fast Adaptation (Fleet Generalization)</h3>
                  <p className="text-white/60 font-light">Standard retraining to a new fleet takes hours of GPU compute. Model-Agnostic Meta-Learning (MAML) solves this by optimizing the initialization weights. Using just a small support set of sensor readings, it adapts the cloud model to an entirely new failure mode (e.g., from Fan degradation to HPT erosion) in under 1.2 seconds via a few inner gradient steps.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Data Integrity & Benchmarking
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                The models were trained on the massive, high-fidelity NASA N-CMAPSS dataset. To prevent the "Initial Degradation Paradox" (where short-lived engines start at a low health percentage), the model was trained to predict a normalized Health Degradation Index. In production, this index is mathematically scaled by the manufacturer's nominal lifespan. Against robust baselines, the hybrid approach drastically reduced Root Mean Square Error (RMSE), achieving state-of-the-art results for RUL prediction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Explainable AI (XAI) & Deployment
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light mb-4">
                Because plant operators cannot shut down a multi-million dollar turbine based on a black-box alert, the system utilizes a multi-modal XAI strategy. We employed <strong>SHAP values</strong> and <strong>Integrated Gradients</strong> to isolate causal physical parameters, distinguishing between compressor fouling and turbine erosion.
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                The entire framework is deployed as a real-time, interactive Next.js / React Three Fiber 3D Dashboard, backed by a FastAPI engine featuring a specialized Retrieval-Augmented Generation (RAG) AI Copilot to interact directly with engineering manuals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Conclusion
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                This research proves that a Dual-Track Edge-Cloud architecture embedded with Koopman dynamics and Meta-Learning is the definitive solution for predictive maintenance, achieving both industrial-scale computational latency and indispensable causal transparency for field engineers.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {["Mamba-SSM", "TCNEdge", "ST-KDFormer", "Koopman Operator", "MAML", "React Three Fiber", "Next.js", "FastAPI", "ONNX Runtime"].map(t => (
                  <span key={t} className="px-3 py-1.5 bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20 rounded-md text-xs font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl bg-[#00d9ff]/5 border border-[#00d9ff]/20">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-4">Project Impact</h3>
              <ul className="space-y-4 text-white/70 font-light">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d9ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  0.049ms edge inference latency
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d9ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  O(L) linear time complexity scaling
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d9ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  1.2 seconds fleet adaptation
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
