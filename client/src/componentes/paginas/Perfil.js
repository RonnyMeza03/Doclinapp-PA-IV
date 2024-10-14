import React, { useState, useEffect } from 'react';
import {useAuth0} from '@auth0/auth0-react'

const Perfil = () => {
  const {user, isAuthenticated} = useAuth0();

  useEffect(() => {
    if (!isAuthenticated){
        <h1>EL usuario no esta autenticado</h1>
    }
  }, [isAuthenticated]);

 
  if (!user) {
    return <div style={styles.error}>No hay datos de usuario disponibles</div>;
  }

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img
          src={user.picture}
          alt={user.name}
          style={styles.avatar}
        />
        <p style={styles.name}>{user.name}</p>
        <p style={styles.email}>{user.email}</p>
      </div>
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>Nickname</h3>
        <p style={styles.infoContent}>{user.nickname}</p>
      </div>
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>Email Verificado</h3>
        <p style={styles.infoContent}>{user.email_verified ? 'Sí' : 'No'}</p>
      </div>
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>Última Actualización</h3>
        <p style={styles.infoContent}>{new Date(user.updated_at).toLocaleString()}</p>
      </div>
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>Sub</h3>
        <p style={styles.infoContent}>{user.sub}</p>
      </div>
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>profile</h3>
        <p style={styles.infoContent}>{user.address}</p>
      </div>
    </div>
  );
};

const styles = {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  card: {
    maxWidth: '500px',
    margin: '16px auto',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    padding: '24px',
    backgroundColor: '#1a202c',
    borderBottom: '1px solid #e2e8f0',
  },
  avatar: {
    height: '96px',
    width: '96px',
    borderRadius: '50%',
    margin: '0 auto',
  },
  name: {
    paddingTop: '8px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#f7fafc',
  },
  email: {
    fontSize: '14px',
    color: '#e2e8f0',
  },
  infoSection: {
    borderBottom: '1px solid #e2e8f0',
    padding: '16px',
  },
  infoTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#4a5568',
    marginBottom: '4px',
  },
  infoContent: {
    fontSize: '14px',
    color: '#1a202c',
  },
};

export default Perfil;
