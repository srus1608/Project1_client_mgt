# 🧑‍💼 Client Management App

A simple **Client Management System** built using **Angular** (frontend) and **Node.js + Express + MySQL** (backend).

---

## 🚀 Features

- Add new clients with project details
- View list of clients in a table
- Automatically assigns Client IDs
- Connected to MySQL database
- Simple UI using Bootstrap
- Fully functional Angular + Node + MySQL integration

---

## 🏗️ Project Structure

Client-project/
├── client-management-app/
│ ├── src/
│ │ ├── app/
│ │ │ ├── client-list/
│ │ │ │ ├── client-list.ts
│ │ │ │ ├── client-list.html
│ │ │ │ └── client-list.css
│ │ │ └── app.module.ts
│ │ ├── index.html
│ │ └── main.ts
│ └── angular.json
│
├── backend/
│ ├── server.js
│ └── routes/
│ └── clients.js
│
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/srus1608/client-management-app.git
cd client-management-app

## 2️⃣ Install Dependencies
Frontend (Angular)
cd client-management-app
npm install

## Backend (Node.js)
cd backend
npm install

## 3️⃣ Setup MySQL Database

Create a new database, e.g. clientdb

## Run this SQL:

CREATE TABLE clients (
  client_id INT AUTO_INCREMENT PRIMARY KEY,
  client_name VARCHAR(255),
  project_name VARCHAR(255),
  contact_email VARCHAR(255)
);


## Update your database credentials in backend/server.js:

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'clientdb'
});

## 4️⃣ Run the Application
Start the backend server:
cd backend
node server.js

## Start the Angular app:
cd client-management-app
ng serve


## Then open your browser at http://localhost:4200
