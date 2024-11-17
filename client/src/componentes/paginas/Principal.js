import React from "react";
import "./funtion-principal/landingPage.css";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import portada from "../portada.png";
import { MdWeb } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import premiunBronce from "../imagenes/premiunBronce.png";
import premiunPlata from "../imagenes/premiunPlata.png";
import premiunOro from "../imagenes/premiunOro.png";

const Principal = () => {
  const [activeLink, setActiveLink] = React.useState("/");
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="principal">
      <header className="header">
        <Link to={"/"} className="logo">
          Doclinapp
        </Link>
        <nav className="navbar">
          <Link
            to="/"
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            onClick={() => setActiveLink("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
            onClick={() => setActiveLink("/about")}
          >
            About
          </Link>
          <Link
            to="/Planes"
            className={`nav-link ${activeLink === "/Planes" ? "active" : ""}`}
            onClick={() => setActiveLink("/Planes")}
          >
            Planes
          </Link>
          <Link
            to="/Servicios"
            className={`nav-link ${
              activeLink === "/Servicios" ? "active" : ""
            }`}
            onClick={() => setActiveLink("/Servicios")}
          >
            Servicios
          </Link>
          <Link className="nav-link">
            <Login />
          </Link>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Doclinapp</h3>
          <p>Analisis de riesgo de enfermedades</p>
          <button onClick={() => loginWithRedirect()} className="btn">
            ¡Empieza Ahora!
          </button>
        </div>
        <div className="home-img">
          <img src={portada} alt="portada" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <div className="about-icon">
            <MdWeb size={48} />
          </div>
          <div className="about-text">
            <h2 className="heading">
              Acerca de <span>Doclinapp</span>
            </h2>
            <p>
            Doclin APP es un aplicativo web para pequeñas IPS con misión a crecer, 
            en ella podrán gestionar los datos de cada uno de sus pacientes, además de poder contar con análisis
             estadísticos de las diferentes patologías, rangos de edades y promedios. Esta aplicación tiene 
             como objetivo facilitar el análisis de datos que manejan los doctores en sus consultorios, 
             para que así puedan optimizar la calidad de sus servicios de una manera más organizada.
            </p>
            <button className="about-btn">Leer más</button>
          </div>
        </div>
      </section>
      <div className="planes">
        <div className="plan">
          <h1>
            ¡Escoge el mejor plan para ti! <MdWorkspacePremium />
          </h1>
        </div>
        <div className="container">
          <div className="card">
            <figure>
              <img src={premiunPlata} alt="imagen planes" />
            </figure>
            <div className="contenido">
              <h3>
                <strong>Premiun Plata</strong>
              </h3>
              <p style={{ color: "#C0C0C0" }}>
                <strong>Precio: $25.000 COP/mes</strong>
              </p>
              <Link onClick={() => loginWithRedirect()} className="boton-card">
                Suscribirse
              </Link>
              <ul className="benefits-list">
                <li>Acceso a crear grupos</li>
                <li>Soporte 24/7</li>
                <li>Maximo de miembros en el grupo: 25</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <figure>
              <img src={premiunBronce} alt="imagen planes" />
            </figure>
            <div className="contenido">
              <h3>
                <strong>Premiun Bronce</strong>
              </h3>
              <p style={{ color: "#CD7F32" }}>
                <strong>Precio: $10.000 COP/mes</strong>
              </p>
              <Link onClick={() => loginWithRedirect()} className="boton-card">
                Suscribirse
              </Link>
              <ul className="benefits-list">
                <li>Acceso a crear grupos</li>
                <li>Soporte 24/7</li>
                <li>Maximo de miembros en el grupo: 10</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <figure>
              <img src={premiunOro} alt="imagen planes" />
            </figure>
            <div className="contenido">
              <h3>
                <strong>Premiun Oro</strong>
              </h3>
              <p style={{ color: "#CDA434" }}>
                <strong>Precio: $50.000 COP/mes</strong>
              </p>
              <Link onClick={() => loginWithRedirect()} className="boton-card">
                Suscribirse
              </Link>
              <ul className="benefits-list">
                <li>Acceso a crear grupos</li>
                <li>Soporte 24/7</li>
                <li>Maximo de miembros en el grupo: ilimitado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="service-section">
        <h2>Servicios</h2>
        <h3 id="parrafo">
          A continuacion te mostrare los servicios que ofrece DoclinApp
        </h3>
        <div className="services-cards">
          <div className="service-card">
            <IoMdAnalytics className="imgService"/>
            <div className="service-content">
              <h3>Analisis de Riesgo</h3>
              <p>
              "Doclin APP permite identificar y evaluar posibles riesgos en la salud de los pacientes 
              mediante herramientas avanzadas de análisis. Los doctores pueden detectar patrones de enfermedades, 
              analizar factores críticos según la edad, género y patologías, y tomar decisiones proactivas 
              para minimizar complicaciones futuras."
              </p>
            </div>
          </div>
          <div className="service-card">
            <RiTeamFill className="imgService"/>
            <div className="service-content">
              <h3>Trabajo en equipo</h3>
              <p>
              "La plataforma fomenta la colaboración entre profesionales de la salud a través 
              de un sistema centralizado y seguro. Con funciones de asignación de roles,
               gestión compartida de pacientes y comunicación interna, 
               Doclin APP asegura que todos los integrantes de la IPS trabajen de manera coordinada y eficiente."
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-content">
              <FaBrain className="imgService"/>
              <h3>IA</h3>
              <p>
              "Con tecnología de Inteligencia Artificial integrada, Doclin APP optimiza
               la gestión médica mediante el análisis de grandes volúmenes de datos.Predice tendencias, 
              recomienda planes de acción y ayuda a los doctores a personalizar 
              tratamientos basados en los antecedentes y necesidades específicas de los pacientes."
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link>Acerca de</Link></li>
                <li><Link>Servicios</Link></li>
                <li><Link>Politicas de privacidad</Link></li>
                <li><Link>Afiliacion</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Obtener Ayuda</h4>
              <ul>
                <li><Link>Preguntas</Link></li>
                <li><Link>Compras</Link></li>
                <li><Link>returns</Link></li>
                <li><Link>order status</Link></li>
                <li><Link>Opciones de Pago</Link></li>
                <li><Link></Link></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><Link>watch</Link></li>
                <li><Link>bag</Link></li>
                <li><Link>shoes</Link></li>
                <li><a href="https://app.powerbi.com/view?r=eyJrIjoiOGRkZjk2YzQtYmM3Mi00ZmQ4LWE0NjEtNDY0MWQzMDU3NjEzIiwidCI6IjlkMTJiZjNmLWU0ZjYtNDdhYi05MTJmLTFhMmYwZmM0OGFhNCIsImMiOjR9">Other topics</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Redes Sociales</h4>
              <div class="social-links">
                <Link><i class="fab fa-facebook-f"></i></Link>
                <Link><i class="fab fa-twitter"></i></Link>
                <Link><i class="fab fa-instagram"></i></Link>
                <Link><i class="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Principal;
