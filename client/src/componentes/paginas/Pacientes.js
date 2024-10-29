import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonAddOutline, IoPersonCircleOutline } from "react-icons/io5";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaSave } from 'react-icons/fa';
import { obtenerPerfil, obtenerUsuarioPacientes } from '../../api/usuarios.api';
import { crearPacienteRequest } from '../../api/paciente.api';
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerPacientesGrupo } from '../../api/grupo.api';

function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
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

const ExcelPacienteSection = ({ listaPacientes, onGuardarPaciente }) => {
  // Validación de entrada
  if (!listaPacientes) {
    console.warn('ExcelPacienteSection: listaPacientes es undefined o null');
    return null;
  }

  // Asegurarse de que listaPacientes sea un array
  const pacientesArray = Array.isArray(listaPacientes) ? listaPacientes : [listaPacientes];

  if (pacientesArray.length === 0) {
    return null;
  }

  return (
    <>
      {pacientesArray.map((paciente, index) => {
        // Validación de paciente individual
        if (!paciente || typeof paciente !== 'object') {
          console.warn(`Paciente inválido en índice ${index}`);
          return null;
        }

        return (
          <section className="paciente-section" key={index}>
            <IoPersonCircleOutline className="paciente-logotipo" />
            <div className="paciente-info">
              <h2>
                {paciente.Nombre || paciente.nombre || "Nombre no disponible"}{' '}
                {paciente.Apellido || paciente.apellido || "Apellido no disponible"}{' '}
                {paciente.fechadenacimiento || paciente.fechaNacimiento || "Fecha no disponible"}
                <FaSave 
                  onClick={() => onGuardarPaciente(paciente)}
                  style={{ cursor: 'pointer', marginLeft: '10px' }}
                />
              </h2>
            </div>
          </section>
        );
      })}
    </>
  );
};

const Pacientes = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pacientes, setPacientes] = useState([]);
  const [data, setData] = useState([]);  // Inicializar como array vacío

  const pacientesMock = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', createdAt: "12/07/2024" },
    { id: 2, nombre: 'María', apellido: 'García', createdAt: "12/07/2024" },
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', createdAt: "12/07/2024" },
  ];

  const actualizarLocalStorage = useCallback((pacienteGuardado) => {
    const storedData = localStorage.getItem('jsonData');
    if (storedData) {
      try {
        let parsedData = JSON.parse(storedData);
        if (!Array.isArray(parsedData)) {
          console.error('Datos almacenados no son un array válido');
          return;
        }
        parsedData = parsedData.filter(p => 
          p.Nombre?.toLowerCase() !== pacienteGuardado.nombre?.toLowerCase() || 
          p.Apellido?.toLowerCase() !== pacienteGuardado.apellido?.toLowerCase()
        );
        localStorage.setItem('jsonData', JSON.stringify(parsedData));
        setData(parsedData);
      } catch (error) {
        console.error('Error al procesar datos del localStorage:', error);
      }
    }
  }, []);

  const cargarPacientes = useCallback(async () => {
    if (!isAuthenticated || isLoading || !user) {
      setLoading(false);
      return;
    }

    try {
      const storedData = localStorage.getItem('jsonData');
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setData(Array.isArray(parsedData) ? parsedData : []);
        } catch (error) {
          console.error('Error al parsear datos del localStorage:', error);
          setData([]);
        }
      }

      const respuesta = await obtenerUsuarioPacientes(user.sub);
      // Asegurarse de que todosPacientes sea siempre un array
      let todosPacientes = Array.isArray(respuesta.data) ? respuesta.data : [];
      console.log('Pacientes iniciales:', todosPacientes);

      // Obtener perfil del usuario
      const perfilData = await obtenerPerfil(user.sub);
      const perfil = perfilData.data;

      // Verificar si el usuario pertenece a un grupo
      if (perfil?.usuario?.nombreAplicacion?.id > 1) {
        try {
          const pacientesGruposData = await obtenerPacientesGrupo(perfil.usuario.nombreAplicacion.id);
          console.log('Pacientes del grupo:', pacientesGruposData);

          // Verificar y procesar pacientes del grupo
          if (pacientesGruposData?.data) {
            const pacientesGrupo = Array.isArray(pacientesGruposData.data) 
              ? pacientesGruposData.data 
              : [];

            console.log('Pacientes grupo procesados:', pacientesGrupo);

            // Crear un Set con los IDs existentes
            const pacientesIds = new Set(todosPacientes.map(p => p.id));

            // Agregar pacientes del grupo que no estén duplicados
            pacientesGrupo.forEach(paciente => {
              if (paciente.id && !pacientesIds.has(paciente.id)) {
                todosPacientes.push(paciente);
                pacientesIds.add(paciente.id);
              }
            });
          }
        } catch (grupoError) {
          console.error("Error al obtener pacientes del grupo:", grupoError);
        }
      }

      console.log('Todos los pacientes final:', todosPacientes);
      setPacientes(todosPacientes);
    } catch (error) {
      console.error("Error al cargar pacientes:", error);
      setError(error.message);
      setPacientes(pacientesMock);
    } finally {
      setLoading(false);
    }
  }, [user, isAuthenticated, isLoading]);

  useEffect(() => {
    cargarPacientes();
  }, [cargarPacientes]);

  const limpiarClavesJson = (json) => {
    const nuevoJson = {};
    for (const clave in json) {
      if (Object.prototype.hasOwnProperty.call(json, clave)) {
        const claveLimpia = clave
          .toLowerCase()
          .replace(/\s+/g, '')
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        nuevoJson[claveLimpia] = json[clave];
      }
    }
    return nuevoJson;
  };

  const guardarPacienteExcel = async (paciente) => {
    try {
      const pacienteJson = limpiarClavesJson(paciente);
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
      });
      actualizarLocalStorage(pacienteJson);
      await cargarPacientes();
    } catch (error) {
      console.error("Error al guardar Paciente:", error);
    }
  };

  if (loading) {
    return <div>Cargando pacientes...</div>;
  }

  const renderPacientesList = (listaPacientes) => (
    <div className="lista-pacientes">
      {Array.isArray(listaPacientes) && listaPacientes.map(paciente => (
        <PacienteSection key={paciente.id} paciente={paciente} />
      ))}
      
      <ExcelPacienteSection 
        listaPacientes={data} 
        onGuardarPaciente={guardarPacienteExcel}
      />
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
      ) : pacientes.length === 0 && (!data || data.length === 0) ? (
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
        <Link to="/Pacientes/excel">
          <RiFileExcel2Fill />
        </Link>
      </div>
    </div>
  );
};

export default Pacientes;