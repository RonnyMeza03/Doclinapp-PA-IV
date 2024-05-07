import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import analisisRoutes from "./routes/analisis.routes.js"

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(indexRoutes);
app.use(usuariosRoutes);
app.use(analisisRoutes)
app.listen(PORT);
console.log("Server is running on port " + PORT);
