import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonAddOutline } from "react-icons/io5";
import {obtenerUsuarioPacientes} from '../../api/usuarios.api';
import {useAuth0} from '@auth0/auth0-react';

function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);

  const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura que el día tenga 2 dígitos
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0, por lo que sumamos 1
  const anio = fecha.getFullYear(); // Obtiene el año completo

  return `${dia}/${mes}/${anio}`;
}

const Pacientes = () => {
  const {user, isAuthenticated, isLoading} = useAuth0()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pacientes, setPacientes] = useState([]);
 
  // Datos simulados para pruebas cuando no se tenga base de datos
  const pacientesMock = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', createdAt: "12/07/2024" },
    { id: 2, nombre: 'María', apellido: 'García', createdAt: "12/07/2024" },
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', createdAt: "12/07/2024" },
  ];

  useEffect(() => {
    async function cargarPacientes() {

      if (!isAuthenticated || isLoading || !user){
        return
      }

      try {
        console.log(user.sub)
        const respuesta = await obtenerUsuarioPacientes(user.sub);
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
  }, [user.sub, isAuthenticated, user]);

  if (loading) {
    return <div>Cargando pacientes...</div>;
  }

  const renderPacientesList = (listaPacientes) => (
    <ul>
      {listaPacientes.map((paciente) => (
        <li key={paciente.id}>
          <Link to={`/Pacientes/${paciente.id}`}>
            {paciente.nombre} {paciente.apellido} - Fecha de creacion: {formatearFecha(paciente.createdAt)}
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