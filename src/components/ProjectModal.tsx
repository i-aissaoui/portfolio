"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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
    if (!open) return;
    const modal = containerRef.current;
    if (!modal || !originRect) return;

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

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWithAnimation();
    };
    window.addEventListener("keydown", handleEsc);

    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
      anim.cancel();
    };
  }, [originRect, open]);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < gallery.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex, gallery.length]);

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

    if (overlayRef.current)
      overlayRef.current.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        fill: "forwards",
      });

    anim.onfinish = () => onClose();
  };

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const width = container.offsetWidth;
      container.scrollTo({
        left: index * width,
        behavior: "smooth"
      });
    }
    setActiveIndex(index);
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
        className='relative z-10 w-full h-full overflow-hidden bg-obsidian text-white flex flex-col'
      >
        <div className='flex items-center justify-between p-8 md:p-12 lg:px-24 border-b border-white/5 bg-[#0c0c0c]/80 backdrop-blur-2xl'>
          <h2 className='text-3xl md:text-7xl font-bold text-white display-font tracking-tighter leading-none line-clamp-1'>{title}</h2>
          <button
            aria-label='Close'
            className='inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 rounded-full text-black bg-[#00d9ff] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,217,255,0.4)] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap'
            onClick={closeWithAnimation}
          >
            Close Window
          </button>
        </div>

        <div className='modal-body overflow-auto px-6 md:px-24 py-12 md:py-24 space-y-16 flex-1 bg-gradient-to-b from-transparent to-[#00d9ff]/5'>
          {gallery.length > 0 && (
            <div className='space-y-10'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-2 h-2 rounded-full bg-[#00d9ff]'></div>
                <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-white/40'>Visual Signals — UI/Architecture</span>
              </div>

              <div className='relative group'>
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className='w-full overflow-x-auto md:overflow-hidden snap-x snap-mandatory flex md:block scrollbar-hide gap-6 pb-6'
                >
                  {gallery.map((src, i) => {
                    const isLocal = src?.startsWith("/");
                    const isUnsplash = src?.startsWith("https://images.unsplash.com/");
                    const canUseNextImage = isLocal || isUnsplash;
                    const isActive = i === activeIndex;

                    return (
                      <div
                        key={i}
                        className={`min-w-full md:min-w-0 snap-center transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-20 scale-95 md:hidden'}`}
                      >
                        <div className='relative w-full max-h-[60vh] md:max-h-[75vh] glass-card border-white/5 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl bg-black flex items-center justify-center'>
                          {canUseNextImage ? (
                            <Image
                              src={src}
                              alt={`screenshot-${i}`}
                              width={1920}
                              height={1080}
                              className='w-full h-auto max-h-full object-contain'
                              sizes="(max-width: 1024px) 100vw, 80vw"
                              priority={i === 0}
                            />
                          ) : (
                            <img
                              src={src}
                              alt={`screenshot-${i}`}
                              loading='lazy'
                              className='w-full h-auto max-h-full object-contain'
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className='hidden md:flex absolute inset-0 items-center justify-between pointer-events-none px-6'>
                  <button
                    type='button'
                    aria-label='Previous image'
                    onClick={() => scrollToImage(activeIndex === 0 ? gallery.length - 1 : activeIndex - 1)}
                    className='p-5 rounded-full border border-white/5 bg-[#0c0c0c]/80 text-white/50 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all backdrop-blur-md pointer-events-auto'
                  >
                    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 19l-7-7 7-7' /></svg>
                  </button>
                  <button
                    type='button'
                    aria-label='Next image'
                    onClick={() => scrollToImage(activeIndex === gallery.length - 1 ? 0 : activeIndex + 1)}
                    className='p-5 rounded-full border border-white/5 bg-[#0c0c0c]/80 text-white/50 hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all backdrop-blur-md pointer-events-auto'
                  >
                    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9 5l7 7-7 7' /></svg>
                  </button>
                </div>
              </div>

              <div className='flex items-center justify-center gap-3'>
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type='button'
                    onClick={() => scrollToImage(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-16 bg-[#00d9ff]' : 'w-4 bg-white/10 hover:bg-white/20'
                      }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className='text-base md:text-lg leading-relaxed text-gray-200 max-w-5xl'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => (
                  <div className='flex items-center gap-4 mt-12 mb-6'>
                    <span className='w-12 h-[1px] bg-[#00d9ff]'></span>
                    <h2 className='text-sm md:text-base font-bold text-[#00d9ff] uppercase tracking-[0.3em] display-font' {...props} />
                  </div>
                ),
                h3: ({ node, ...props }) => (
                  <div className='flex items-center gap-4 mt-10 mb-5'>
                    <span className='w-8 h-[1px] bg-[#00d9ff]/70'></span>
                    <h3 className='text-xs md:text-sm font-bold text-[#00d9ff]/90 uppercase tracking-[0.2em] display-font' {...props} />
                  </div>
                ),
                p: ({ node, ...props }) => (
                  <p className='text-white/80 leading-relaxed font-light text-lg md:text-xl mb-6' {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className='space-y-4 pl-6 border-l border-white/5 ml-2 mb-8' {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className='text-white/80 leading-relaxed font-light text-lg md:text-xl relative' {...props}>
                    <span className='absolute -left-6 top-3 text-[#00d9ff] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#00d9ff]/40 shadow-[0_0_8px_#00d9ff66]'></span>
                    {props.children}
                  </li>
                ),
                strong: ({ node, ...props }) => (
                  <strong className='font-bold text-[#00d9ff] tracking-tight' {...props} />
                ),
                code: ({ node, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !match ? (
                    <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-[#00d9ff]" {...props}>
                      {children}
                    </code>
                  ) : (
                    <pre className="bg-black/50 p-4 rounded-xl border border-white/10 overflow-x-auto mb-8 text-sm text-[#00d9ff] mt-4">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  );
                },
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-2 border-[#00d9ff]/50 pl-4 py-1 my-6 text-white/60 italic" {...props} />
                )
              }}
            >
              {details}
            </ReactMarkdown>
          </div>

          {tech.length > 0 && (
            <div className='border-t border-white/5 pt-12 max-w-5xl'>
              <div className='flex items-center gap-4 mb-8'>
                <span className='w-12 h-[1px] bg-[#00d9ff]'></span>
                <h3 className='text-xs md:text-sm font-bold text-[#00d9ff] uppercase tracking-[0.3em] display-font'>Industrial Stack</h3>
              </div>
              <div className='flex flex-wrap gap-4'>
                {tech.map((t) => (
                  <span
                    key={t}
                    className='px-6 py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-xl text-[#00d9ff] bg-[#00d9ff]/5 border border-[#00d9ff]/10 hover:bg-[#00d9ff]/10 hover:border-[#00d9ff]/30 transition-all cursor-default'
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
