# 🐞 MERN Bug Tracker – Debugging & Testing Assignment

This project demonstrates **debugging** and **testing best practices** in a full-stack MERN (MongoDB, Express, React, Node.js) application.

---

## 📁 Project Structure
mern-bug-tracker/
├── client/ # React frontend
│ ├── src/Component/ # UI components (e.g., Button.jsx)
│ └── tests/unit/ # Unit tests for components
├── server/ # Express backend
│ ├── src/ # Server logic (routes, controllers, models)
│ └── tests/integration/ # Integration tests for APIs


---

## 🛠️ Features Tested

- ✅ Frontend unit testing (e.g. `<Button />` component)
- ✅ Backend API integration testing (`/api/posts`)
- ✅ In-memory MongoDB testing using `mongodb-memory-server`
- ✅ JWT-protected routes testing
- ✅ Validation & authorization checks
- ✅ Error simulation and debugging (frontend/backend)

---

## 🧪 Testing Tools Used

| Tool                   | Purpose                         |
|------------------------|----------------------------------|
| **Jest**               | Test runner for JS              |
| **Supertest**          | API endpoint testing            |
| **MongoMemoryServer**  | In-memory MongoDB for test DB   |
| **React Testing Library** | Component testing in React |

---

## 🧑‍💻 How to Run Locally

### 1. Clone the Repository

```bash
git https://github.com/PLP-MERN-Stack-Development/week-6-test-debug-assignment-wainaina-mwangi.git
cd mern-bug-tracker


2. Install Dependencies
📦 Frontend (client/)
bash
Edit
cd client
npm install
📦 Backend (server/)
bash
Edit
cd ../server
npm install

🔌 Backend API Integration Testing

bash
cd server
npm test

Example File: tests/integration/posts.test.js
Tests:

✅ Creating a post with and without auth

✅ Validation errors (400)

✅ Getting all posts & filtering by category

✅ Paginating results

✅ Viewing single post

✅ Updating and deleting posts with permission checks

Test DB runs entirely in-memory using MongoMemoryServer.

🔐 Environment Variables
In your server/.env:

ENV
Edit
PORT=5000
JWT_SECRET=yourSecretKey
MONGO_URI=yourMongoDBConnectionString

🧰 Debugging Strategy
Backend:
Used console.log() and try-catch blocks around async operations

Verified JWT errors with custom middleware

Frontend:
Used React DevTools

Isolated component testing (e.g. buttons, forms)

Debugged Socket.IO issues (e.g., io is not defined) and added mocks for testing

🚀 CI/CD (Optional Expansion)
You can add a GitHub Actions workflow later to run:

Unit tests

Lint checks

API integration tests

📚 References
Jest Docs

Testing Library Docs

Mongo Memory Server

🙌 Author
Erastus Wainaina – Assignment for Week 6: Testing & Debugging in MERN stack
