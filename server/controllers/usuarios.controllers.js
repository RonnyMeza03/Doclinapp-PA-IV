import { pool } from "../db.js";
import Paciente from "../model/Paciente.js";

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
    const { nombre, 
      apellido ,
      sexo,
      edad,
      sistolica,
      ldl,
      hdl,
      trigriceridos,
      familiares,
      enfermedades,
      fumar,
      alcohol,
      dieta,
      actividad,
      masa,
      glucosa,
      colesterol,
      diastolica,
      altura
    } = req.body;

    const paciente = new Paciente(nombre,apellido,edad,sexo,sistolica,ldl,hdl,trigriceridos,familiares,enfermedades,fumar,
      alcohol,dieta,actividad,masa,glucosa,colesterol,diastolica,altura
    )
    console.log(paciente)

    const hipertension = paciente.analisarPaciente().hipertension
    const hiperlipidemia = paciente.analisarPaciente().hiperlipidemia
    const coronaria = paciente.analisarPaciente().coronaria

    const [resultado] = await pool.query(
      "INSERT INTO usuarios(nombre, apellido, sexo, edad, sistolica, ldl, hdl, trigriceridos, familiares, enfermedades, fumar, alcohol, dieta, actividad, masa, glucosa, colesterol, diastolica,altura) VALUES (? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?,? )",
      [nombre, 
        apellido,
        sexo,
        edad,
        sistolica,
        ldl,
        hdl,
        trigriceridos,
        familiares,
        enfermedades,
        fumar,
        alcohol,
        dieta,
        actividad,
        masa,
        glucosa,
        colesterol,
        diastolica,
        altura
      ]
    );

    const [usuarioId] = await pool.query(
      "SELECT id FROM usuarios ORDER BY createAt DESC LIMIT 1;"
    )

    const valoresValidos = [
      usuarioId[0].id,
      isNaN(hipertension) ? 0 : hipertension,
      isNaN(hiperlipidemia) ? 0 : hiperlipidemia,
      isNaN(coronaria) ? 0 : coronaria
  ];

    const [analisis] = await pool.query(
      "INSERT INTO analisis(id_usuario, hipertension, hiperlipidemia,coronaria) VALUES(?,?,?,?)", valoresValidos
    )
    console.log(analisis)
    console.log(resultado);
    res.json({
      id: resultado.insertId,
      nombre,
      apellido,
      sexo,
      edad,
      sistolica,
      ldl,
      hdl,
      trigriceridos,
      familiares,
      enfermedades,
      fumar,
      alcohol,
      dieta,
      actividad,
      masa,
      glucosa,
      colesterol,
      diastolica
    });
  } catch (error) {
    console.log(error)
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
