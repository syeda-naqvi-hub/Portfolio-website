# Architecture Overview

## Tech Stack
```
Frontend: React 18 + Vite + TailwindCSS + Redux Toolkit
Backend: Node.js + Express + MongoDB + Mongoose
Payments: Stripe
Auth: JWT + bcrypt
Deployment: Vercel / Render / Railway
```

## Folder Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/ # Redux slices, AI, filters
│   │   ├── context/  # Auth, Theme
│   │   └── services/ # API clients
├── server/           # Express backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── services/
├── admin-panel/      # Static HTML admin
└── database/         # Seed data
```

## Data Flow
```
User → React UI → Redux → API Calls → Express API → MongoDB
           ↑
       Stripe (Payments)
           ↓
     Auth Context + LocalStorage
```

## Key Features
1. **Smart Recommendations** (client-side collaborative filtering)
2. **Real-time Cart** (Redux + backend sync)
3. **Full Auth** (Register/Login/Profile)
4. **Search & Filters** (MongoDB text index)
5. **Admin Panel** (React + Static HTML)
6. **Payments** (Stripe integration)
7. **Responsive** (Mobile-first Tailwind)

## Environment Setup
```
# Root
MONGODB_URI=mongodb://localhost/smart-ecommerce
JWT_SECRET=your-super-secret-jwt-key
STRIPE_SECRET_KEY=sk_test_...

# Client (.env)
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

