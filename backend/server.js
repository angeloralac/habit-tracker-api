const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const habitRoutes = require("./routes/habitRoutes");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/habits", habitRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado correctamente"))
  .catch(err => console.error("Error conectando a MongoDB:", err));

app.listen(5050, "0.0.0.0", () => {
  console.log("Servidor corriendo en http://localhost:5050");
});
