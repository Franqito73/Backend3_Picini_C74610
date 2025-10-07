import mongoose from "mongoose";
import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB conectado');
  app.listen(PORT, () => console.log(`Servidor corriendo http://localhost:${PORT}`));
})
.catch(err => console.error('Error de conexion a MongoDB:', err));