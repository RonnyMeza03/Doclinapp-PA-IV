import { Router } from "express";
import {
  getUsuario,
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.get("/Usuarios", getUsuarios);

router.get("/Usuarios/:id", getUsuario);

router.post("/Usuarios", crearUsuario);

router.put("/Usuarios/:id", actualizarUsuario);

router.delete("/Usuarios/:id", borrarUsuario);

export default router
