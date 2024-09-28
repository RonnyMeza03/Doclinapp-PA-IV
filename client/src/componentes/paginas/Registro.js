import '../css/Registro.css';
import logo from '../imagenes/login.png'
import { Link } from 'react-router-dom';

const Registro = () => {
    return (
        <div className="registro-container">
            <div className="registro">
                <h1>Registro</h1>
                <form>
                    <div>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div>
                        <input type="text" placeholder="Apellido" />
                    </div>
                    <div>
                        <input type="email" placeholder="Correo" />
                    </div>
                    <div>
                        <input type="password" placeholder="Contraseña" />
                    </div>
                    <div>
                        <input type="tel" placeholder="Teléfono" />
                    </div>
                    <div>
                        <input type="date" placeholder="Fecha de Nacimiento" />
                    </div>
                    ¿Ya tienes una cuenta? 
                    <Link to="/login" className="link"> Inicia sesión aquí </Link>
                    <div>
                        <Link to="/Registro">
                            <input type="button" value="REGISTRARSE" className="button" />
                        </Link>
                    </div>
                </form>
            </div>
            <div className="img">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    );
};

export default Registro;
