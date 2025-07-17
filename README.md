# 🍔 Full Stack Food Ordering App

A complete food ordering platform with a customer-facing frontend, an admin dashboard, and a backend API. Built using the MERN stack and deployed on Netlify (frontend) and Render (backend).

## 🔗 Live Demo

Frontend: [https://glittering-dieffenbachia-c11d11.netlify.app]
Backend: [https://food-backend-ktvx.onrender.com] 
Admin Panel: [https://admin-food-delivery.netlify.app]

## ✨ Features

- 🔐 User authentication (JWT-based)
- 🛍️ Browse food items by category
- ➕ Add/remove items to cart
- 💳 Integrated Stripe payment gateway
- 🧾 Order history & real-time cart updates
- 🧑‍💼 Admin dashboard to manage:
  - Menu items
  - Orders
  - Users

## ⚙️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB Atlas
- **Payment:** Stripe API
- **Deployment:** Netlify (Frontend & Admin), Render (Backend)

## 📁 Folder Structure

food-del/
│
├── frontend/ # User-facing app
├── backend/ # Node.js/Express API
├── admin/ # Admin dashboard
└── README.md

## 🚀 Getting Started Locally

1. Clone the repo
2. Run `npm install` in all three folders (`frontend`, `backend`, `admin`)
3. Set up environment variables as per `.env.example`
4. Run development servers:
   - Frontend: `npm run dev`
   - Backend: `npm start server`
   - Admin: `npm run dev`

## 🗂️ Environment Variables

```env
VITE_API_BASE_URL=https://your-backend.onrender.com