import React from 'react';
import '../../css/informes.css';
import userIMG from '../../imagenes/user-solid.jpg';

const Persona = ({ nombre, apellido, edad, creado, onClick }) => {
  return (
    <li className="info-persona" onClick={onClick}>
        <img src={userIMG} alt={nombre + '' + apellido} title={nombre + '' + apellido}/>
        <div className='person-text'>
          <div className='person-text-left'>
            <b className='name-person'>{nombre} {apellido}</b>
            <p className='age-person'>{edad} Años.</p>
          </div>
          <div className='person-text-right'>
            <p className='fecha-creacion'>{creado}</p>
          </div>
        </div>
        
        
    </li>
  );
};

export default Persona;