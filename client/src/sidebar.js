// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, onOptionSelect }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Doclinapp</h2>
      <ul>
        <li onClick={() => onOptionSelect('Inicio')}>Inicio</li>
        <li onClick={() => onOptionSelect('Usuarios')}>Usuarios</li>
        <li onClick={() => onOptionSelect('Medicamentos')}>Medicamentos</li>
        <li onClick={() => onOptionSelect('Tratamientos')}>Tratamientos</li>
        <li onClick={() => onOptionSelect('Balance')}>Balance</li>
        <li onClick={() => onOptionSelect('Ajustes')}>Ajustes</li>
      </ul>
    </div>
  );
};

export default Sidebar;
