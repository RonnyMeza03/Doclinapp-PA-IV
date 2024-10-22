import axios from "axios";

export const crearPerfilRequest = async (perfil) => {
    await axios.post(`http://localhost:4000/perfil`, perfil)
}