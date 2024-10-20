import React from 'react';
import { Link } from 'react-router-dom';
import { ImProfile } from "react-icons/im";
import { MdWorkspacePremium } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";

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
    to: '/Configuracion/grupo'
  }
];

const Configuracion = () => {
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
            <Link
              key={item.title}
              to={item.to}
              style={styles.menuItem}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span style={styles.icon}>
                {item.icon}
              </span>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Configuracion;