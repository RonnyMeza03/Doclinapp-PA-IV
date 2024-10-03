import axios from "axios";

export const obtenerAnalisis = async (id) => {
   return await axios.get(`http://localhost:4000/paciente/${id}/analisis`);
};

export const generarAnalisisRequest = async (analisis) => {
   await axios.post("http://localhost:4000/analisis", analisis)
}


