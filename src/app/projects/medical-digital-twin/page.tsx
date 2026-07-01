"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MedicalTwinProject() {
  const router = useRouter();

  const images = [
    "/ai-projects/medical_v2.png", // Keep original cover
    "/medical_twin/1.png",
    "/medical_twin/2.png",
    "/medical_twin/3.png",
    "/medical_twin/4.png"
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
            Hemodynamic Digital Twins <br/>
            <span className="text-white/40">A Physics-Informed AI Approach for Critical Care</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/50">
            <span className="uppercase tracking-widest text-sm font-semibold">Author: Ismail Aissaoui</span>
            <span className="w-2 h-2 rounded-full bg-[#00d9ff]"></span>
            <span className="uppercase tracking-widest text-sm font-semibold">Medical AI</span>
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
                In intensive care units (ICUs), hypotensive shock can cause irreversible organ failure within minutes. Despite monitoring patients at 100Hz (100 samples per second), standard medical alerts are strictly reactive, triggering only after catastrophic deterioration has occurred. Furthermore, applying traditional deep learning (like Transformers) to this high-frequency data results in a quadratic memory bottleneck <span className="font-mono text-[#00d9ff]">O(L²)</span>, instantly crashing standard hospital hardware (the "Needle in a Haystack" limitation).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Core Objective
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                This thesis proposes the construction of a proactive Medical Digital Twin, predicting Mean Arterial Blood Pressure (MBP) up to 30 minutes into the future. By hybridizing lightning-fast sequence models with pure fluid dynamics, the system achieves zero-latency bedside inference while maintaining clinical interpretability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Architectural Contributions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light mb-6">
                The project successfully engineers three distinct, novel neural architectures to overcome both computational and biological limitations:
              </p>
              <ul className="space-y-6">
                <li className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Medical MambaTS (Edge Tier)</h3>
                  <p className="text-white/60 font-light">A hardware-aware state space model (SSM) that achieves linear-time O(L) scaling. To combat messy ICU data, we engineered a <strong>Missingness-Aware Gate</strong> that injects −∞ when a sensor drops, forcing the state transition to the Identity matrix (I) to freeze the memory and prevent biological corruption.</p>
                </li>
                <li className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">SST-KODA (Cloud Tier)</h3>
                  <p className="text-white/60 font-light">A Spectral State-Space Koopman Operator. It utilizes a gating mechanism to isolate high-frequency noise from low-frequency organ trends, lifting the non-stationary, non-linear biological data into an infinite-dimensional linear space for highly accurate forecasting.</p>
                </li>
                <li className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">PI-DeepONet (Physics Tier)</h3>
                  <p className="text-white/60 font-light">Traditional Physics-Informed Neural Networks (PINNs) require hours of backpropagation to calibrate to a new patient. PI-DeepONet solves this via Operator Learning. A Branch Network ingests vital signs to extract patient-specific parameters (Vascular Resistance & Compliance), while a Trunk Network tracks continuous time. Constrained by a soft-penalty 0D Windkessel ODE <span className="font-mono text-[#00d9ff]">Q = C · dP/dt + P/R</span>, it calibrates to a new patient in 0.20 milliseconds without retraining.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Data Integrity & Benchmarking
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                The models were trained on the high-fidelity VitalDB dataset. To absolutely prevent data leakage, scaling and standardization (µ, σ) were calculated strictly on a per-patient basis. A rigorous 70/15/15 patient-level split ensured that testing data remained a true "blind future." Against robust baselines (Informer, LSTMs), the hybrid approach drastically reduced Mean Squared Error (MSE) by severely penalizing sudden hypotensive drops over safe averages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Explainable AI (XAI) & Deployment
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light mb-4">
                Because physicians cannot administer lethal vasopressors based on black-box alerts, the system utilizes a multi-modal XAI strategy. We employed <strong>Integrated Gradients</strong> and <strong>Self-Attention Maps</strong> to highlight temporal landmarks (like the dicrotic notch), while the PI-DeepONet explicitly outputs causal physical parameters (e.g., collapsing vascular resistance).
              </p>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                The entire framework is deployed as a real-time, interactive Next.js / React Three Fiber 3D Dashboard, backed by a FastAPI engine utilizing dynamic GPU lazy-loading to prevent VRAM overflow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-[#00d9ff] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#00d9ff]"></span> Conclusion
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                This research proves that a hybrid Edge-Cloud architecture embedded with soft-penalty fluid dynamics is the definitive solution for critical care prognostics, achieving both state-of-the-art computational latency and indispensable causal transparency.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {["Medical_MambaTS", "SST-KODA", "PI-DeepONet", "0D Windkessel", "VitalDB", "PyTorch", "Next.js", "React Three Fiber", "FastAPI"].map(t => (
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
                  0.20 ms physical calibration
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d9ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Zero-retraining generalisation
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00d9ff] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Zero-latency bedside inference
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
