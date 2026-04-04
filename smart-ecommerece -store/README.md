# 🛒 Smart E-Commerce Store

Full-stack e-commerce platform with AI recommendations, cart, wishlist, payments.

## 🚀 Quick Start

1. **Clone & Install**
```bash
git clone <repo> smart-ecommerce-store
cd smart-ecommerce-store
npm install
npm run install:all
```

2. **Copy Env**
```bash
cp .env.example .env
# Edit .env with your keys (MongoDB Atlas, Stripe, Firebase)
```

3. **Run Dev**
```bash
npm run dev  # Backend:5000 + Frontend:5173
```

## 📁 Structure
```
├── client/     # React + Vite + Tailwind + Redux
├── server/     # Node + Express + MongoDB
├── admin-panel/ # Static HTML Admin
└── database/   # Seed data
```

## ✨ Features
- ✅ User Auth (Login/Signup/JWT)
- ✅ Product Catalog w/ Search & Filters
- ✅ Shopping Cart & Wishlist (Redux)
- ✅ Stripe Payments
- 🧠 **AI Recommendations** (user history, product similarity)
- 📱 Responsive UI (Tailwind)
- 👨‍💼 Admin Dashboard (HTML)
- 🔍 Auto-suggest search

## 🛠 Tech Stack
**Frontend:** React 18, Vite, TailwindCSS, Redux Toolkit, React Router, Stripe Elements  
**Backend:** Node.js, Express, Mongoose, JWT, Stripe, Firebase Admin  
**Database:** MongoDB

## 📖 API Docs
See `/docs/api-docs.md`

## 🚀 Production
```bash
npm run build
cd server && npm start  # Serve built client from /dist
```

## License
MIT
