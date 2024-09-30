import axios from "axios";

export const obtenerTareas = async () => 
  await axios.get("http://localhost:4000/paciente");


export const crearUsuarioRequest = async (usuario) => {
  await axios.post("http://localhost:4000/usuarios", usuario);
};
