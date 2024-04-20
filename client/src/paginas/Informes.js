<<<<<<< HEAD
import { useEffect, useState } from "react";
import { obtenerTareas } from "../api/usuarios.api";
import TarjetaUsuario from "../componentes/TarjetaUsuario.js";

const Informes = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    
    <div className="content">
      

      {usuarios.map((usuario) => (
        <TarjetaUsuario usuario={usuario} key={usuario.id} />
      ))}
    </div>
  );
};

export default Informes;
=======
const Informes = ( ) => {
    return <div>Informes</div>
}

export default Informes
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab
