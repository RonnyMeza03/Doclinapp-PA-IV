import React from "react";


function TarjetaUsuario({ usuario }) {
  return (
    <div>
      <h2 style={{color:"black"}}>
        Nombre: {usuario.nombre} <br />
        Apellido: {usuario.apellido}
      </h2>
    </div>
  );
}

export default TarjetaUsuario;

