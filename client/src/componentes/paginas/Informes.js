import React, { useEffect,useState } from 'react';
import Persona from '../paginas/function-informes/Persona';
import Dialogo from '../paginas/function-informes/Dialogo';
import '../css/informes.css';
import {obtenerTareas} from "../../api/usuarios.api";
import { useNavigate } from 'react-router-dom';

const Informes = () => {
  const [dialogoVisible, setDialogoVisible] = useState(false);
  const [filtradorVisible, setFiltradorVisible] = useState(true);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true);
  const [busqueda, setBusqueda] = useState(''); 
  const [ordenEdad, setOrdenEdad] = useState('ascendente'); 
  const [sexo, setSexo] = useState('todos'); 
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate()

  useEffect(() => {
    async function cargarUsuarios() {
      try {
        const respuesta = await obtenerTareas();
        setUsuarios(respuesta.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    cargarUsuarios();
  }, []);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Usuarios:", usuarios); 

  const handleClick = (id) => {
    navigate(`/informes/${id}`)
  }


  const abrirDialogo = (id) => {
    const persona = usuarios.find((p) => p.id === id);
    setPersonaSeleccionada(persona);
    setDialogoVisible(true);
    setMostrarLista(false);
    setFiltradorVisible(false);
    handleClick(id)
  };

  const cerrarDialogo = () => {
    setDialogoVisible(false);
    setPersonaSeleccionada(null);
    setMostrarLista(true);
    setFiltradorVisible(true);
  };

  const filtrarPorNombre = () => {
    const busquedaSinEspacios = busqueda.trim();
    if (busquedaSinEspacios === "") {
      return usuarios;
    } else {
      return usuarios.filter((usuario) => {
        const nombreCompleto =
          `${usuario.nombre} ${usuario.apellido}`.toLowerCase();
        return nombreCompleto.includes(busquedaSinEspacios.toLowerCase());
      });
    }
  };
  
  const ordenarPorEdad = (usuarios) => {
    return usuarios.sort((a, b) => {
      if (ordenEdad === 'ascendente') {
        return a.edad - b.edad;
      } else {
        return b.edad - a.edad;
      }
    });
  };
  
  const filtrarPorSexo = (usuarios) => {
    if (sexo === 'todos') {
      return usuarios;
    } else {
      return usuarios.filter(usuario => usuario.sexo === sexo);
    }
  };

  return (
    <div className="informes-container">
      {filtradorVisible && (
        <>
          {" "}
          <h1>Informes</h1>
          <label htmlFor="busqueda" className="label-small">
            Buscar por nombre:
          </label>
          <input
            id="busqueda"
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <label htmlFor="ordenEdad" className="label-small">
            {" "}
            Ordenar por edad:
          </label>
          <select
            id="ordenEdad"
            value={ordenEdad}
            onChange={(e) => setOrdenEdad(e.target.value)}
          >
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
          </select>
          <label htmlFor="sexo" className="label-small">
            {" "}
            Filtrar por sexo:
          </label>
          <select
            id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
          {mostrarLista && (
            <ul>
              {filtrarPorSexo(ordenarPorEdad(filtrarPorNombre())).map(
                (usuario) => (
                  <Persona
                    key={usuario.id}
                    nombre={usuario.nombre}
                    apellido={usuario.apellido}
                    edad={usuario.edad}
                    onClick={() => abrirDialogo(usuario.id)}
                  />
                )
              )}
            </ul>
          )}
        </>
      )}
      {dialogoVisible && (
        <Dialogo
          personaSeleccionada={personaSeleccionada}
          onClose={cerrarDialogo}
        />
      )}
    </div>
  );
};

export default Informes;
