import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { obtenerPacientePorId } from '../../../api/paciente.api';
import { MdAddChart } from 'react-icons/md';

function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);

  const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura que el día tenga 2 dígitos
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0, por lo que sumamos 1
  const anio = fecha.getFullYear(); // Obtiene el año completo

  return `${dia}/${mes}/${anio}`;
}

const PacienteDetalles = () => {
  const { id } = useParams(); // Obtén el id del paciente desde los parámetros de la URL
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarDetallesPaciente() {
      try {
        const respuesta = await obtenerPacientePorId(id); // Aquí llamas a la API para obtener los detalles del paciente
        setPaciente(respuesta.data);
        console.log(respuesta.data)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    cargarDetallesPaciente();
  }, [id]);

  if (loading) {
    return <div>Cargando detalles del paciente...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Detalles del Paciente</h1>
      {paciente ? (
        <div>
          <p>Nombre: {paciente.nombre}</p>
          <p>Apellido: {paciente.apellido}</p>
          <p>Fecha de Nacimiento: {formatearFecha(paciente.fechaNacimiento)}</p>
          <p>correo: {paciente.correo}</p>
          <p>direccion: {paciente.direccion}</p>
          <p>sexo: {paciente.sexo}</p>
          <p>telefono: {paciente.telefono}</p>
        </div>
      ) : (
        <p>No se encontraron detalles para este paciente.</p>
      )}
      <Link to={`/Pacientes/${paciente.id}/crearAnalisis`}>
      {/*<FormularioAnalisis pacienteID = {paciente.id}/>*/}
        <MdAddChart></MdAddChart>
      </Link>
    </div>
  );
};

export default PacienteDetalles;
