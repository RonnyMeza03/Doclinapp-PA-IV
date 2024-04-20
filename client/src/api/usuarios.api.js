import axios from "axios";

export const obtenerTareas = async () => 
  await axios.get("http://localhost:5500/Usuarios");


export const crearUsuarioRequest = async (usuario) => {
  await axios.post("http://localhost:5500/Usuarios", usuario);
};
