import logo from './logo.png'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import {Link} from 'react-router-dom'


const Navbar = ({show} )=> {
    return (
        <div className={show ?  'sidenav active' : 'sidenav'}>
            <article className='header-nav'>
                <h3 className='title-logo'>DoclinApp</h3>
                <img src={logo} alt="Logo de la app" className="logo"/>
            </article>
            <ul>
                <li>
                    <Link to="/Inicio">
                        <GoHome />
                        <p>Inicio</p>
                    </Link>
                </li>
                <li>
                    <Link to="/Usuarios">
                        <FaRegUser />
                        <p>Usuarios</p>
                    </Link>
                </li>
                <li>
                    <Link to="/Informes">
                        <RiHealthBookLine />
                        <p>Informes</p>
                    </Link>
                </li>
                <li>
                    <Link to="/Estadisticas">
                        <IoAnalytics />
                        <p>Estadisticas</p>
                    </Link>
                </li>
                <li className='logout'>
                    <Link to="/">
                        <CiLogout />
                        <p>Cerrar Sesión</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
