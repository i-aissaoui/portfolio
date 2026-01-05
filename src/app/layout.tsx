import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Page content wrapper */}
        <main style={{ position: "relative", zIndex: 10, padding: 0 }}>
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
