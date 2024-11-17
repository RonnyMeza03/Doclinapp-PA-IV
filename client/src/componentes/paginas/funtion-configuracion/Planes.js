import React from "react";
import "../../css/Planes.css";
import premiunBronce from "../../imagenes/premiunBronce.png";
import premiunPlata from "../../imagenes/premiunPlata.png";
import premiunOro from "../../imagenes/premiunOro.png";

import { Link } from "react-router-dom";
import { obtenerOrdenBronce, obtenerOrdenPlata, obtenerOrdenOro } from "../../../api/ordenPaypal.api";
import { useState, useEffect } from "react";
import {useAuth0} from '@auth0/auth0-react'

const Planes = () => {

  const [orden, setOrden] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [linkPagoBronce, setLinkPagoBronce] = useState(null)
  const [linkPagoPlata, setLinkPagoPlata] = useState(null)
  const [linkPagoOro, setLinkPagoOro] = useState(null)
  const {user, isAuthenticated, isLoading} = useAuth0()

  useEffect(() => {
    async function cargarLink(){

      if (!isAuthenticated || !user || isLoading) {
        return <h1>cargando...</h1>;
      }
    
      try {
        const  ordenBronce = await obtenerOrdenBronce(user.sub);
        const  ordenPlata = await obtenerOrdenPlata(user.sub);
        const  ordenOro = await obtenerOrdenOro(user.sub);

        setLoading(false)
        setLinkPagoBronce(ordenBronce.data.links[1].href)
        setLinkPagoPlata(ordenPlata.data.links[1].href)
        setLinkPagoOro(ordenOro.data.links[1].href)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    cargarLink()
  },[user, isAuthenticated, isLoading])

  if (loading) {
    return <div>Cargando Configuarion...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <div className="plan">
        <h1>¡Escoge el mejor plan para ti!</h1>
      </div>
      <div className="container">
        <div className="card">
          <figure>
            <img src={premiunPlata} alt="imagen planes" />
          </figure>
          <div className="contenido">
            <h3>
              <strong>Premiun Plata</strong>
            </h3>
            <p style={{ color: "#C0C0C0" }}>
              <strong>Precio: $25.000 COP/mes</strong>
            </p>
              <a href={linkPagoPlata}>Paypal</a>
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
            <h3>
              <strong>Premiun Bronce</strong>
            </h3>
            <p style={{ color: "#CD7F32" }}>
              <strong>Precio: $10.000 COP/mes</strong>
            </p>
            <a href={linkPagoBronce}>Paypal</a>
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
            <h3>
              <strong>Premiun Oro</strong>
            </h3>
            <p style={{ color: "#CDA434" }}>
              <strong>Precio: $50.000 COP/mes</strong>
            </p>
            <a href={linkPagoOro}>Paypal</a>
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
