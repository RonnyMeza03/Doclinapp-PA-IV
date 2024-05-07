import { Router } from "express";
import {getUsuarioAnalisis} from "../controllers/informes.controller.js";


const router = Router();


router.get("/Analisis/:id", getUsuarioAnalisis);


export default router
