import React, { useState, useEffect } from 'react';
import {useAuth0} from '@auth0/auth0-react'

const Perfil = () => {
  const {user, isAuthenticated} = useAuth0();
  console.log(user.birthdate)

  useEffect(() => {
    if (!isAuthenticated){
        <h1>EL usuario no esta autenticado</h1>
    }
  }, [isAuthenticated]);

 
  if (!user) {
    return <div>No hay datos de usuario disponibles</div>;
  }

  

  return (
   <div className="perfil-container">
    <img src={user.picture} alt={user.name}></img>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.birthdate}</p>
    <p>{user.phone_number}</p>
   </div>
  );
};

export default Perfil;
