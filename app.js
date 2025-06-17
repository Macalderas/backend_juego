import express from "express";
import cors from "cors";
import resultadosRoutes from "./routes/resultados.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/resultados", resultadosRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
