import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonAddOutline } from "react-icons/io5";
import {obtenerUsuarioPacientes} from '../../api/usuarios.api';
import {useAuth0} from '@auth0/auth0-react';
import { IoPersonCircleOutline } from "react-icons/io5"; // Ícono para el logotipo de cada paciente
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaSave } from 'react-icons/fa';

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
  const [data, setData] = useState()
 
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
        const storedData = localStorage.getItem('jsonData');
        if (storedData){
          setData(JSON.parse(storedData))
        }
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

  console.log(data)

  const PacienteSection = ({ paciente }) => (
    <section className="paciente-section" key={paciente.id}>
      <IoPersonCircleOutline className="paciente-logotipo" />
      <Link to={`/Pacientes/${paciente.id}`} className="paciente-info">
        <h2>{paciente.nombre} {paciente.apellido}</h2>
        {paciente.createdAt && <p>Fecha de creación: {formatearFecha(paciente.createdAt)}</p>}
      </Link>
    </section>
  );
  
  const ExcelPacienteSection = ({ listaPacientes = [] }) => {
    // Check if listaPacientes is an array and not empty
    if (!Array.isArray(listaPacientes) || listaPacientes.length === 0) {
      return (
        <section className="paciente-section">
          <IoPersonCircleOutline className="paciente-logotipo" />
          <div className="paciente-info">
            <h2>No hay pacientes disponibles desde Excel</h2>
          </div>
        </section>
      );
    }
  
    return (
      <>
        {listaPacientes.map((paciente, index) => (
          <section className="paciente-section" key={index}>
            <IoPersonCircleOutline className="paciente-logotipo" />
            <div className="paciente-info">
              <h2>
                {paciente.Nombre || "Nombre no disponible"} {paciente.Apellido || "Apellido no disponible"}
                <FaSave></FaSave>
              </h2>
            </div>
          </section>
        ))}
      </>
    );
  };
  
  
  const renderPacientesList = (listaPacientes) => (
    <div className="lista-pacientes">
      {listaPacientes.map(paciente => (
        <PacienteSection key={paciente.id} paciente={paciente} />
      ))}
  
      {data && data.length > 0 ? (
        <ExcelPacienteSection listaPacientes={data} />
      ) : (
        <h2>No hay pacientes cargados desde Excel</h2>
      )}
    </div>
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
      <div className='nuevo-paciente'>
        <Link to= {"/Pacientes/excel"}>
          <RiFileExcel2Fill />
        </Link>
      </div>
    </div>
  );
};

export default Pacientes;