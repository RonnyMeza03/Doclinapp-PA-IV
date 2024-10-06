import logo from "./logo.png";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { RiHealthBookLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ show }) => {
  const { logout } = useAuth0();

  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <article className="header-nav">
        <h3 className="title-logo">DoclinApp</h3>
        <img src={logo} alt="Logo de la app" className="logo" />
      </article>
      <ul>
        <li>
          <Link to="/Inicio">
            <GoHome />
            <p>Inicio</p>
          </Link>
        </li>
        <li>
          <Link to="/Pacientes">
            <FaRegUser />
            <p>Pacientes</p>
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
          <Link to="/Configuracion">
            <CiSettings />
            <p>Configuracion</p>
          </Link>
        </li>
        <li className="logout">
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            >
            <CiLogout />
            <p>Cerrar Sesión</p>
            </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
