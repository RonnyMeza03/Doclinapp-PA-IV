import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Formik } from 'formik';
import { crearGrupoRequest } from '../../../api/grupo.api';

const Grupo = () => {
  const { user } = useAuth0();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Crear Nuevo Grupo</h2>
      
      <Formik
        initialValues={{
          nombre: "",
          nombreClinica: "",
          correo: "",
          direccion: "",
          pais: "",
          idAuth0: user.sub
        }}
        onSubmit={async (values, actions) => {
          try {
            const respuesta = await crearGrupoRequest(values);
            console.log(respuesta);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="nombre" style={styles.label}>
                Nombre del Grupo
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                onChange={handleChange}
                value={values.nombre}
                style={styles.input}
                placeholder="Ingrese el nombre del grupo"
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="nombreClinica" style={styles.label}>
                Nombre de la Clínica
              </label>
              <input
                type="text"
                name="nombreClinica"
                id="nombreClinica"
                onChange={handleChange}
                value={values.nombreClinica}
                style={styles.input}
                placeholder="Ingrese el nombre de la clínica"
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="correo" style={styles.label}>
                Correo Electrónico
              </label>
              <input
                type="email"
                name="correo"
                id="correo"
                onChange={handleChange}
                value={values.correo}
                style={styles.input}
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="direccion" style={styles.label}>
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                onChange={handleChange}
                value={values.direccion}
                style={styles.input}
                placeholder="Ingrese la dirección"
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="pais" style={styles.label}>
                País
              </label>
              <input
                type="text"
                name="pais"
                id="pais"
                onChange={handleChange}
                value={values.pais}
                style={styles.input}
                placeholder="Ingrese el país"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={styles.button}
            >
              {isSubmitting ? 'Creando...' : 'Crear Grupo'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#1f2937'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease',
    '&:focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)'
    }
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    marginTop: '1rem',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#2563eb'
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }
};

export default Grupo;