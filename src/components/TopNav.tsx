"use client";

import React from "react";

export default function TopNav() {
  const items = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "profile", label: "Profile" },
  ];

  return (
    <header className='fixed top-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-6xl px-6'>
      <nav className='bg-white/85 dark:bg-black/50 backdrop-blur-md rounded-full px-3 py-2 flex justify-center gap-3 shadow-sm'>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className='px-3 py-1 rounded-md text-sm font-medium text-foreground hover:underline hover:text-violet-700'
          >
            {it.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
