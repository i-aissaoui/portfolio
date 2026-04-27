# 🍰 My Sweety - Professional Sweet Shop POS

**My Sweety** is a high-fidelity, comprehensive Point of Sale (POS) and inventory management system specifically designed for artisanal sweet shops, bakeries, and coffee houses. Built with Flutter, it offers a seamless cross-platform experience with specialized features for managing delicate inventory, raw materials (pantry), and real-time dine-in orders.

![App Logo](assets/logo.png)

## ✨ Core Features

### 🛒 Dynamic Shop & POS
*   **Quick Order System:** Intuitive tap-to-add interface for rapid customer service.
*   **Search & Filtering:** Easily navigate through categories like Sweets, Cakes, Pastries, and Chocolates.
*   **Flexible Pricing:** Real-time price adjustments and discounts directly from the cart.
*   **Checkout Excellence:** Securely finalize sales with instant stock adjustments.

### 🪑 Dine-in & Table Management
*   **Visual Table Map:** Track occupied and empty tables at a glance.
*   **Active Orders:** Manage multiple open orders per table.
*   **Seamless Checkout:** Finalize table bills with a dedicated table-specific workflow.

### 📦 Advanced Inventory & Pantry
*   **Product Management:** Track finished goods with images, cost prices, and categories.
*   **Pantry Tracking:** Manage raw materials (Flour, Sugar, etc.) with precise units.
*   **Recipe Ingredient Linking:** Automatically deduct ingredients from the pantry when producing or selling items.
*   **Batch Mode:** Calculate ingredient usage based on batch production sizes.

### 📈 Elite Analytics Dashboard
*   **Financial Insights:** Track Total Revenue, Net Profit, and Profit Margins.
*   **Visual Trends:** Interactive charts for revenue trends and top-performing products using `fl_chart`.
*   **Customer Traffic:** Peak hour distribution analysis.
*   **Waste Analysis:** Detailed reports on losses due to expiration or damage.

### 📉 Waste & Loss Logging
*   **Incident Reporting:** Log damaged or expired items with specific reasons.
*   **Financial Impact:** Automatically calculate the loss value based on cost prices.

### 🌍 Universal Accessibility
*   **Full Localization:** Support for English, French, and Arabic.
*   **RTL Support:** Perfectly aligned Right-to-Left interface for Arabic users.
*   **Multi-Platform:** Compiled for Android and Windows Desktop.

---

## 🛠️ Technology Stack

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Framework** | [Flutter](https://flutter.dev/) | Cross-platform UI development |
| **State Management** | [Provider](https://pub.dev/packages/provider) | Efficient app state and data flow |
| **Persistence** | [Shared Preferences](https://pub.dev/packages/shared_preferences) | Reliable local data storage |
| **UI Components** | [Material 3](https://m3.material.io/) | Modern, responsive design system |
| **Typography** | [Google Fonts](https://pub.dev/packages/google_fonts) | Custom branding (Outfit & Playfair Display) |
| **Data Viz** | [FL Chart](https://pub.dev/packages/fl_chart) | Dynamic business analytics |
| **Printing** | [Printing](https://pub.dev/packages/printing) & [PDF](https://pub.dev/packages/pdf) | Receipt generation and hardware printing |
| **Windows Export** | [MSIX](https://pub.dev/packages/msix) | Native Windows packaging |

---

## 🎨 Design Philosophy
The app adopts a **Luxury Brand Aesthetic**, utilizing a curated color palette:
*   🟤 **Chocolate Brown (`#5D4037`)**: Primary brand color for warmth and premium feel.
*   🟡 **Gold (`#D4AF37`)**: Accent color for primary actions and highlights.
*   ⚪ **Off-white Pearl (`#FCFBF7`)**: Clean, minimalist background.
*   ⚫ **Deep Black (`#1A1A1A`)**: High contrast for readability.

---

## 🚀 Getting Started

### Prerequisites
*   Flutter SDK (^3.0.0)
*   Dart SDK (^3.0.0)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone git@github.com:i-aissaoui/my-sweety.git
    cd my-sweety
    ```
2.  **Install dependencies:**
    ```bash
    flutter pub get
    ```
3.  **Run the application:**
    ```bash
    flutter run
    ```

### Windows Desktop Export
To generate a professional Windows installer:
1.  **Check config in `pubspec.yaml`** under `msix_config`.
2.  **Run the build command:**
    ```bash
    flutter pub run msix:create
    ```

---

## 🛡️ Security & Synchronization
*   **Manager Login:** Password-protected access to management features.
*   **Website Sync:** Built-in API support to synchronize your menu to an external website.
*   **Data Backup:** Local data persistence ensures your business stays running even offline.

---

## 📝 License
This project is private and intended for specialized POS use. 

*Developed with ❤️ for the world of Sweets.*
