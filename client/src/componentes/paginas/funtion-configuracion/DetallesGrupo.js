import { useAuth0 } from '@auth0/auth0-react';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { obtenerMiembros } from '../../../api/grupo.api';
import Modal from './grupo-componentes/Modal'; 
import AgregarMiembroForm from './grupo-componentes/AgregarMIembrosForm'; 


const DetallesGrupo = () => {
  const location = useLocation();
  const { grupo } = location.state || {};
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [miembros, setMiembros] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const cargarMiembros = useCallback(async () => {
    if (!isAuthenticated || isLoading || !user || !grupo?.usuario?.nombreAplicacion?.id) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const respuesta = await obtenerMiembros(grupo.usuario.nombreAplicacion.id);
      setMiembros(respuesta.data || []);
    } catch (error) {
      console.error("Error al cargar los miembros del grupo:", error);
      setError(error.message || 'Error al cargar los miembros del grupo');
    } finally {
      setLoading(false);
    }
  }, [grupo, isAuthenticated, isLoading, user]);

  useEffect(() => {
    cargarMiembros();
  }, [cargarMiembros]);

  const handleMiembroAgregado = () => {
    cargarMiembros();
  };

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
            <span style={styles.label}><strong>ID de Aplicación: </strong></span>
            <span style={styles.value}>{grupo.usuario.nombreAplicacion.id}</span>
          </div>

          {grupo.usuario.nombreAplicacion.nombre && (
            <>
              <div style={styles.detailItem}>
              <span style={styles.label}><strong>Nombre: </strong></span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.nombre}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.label}><strong>Pais: </strong></span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.pais}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.label}><strong>Fecha de creacion: </strong></span>
              <span style={styles.value}>{grupo.usuario.nombreAplicacion.createdAt}</span>
            </div>
            </>
          )}
        </div>

        <div style={styles.miembrosSection}>
          <div style={styles.miembrosHeader}>
            <h2 style={styles.subtitle}>Miembros del Grupo</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              style={styles.addButton}
            >
              + Agregar Miembro
            </button>
          </div>

          {loading ? (
            <div style={styles.loading}>Cargando miembros...</div>
          ) : miembros.length > 0 ? (
            <div style={styles.miembrosList}>
              {miembros.map((miembro, index) => (
                <div key={miembro.id || index} style={styles.miembroItem}>
                  <span style={styles.miembroNombre}>{miembro.name}</span>
                  {miembro.email && (
                    <span style={styles.miembroEmail}>{miembro.email}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={styles.noMiembros}>No hay miembros en este grupo</p>
          )}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Agregar Nuevo Miembro"
        >
          <AgregarMiembroForm 
            grupoId={grupo.usuario.nombreAplicacion.id}
            onMiembroAgregado={handleMiembroAgregado}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default DetallesGrupo;

// src/pages/DetallesGrupo/DetallesGrupo.styles.js
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
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0,
  },
  miembrosHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  miembrosSection: {
    marginTop: '2rem',
    borderTop: '1px solid #e5e7eb',
    paddingTop: '1.5rem',
  },
  miembrosList: {
    display: 'grid',
    gap: '0.75rem',
  },
  miembroItem: {
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    fontSize: '0.875rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  loading: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '1rem',
  },
  noMiembros: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '6px',
    fontStyle: 'italic',
  },
};