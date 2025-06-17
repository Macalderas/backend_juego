import express from "express";
import { guardarResultado, obtenerHistorial } from "../controllers/resultadosController.js";

const router = express.Router();

router.post("/", guardarResultado);
router.get("/", obtenerHistorial);

export default router;
