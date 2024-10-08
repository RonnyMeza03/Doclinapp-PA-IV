import axios from "axios";

export const obtenerTareas = async () => 
  await axios.get("http://localhost:4000/paciente");

export const obtenerUsuariosRequest = async () => 
  await axios.get("http://localhost:4000/usuarios")

export const crearUsuarioRequest = async (usuario) => {
  await axios.post("http://localhost:4000/usuarios", usuario);
};

export const obtenerUsuarioPacientes = async (idUsuario) => {
  return await axios.get(`http://localhost:4000/usuarios/${idUsuario}/pacientes`)
}
