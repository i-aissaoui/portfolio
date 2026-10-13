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
      originRect.left - finalRect.left + (originRect.width - finalRect.width) / 2;
    const translateY =
      originRect.top - finalRect.top + (originRect.height - finalRect.height) / 2;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      originRect.left - finalRect.left + (originRect.width - finalRect.width) / 2;
    const translateY =
      originRect.top - finalRect.top + (originRect.height - finalRect.height) / 2;

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
      container.scrollTo({ left: index * width, behavior: "smooth" });
    }
    setActiveIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={closeWithAnimation}
      />

      <div
        ref={containerRef}
        className="relative z-10 flex h-full w-full flex-col overflow-hidden bg-ink text-paper"
      >
        <div className="flex items-center justify-between gap-6 border-b border-grid bg-ink/90 px-6 py-5 backdrop-blur-2xl md:px-12">
          <div className="flex min-w-0 flex-col">
            <span className="eyebrow mb-2">Dossier</span>
            <h2 className="line-clamp-1 font-display text-2xl font-extrabold tracking-tight text-paper md:text-4xl">
              {title}
            </h2>
          </div>
          <button
            aria-label="Close"
            className="btn shrink-0"
            onClick={closeWithAnimation}
          >
            Close
          </button>
        </div>

        <div className="modal-body flex-1 space-y-16 overflow-auto px-6 py-12 md:px-12 md:py-20">
          {gallery.length > 0 && (
            <div className="mx-auto w-full max-w-6xl space-y-8">
              <div className="flex items-center gap-4">
                <span className="mono text-[10px] uppercase tracking-[0.28em] text-dim">
                  Visual Signals
                </span>
                <span className="rule flex-1" />
              </div>

              <div className="group relative">
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:block md:overflow-hidden"
                >
                  {gallery.map((src, i) => {
                    const isLocal = src?.startsWith("/");
                    const isUnsplash = src?.startsWith("https://images.unsplash.com/");
                    const canUseNextImage = isLocal || isUnsplash;
                    const isActive = i === activeIndex;

                    return (
                      <div
                        key={i}
                        className={`min-w-full snap-center transition-all duration-500 md:min-w-0 ${
                          isActive ? "scale-100 opacity-100" : "scale-95 opacity-20 md:hidden"
                        }`}
                      >
                        <div className="relative flex max-h-[60vh] w-full items-center justify-center overflow-hidden border border-grid bg-panel md:max-h-[75vh]">
                          {canUseNextImage ? (
                            <Image
                              src={src}
                              alt={`screenshot-${i}`}
                              width={1920}
                              height={1080}
                              className="h-auto max-h-full w-full object-contain"
                              sizes="(max-width: 1024px) 100vw, 80vw"
                              priority={i === 0}
                            />
                          ) : (
                            <img
                              src={src}
                              alt={`screenshot-${i}`}
                              loading="lazy"
                              className="h-auto max-h-full w-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pointer-events-none absolute inset-0 hidden items-center justify-between px-4 md:flex">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      scrollToImage(activeIndex === 0 ? gallery.length - 1 : activeIndex - 1)
                    }
                    className="pointer-events-auto border border-grid bg-ink/80 p-4 text-dim backdrop-blur-md transition-colors hover:border-amber hover:text-amber"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() =>
                      scrollToImage(activeIndex === gallery.length - 1 ? 0 : activeIndex + 1)
                    }
                    className="pointer-events-auto border border-grid bg-ink/80 p-4 text-dim backdrop-blur-md transition-colors hover:border-amber hover:text-amber"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToImage(i)}
                    className={`h-1 transition-all duration-300 ${
                      i === activeIndex ? "w-12 bg-amber" : "w-4 bg-grid hover:bg-grid-strong"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mx-auto max-w-6xl text-base leading-relaxed text-dim md:text-lg">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => (
                  <div className="mb-5 mt-12 flex items-center gap-4">
                    <span className="mono text-xs uppercase tracking-[0.28em] text-amber" {...props} />
                    <span className="rule flex-1" />
                  </div>
                ),
                h3: ({ node, ...props }) => (
                  <div className="mb-4 mt-10 flex items-center gap-3">
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-blue" {...props} />
                  </div>
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-6 text-lg font-light leading-relaxed text-dim md:text-xl" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="mb-8 ml-2 space-y-4 border-l border-grid pl-6" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="relative text-lg font-light leading-relaxed text-dim md:text-xl" {...props}>
                    <span className="absolute -left-6 top-3 h-1.5 w-1.5 bg-amber/60" />
                    {props.children}
                  </li>
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-paper" {...props} />
                ),
                code: ({ node, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !match ? (
                    <code className="border border-grid bg-panel px-1.5 py-0.5 font-mono text-sm text-blue" {...props}>
                      {children}
                    </code>
                  ) : (
                    <pre className="mb-8 mt-4 overflow-x-auto border border-grid bg-panel p-4 font-mono text-sm text-blue">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  );
                },
                blockquote: ({ node, ...props }) => (
                  <blockquote className="my-6 border-l-2 border-amber/50 pl-4 py-1 italic text-dim" {...props} />
                ),
              }}
            >
              {details}
            </ReactMarkdown>
          </div>

          {tech.length > 0 && (
            <div className="mx-auto max-w-6xl border-t border-grid pt-12">
              <div className="mb-6 flex items-center gap-4">
                <span className="mono text-xs uppercase tracking-[0.28em] text-amber">
                  Stack
                </span>
                <span className="rule flex-1" />
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
