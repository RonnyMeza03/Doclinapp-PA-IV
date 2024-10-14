import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonAddOutline } from "react-icons/io5";
import {obtenerUsuarioPacientes} from '../../api/usuarios.api';
import {useAuth0} from '@auth0/auth0-react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaSave } from 'react-icons/fa';
import { crearPacienteRequest } from '../../api/paciente.api';

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

  const actualizarLocalStorage = useCallback((pacienteGuardado) => {
    const storedData = localStorage.getItem('jsonData');
    if (storedData) {
      let parsedData = JSON.parse(storedData);
      // Filtramos el paciente que acabamos de guardar
      parsedData = parsedData.filter(p => 
        p.Nombre.toLowerCase() !== pacienteGuardado.nombre.toLowerCase() || 
        p.Apellido.toLowerCase() !== pacienteGuardado.apellido.toLowerCase()
      );
      localStorage.setItem('jsonData', JSON.stringify(parsedData));
      setData(parsedData);
    }
  }, []);

  const cargarPacientes = useCallback(async () => {
    if (!isAuthenticated || isLoading || !user) {
      return;
    }

    try {
      console.log(user.sub);
      const storedData = localStorage.getItem('jsonData');
      if (storedData) {
        setData(JSON.parse(storedData));
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
  }, [user, isAuthenticated, isLoading]);

  useEffect(() => {
    cargarPacientes();
  }, [cargarPacientes]);

  if (loading) {
    return <div>Cargando pacientes...</div>;
  }

  console.log(data)

  function limpiarClavesJson(json) {
    const nuevoJson = {};

    for (const clave in json) {
      const claveLimpia = clave
        .toLowerCase()
        .replace(/\s+/g, '')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      nuevoJson[claveLimpia] = json[clave];
    }
    return nuevoJson;
  }


  async function guardarPacienteExcel(paciente) {
    const pacienteJson = limpiarClavesJson(paciente)
    try {
      await crearPacienteRequest({
        nombre: pacienteJson.nombre,
        apellido: pacienteJson.apellido,
        correo: pacienteJson.correo,
        fechaNacimiento: "07/12/2000",
        sexo: pacienteJson.sexo,
        direccion: pacienteJson.direccion,
        telefono: pacienteJson.telefono,
        aplicacionID: 1,
        idAuth0: user.sub,
        usuarioId: 0
      })
      actualizarLocalStorage(pacienteJson)
      await cargarPacientes()
    } catch (error) {
      console.error("Error al guardar Paciente")
    }
  }

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
    if (!Array.isArray(listaPacientes) || listaPacientes.length === 0) {
      return 
    }
  
    return (
      <>
        {listaPacientes.map((paciente, index) => (
          <section className="paciente-section" key={index}>
            <IoPersonCircleOutline className="paciente-logotipo" />
            <div className="paciente-info">
              <h2>
                {paciente.Nombre || "Nombre no disponible"} 
                {paciente.Apellido || "Apellido no disponible"} 
                {paciente.fechadenacimiento || "Fecha no disponible"}
                <FaSave onClick={() => {guardarPacienteExcel(paciente)}}></FaSave>
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
        null
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