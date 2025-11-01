"use client";

import Link from "next/link";
import React from "react";

export default function Dock() {
  const items = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/profile", label: "Profile", icon: "👤" },
    { href: "/projects", label: "Projects", icon: "🧩" },
    { href: "/skills", label: "Skills", icon: "🛠️" },
  ];

  return (
    <div
      aria-hidden={false}
      className='fixed bottom-8 left-1/2 z-40 -translate-x-1/2'
    >
      <div className='dock-container'>
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className='dock-item'
            aria-label={it.label}
          >
            <div className='dock-icon'>{it.icon}</div>
            <div className='dock-label'>{it.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
