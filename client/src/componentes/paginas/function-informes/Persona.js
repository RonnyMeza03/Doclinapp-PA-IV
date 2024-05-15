import React from 'react';
import '../../css/informes.css';

const Persona = ({ nombre, apellido, edad, onClick }) => {
  return (
    <div className='info-people'>
      <li onClick={onClick}>
        <b>{nombre} {apellido}</b>
        <p className='age'>Edad: {edad}</p>
      </li>
    </div>
  );
};

export default Persona;