const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const habitRoutes = require("./routes/habitRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado correctamente");

    app.listen(5050, "0.0.0.0", () => {
      console.log("Servidor corriendo en http://localhost:5050");
    });
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
}

startServer();
