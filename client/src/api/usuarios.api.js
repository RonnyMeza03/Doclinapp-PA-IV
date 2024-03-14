import axios from "axios";

export const crearUsuarioRequest = async (usuario) => {
  await axios.post("http://localhost:5500/Usuarios", usuario);
};
