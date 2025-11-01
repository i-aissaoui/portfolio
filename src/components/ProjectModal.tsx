"use client";

import React, { useEffect, useRef } from "react";

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  images?: string[];
  details?: string;
  tech?: string[];
  originRect?: DOMRect | null;
};

export default function ProjectModal({
  open,
  onClose,
  title,
  images = [],
  details = "",
  tech = [],
  originRect = null,
}: ProjectModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

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
        className='relative z-10 max-w-5xl w-full max-h-[95vh] overflow-hidden bg-[#060010] text-white rounded-2xl shadow-2xl border border-white/10'
      >
        <div className='flex items-center justify-between p-6 border-b border-white/10 bg-[#0a0015]/90'>
          <h2 className='text-3xl font-extrabold text-white'>{title}</h2>
          <button
            aria-label='Close'
            className='inline-flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-xl'
            onClick={closeWithAnimation}
          >
            ✕
          </button>
        </div>

        {/* scrollable body - images can remain large and the body will scroll */}
        <div className='modal-body overflow-auto p-8 space-y-8 max-h-[80vh] bg-gradient-to-b from-transparent to-[#0a0015]/50'>
          {images.length > 0 && (
            <div className='space-y-6'>
              <h3 className='text-xl font-bold text-white mb-4'>📸 Project Screenshots</h3>
              {images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`screenshot-${i}`}
                  className='w-full h-auto max-h-[56vh] object-cover rounded-xl border border-white/10 shadow-2xl'
                />
              ))}
            </div>
          )}

          <div className='text-sm leading-relaxed text-gray-200 space-y-6'>
            {details.split('\n\n').map((section, sectionIdx) => {
              const lines = section.split('\n').filter((l) => l.trim());
              if (lines.length === 0) return null;

              const firstLine = lines[0];
              const isHeading = firstLine.endsWith(':');
              
              if (isHeading) {
                // Section with heading
                return (
                  <div key={sectionIdx} className='space-y-3'>
                    <h3 className='text-xl font-bold text-white mb-3'>{firstLine}</h3>
                    <ul className='space-y-2 pl-4'>
                      {lines.slice(1).map((line, lineIdx) => {
                        const isBullet = line.trim().startsWith('•');
                        const content = isBullet ? line.replace(/^•\s*/, '') : line;
                        
                        // Bold text in parentheses
                        const parts = content.split(/(\([^)]+\))/g);
                        
                        return (
                          <li key={lineIdx} className={`${isBullet ? 'flex gap-3' : 'block'} text-white/80 leading-relaxed`}>
                            {isBullet && <span className='text-[#00d9ff] mt-1 flex-shrink-0'>•</span>}
                            <span className='flex-1'>
                              {parts.map((part, partIdx) => {
                                if (part.match(/^\([^)]+\)$/)) {
                                  return (
                                    <span key={partIdx} className='font-semibold text-[#00d9ff]'>
                                      {part}
                                    </span>
                                  );
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
                // Plain paragraph
                return (
                  <div key={sectionIdx} className='space-y-2'>
                    {lines.map((line, lineIdx) => (
                      <p key={lineIdx} className='text-white/80 leading-relaxed'>
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
    </div>
  );
}
