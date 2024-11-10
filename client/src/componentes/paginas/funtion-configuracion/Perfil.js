import React, { useState, useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerPerfil } from '../../../api/usuarios.api';
import "../../css/Perfil.css";
import { FaUser } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Perfil = ({ dashboardAbierto }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadingPerfil, setIsLoadingPerfil] = useState(true);

  const colors = {
    blue: '#1877f2',
    skyblue: '#1da1f2',
    darkPink: '#ea4c89',
    lightBlue: '#0077b5',
    darkMagenta: '#833ab4',
    lightGreen: '#34a853',
    lightPurple: '#8e44ad'
  };  

  const cargarPerfil = useCallback(async () => {
    if (!isAuthenticated || isLoading || !user) {
      return;
    }

    try {
      setIsLoadingPerfil(true);
      const respuesta = await obtenerPerfil(user.sub);
      setPerfil(respuesta.data);
    } catch (error) {
      console.error("Error al cargar perfil:", error);
      setError(error.message);
    } finally {
      setIsLoadingPerfil(false);
    }
  }, [user, isAuthenticated, isLoading]);

  useEffect(() => {
    cargarPerfil();
  }, [cargarPerfil]);

  if (isLoading || isLoadingPerfil) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No hay datos de usuario disponibles</div>;
  }

  const perfilStyle = {
    width: dashboardAbierto ? 'calc(100% - 250px)' : '100%', // Ajuste dinámico del ancho
    transition: 'width 0.5s ease', // Transición suave
  };

  return (
    
    <div className="container">
      <div className="profile-card">
        <div className="profile-pic">
          <img src={user.picture} alt={user.name}></img>
        </div>

        <div className="profile-details">
          <div className="intro">
            <h2>{user.name}</h2>
            <h4>{perfil.rol}</h4>
            <div className="social">
              <a href="#"><i style={{ color: colors.blue }}><FaFacebook></FaFacebook></i></a>
              <a href="#"><i style={{ color: colors.skyblue }}><FaSquareXTwitter></FaSquareXTwitter></i></a>
              <a href="#"><i style={{}}><FaInstagramSquare /></i></a>
              <a href="#"><i style={{ color: colors.lightBlue }}><FaLinkedin></FaLinkedin></i></a>
            </div>
          </div>

          <div className="contact-info">
            <div className="row">
              <div className="icon">
                <MdSmartphone></MdSmartphone>
              </div>
              <div className="content">
                <span>Teléfono</span>
                <h5>{(!user.phone_number ) ? 'No disponible' : user.phone_number}</h5>

              </div>
            </div>

            <div className="row">
              <div className="icon">
                <MdEmail></MdEmail>
              </div>
              <div className="content">
                <span>Email</span>
                <h5>{user.email}</h5>
              </div>
            </div>

            <div className="row">
              <div className="icon">
                <CiLocationOn></CiLocationOn>
              </div>
              <div className="content">
                <span>Location</span>
                <h5>{(!user.locale ) ? 'No disponible' : user.locale}</h5>

              </div>
            </div>
          </div>
          <button className="download-btn">
            <i className="fa fa-download"></i> Editar Perfil
          </button>
        </div>
      </div>

      <div className="about">
        <h1>Sobre Mí</h1>
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex problems into simple,
          beautiful and intuitive designs.
        </p>
        <p>
          My aim is to bring across your message and identity in the most creative way.
          I created web design for many famous brand companies.
        </p>
        <h2>What I Do !!!</h2>
        <div className="work">
          {[
            {
              title: "UI/UX Designer",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            },
            {
              title: "App Development",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            },
            {
              title: "API Development",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            },
            {
              title: "Web Development",
              description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            }
          ].map((item, index) => (
            <div className="workbox" key={index}>
              <div className="icon">
              <FaUser></FaUser>
              </div>
              <div className="desc">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Perfil;
