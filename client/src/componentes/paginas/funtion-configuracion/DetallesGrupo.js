import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallesGrupo = () => {
  const location = useLocation();
  const { grupo } = location.state || {};

  console.log(grupo)

  // Verificar si existe grupo y sus propiedades
  if (!grupo || !grupo.usuario) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>No se encontraron detalles del grupo</h1>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Detalles del Grupo</h1>
        
        <div style={styles.detailsContainer}>
          <div style={styles.detailItem}>
            <span style={styles.label}>ID de Aplicación</span>
            <span style={styles.value}>{grupo.usuario.nombreAplicacion.id}</span>
          </div>

          {/* Si tienes estas propiedades en tu objeto grupo */}
          {grupo.usuario.nombreAplicacion.nombre && (
            <div style={styles.detailItem}>
              <span style={styles.label}>Nombre</span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.nombre}</span>
            </div>
          )}

          {grupo.usuario.nombreAplicacion.correo && (
            <div style={styles.detailItem}>
              <span style={styles.label}>Correo</span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.correo}</span>
            </div>
          )}

          {grupo.usuario.nombreAplicacion.direccion && (
            <div style={styles.detailItem}>
              <span style={styles.label}>Dirección</span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.direccion}</span>
            </div>
          )}

          {grupo.usuario.nombreAplicacion.pais && (
            <div style={styles.detailItem}>
              <span style={styles.label}>País</span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.pais}</span>
            </div>
          )}

          {/* Puedes agregar más campos según la estructura de tu objeto grupo */}
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem',
    },
    detailsContainer: {
      display: 'grid',
      gap: '1rem',
    },
    detailItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#6b7280',
    },
    value: {
      fontSize: '1rem',
      color: '#374151',
    }
  };

export default DetallesGrupo;