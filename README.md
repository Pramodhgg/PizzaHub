# 🍕 PizzaHub

PizzaHub is a modern pizza ordering web app where users can browse a menu, add pizzas to a cart, and place orders without creating an account.

The app is designed to demonstrate real-world React architecture using React Router Data APIs for remote state and Redux for UI state, combined with Tailwind CSS for styling.

---

## 🚀 Features

- 📋 Dynamic pizza menu (fetched from API)
- 🛒 Cart management (add/remove/update pizzas)
- 🧾 Order placement with:
  - Name  
  - Phone number  
  - Address  
  - Optional GPS location  
- ⚡ Priority order option (+20% price)
- 🔍 Order lookup by ID
- ⏳ Navigation & loading states
- ❌ No authentication required
- 🎨 Clean responsive UI

---

## 🧱 Tech Stack

- **React**
- **React Router (Data APIs)**
  - Loaders  
  - Actions  
  - Navigation state handling  
- **Redux Toolkit**
- **Tailwind CSS**
- **REST API**

---

## 🗂️ State Management Architecture

The app follows a domain-based state structure inspired by real production apps.

### 🔹 UI State → Redux

Managed with Redux Toolkit:

- User name  
- Cart state  
- UI interactions  
- Global UI data that persists in app

Redux is used because UI state can grow complex and needs predictable updates.

---

### 🔹 Remote State → React Router

Handled using React Router Data APIs:

- Menu data (fetched from API)
- Order submission
- Order lookup
- Server mutations via actions
- Loader-based data fetching
- Built-in navigation loading states

This follows the **"render-as-you-fetch"** pattern instead of fetch-on-render.

---

## 📂 Pages & Routes

| Page | Route | Purpose |
|------|------|--------|
| Home | `/` | Enter user name |
| Menu | `/menu` | Browse pizzas |
| Cart | `/cart` | Manage cart |
| New Order | `/order/new` | Place order |
| Order Lookup | `/order/:orderId` | Track order |

---

## 🛠️ Installation

```bash
git clone <your-repo-url>
cd pizzahub
npm install
npm run dev
