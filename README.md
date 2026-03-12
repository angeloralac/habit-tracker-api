# Habit Tracker API - Semana 1
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


# Habit Tracker API - Semana 2
Actividad Unidad 2 – Programación Avanzada  
Semana 2 

## Descripción del Proyecto

Esta aplicación es una API REST desarrollada en Express.js conectada a una base de datos MongoDB Atlas mediante Mongoose.

Permite gestionar hábitos realizando operaciones CRUD:
- Crear hábitos
- Consultar hábitos
- Actualizar hábitos
- Eliminar hábitos

---

## Tecnologías agregadas

- Next.js
- Redux Toolkt
- React-redux
- Integración de request GET con el backend
- Separación de proyectos

---

## Ejecución del Proyecto

## Backend
1. Entrar en la carpeta backend
2. Instalar dependencias:

3. Crear el archivo .env
4. Ejecutar el servidor node server.js

## Frontend
1. Entrar en la carpeta frontend
2. Instalar dependencias
3. Ejecutar el servidor


---

## Funcionalidades Implementadas

- Configuración inicial de Next.js
- Integración de Redux
- Request GET 
- Conexion a MongoDB Atlas

# Habit Tracker API - Semana 4
## Actividad Unidad 4 – Programación Avanzada
### Semana 4

## Descripción del Proyecto
En esta semana se trabajó el backend del proyecto Habit Tracker agregando autenticación de usuarios, encriptación de contraseñas con hash y lógica de seguimiento de hábitos por días. También se implementó la funcionalidad para marcar hábitos como completados y reiniciar o aumentar la racha según corresponda.

## Tecnologías agregadas
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- dotenv

## Ejecución del Proyecto
### Backend
1. Entrar en la carpeta `backend`
2. Instalar dependencias con `npm install`
3. Crear o revisar el archivo `.env` con la variable `MONGO_URI`
4. Ejecutar el servidor con `npm run dev`

## Funcionalidades Implementadas
- Registro de usuario
- Login de usuario
- Contraseña almacenada con hash
- Conexión a MongoDB Atlas
- Creación de hábitos
- Endpoint para marcar hábito como completado
- Lógica de racha diaria
- Reinicio de racha si no se cumple en el día correspondiente
- Validación para no marcar dos veces el mismo día
