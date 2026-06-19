# CodeConnect – Real-Time Coding Interview Platform

<p align="center">
  <strong>Connect • Collaborate • Code • Hire</strong>
</p>

---

## 📖 Overview

CodeConnect is a full-stack technical interview platform designed to streamline the coding interview process through real-time collaboration, video conferencing, and automated code evaluation.

The platform enables interviewers and candidates to participate in live coding sessions with integrated video calls, collaborative code editing, chat messaging, screen sharing, and automated test case validation.

Built using modern web technologies including React.js, Node.js, MongoDB, Clerk Authentication, Stream Video SDK, and Inngest, CodeConnect provides a seamless and scalable interview experience.

---

## ✨ Features

### 🎥 Real-Time Interview Experience

- 1-on-1 Video Interview Rooms
- HD Audio & Video Communication
- Screen Sharing Support
- Meeting Recording
- Participant Access Control
- Room Locking (Maximum 2 Participants)

### 💻 Collaborative Coding Environment

- VSCode-Inspired Code Editor
- Real-Time Code Collaboration
- Syntax Highlighting
- Multiple Programming Language Support
- Coding Practice Mode

### ⚙️ Automated Code Evaluation

- Secure Code Execution
- Isolated Runtime Environment
- Automated Test Case Validation
- Instant Success/Failure Feedback
- Performance Evaluation

### 💬 Communication Tools

- Real-Time Chat Messaging
- Interview Notifications
- Session Updates
- User Presence Indicators

### 📊 Dashboard & Analytics

- Interview Statistics
- Coding Activity Tracking
- Session Insights
- User Performance Metrics

### 🔐 Authentication & Security

- Authentication via Clerk
- Protected Routes
- Secure Session Management
- JWT-Based API Security
- Environment Variable Protection

### 🧠 Background Processing

- Asynchronous Workflows using Inngest
- Event-Driven Architecture
- Background Task Processing
- Automated Notifications

---

## 🏗️ System Architecture

### Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React.js         | User Interface          |
| TanStack Query   | Data Fetching & Caching |
| Clerk            | Authentication          |
| Stream Video SDK | Video Conferencing      |
| Tailwind CSS     | Styling                 |
| React Router     | Routing                 |

### Backend

| Technology | Purpose             |
| ---------- | ------------------- |
| Node.js    | Runtime Environment |
| Express.js | REST APIs           |
| MongoDB    | Database            |
| Inngest    | Background Jobs     |
| Stream SDK | Video Services      |
| JWT        | API Security        |

---

## 📂 Project Structure

```bash
CodeConnect/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   └── package.json
│
└── README.md
```

---

## 🧪 Environment Variables

### Backend Configuration

Create a `.env` file inside the backend folder.

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

### Frontend Configuration

Create a `.env` file inside the frontend folder.

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

---

## ⚡ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/NagargojeOmkar/CodeConnect.git
cd CodeConnect
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

Start Backend Server

```bash
npm run dev
```

Backend runs at:

```bash
http://localhost:3000
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

Start Frontend

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

## 🔄 Application Workflow

### Authentication

Users can:

- Register
- Login
- Manage Profile
- Access Protected Routes

---

### Dashboard

Users can:

- View Interview Statistics
- Create Interview Rooms
- Join Existing Rooms
- Access Coding Practice

---

### Interview Room

Participants can:

- Join Video Call
- Share Screen
- Send Messages
- Collaborate on Code
- Execute Code
- Receive Test Case Feedback

---

### Practice Mode

Users can:

- Solve Coding Problems
- Run Code
- Validate Solutions
- Improve Interview Preparation

---

## 🚀 Deployment

### Frontend Deployment

Deploy using:

- Vercel
- Netlify

Build Application

```bash
npm run build
```

---

### Backend Deployment

Deploy using:

- Render
- Railway
- Sevalla
- VPS

Start Production Server

```bash
npm start
```

---

## 🔒 Security Best Practices

- Never commit `.env` files.
- Store API keys securely.
- Use strong Clerk credentials.
- Restrict database access.
- Enable HTTPS in production.
- Validate all API requests.

---

## 🤝 Contributing

1. Fork Repository
2. Create Feature Branch

```bash
git checkout -b feature/new-feature
```

3. Commit Changes

```bash
git commit -m "Add new feature"
```

4. Push Branch

```bash
git push origin feature/new-feature
```

5. Create Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

### Omkar Nagargoje

- GitHub: [https://github.com/NagargojeOmkar](https://github.com/NagargojeOmkar)
- LinkedIn: [https://www.linkedin.com/in/omkar-nagargoje](https://www.linkedin.com/in/omkar-nagargoje)
- Email: [nomkar933@gmail.com](mailto:nomkar933@gmail.com)

---

⭐ If you found this project useful, consider giving it a star on GitHub.
