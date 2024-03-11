import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "SELECT * FROM usuarios ORDER BY createAt ASC"
    );
    console.log(resultado);
    res.json(resultado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getUsuario = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "SELECT * FROM usuarios WHERE  id = ?",
      [req.params.id]
    );
    if (resultado.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(resultado[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const crearUsuario = async (req, res) => {
  try {
    console.log(req.body);
    const { nombre, apellido } = req.body;
    const [resultado] = await pool.query(
      "INSERT INTO usuarios(nombre, apellido) VALUES (? , ?)",
      [nombre, apellido]
    );
    console.log(resultado);
    res.json({
      id: resultado.insertId,
      nombre,
      apellido,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const actualizarUsuario = async (req, res) => {
  try {
    const [resultado] = await pool.query("UPDATE usuarios SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(resultado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const borrarUsuario = async (req, res) => {
  try {
    const [resultado] = await pool.query("DELETE FROM usuarios WHERE id = ?", [
        req.params.id,
      ]);
      console.log(resultado);
      if (resultado.affectedRows === 0) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
