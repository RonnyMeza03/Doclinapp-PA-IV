import { pool } from "../db.js";
import Paciente from "../model/Paciente.js";

export const getUsuarioAnalisis = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "SELECT * FROM usuarios WHERE  id = ?",
      [req.params.id]
    );
    if (resultado.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const pacienteEncontrado = new Paciente(
      resultado[0].nombre,
      resultado[0].apellido,
      resultado[0].edad,
      resultado[0].sexo,
      resultado[0].sistolica,
      resultado[0].ldl,
      resultado[0].hdl,
      resultado[0].trigriceridos,
      resultado[0].familiares,
      resultado[0].enfermedades,
      resultado[0].fumar,
      resultado[0].alcohol,
      resultado[0].dieta,
      resultado[0].actividad,
      resultado[0].masa,
      resultado[0].glucosa,
      resultado[0].colesterol,
      resultado[0].diastolica
    );
    console.log(pacienteEncontrado);
    res.json(pacienteEncontrado.analisarPaciente());
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
