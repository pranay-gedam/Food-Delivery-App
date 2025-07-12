# 🍔 Full Stack Food Ordering App

A complete food ordering website and app built using **React.js**, **MongoDB**, **Express**, **Node.js**, and **Stripe** for secure online payments.

## 🚀 Features

- 🔐 **User Authentication** – Users can register, log in, and manage their accounts
- 🛒 **Shopping Cart** – Add food items to the cart and place orders
- 💳 **Online Payment Integration** – Stripe payment gateway for secure transactions
- 📦 **Order Management** – Track order status in real-time
- 🧑‍💻 **Admin Panel** – Manage menu, orders, and users from a dedicated admin dashboard

## 🛠️ Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React.js                     |
| Backend     | Node.js, Express.js          |
| Database    | MongoDB                      |
| Payments    | Stripe API                   |
| Auth        | JWT, bcrypt                  |

## 📂 Project Structure

Food-Delivery-App/
├── frontend/ # React frontend
├── backend/ # Express API server
├── admin-panel/ # Admin dashboard
├── .gitignore
├── README.md
└── package.json

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/pranay-gedam/Food-Delivery-App.git
   cd Food-Delivery-App

2. Install dependencies:

    Frontend:

        bash
        Copy
        Edit
        cd frontend
        npm install
        npm start

    Backend:

        bash
        Copy
        Edit
        cd backend
        npm install
        npm run dev

3. Configure environment variables:

    - Create .env files in both frontend and backend

    - Add your MongoDB URI, JWT Secret, Stripe keys, etc.