import { useAuth0 } from '@auth0/auth0-react';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { obtenerMiembros } from '../../../api/grupo.api';
import Modal from './grupo-componentes/Modal';
import AgregarMiembroForm from './grupo-componentes/AgregarMIembrosForm';
import '../../css/DetallesGrupo.css';
import { formatearFecha } from '../funtion-pacientes/PacienteDetalles';

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
      setError(null); // Limpiar cualquier error previo
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

  const handleMiembroAgregado = useCallback(async (nuevoMiembro) => {
    try {
      await cargarMiembros(); // Recargar la lista después de agregar un miembro
      setIsModalOpen(false); // Cerrar el modal después de agregar exitosamente
    } catch (error) {
      console.error("Error al actualizar la lista de miembros:", error);
      setError(error.message || 'Error al actualizar la lista de miembros');
    }
  }, [cargarMiembros]);

  if (!grupo || !grupo.usuario) {
    return (
      <div className="detalles-container">
        <div className="detalles-card">
          <h1 className="detalles-title">No se encontraron detalles del grupo</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="detalles-container">
      <div className="detalles-card">
        <h1 className="detalles-title">Detalles del Grupo</h1>
        
        <div className="details-container">
          <div className="detail-item">
            <span className="detail-label">ID de Aplicación:</span>
            <span className="detail-value">{grupo.usuario.nombreAplicacion.id}</span>
          </div>

          {grupo.usuario.nombreAplicacion.nombre && (
            <>
              <div className="detail-item">
                <span className="detail-label">Nombre:</span>
                <span className="detail-value">{grupo.usuario.nombreAplicacion.nombre}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">País:</span>
                <span className="detail-value">{grupo.usuario.nombreAplicacion.pais}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Fecha de creación:</span>
                <span className="detail-value">{formatearFecha(grupo.usuario.nombreAplicacion.createdAt)}</span>
              </div>
            </>
          )}
        </div>

        <div className="miembros-section">
          <div className="miembros-header">
            <h2 className="miembros-subtitle">Miembros del Grupo</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="add-button"
            >
              + Agregar Miembro
            </button>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {loading ? (
            <div className="loading">Cargando miembros...</div>
          ) : miembros.length > 0 ? (
            <div className="miembros-list">
              {miembros.map((miembro, index) => (
                <div key={miembro.id || index} className="miembro-item">
                  <span className="miembro-nombre">{miembro.name}</span>
                  {miembro.email && (
                    <span className="miembro-email">{miembro.email}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="no-miembros">No hay miembros en este grupo</p>
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