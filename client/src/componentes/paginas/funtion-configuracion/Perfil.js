import React, { useState, useEffect, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerPerfil } from '../../../api/usuarios.api';
import "../../css/Perfil.css";
import { FaUser, FaEnvelope, FaBirthdayCake, FaPhone, FaUserShield, FaStar } from 'react-icons/fa';

const Perfil = ({ dashboardAbierto }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadingPerfil, setIsLoadingPerfil] = useState(true);

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
    <div className="perfil-container" style={perfilStyle}>
      <img src={user.picture} alt={user.name} />
      <div className="perfil-datos">
        <p><FaUser /> <span>{user.name}</span></p>
        <p><FaEnvelope /> <span>{user.email}</span></p>
        <p><FaBirthdayCake /> <span>{user.birthdate}</span></p>
        <p><FaPhone /> <span>{user.phone_number}</span></p>
        <p><FaUserShield /> <span>Rol: {perfil.rol}</span></p>
        <p><FaStar /> <span>Premium: {perfil.premium === 1 ? 'Sí' : 'No'}</span></p>
      </div>
    </div>
  );
};

export default Perfil;
