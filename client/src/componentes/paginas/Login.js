import '../css/login.css';
import logo from '../imagenes/login.png'; 
import {Link} from 'react-router-dom'

const Login = ({  }) => {
    return (
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
                <div>
                    <Link to="/inicio">
                    <input type="button" value="INICIAR SESIÓN" className="button"/>
                    </Link>
                </div>
            </div>
            <div className="img">
                <img src={logo} alt="Logo" /> {/* Mostrar la imagen */}
            </div>
        </div>
    );
};

export default Login;
