import React, { useState } from 'react';
import Persona from '../paginas/function-informes/Persona';
import Dialogo from '../paginas/function-informes/Dialogo';
import '../css/informes.css';

const Informes = () => {
  const [dialogoVisible, setDialogoVisible] = useState(false);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true); // Nuevo estado

  const personas = [
    { id: 1, nombre: 'Ronny Meza', edad: 20, direccion: 'No sé', telefono: '2382137123', email: 'ronny@gmail.com' },
    { id: 2, nombre: 'Gabriel Elías Valdelamar Caldera', edad: 20, direccion: 'Torices', telefono: '3024224758', email: 'gabriel@gmail.com' },
    { id: 3, nombre: 'Diego Andrés Seña Torres', edad: 20, direccion: 'No sé', telefono: '123123123', email: 'diego@gmail.com' },
    { id: 4, nombre: 'Oscar David Cantillo', edad: 24, direccion: 'Zaragocilla', telefono: '213123123123', email: 'oscar@gmail.com' },
  ];

  const abrirDialogo = (id) => {
    const persona = personas.find(p => p.id === id);
    setPersonaSeleccionada(persona);
    setDialogoVisible(true);
    setMostrarLista(false); // Ocultar la lista al abrir el diálogo
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
          {personas.map((persona) => (
            <Persona key={persona.id} nombre={persona.nombre} edad={persona.edad} onClick={() => abrirDialogo(persona.id)} />
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