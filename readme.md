# 💬 Real-Time Chat Application (MERN Stack)

A robust full-stack real-time messaging application built using the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.io**. This app features secure authentication, instant messaging, global state management, and a modern responsive UI.

## 🚀 Live Demo
- **Frontend (Vercel):** [Link to your Vercel App](https://your-frontend.vercel.app)
- **Backend (Render):** [Link to your Render App](https://your-backend.onrender.com)

---

## ✨ Features
- **Real-time Messaging:** Instant sending and receiving of messages using Socket.io.
- **User Authentication:** Secure Signup, Login, and Logout using JWT and BCrypt.
- **Online Status:** Real-time online/offline status updates for users.
- **Global State Management:** Efficient state handling using Redux Toolkit.
- **Responsive UI:** Modern design built with Tailwind CSS and DaisyUI.
- **Search Functionality:** Filter and search for users to start conversations.
- **Secure Routes:** Protected routes to prevent unauthorized access.

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js:** UI Library
- **Redux Toolkit:** State Management
- **Tailwind CSS:** Styling Framework
- **DaisyUI:** Component Library
- **Socket.io-client:** Real-time client connection
- **Axios:** HTTP Requests
- **React Router:** Navigation

### **Backend**
- **Node.js:** Runtime Environment
- **Express.js:** Web Framework
- **MongoDB:** Database (Mongoose ODM)
- **Socket.io:** Real-time Engine
- **JWT (JSON Web Token):** Authentication
- **Bcryptjs:** Password Hashing
- **Cookie-Parser:** Cookie handling

---

## 📂 Project Structure

```bash
chat-application/
├── backend/                # Backend Server Code
│   ├── config/             # Database connection
│   ├── controllers/        # Logic for Users and Messages
│   ├── middleware/         # Auth Middleware
│   ├── models/             # Mongoose Schemas (User, Message, Conversation)
│   ├── routes/             # API Routes
│   ├── socket/             # Socket.io configuration
│   ├── index.js            # Server Entry point
│   └── ...
├── frontend/               # Frontend React Code
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable UI Components
│   │   ├── hooks/          # Custom React Hooks
│   │   ├── redux/          # Redux Slices and Store
│   │   ├── App.js          # Main Component
│   │   └── ...
│   └── ...
└── README.md
```
## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```
git clone [https://github.com/your-username/chat-application.git](https://github.com/your-username/chat-application.git)
cd chat-application
```

### 2. Backend Setup

Navigate to the backend folder and install dependencies.

```
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key_here
```

Start the backend server:

```
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend folder, and install dependencies.

```
cd ../frontend
npm install
```

Start the React application:

```
npm start
```

Your app should now be running on `http://localhost:3000`.

---

## 🔌 API Endpoints

### **User Routes**

|**Method**|**Endpoint**|**Description**|
|---|---|---|
|`POST`|`/api/v1/user/register`|Register a new user|
|`POST`|`/api/v1/user/login`|Login user and set cookie|
|`GET`|`/api/v1/user/logout`|Logout user and clear cookie|
|`GET`|`/api/v1/user/`|Get all users (except self)|

### **Message Routes**

|**Method**|**Endpoint**|**Description**|
|---|---|---|
|`POST`|`/api/v1/message/send/:id`|Send a message to a specific user|
|`GET`|`/api/v1/message/:id`|Get chat history with a specific user|

---

## 🚀 Deployment

### **Backend (Render)**

1. Push code to GitHub.
    
2. Create a **Web Service** on Render.
    
3. Connect your repository and set Root Directory to `backend`.
    
4. Add Environment Variables (`MONGO_URI`, `JWT_SECRET_KEY`).
    
5. Build Command: `npm install` | Start Command: `node index.js`.
    

### **Frontend (Vercel)**

1. Push code to GitHub.
    
2. Import project in Vercel.
    
3. Set Root Directory to `frontend`.
    
4. Deploy!
    

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

1. Fork the Project
    
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
    
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
    
4. Push to the Branch (`git push origin feature/AmazingFeature`)
    
5. Open a Pull Request
    

---

### 👤 Author

**Your Name**

- LinkedIn: [Link](https://www.linkedin.com/in/akhandps1/)
    
- GitHub: [Link](https://github.com/akhandps1)
