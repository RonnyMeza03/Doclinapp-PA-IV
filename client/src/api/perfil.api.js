import axios from "axios";

export const crearPerfilRequest = async (perfil) => {
    await axios.post(`http://localhost:4000/perfil`, perfil)
}

export const cambiarAPremiun =  async (perfil) => {
    await axios.patch(`http://localhost:4000/perfil`, perfil)
}

export const obtenerPacientesPerfil = async (idPerfil) => {
    return await axios.get(`http://localhost:4000/paciente/perfil/${idPerfil}`)
}

export const actualizarPerfil = async (idPerfil, perfil) => {
    return await axios.patch(`http://localhost:4000/perfil/${idPerfil}`, perfil)
}