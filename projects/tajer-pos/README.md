# 💼 Tajer | Professional Electron POS System

> **A high-performance Desktop Point of Sale (POS) solution built with Electron and Node.js for zero‑latency retail management.**

![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

---

## 🌟 Overview
**Tajer** is an institutional-grade desktop Point of Sale (POS) application designed for high-speed retail environments. It leverages a vanilla HTML/CSS/JS frontend for a responsive UI and a Node.js backend utilizing the built-in `node:sqlite` module for lightning-fast local database management. 

Designed to handle complex inventory structures like product variants (sizes, colors), dynamic pricing schemas, and granular user roles (Admin/Cashier), Tajer provides a professional-grade alternative to slow web-based POS solutions.

---

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (secure IPC via preload).
- **Backend**: Electron, Node.js (Main process architecture).
- **Database**: SQLite (via the native `node:sqlite` engine).
- **Integration**: Hardware-aware for barcode and thermal printer communication.

---

## 🏗️ Architecture & Logic
- **Database (`src/main/db.js`)**: Manages the persistent layer, handling SQLite connections, dynamic migrations, and high-concurrency CRUD queries for products and sales.
- **Main Process (`src/main/main.js`)**: Orchestrates the Electron window lifecycle, secure IPC listeners, and native hardware interactions (like barcode printing).
- **Preload Layer (`src/main/preload.js`)**: Exposes safe, audited IPC methods to the renderer via `window.api`, maintaining a strict security boundary.
- **Renderer System (`index.html`)**: Manages the stateful UI, cart logic, event delegation, and interactive modal workflows.

---

## ✅ Core Features (Completed)

### 🛒 Dynamic Commerce Flow
- **Standard POS Loop**: Rapid item addition, subtotal/tax calculation, and instant checkout.
- **Advanced Pricing Engine**: 
  - Direct unit price edits within the cart (with admin overrides).
  - Global sale total override for custom discounts or rounding.
  - Absolute `promo_price` logic for sale items (replaces percentage-based constraints).

### 📦 Inventory & Variants
- **Variant Matrix Builder**: Easily generate (Size x Color) combinations for clothing or electronics.
- **Bulk Management**: Assign quantities and prices to entire variant arrays via "Apply to All" functionality.
- **Schema Resilience**: Built-in support for schema updates (e.g., dynamic column addition to `products`).

### ⚡ UX & Performance
- **Zero Latency**: Local SQL execution ensures no lag during peak hours.
- **Smart Auth**: "Enter" key listeners for seamless password-protected logins.
- **Developer Tools**: Custom seeding scripts (`seedProducts.js`) and database reset utilities.

---

## 🧪 Current Focus & Roadmap
- **Sync UI**: Finalizing the "Edit Product" modal to auto-populate from existing data.
- **IPC Hookups**: Wiring the delete functionality to the safe `products:delete` endpoint.
- **Hardware Benchmarking**: Resolving barcode printing issues ("projt code bare it is not working") for specialized label hardware.

---

*Tajer: Redefining Desktop Commerce.*
