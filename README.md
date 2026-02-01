# 🍕 PizzaHub

PizzaHub is a modern pizza ordering web application built with React, Redux Toolkit, and React Router Data APIs.

Users can browse a dynamic menu, manage a cart, place orders without authentication, mark orders as priority, and track orders using a unique order ID.

The project focuses on real-world React architecture, clean state management, and modern data-fetching patterns.

---

## 🚀 Features

- 📋 Dynamic pizza menu (API-driven)
- 🛒 Cart management (add, remove, update quantity)
- 👤 User name stored globally (no auth required)
- 🧾 Order placement with:
  - Name
  - Phone number (validated)
  - Address
  - Optional GPS-based location
- ⚡ Priority orders (+20% price)
- 🔍 Order lookup by ID
- ⏳ Route-based loading states
- ❌ No login or payment required (pay on delivery)
- 🎨 Responsive UI with Tailwind CSS

---

## 🧱 Tech Stack

- **React 18**
- **React Router v6.4+**
  - Loaders
  - Actions
  - Fetchers
  - Navigation state
- **Redux Toolkit**
- **Tailwind CSS**
- **Vite**
- **REST APIs**

---

## 🗂️ State Management Strategy

The app follows a domain-based state architecture.

### 🔹 UI State → Redux Toolkit

Used for client-side state that must persist across routes:

- User name
- Cart items
- Cart totals
- Address & geolocation state

Redux provides predictable updates and derived state via selectors.

---

### 🔹 Remote State → React Router

Handled using React Router Data APIs:

- Fetching menu data
- Creating new orders
- Updating existing orders
- Fetching order details
- Background data loading with `useFetcher`
- Automatic loading states via `useNavigation`

This follows the **render-as-you-fetch** pattern instead of fetch-on-render.

---

## 📂 Pages & Routes

| Page | Route | Description |
|----|----|----|
| Home | `/` | Enter user name |
| Menu | `/menu` | Browse pizza menu |
| Cart | `/cart` | Review cart |
| New Order | `/order/new` | Place an order |
| Order Details | `/order/:orderId` | Track order status |

---

## 🧠 Key Concepts Demonstrated

- Feature-based folder structure
- Redux slices with selectors
- Async thunks for side effects
- React Router loaders & actions
- Declarative form handling
- Optimistic UI & loading states
- Clean separation of UI and logic

---

## 🛠️ Installation

```bash
git clone <your-repo-url>
cd pizzahub
npm install
npm run dev
