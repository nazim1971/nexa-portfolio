# Nexa-Portfolio

## Overview

Nexa-Portfolio is a personal portfolio platform designed to manage blogs, projects, and messages. It provides a sleek and modern interface for showcasing projects and communicating with visitors, while offering powerful admin functionality to manage content. Built using Next.js and TypeScript, it combines modern frontend practices with a scalable backend.

## Features

- **Manage Blogs:**  
  Admins can add, update, or delete blog posts. The platform supports rich text formatting for easy content management.

- **Manage Projects:**  
  Admins can showcase their projects with images, descriptions, and links. Projects can be updated, added, or removed.

- **Manage Messages:**  
  The platform includes a messaging system, allowing admins to receive, respond to, and manage messages from visitors.

- **Admin Dashboard:**  
  A comprehensive dashboard for managing blogs, projects, and messages with a user-friendly interface.

## Technologies Used

### Frontend:
- **Framework:** Next.js (React, Server-Side Rendering)
- **Language:** TypeScript
- **UI Libraries:** ShadCN UI, Ant Design
- **State Management:** Redux, RTK Query
- **Routing:** React Router (Next.js integrated routing)
- **Form Management:** React Hook Form
- **Package Manager:** pnpm

### Backend:
- **Server:** Node.js, Express.js, TypeScript
- **Database:** MongoDB
- **Authentication:** JWT for secure token-based authentication
- **Password Encryption:** Bcrypt for password hashing
- **Environment Configuration:** `.env` for secure configuration

### Additional Libraries:
- **Redux Toolkit Query (RTK Query):** Efficient data fetching and caching.
- **ShadCN UI:** Aesthetic and customizable UI components for creating a beautiful user experience.
- **React Hook Form:** Form handling and validation.

## Live Application

Visit the live version of **Nexa-Portfolio** here:  
[Live Demo](https://nexa-portfolio-murex.vercel.app/)

## How to Clone and Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/nazim1971/nexa-portfolio.git
```

### Step 2: Configure Backend Environment

Inside the `server` directory, create a `.env` file and add the following environment variables:

```env
PORT=your_port
DATABASE_URI=your_mongodb_url_here
BCRYPT_SALT_ROUNDS=10
DEFAULT_PASS=your_default_password
NODE_ENV=development
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=10d
```

### Step 3: Install Dependencies

Use `pnpm` for the frontend and `npm` for the backend:

```bash
# Frontend
cd nexa-portfolio
pnpm install

# Backend (inside the server directory)
cd server
npm install
```

### Step 4: Start the Backend Server

In the `server` directory, start the backend server using Nodemon:

```bash
npm run dev
```

### Step 5: Start the Frontend Application

In the main `nexa-portfolio` directory, start the frontend development server:

```bash
pnpm dev
```

## Environment Variables

The project relies on environment variables for both the client and server:

- **PORT**: The port for the backend server.
- **DATABASE_URI**: MongoDB connection string.
- **BCRYPT_SALT_ROUNDS**: Salt rounds for password hashing.
- **DEFAULT_PASS**: Default password for users.
- **NODE_ENV**: Environment (development/production).
- **JWT_ACCESS_SECRET**: Secret for JWT access tokens.
- **JWT_REFRESH_SECRET**: Secret for JWT refresh tokens.

