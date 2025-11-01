import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ismail Aissaoui | AI & Full-Stack Developer",
  description: "Full-Stack Developer and AI enthusiast, specializing in building modern web applications and machine learning models with React, Next.js, FastAPI, and transformer architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Global liquid ether background (placed behind content but visible) */}
        <div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <SplashCursor />
        </div>

        {/* Page content wrapper: ensure it sits above the background but below the nav */}
        <div style={{ position: "relative", zIndex: 10, padding: 0 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
