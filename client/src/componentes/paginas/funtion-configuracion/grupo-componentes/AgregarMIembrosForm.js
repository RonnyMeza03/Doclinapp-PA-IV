import React, { useState } from 'react';
import { agregarMiembro } from '../../../../api/grupo.api';

const AgregarMiembroForm = ({ grupoId, onMiembroAgregado, onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Aquí iría tu llamada a la API para agregar el miembro
      const response = await agregarMiembro({aplicacionID: grupoId, email:  email });
      console.log(response)
      console.log('Agregar miembro:', email, 'al grupo:', grupoId);
      onMiembroAgregado();
      onClose();
      setEmail('');
    } catch (err) {
      setError(err.message || 'Error al agregar miembro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label}>
          Correo electrónico del nuevo miembro
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            required
            style={styles.input}
          />
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
        {loading ? 'Agregando...' : 'Agregar Miembro'}
      </button>
    </form>
  );
};

export default AgregarMiembroForm;

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