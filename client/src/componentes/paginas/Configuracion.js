import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ImProfile } from "react-icons/im";
import { MdWorkspacePremium } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { obtenerPerfil } from '../../api/usuarios.api';
import { useAuth0 } from '@auth0/auth0-react';
import DetallesGrupo from './funtion-configuracion/DetallesGrupo';
import "../css/Configuracion.css";

const Configuracion = () => {

  const {user,  isAuthenticated, isLoading} = useAuth0();
  const  [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const  navigate = useNavigate();


  useEffect(() => {
    async function cargarUsuario(){
      if (!isAuthenticated || !user || isLoading) {
        return <h1>cargando...</h1>;
      }

      try {
        const  usuario = await obtenerPerfil(user.sub);
        setUsuario(usuario.data);
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    cargarUsuario()
  },[user,  isAuthenticated, isLoading])

  if (loading) {
    return <div>Cargando Configuarion...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleGroupNavigation = (usuario) => {
    if (usuario.usuario.aplicacionID > 1) {
      navigate('/Configuracion/detallesGrupo', { state: { grupo: usuario } });
    } else {
      navigate('/Configuracion/grupo');
    }
  };

  const menuItems = [
    {
      title: 'Perfil',
      icon: <ImProfile />,
      to: '/Configuracion/perfil'
    },
    {
      title: 'Suscripción',
      icon: <MdWorkspacePremium />,
      to: '/Configuracion/premiun'
    },
    {
      title: 'Grupo de Trabajo',
      icon: <FaUsersBetweenLines />,
      to: null, // No necesitamos un 'to' aquí ya que manejaremos la navegación en el onClick
      onClick: () => handleGroupNavigation(usuario)
    }
  ];

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#3b82f6';
    e.currentTarget.style.color = 'white';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = '#374151';
  };

  return (
    <div class="container">
      <div class="card" onClick={() => navigate('/Configuracion/perfil')}>
            <div class="imgBx" data-text="Perfil">
             <ImProfile style={{color:"white", width: "50%" ,height: "50%" }}/>
            </div>
            <div class="content">
                <div>
                    <h3>Perfil</h3>
                    <p>Detalles de tu perfil</p>
                </div>
            </div>
        </div>
        <div class="card" onClick={() => navigate('/Configuracion/premiun')}>
            <div class="imgBx" data-text="Planes">
            <MdWorkspacePremium style={{color:"white", width: "50%" ,height: "50%" }}/>
            </div>
            <div class="content">
                <div> 
                    <h3>Planes</h3>
                    <p>Suscribase al mejor plan para ti</p>
                </div>
            </div>
        </div>
        <div class="card" onClick={() => handleGroupNavigation(usuario)}>
            <div class="imgBx" data-text="Grupos de trabajo">
              <FaUsersBetweenLines style={{color:"white", width: "50%" ,height: "50%" }}/>
            </div>
            <div class="content">
                <div>
                    <h3>Grupos de Trabajo</h3>
                    <p>Detalles de su grupo de trabajo</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Configuracion;