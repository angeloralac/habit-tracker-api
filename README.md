# Habit Tracker API
Actividad Unidad 1 – Programación Avanzada  
Semana 1  

## Descripción del Proyecto

Esta aplicación es una API REST desarrollada en Express.js conectada a una base de datos MongoDB Atlas mediante Mongoose.

Permite gestionar hábitos realizando operaciones CRUD:
- Crear hábitos
- Consultar hábitos
- Actualizar hábitos
- Eliminar hábitos

---

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Nodemon

---

## Instalación del Proyecto

1. Clonar el repositorio
2. Instalar dependencias:

npm install

---

## Configuración del archivo .env

Crear un archivo .env en la raíz del proyecto con la siguiente variable:

MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/habitDB

Reemplazar usuario y password con las credenciales reales de MongoDB Atlas.

---

## Ejecutar el Proyecto

Modo desarrollo:

npm run dev

Modo normal:

node server.js

El servidor correrá en:

http://localhost:3000

---

## Endpoints

### Crear hábito
POST /api/habits

### Obtener hábitos
GET /api/habits

### Actualizar hábito
PUT /api/habits/:id

### Eliminar hábito
DELETE /api/habits/:id

---

## Conceptos Aplicados

- Enrutamiento modular con express.Router()
- Conexión a MongoDB con Mongoose
- Uso de variables de entorno con dotenv
- Arquitectura básica backend

---

## Autor

Nombre: Angelo Ralac - 1210086 
Curso: Programación Avanzada  
Semana: 1