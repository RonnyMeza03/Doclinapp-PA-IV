import '../css/inicio.css'
import { useAuth0 } from '@auth0/auth0-react';

const Inicio = () => {

    const {user, isAuthenticated} = useAuth0()
    console.log(user)

    return (
      isAuthenticated && (
        <div className="inicio-container">
        <div className="nota">
          <img src={user.picture} alt={user.name} />
         <p>Bienvenido {user.name}</p>
         <p>Nombre de Usuario: {user.nickname}</p>
        </div>
      </div>
      )
    );
  };
  
  export default Inicio;
  