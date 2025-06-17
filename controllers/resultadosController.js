import { db } from "../db.js";

export const guardarResultado = (req, res) => {
  const { usuario, correctas, incorrectas } = req.body;
  const query = "INSERT INTO resultados (usuario, correctas, incorrectas) VALUES (?, ?, ?)";

  db.query(query, [usuario, correctas, incorrectas], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al guardar" });
    res.status(201).json({ id: result.insertId });
  });
};

export const obtenerHistorial = (req, res) => {
  db.query("SELECT * FROM resultados ORDER BY fecha DESC", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al obtener historial" });
    res.status(200).json(data);
  });
};
