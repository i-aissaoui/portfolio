# 🔗 Hybrid POS & E‑commerce Synchronization System

> **A professional-grade retail bridge connecting physical store operations with real-time E‑commerce storefronts.**

![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---

## 🌟 Project Overview

The **Hybrid POS System** is an enterprise-level architected solution designed for businesses that operate both local physical stores and multiple online storefronts (e.g., *Shiakati Store, Celtic Wear, Jet7*). 

The system solves the "Inventory Fragmentation" problem by ensuring that every sale made in the shop is instantly reflected on the website, and vice-versa, preventing overselling and manual stock counting.

---

## 🏗️ Hybrid Architecture

This project utilizes a **Dual-Database Layer** to ensure 100% uptime and data integrity:

### 1. Local Layer (**SQLite**)
- **Offline Resilience:** The POS continues to function even if the internet goes down.
- **Zero Latency:** Scanning and checkout happen instantly on the local disk.
- **Data Safety:** Local transactions are cached and encrypted until they can reach the cloud.

### 2. Cloud Layer (**PostgreSQL**)
- **Centralized Management:** Aggregates sales data from multiple physical locations.
- **API Integration:** Acts as the bridge between the local POS client and the E‑commerce APIs (REST/Webhooks).
- **Master Inventory:** The single source of truth for stock levels across all platforms.

---

## ✨ Key Features

- **🔄 Real-Time Synchronization:** Automated background service that reconciles stock levels every 60 seconds.
- **📦 Multi-Store Support:** Manage multiple websites from a single administrative dashboard.
- **📈 Advanced Reporting:** Unified analytics showing combined revenue from physical and online channels.
- **🛡️ Conflict Resolution:** Intelligent logic to handle cases where an item is sold simultaneously online and in-store.
- **🏷️ Label & Barcode Printing:** Integrated driver support for physical receipt and barcode printers.

---

## 🛠️ Technical Stack

- **Backend Engine:** Python (FastAPI/Flask) for the synchronization microservice.
- **Databases:** SQLite (Client-side) and PostgreSQL (Server-side).
- **Frontend:** React with Tailwind CSS for the Admin Dashboard.
- **Communication:** REST APIs, WebSockets for live status updates, and JSON-based IPC.
- **Integration:** Custom connectors for popular E‑commerce platforms.

---

## 🌍 Impact

Designed for scalability, this system allows a small business to manage high-volume sales across different platforms without needing a large IT team. It provides the same robust infrastructure used by large retail chains at an accessible scale.

---

*Developed for the modern merchant who lives at the intersection of Retail and Web.*
