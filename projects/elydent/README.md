# 🦷 Elydent | High-Performance Dentist Management Platform

> **A specialized desktop application designed for clinician workflow optimization, patient records management, and dental charting.**

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌟 Overview
**Elydent** is a robust, institutional-grade management platform for dental clinics. It bridges the gap between modern web development and reliable desktop workflows by leveraging **Next.js** for its reactive frontend and **Electron** for its persistent desktop environment.

Built with a focus on data integrity and clinical speed, Elydent uses **SQLite** for a local-first, zero-latency database experience. Whether managing complex appointment schedules or patient treatment histories, the system ensures that sensitive medical data remains secure and instantly accessible.

---

## 🏗️ Technical Architecture
- **Frontend Layer**: Next.js (App Router) with React Server Components for highly optimized page loads and state management.
- **Desktop Environment**: Electron (Main & Preload architectures) providing native file system access and hardware integration.
- **Reactive Styling**: Tailwind CSS for a clean, modern aesthetic that reduces cognitive load for clinical staff.
- **Persistent Storage**: SQLite (via `node:sqlite`) for robust, offline-first data handling.

---

## 🚀 Key Clinical Features

### 📅 Patient & Appointment Management
- **Smart Scheduling**: Centralized calendar for tracking patient visits and treatment times.
- **Profile Management**: Detailed patient records including medical history, contact details, and insurance info.

### 🦷 Dental Charting & Records
- **Treatment History**: Track every procedure, filling, and extraction with a persistent log.
- **Digital Records**: Eliminate paper waste with a digitized workflow for clinical notes.

### 💰 Billing & Invoicing
- **Financial Module**: Generate invoices directly from patient treatment logs.
- **Payment Tracking**: Monitor outstanding balances and payment statuses in real-time.

### ⚡ Professional UX
- **Geist Optimization**: Uses `next/font` to load Vercel's Geist font family for maximum readability in medical environments.
- **Interactive Dashboards**: Real-time stats on clinic performance and daily patient load.

---

## ⚙️ Development & Deployment
### 🏁 Local Setup
1. **Clone the repository.**
2. **Install dependencies**: `npm install`.
3. **Run Dev**: `npm run dev` (starts the Next.js development server).
4. **Electron Launch**: Run the Electron entry script to wrap the web view into the desktop shell.

### 🏁 Build & Packaging
- **Next.js Build**: `npm run build` optimizes the web app for production.
- **Electron Distribution**: Packaged using native builders for secure deployment on Windows/macOS.

---

*Elydent: Precision Management for Modern Dentistry.*
