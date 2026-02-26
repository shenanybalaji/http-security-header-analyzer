🔐 HTTP Security Header Inspector
Technical Documentation & Setup Guide


📌 Project Summary

The HTTP Security Header Inspector is a full-stack MERN application designed to analyze HTTP response headers of any given website and evaluate its security configuration.

The system identifies missing or misconfigured security headers, calculates a security score, and assigns a grade based on best security practices.


This tool helps developers and security teams:

Detect missing HTTP security headers

Evaluate HTTPS implementation

Analyze server and IP information

Generate a security score and grade

Maintain scan history records



🏗 System Architecture Overview:

Client (Browser)
      |
      v
React Frontend Application
      |
      v
Node.js + Express Backend API
      |
      v
Target Website (HTTP Request via Axios)
      |
      v
Security Analyzer & Scoring Engine
      |
      v
MongoDB (Scan History Storage)



🛠 Technology Stack:

Frontend

React.js

Axios

Responsive UI Design

Backend

Node.js

Express.js

Axios (for external HTTP requests)

MongoDB

Mongoose

CORS Middleware

📂 Project Structure:

HTTP-SECURITY-HEADER/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── client/
│     │
│     ├── src/
│     │   ├── components/
│     │   ├── pages/
│     │   ├── App.jsx
│     │   ├── main.jsx
│     │   └── index.css
│     │
│     ├── index.html
│     ├── package.json
│     ├── package-lock.json
│     └── vite.config.js
│
├── README.md
└── .gitignore

⚙️ Environment Configuration:

🔹 Backend Environment Variables

Create a .env file inside:

backend/.env

Add the following configuration:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/http-security-header
NODE_ENV=development

If using MongoDB Atlas:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/http-security-header

🔹 Frontend Environment Variables

Create a .env file inside:

frontend/.env

Add:

REACT_APP_API_URL=http://localhost:5000

🚀 Setup & Execution Instructions:

1️⃣ Clone Repository

git clone https://github.com/<your-username>/http-security-header.git
cd http-security-header

🖥 Backend Setup:

Step 1: Navigate to backend directory
cd backend

Step 2: Install dependencies
npm install

Step 3: Ensure MongoDB is Running

If local MongoDB:

mongod

Or verify MongoDB service is active.

Step 4: Start Backend Server
npm run dev

or

node server.js

Backend will run on:

http://localhost:5000

🌐 Frontend Setup:

Open a new terminal.

Step 1: Navigate to frontend directory
cd frontend

Step 2: Install dependencies
npm install

Step 3: Start React Application
npm start

Frontend will run on:

http://localhost:3000

🔐 Security Headers Evaluated:

The application checks for the presence and configuration of:

Content-Security-Policy

Strict-Transport-Security

X-Frame-Options

X-Content-Type-Options

Referrer-Policy

Permissions-Policy

X-XSS-Protection

📊 Scoring & Grading Logic

The scoring engine evaluates:

Presence of critical headers

HTTPS usage

Missing or weak configurations

Output Includes:

Security Score (0–100)

Security Grade (A+, A, B, C, D, F)

🧪 Functional Capabilities

Real-time URL security inspection

Security header validation

HTTPS analysis

Server & IP detection

Responsive user interface

🛑 Common Issues & Solutions

MongoDB Connection Failure

Verify MONGO_URI in backend .env

Ensure MongoDB service is running

CORS Issues

Ensure backend includes:

const cors = require("cors");
app.use(cors());

Port Conflict

Change port inside .env:

PORT=5001

📦 Production Deployment (Optional)

Build Frontend
npm run build

Serve build using Express:

app.use(express.static(path.join(__dirname, "../frontend/build")));

👨‍💻 Developed By

Shenany Balaji
MERN Stack Developer

📄 Project Status

✅ Completed
✅ Fully Functional
✅ Tested in Local Development Environment