import React, { useState, useEffect, useCallback } from 'react';
import {useAuth0} from '@auth0/auth0-react'
import { obtenerPerfil } from '../../../api/usuarios.api';

const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [perfil, setPerfil] = useState(null);  // Cambiado a null inicialmente
  const [error, setError] = useState(null);
  const [isLoadingPerfil, setIsLoadingPerfil] = useState(true);  // Nuevo estado para carga

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

  // Verificamos si perfil existe antes de renderizar
  if (!perfil) {
    return <div>Cargando datos del perfil...</div>;
  }

  
  return (
    <div className="perfil-container">
      <img src={user.picture} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.birthdate}</p>
      <p>{user.phone_number}</p>
      {/* Datos del perfil */}
      <p>Rol: {perfil.rol}</p>
      <p>Premium: {perfil.premium ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default Perfil;
