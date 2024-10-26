import axios from "axios";

export const crearGrupoRequest = async (grupo) => {
    await axios.post("http://localhost:4000/aplicacion", grupo)
}