import axios from "axios";

export const obtenerAnalisis = async (id) => {
   return await axios.get(`http://localhost:4000/analisis/${id}`);
};


