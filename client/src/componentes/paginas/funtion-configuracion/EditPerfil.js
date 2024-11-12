import React, { useState } from 'react';
import { actualizarPerfil } from '../../../api/perfil.api';

const EditPerfil = ({ idPerfil, onEdit, onClose }) => {
  const [descripcion, setDescripcion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Aquí iría tu llamada a la API para agregar el miembro
      const response = await actualizarPerfil(idPerfil, {acercaDe:  descripcion });
      console.log(response)
      console.log("acerca de: ", descripcion);
      onEdit();
      onClose();
      setDescripcion('');
    } catch (err) {
      setError(err.message || 'Error al actualizar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Acerca de mi:
          <textarea 
            name="descripcion" 
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder='Escribe algo acerca de tí'
            required
            rows={4}
            style={styles.input}
            >
          </textarea>
        </label>
      </div>

      {error && (
        <div style={styles.error}>
          {error}
        </div>
      )}

      <button 
        type="submit" 
        disabled={loading}
        style={styles.submitButton}
      >
        {loading ? 'Editando...' : 'Editar perfil'}
      </button>
    </form>
  );
};

export default EditPerfil;

// src/components/AgregarMiembroForm/AgregarMiembroForm.styles.js
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '4px',
    fontSize: '1rem',
    marginTop: '0.25rem',
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#2563eb',
    },
    ':disabled': {
      backgroundColor: '#9ca3af',
      cursor: 'not-allowed',
    },
  },
  error: {
    color: '#dc2626',
    backgroundColor: '#fee2e2',
    padding: '0.75rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
  },
};