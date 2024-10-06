import '../css/login.css';
import { useEffect } from 'react';
import logo from '../imagenes/login.png'; 
import {Link, useNavigate} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'

const Login = () => {

    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/inicio');
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) return <h1>Cargando.....</h1>

    return (
        <button onClick={() => loginWithRedirect()}>Login</button>
        /*
        <div className="login-container">
            <div className="login">
                <h1>DoclinAPP</h1>
                <p>Login DoclinAPP</p>
                <div>
                    <input type="text" placeholder="Usuario" />
                </div>
                <div>
                    <input type="password" placeholder="Contraseña" />
                </div>
                <a href="#">¿Olvidaste tu Contraseña?</a>
                <p>
                    ¿No tienes una cuenta? 
                    <Link to="/registro" className="link"> ¡Crea una Aquí! </Link>
                </p>
                <div>
                    <Link to="/inicio">
                    <input type="button" value="INICIAR SESIÓN" className="button"/>
                    </Link>
                </div>
            </div>
            <div className="img">
                <img src={logo} alt="Logo" />  Mostrar la imagen 
            </div>
        </div>*/
    );
};

export default Login;
