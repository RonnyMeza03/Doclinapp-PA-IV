import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ImProfile } from "react-icons/im";
import { MdWorkspacePremium } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { obtenerPerfil } from '../../api/usuarios.api';
import { useAuth0 } from '@auth0/auth0-react';
import DetallesGrupo from './funtion-configuracion/DetallesGrupo';

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
    <div style={styles.container}>
      <div style={styles.card}>
        <nav>
          {menuItems.map((item) => (
            item.to ? (
              // Si hay una ruta definida, usar Link
              <Link
                key={item.title}
                style={styles.menuItem}
                to={item.to}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={styles.icon}>
                  {item.icon}
                </span>
                {item.title}
              </Link>
            ) : (
              // Si no hay ruta, usar un div para manejar el onClick
              <div
                key={item.title}
                style={styles.menuItem}
                onClick={item.onClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={styles.icon}>
                  {item.icon}
                </span>
                {item.title}
              </div>
            )
          ))}
        </nav>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb'
  },
  card: {
    width: '250px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '16px'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    marginBottom: '4px',
    textDecoration: 'none',
    color: '#374151',
    fontSize: '14px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  icon: {
    marginRight: '12px',
    fontSize: '20px'
  }
};

export default Configuracion;