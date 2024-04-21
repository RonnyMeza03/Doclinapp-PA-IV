import logo from './logo.png'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import {Link} from 'react-router-dom'


const Navbar = ({show} )=> {
    return (
        <div className={show ?  'sidenav active' : 'sidenav'}>
            <img src={logo} alt="" 
            className="logo"/>
            <ul>
                <li>
                    <Link to="/">
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
                <li>
                    <Link to="/Ajustes">
                        <GrConfigure />
                        <p>Ajustes</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;