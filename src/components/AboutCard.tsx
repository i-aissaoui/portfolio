import React from "react";

export default function AboutCard({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className='card card--border-glow p-6 max-w-3xl mx-auto shadow'
      style={{
        background: "rgba(255,255,255,0.72)",
        borderColor: "rgba(11,18,32,0.06)",
        color: "var(--foreground)",
      }}
    >
      <div className='flex items-center gap-3 mb-3'>
        <div
          className='w-3 h-3 rounded-full'
          style={{ background: "var(--ai-accent)" }}
        />
        <h3 className='text-lg sm:text-xl font-semibold m-0'>About Me</h3>
      </div>
      <div
        className='text-sm leading-relaxed'
        style={{ color: "var(--foreground)" }}
      >
        {children}
      </div>
    </div>
  );
}
