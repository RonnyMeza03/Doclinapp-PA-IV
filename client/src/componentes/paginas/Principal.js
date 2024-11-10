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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              dolores laudantium ducimus. Necessitatibus recusandae maiores,
              impedit in dignissimos perferendis obcaecati distinctio
              consequuntur est ea aliquid molestias ex? Excepturi deleniti natus
              veritatis fugit, molestias nisi voluptate sit culpa tenetur
              corrupti nostrum eaque ipsum recusandae, iste consectetur aut!
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
        <p id="parrafo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          facilis maiores tempore, minus illo laboriosam provident id. Commodi,
          porro nostrum?
        </p>
        <div className="services-cards">
          <div className="service-card">
            <IoMdAnalytics className="imgService"/>
            <div className="service-content">
              <h3>Analisis de Riesgo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                sit quis repellat praesentium officiis. Alias saepe voluptatum
                harum eveniet aperiam.
              </p>
            </div>
          </div>
          <div className="service-card">
            <RiTeamFill className="imgService"/>
            <div className="service-content">
              <h3>Trabajo en equipo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                sit quis repellat praesentium officiis. Alias saepe voluptatum
                harum eveniet aperiam.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-content">
              <FaBrain className="imgService"/>
              <h3>IA</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                sit quis repellat praesentium officiis. Alias saepe voluptatum
                harum eveniet aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><Link>Acerca de</Link></li>
                <li><Link>Servicios</Link></li>
                <li><Link>Politicas de privacidad</Link></li>
                <li><Link>Afiliacion</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><Link>FAQ</Link></li>
                <li><Link>shipping</Link></li>
                <li><Link>returns</Link></li>
                <li><Link>order status</Link></li>
                <li><Link>payment options</Link></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><Link>watch</Link></li>
                <li><Link>bag</Link></li>
                <li><Link>shoes</Link></li>
                <li><Link>dress</Link></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
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
