# MERN Stack Authentication Portal

A full-stack authentication system built with MongoDB, Express.js, React, and Node.js.

## Features

- User registration with encrypted password storage
- User login with JWT authentication
- Protected routes
- Material-UI components for a modern UI
- Form validation

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:

   ```
   cd server
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a .env file in the server directory with the following content:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auth-portal
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```
   npm start
   ```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the client directory:

   ```
   cd client
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

The application will open in your default browser at http://localhost:3000

## Available Scripts

In both the client and server directories, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## API Endpoints

- POST `/api/auth/register`: Register a new user
- POST `/api/auth/login`: Login user and get JWT token

## Technology Stack

- Frontend: React, Material-UI, React Router
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Password Encryption: bcrypt
