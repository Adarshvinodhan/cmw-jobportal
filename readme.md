# 🌐 CMW Jobs – Job Portal

A full-stack **job portal application** built using **React** (frontend) and **Node.js with Express & MongoDB** (backend).  
This is a **monorepo** containing both the client and server code for easier development and deployment.

---

## 📁 Project Structure

cmw-jobs/ ├── client/ # React frontend ├── server/ # Node.js backend with Express & MongoDB ├── package.json # Root scripts and metadata

yaml
Copy
Edit

---

## 🧪 Sample `.env` Configuration

Create a `.env` file inside the `server/` folder (and optionally inside `client/` for frontend env variables):

PORT=**** MONGO_URI=***************** VITE_API_URI=*********************

yaml
Copy
Edit

---

## 📜 Scripts

### Backend (Node.js)
```bash
npm run start
Frontend (React - inside client folder)
bash
Copy
Edit
npm run dev
🚀 To Deploy
bash
Copy
Edit
# Clone the repository
git clone https://github.com/adarshvinodhan/cmw-joportal.git
cd cmw-jobs

# Build both frontend and backend dependencies
npm run build
📦 Technologies Used
Frontend: React, Vite, Axios, Tailwind ,lucide-react

Backend: Node.js, Express.js, MongoDB, Mongoose

Tools: dotenv, cors

🧑‍💻 Author
Adarsh Vinodhan
