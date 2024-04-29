import {Link} from 'react-router-dom'

const Ajustes = ( ) => {
    const cerrarSesion=() =>{

    }
    return (
        <div>
          <h1>Ajustes</h1>
          {/* Agrega un botón que redirija a la página de inicio de sesión */}
          <Link to="/">
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </Link>
        </div>
      );
}

export default Ajustes
