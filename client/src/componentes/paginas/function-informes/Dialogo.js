import React from 'react';
import '../../css/informes.css';

const Dialogo = ({ personaSeleccionada, onClose }) => {
  return (
    <div className="dialogo-container">
      <h2>{personaSeleccionada.nombre}</h2>
      <p className='jump'><strong>Edad:</strong> {personaSeleccionada.edad}</p>
      <p className='jump'><strong>Dirección:</strong> {personaSeleccionada.direccion}</p>
      <p className='jump'><strong>Teléfono:</strong> {personaSeleccionada.telefono}</p>
      <p className='jump'><strong>Email:</strong> {personaSeleccionada.email}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Dialogo;