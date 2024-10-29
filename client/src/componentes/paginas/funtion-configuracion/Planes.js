import React from "react";
import "../../css/Planes.css";
import imgPlanes from "../../imagenes/imgPlanes.jpg";
import { Link } from "react-router-dom";

const Planes = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <figure>
            <img src={imgPlanes} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3>Contabilidad</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              minima debitis, excepturi hic dolorum eaque! Eius voluptatem dolor
              reprehenderit aliquid.
            </p>
              <Link to= "/Inicio" className="boton-card">
                Suscribirse 
              </Link>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={imgPlanes} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3>Administracion</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              minima debitis, excepturi hic dolorum eaque! Eius voluptatem dolor
              reprehenderit aliquid.
            </p>
            <Link to= "/Inicio" className="boton-card">
                Suscribirse 
            </Link>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={imgPlanes} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3>Ventas</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              minima debitis, excepturi hic dolorum eaque! Eius voluptatem dolor
              reprehenderit aliquid.
            </p>
            <Link to= "/Inicio" className="boton-card">
              Suscribirse 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
