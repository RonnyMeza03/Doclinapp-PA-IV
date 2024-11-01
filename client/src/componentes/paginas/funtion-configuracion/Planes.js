import React from "react";
import "../../css/Planes.css";
import premiunBronce from "../../imagenes/premiunBronce.png";
import premiunPlata from  "../../imagenes/premiunPlata.png";
import premiunOro from  "../../imagenes/premiunOro.png";

import { Link } from "react-router-dom";

const Planes = () => {
  return (
    <div>
      <div className="plan">
        <h1>
          ¡Escoge el mejor plan para ti!
        </h1>
      </div>
      <div className="container">
        <div className="card">
          <figure>
            <img src={premiunPlata} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3><strong>Premiun Plata</strong></h3>
            <p style={{color: '#C0C0C0'}}>
              <strong>Precio: $25.000 COP/mes</strong>
            </p>
            <Link to= "/premiunPlata" className="boton-card">
                Suscribirse 
            </Link>
            <ul className="benefits-list">
              <li>Acceso a crear grupos</li>
              <li>Soporte 24/7</li>
              <li>Maximo de miembros en el grupo: 25</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={premiunBronce} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3><strong>Premiun Bronce</strong></h3>
            <p style={{color: '#CD7F32'}}>
              <strong>Precio: $10.000 COP/mes</strong>
            </p>
            <Link to= "/premiunBronce" className="boton-card">
                Suscribirse 
            </Link>
            <ul className="benefits-list">
              <li>Acceso a crear grupos</li>
              <li>Soporte 24/7</li>
              <li>Maximo de miembros en el grupo: 10</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={premiunOro} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3><strong>Premiun Oro</strong></h3>
            <p style={{color: '#CDA434'}}>
              <strong>Precio: $50.000 COP/mes</strong>
            </p>
            <Link to= "/premiunOro" className="boton-card">
                Suscribirse 
            </Link>
            <ul className="benefits-list">
              <li>Acceso a crear grupos</li>
              <li>Soporte 24/7</li>
              <li>Maximo de miembros en el grupo: ilimitado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
