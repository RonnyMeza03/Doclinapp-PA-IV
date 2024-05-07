import React, { useEffect,useState } from 'react';
import Persona from '../paginas/function-informes/Persona';
import Dialogo from '../paginas/function-informes/Dialogo';
import '../css/informes.css';
import {obtenerTareas} from "../../api/usuarios.api";
import { useNavigate } from 'react-router-dom';

const Informes = () => {
  const [dialogoVisible, setDialogoVisible] = useState(false);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true); // Nuevo estado
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

  console.log("Usuarios:", usuarios); // Agregado para verificar los datos de usuario

  const handleClick = (id) => {
    navigate(`/informes/${id}`)
  }


  const abrirDialogo = (id) => {
    const persona = usuarios.find(p => p.id === id);
    setPersonaSeleccionada(persona);
    setDialogoVisible(true);
    setMostrarLista(false); // Ocultar la lista al abrir el diálogo
    handleClick(id)
  };

  const cerrarDialogo = () => {
    setDialogoVisible(false);
    setPersonaSeleccionada(null);
    setMostrarLista(true); // Mostrar la lista al cerrar el diálogo
  };

  return (
    <div className='informes-container'>
      <h1>Informes</h1>
      {mostrarLista && ( // Renderizar la lista solo si mostrarLista es true
        <ul>
          {usuarios.map((usuarios) => (
            <Persona key={usuarios.id} id= {usuarios.id} nombre={usuarios.nombre} apellido={usuarios.apellido} edad={usuarios.edad} onClick={() => abrirDialogo(usuarios.id)} />
          ))}
        </ul>
      )}
      {dialogoVisible && (
        <Dialogo personaSeleccionada={personaSeleccionada} onClose={cerrarDialogo} />
      )}
    </div>
  );
};

export default Informes;