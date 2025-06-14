# 💬 Chat Application

A full-stack real-time chat application with user authentication, one-on-one messaging, and persistent conversations using **MERN Stack** (MongoDB, Express.js, React, Node.js).

## 📸 Screenshots

### 🧾 Login Page
![Login](./images/Login.png)

### 📝 Signup Page
![Signup](./images/Signup.png)

### 🏠 Dashboard
![Dashboard](./images/Dashboard.png)

### 💬 Chat Interface
![Chat](./images/Msg-Dashboard.png)

### 🗃️ MongoDB - Messages Collection
![Database Messages](./images/MongoDB-MsgStore.png)

### 👥 MongoDB - Users Collection
![Database Users](./images/MongoDB-UsersList.png)

---

## 🚀 Features

- 🔐 User authentication (login & signup)
- 👤 Real-time one-on-one messaging
- 📡 Socket.io integration for live chat updates
- 💾 Persistent messages stored in MongoDB
- 💡 Modern React UI with Redux state management

---

## 🛠️ Tech Stack

| Technology     | Role                     |
|----------------|--------------------------|
| React.js       | Frontend framework        |
| Redux          | State management          |
| Node.js        | Backend runtime           |
| Express.js     | Server framework          |
| MongoDB        | Database                  |
| Socket.IO      | Real-time communication   |
| bcrypt, JWT    | Authentication & Security |
| Tailwind CSS / CSS | Styling                |

---

## 🧑‍💻 Run Locally

### 📁 Clone the project

```bash
git clone https://github.com/kiranwarkad1/Chat-Application.git
cd Chat-Application

---

⚙️ Setup Backend
cd backend
npm install
npm run dev

Add your .env file inside backend/
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

Your backend will now be running at:
👉 http://localhost:5000

---

🌐 Setup Frontend
cd ../frontend
npm install
npm start

Now your frontend is live at:
👉 http://localhost:3000


📁 Folder Structure
Chat-Application/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── App.js
│   └── ...
└── README.md

📬 Contact
For queries or collaboration, reach out to:

Kiran Warkad 
📧 Email: kiranwarkad1@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/kiran-warkad-9548a0336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 
🔗 GitHub: [github.com/kiranwarkad1](https://github.com/kiranwarkad1)

