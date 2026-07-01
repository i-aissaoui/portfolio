"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { site, type Locale } from "@/data/site";
import ReactMarkdown from "react-markdown";

function L(str: unknown, locale: Locale) {
  if (!str) return "";
  if (typeof str === "string") return str;
  const s = str as Record<string, string>;
  return s[locale] ?? s.en ?? "";
}

export default function GenericProjectPage() {
  const router = useRouter();
  const params = useParams();
  const idStr = params.id as string;
  const id = parseInt(idStr, 10);

  const [activeImage, setActiveImage] = useState(0);

  if (isNaN(id) || id < 0 || id >= site.projects.length) {
    return <div className="min-h-screen bg-[#0c0c0c] text-white flex items-center justify-center">Project Not Found</div>;
  }

  const project = site.projects[id];
  const title = L(project.title, "en"); // Assuming English for now, could be dynamic
  const desc = L(project.description, "en");
  const detailsText = project.details ? L(project.details, "en") : desc;
  const images = project.images || ["/window.svg"];

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
            {project.category}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font tracking-tight leading-tight text-white">
            {title}
          </h1>
          <p className="text-white/60 text-xl font-light max-w-3xl leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-[0_0_50px_rgba(0,217,255,0.1)]">
            {images[activeImage].startsWith("/") || images[activeImage].startsWith("http") ? (
                <Image 
                src={images[activeImage]} 
                alt="Project Visual" 
                fill 
                className="object-contain bg-[#111]"
                />
            ) : (
                <img src={images[activeImage]} className="w-full h-full object-cover" />
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === idx ? 'border-[#00d9ff] scale-105' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                >
                  {img.startsWith("/") || img.startsWith("http") ? (
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                  ) : (
                    <img src={img} className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            <section className="prose prose-invert prose-lg max-w-none text-white/70 font-light">
               <ReactMarkdown>{detailsText}</ReactMarkdown>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20 rounded-md text-xs font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
