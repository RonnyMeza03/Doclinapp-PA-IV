import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { obtenerTareas } from '../../api/usuarios.api';
import { IoPersonAddOutline } from "react-icons/io5";

const Pacientes = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pacientes, setPacientes] = useState([]);
 
  // Datos simulados para pruebas cuando no se tenga base de datos
  const pacientesMock = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 45 },
    { id: 2, nombre: 'María', apellido: 'García', edad: 32 },
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', edad: 60 },
  ];

  useEffect(() => {
    async function cargarPacientes() {
      try {
        const respuesta = await obtenerTareas();
        setPacientes(respuesta.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar pacientes:", error);
        setError(error.message);
        setPacientes(pacientesMock);
        setLoading(false);
      }
    }
    cargarPacientes();
  }, []);

  if (loading) {
    return <div>Cargando pacientes...</div>;
  }

  const renderPacientesList = (listaPacientes) => (
    <ul>
      {listaPacientes.map((paciente) => (
        <li key={paciente.id}>
          <Link to={`/Pacientes/${paciente.id}`}>
            {paciente.nombre} {paciente.apellido} - {paciente.edad} años
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      {error ? (
        <div>
          <p>Error al cargar pacientes: {error}</p>
          <h2>Mostrando lista de pacientes de prueba:</h2>
          {renderPacientesList(pacientesMock)}
        </div>
      ) : pacientes.length === 0 ? (
        <p>No hay pacientes registrados.</p>
      ) : (
        renderPacientesList(pacientes)
      )}
      <div className="nuevo-paciente">
        <Link to={`/Pacientes/crear`}>
          <IoPersonAddOutline />
        </Link>
      </div>
    </div>
  );
};

export default Pacientes;