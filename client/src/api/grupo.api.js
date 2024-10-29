import axios from "axios";

export const crearGrupoRequest = async (grupo) => {
    await axios.post("http://localhost:4000/aplicacion", grupo)
}

export const obtenerMiembros = async  (idGrupo) => {
    return await axios.get(`http://localhost:4000/aplicacion/${idGrupo}/usuarios`)
}

export const agregarMiembro =  async (grupo) => {
    return await axios.patch(`http://localhost:4000/usuarios`, grupo)
}

export const obtenerPacientesGrupo = async (idGrupo) => {
    return await axios.get(`http://localhost:4000/aplicacion/${idGrupo}/pacientes`)
}

