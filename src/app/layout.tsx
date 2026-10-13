import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aissaoui Ismail — AI & Data Science Engineer",
  description:
    "AI and Data Science engineer building digital twins, edge/cloud model systems, and physics-informed machine learning — from transformers written from scratch to industrial predictive maintenance.",
  icons: {
    icon: "/logo-bg.png",
    apple: "/logo-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${hanken.variable} ${jet.variable} antialiased`}>
        <main style={{ position: "relative", zIndex: 10, padding: 0 }}>{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
