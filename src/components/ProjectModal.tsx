"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  images?: string[];
  imageFolder?: string;
  details?: string;
  tech?: string[];
  originRect?: DOMRect | null;
};

export default function ProjectModal({
  open,
  onClose,
  title,
  images = [],
  imageFolder,
  details = "",
  tech = [],
  originRect = null,
}: ProjectModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [gallery, setGallery] = useState<string[]>(images);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setGallery(images);
  }, [images]);

  useEffect(() => {
    if (!open) return;
    if (!imageFolder) {
      setActiveIndex(0);
      return;
    }

    let isCancelled = false;

    const loadImages = async () => {
      try {
        const res = await fetch(`/api/project-images/${imageFolder}`);
        if (!res.ok) throw new Error("failed_to_fetch");
        const data = await res.json();
        if (isCancelled) return;
        const fetched: string[] = Array.isArray(data.images) ? data.images : [];
        const encoded = fetched.map((p) => encodeURI(p));
        setGallery(encoded.length ? encoded : images);
        setActiveIndex(0);
      } catch {
        if (!isCancelled) {
          setGallery(images);
          setActiveIndex(0);
        }
      }
    };

    loadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageFolder, open, images]);

  useEffect(() => {
    if (!imageFolder) {
      setActiveIndex(0);
    }
  }, [gallery.length, imageFolder]);

  useEffect(() => {
    if (!open) return;
    const modal = containerRef.current;
    if (!modal || !originRect) return;

    // compute FLIP transform from originRect to modal final rect
    const finalRect = modal.getBoundingClientRect();
    const scaleX = originRect.width / finalRect.width;
    const scaleY = originRect.height / finalRect.height;
    const translateX =
      originRect.left -
      finalRect.left +
      (originRect.width - finalRect.width) / 2;
    const translateY =
      originRect.top -
      finalRect.top +
      (originRect.height - finalRect.height) / 2;

    const anim = modal.animate(
      [
        {
          transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
          opacity: 0,
        },
        { transform: "translate(0,0) scale(1,1)", opacity: 1 },
      ],
      { duration: 320, easing: "cubic-bezier(.2,.9,.2,1)", fill: "forwards" }
    );

    return () => anim.cancel();
  }, [originRect, open]);

  if (!open) return null;

  const closeWithAnimation = () => {
    const modal = containerRef.current;
    if (!modal || !originRect) return onClose();

    const finalRect = modal.getBoundingClientRect();
    const scaleX = originRect.width / finalRect.width;
    const scaleY = originRect.height / finalRect.height;
    const translateX =
      originRect.left -
      finalRect.left +
      (originRect.width - finalRect.width) / 2;
    const translateY =
      originRect.top -
      finalRect.top +
      (originRect.height - finalRect.height) / 2;

    const anim = modal.animate(
      [
        { transform: "translate(0,0) scale(1,1)", opacity: 1 },
        {
          transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
          opacity: 0,
        },
      ],
      { duration: 300, easing: "cubic-bezier(.2,.9,.2,1)", fill: "forwards" }
    );

    // fade overlay too
    if (overlayRef.current)
      overlayRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        fill: "forwards",
      });

    anim.onfinish = () => onClose();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        ref={overlayRef}
        className='absolute inset-0 bg-black/70 backdrop-blur-sm'
        onClick={closeWithAnimation}
      />

      <div
        ref={containerRef}
        className='relative z-10 w-[94vw] md:w-[92vw] lg:w-[90vw] xl:w-[86vw] max-w-none h-[92vh] overflow-hidden bg-obsidian text-white rounded-3xl shadow-2xl border border-white/10'
      >
        <div className='flex items-center justify-between p-8 md:p-12 border-b border-white/5 bg-[#0c0c0c]/80 backdrop-blur-2xl'>
          <h2 className='text-3xl md:text-6xl font-bold text-white display-font tracking-tighter leading-none'>{title}</h2>
          <button
            aria-label='Close'
            className='inline-flex items-center justify-center w-12 h-12 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20'
            onClick={closeWithAnimation}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 18L18 6M6 6l12 12' /></svg>
          </button>
        </div>

        <div className='modal-body overflow-auto p-12 space-y-12 max-h-[84vh] bg-gradient-to-b from-transparent to-[#00d9ff]/5'>
          {gallery.length > 0 && (
            <div className='space-y-6'>
              <div className='flex items-center gap-3'>
                <span className='w-8 h-[1px] bg-[#00d9ff]'></span>
                <h3 className='text-sm font-bold text-[#00d9ff] uppercase tracking-widest display-font'>Project Systems</h3>
              </div>
              <div className='flex items-center justify-center gap-6'>
                <button
                  type='button'
                  aria-label='Previous image'
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                  className='p-5 rounded-full border border-white/5 bg-white/5 text-white/50 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all backdrop-blur-md'
                >
                  <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 19l-7-7 7-7' /></svg>
                </button>

                <div className='w-full max-w-[88vw] md:max-w-[86vw] lg:max-w-[82vw] xl:max-w-[78vw] rounded-[3rem] border border-white/10 bg-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]'>
                  {(() => {
                    const src = gallery[activeIndex];
                    const isLocal = src?.startsWith("/");
                    const isUnsplash = src?.startsWith("https://images.unsplash.com/");
                    const canUseNextImage = isLocal || isUnsplash;

                    if (canUseNextImage) {
                      return (
                        <Image
                          src={src}
                          alt={`screenshot-${activeIndex}`}
                          width={1600}
                          height={900}
                          sizes="(max-width: 1024px) 100vw, 78vw"
                          priority={activeIndex === 0}
                          className='w-full h-auto max-h-[72vh] object-contain transition-all duration-700'
                        />
                      );
                    }
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={src}
                        alt={`screenshot-${activeIndex}`}
                        loading='lazy'
                        className='w-full h-auto max-h-[72vh] object-contain'
                      />
                    );
                  })()}
                </div>

                <button
                  type='button'
                  aria-label='Next image'
                  onClick={() => setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                  className='p-5 rounded-full border border-white/5 bg-white/5 text-white/50 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all backdrop-blur-md'
                >
                  <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9 5l7 7-7 7' /></svg>
                </button>
              </div>

              <div className='flex items-center justify-center gap-2 pt-2'>
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full border border-[#00d9ff]/50 transition ${i === activeIndex ? 'bg-[#00d9ff]' : 'bg-white/10 hover:bg-white/20'
                      }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className='text-base md:text-lg leading-relaxed text-gray-200 space-y-6'>
            {details.split('\n\n').map((section, sectionIdx) => {
              const lines = section.split('\n').filter((l) => l.trim());
              if (lines.length === 0) return null;

              const firstLine = lines[0];
              const isHeading = firstLine.endsWith(':');
              if (isHeading) {
                return (
                  <div key={sectionIdx} className='space-y-4'>
                    <div className='flex items-center gap-3 mb-2'>
                      <span className='w-8 h-[1px] bg-[#00d9ff]'></span>
                      <h3 className='text-sm font-bold text-[#00d9ff] uppercase tracking-widest display-font'>{firstLine}</h3>
                    </div>
                    <ul className='space-y-4 pl-4'>
                      {lines.slice(1).map((line, lineIdx) => {
                        const isBullet = line.trim().startsWith('•');
                        const content = isBullet ? line.replace(/^•\s*/, '') : line;
                        const parts = content.split(/(\([^)]+\))/g);

                        return (
                          <li key={lineIdx} className={`${isBullet ? 'flex gap-3' : 'block'} text-white/80 leading-relaxed font-light`}>
                            {isBullet && <span className='text-[#00d9ff] mt-1 flex-shrink-0'>•</span>}
                            <span className='flex-1'>
                              {parts.map((part, partIdx) => {
                                if (part.match(/^\([^)]+\)$/)) {
                                  return <span key={partIdx} className='font-bold text-[#00d9ff]'>{part}</span>;
                                }
                                return <span key={partIdx}>{part}</span>;
                              })}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              } else {
                return (
                  <div key={sectionIdx} className='space-y-2'>
                    {lines.map((line, lineIdx) => (
                      <p key={lineIdx} className='text-white/80 leading-relaxed font-light'>
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }
            })}
          </div>

          {tech.length > 0 && (
            <div className='border-t border-white/10 pt-6'>
              <h3 className='text-xl font-bold text-white mb-4'>🛠️ Technologies</h3>
              <div className='flex flex-wrap gap-2'>
                {tech.map((t) => (
                  <span
                    key={t}
                    className='px-3 py-1.5 text-xs font-semibold uppercase rounded-md text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}
