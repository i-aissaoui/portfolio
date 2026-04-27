# POS System Project

## Overview
This project is an Electron-based Point of Sale (POS) application. It uses a vanilla HTML/CSS/JS frontend alongside a Node.js backend utilizing the built-in `node:sqlite` module for local database management. It is designed to handle product variants (sizes, colors), dynamic pricing schemas, cart management, and user roles (Admin/Cashier).

## Tech Stack
- **Frontend**: HTML, CSS, Vanilla JavaScript (IPC via preload)
- **Backend**: Electron, Node.js
- **Database**: SQLite (via `node:sqlite`)

## Architecture & Logic
- **Database (`src/main/db.js`)**: Handles SQLite DB connection, migrations (schema updates), and CRUD queries for products, sales, and auth.
- **Main Process (`src/main/main.js`)**: Manages Electron window lifecycle, IPC listeners, and native hardware interactions (like barcode printing).
- **Preload (`src/main/preload.js`)**: Exposes safe IPC methods to the renderer via `window.api`.
- **Renderer (`src/renderer/renderer.js` & `index.html`)**: Manages the UI state, cart logic, event delegation, and modal toggling.

## Done List (Completed Features)
- **Core POS Flow**: Add items to cart, calculate totals, checkout.
- **Database Migrations**: Dynamic schema update support (e.g., adding `promo_price` to `products` table).
- **Advanced Pricing**: 
  - Editable unit prices directly within the cart before checkout.
  - Global sale total override (allows the cashier/admin to input a custom final price that overrides strict math).
  - Absolute `promo_price` logic for items on sale replacing percentage constraints.
- **Product Management**:
  - Modal-based product creation UI (recently moved out of the inline view).
  - Variant matrix builder (Size x Color).
  - Bulk quantity and price assignment for variant arrays via "Apply to All".
  - Backend `products:delete` functionality implemented.
- **UX & Utilities**:
  - "Enter" key event listeners to submit authentication passwords effortlessly.
  - Mock DB seeding via custom script (`seedProducts.js`).
  - Database password resets applied directly via NodeJS scripts.

## To-Do List (Pending / Next Steps)
- **Edit Product UI Sync**: Wire up the "Edit" table buttons to fully populate the current `#productModal` fields with existing product data so they can be securely updated.
- **Modal Event Listeners**: Connect the `openCreateProductBtn` to show the `#productModal`.
- **Delete Product UI Sync**: Connect the delete button on the product list to the available `products:delete` backend IPC endpoint.
- **Barcode Printing Bug**: Resolve the issue raised where the barcode print functionality("projt code bare it is not working") is failing.
