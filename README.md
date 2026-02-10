# taskflow-dashboard
A full-stack task management dashboard built with React, Node.js, Express, and JWT-based authentication.
# TaskFlow Dashboard – Authentication & Profile Fetch

This project implements a secure authentication flow using JWT and a protected dashboard with user profile integration.

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Protected Dashboard Routes
- User Profile Fetch using Token
- Shared Profile Data across Header & Dashboard
- Clean React Component Architecture

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- bcrypt

---

## 🔐 Authentication Flow

1. User logs in with email & password
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Protected routes validate token via middleware
5. Profile data is fetched using `/api/users/profile`

---

## 📂 Project Structure (Frontend)

