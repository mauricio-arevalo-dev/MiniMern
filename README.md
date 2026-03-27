# 🚀 Mini MERN - Task Manager App

![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow)

Aplicación web full stack desarrollada con el stack **MERN** que permite gestionar tareas de forma eficiente mediante un sistema CRUD completo.

---

## ✨ Demo

🔗 *(Próximamente desplegado en la nube)*

---

## 📌 Funcionalidades

* ✅ Crear nuevas tareas
* 📋 Visualizar lista de tareas
* ✏️ Editar tareas existentes
* 🔄 Marcar tareas como completadas
* ❌ Eliminar tareas
* ⚡ Actualización en tiempo real

---

## 🧠 Arquitectura

El proyecto está dividido en dos capas principales:

* **Frontend (React + Vite)** → Interfaz de usuario
* **Backend (Node.js + Express)** → API REST
* **Base de datos (MongoDB)** → Persistencia de datos

---

## 🛠️ Tecnologías utilizadas

### 🔧 Backend

* Node.js
* Express
* MongoDB
* Mongoose

### 🎨 Frontend

* React
* Vite
* Axios

---

## 📂 Estructura del proyecto

```id="yb52hl"
MiniMern/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api/
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar repositorio

```id="9d16g0"
git clone https://github.com/mauricio-arevalo-dev/MiniMern.git
cd MiniMern
```

---

### 2️⃣ Configurar variables de entorno

Crear un archivo `.env` en el backend:

```id="6v0s3r"
MONGODB_URI=mongodb://localhost/minimern
PORT=4000
```

---

### 3️⃣ Ejecutar backend

```id="8z8f0z"
cd backend
npm install
npm run dev
```

---

### 4️⃣ Ejecutar frontend

```id="n6yl16"
cd frontend
npm install
npm run dev
```

---

## 🌐 Uso

* Frontend: http://localhost:5173
* Backend API: http://localhost:4000/api/task

---

## 📸 Vista previa

👉 *Agrega aquí una captura de pantalla o GIF de tu app*

---

## 🧪 Endpoints principales

```id="bnxb1q"
GET    /api/task        → Obtener tareas
POST   /api/task        → Crear tarea
PUT    /api/task/:id    → Actualizar tarea
DELETE /api/task/:id    → Eliminar tarea
```

---

## 🎯 Aprendizajes clave

* 🔗 Integración frontend-backend
* ⚡ Consumo de APIs con Axios
* 🧠 Manejo de estado en React
* 🗄️ Modelado de datos con MongoDB
* 🏗️ Arquitectura de aplicaciones Full Stack

---

## 🚀 Mejoras futuras

* 🔐 Autenticación de usuarios
* 🌐 Deploy en la nube (Render / Vercel)
* 🎨 Mejoras de UI/UX
* 📱 Diseño responsive
* 🔍 Filtros y búsqueda de tareas

---

## 👨‍💻 Autor

**Mauricio Arevalo**
🔗 https://github.com/mauricio-arevalo-dev

---

## ⭐ Apóyame

Si este proyecto te fue útil o te gustó:

👉 Dale una ⭐ al repositorio
