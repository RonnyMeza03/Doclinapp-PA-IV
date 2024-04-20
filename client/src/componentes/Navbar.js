import logo from './logo.png'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import Inicio from '../inicio';
=======
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab


const Navbar = ({show} )=> {
    return (
        <div className={show ?  'sidenav active' : 'sidenav'}>
            <img src={logo} alt="" 
            className="logo"/>
            <ul>
                <li>
                    <Link to="/">
                        <GoHome />
<<<<<<< HEAD
=======
                        
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab
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
            </ul>
        </div>
    )
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab
