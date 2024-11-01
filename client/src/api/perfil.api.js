import axios from "axios";

export const crearPerfilRequest = async (perfil) => {
    await axios.post(`http://localhost:4000/perfil`, perfil)
}

export const cambiarAPremiun =  async (perfil) => {
    await axios.patch(`http://localhost:4000/perfil`, perfil)
}
