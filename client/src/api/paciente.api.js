import axios from "axios";

export const obtenerPacientePorId = async (id) => {
  return await axios.get(`http://localhost:4000/paciente/${id}`);
}
export const crearPacienteRequest = async (paciente) => {
  await axios.post("http://localhost:4000/paciente", paciente)

}

