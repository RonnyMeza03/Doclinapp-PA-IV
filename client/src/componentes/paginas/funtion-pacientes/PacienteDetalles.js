import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { obtenerPacientePorId } from '../../../api/paciente.api';
import { MdAddChart, MdEmail, MdLocationOn, MdPerson, MdPhone, MdEvent, MdWc } from 'react-icons/md';
import '../../css/PacienteDetalles.css';

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
        console.log(respuesta.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Siempre se ejecuta al final
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
    <>
      <section className="detalles-paciente-container">
        <h1>Detalles del Paciente</h1>
        {paciente ? (
          <div className="info-paciente">
            <div className="detalle-item">
              <MdPerson className="icono" />
              <p>Nombre: {paciente.nombre}</p>
            </div>
            <div className="detalle-item">
              <MdPerson className="icono" />
              <p>Apellido: {paciente.apellido}</p>
            </div>
            <div className="detalle-item">
              <MdEvent className="icono" />
              <p>Fecha de Nacimiento: {formatearFecha(paciente.fechaNacimiento)}</p>
            </div>
            <div className="detalle-item">
              <MdEmail className="icono" />
              <p>Correo: {paciente.correo}</p>
            </div>
            <div className="detalle-item">
              <MdLocationOn className="icono" />
              <p>Dirección: {paciente.direccion}</p>
            </div>
            <div className="detalle-item">
              <MdWc className="icono" />
              <p>Sexo: {paciente.sexo}</p>
            </div>
            <div className="detalle-item">
              <MdPhone className="icono" />
              <p>Teléfono: {paciente.telefono}</p>
            </div>
          </div>
        ) : (
          <p>No se encontraron detalles para este paciente.</p>
        )}
      </section>
  
 
      {paciente && (
        <section className="boton-crear-container">
          <Link to={`/Pacientes/${paciente.id}/crearAnalisis`} className="link">
            <MdAddChart className="icono" /> Crear Análisis
          </Link>
        </section>
      )}
    </>
  );
  
};

export default PacienteDetalles;

