import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { obtenerPacientePorId } from '../../../api/paciente.api';
import { MdAddChart, MdEmail, MdLocationOn, MdPerson, MdPhone, MdEvent, MdWc } from 'react-icons/md';
import '../../css/PacienteDetalles.css';
import { listaAnalisisPaciente, obtenerAnalisis } from '../../../api/informes.api';

export function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);
  const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura que el día tenga 2 dígitos
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0, por lo que sumamos 1
  const anio = fecha.getFullYear(); // Obtiene el año completo

  return `${dia}/${mes}/${anio}`;
}

const PacienteDetalles = () => {
  const { id } = useParams(); // Obtén el id del paciente desde los parámetros de la URL
  const [paciente, setPaciente] = useState(null);
  const [listaAnalisis, setListaAnalisis] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarDetallesPaciente() {
      try {
        const respuesta = await obtenerPacientePorId(id); // Aquí llamas a la API para obtener los detalles del paciente
        const listaAnalisis = await listaAnalisisPaciente(id)
        console.log(listaAnalisis.data)
        setListaAnalisis(listaAnalisis.data)
        setPaciente(respuesta.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Siempre se ejecuta al final
      }
    }
    cargarDetallesPaciente();
  }, [id]);

  if (loading) {
    return <div>Cargando detalles del paciente...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <div className="parent">
      <div className="paciente">
        <section className="detalles-paciente-container">
          <h1>Detalles del Paciente</h1>
          {paciente ? (
            <div className="info-paciente">
              <div className="detalle-item">
                <MdPerson className="icono" />
                <p>Nombre: {paciente.nombre}</p>
              </div>
              <div className="detalle-item">
                <MdPerson className="icono" />
                <p>Apellido: {paciente.apellido}</p>
              </div>
              <div className="detalle-item">
                <MdEvent className="icono" />
                <p>Fecha de Nacimiento: {formatearFecha(paciente.fechaNacimiento)}</p>
              </div>
              <div className="detalle-item">
                <MdEmail className="icono" />
                <p>Correo: {paciente.correo}</p>
              </div>
              <div className="detalle-item">
                <MdLocationOn className="icono" />
                <p>Dirección: {paciente.direccion}</p>
              </div>
              <div className="detalle-item">
                <MdWc className="icono" />
                <p>Sexo: {paciente.sexo}</p>
              </div>
              <div className="detalle-item">
                <MdPhone className="icono" />
                <p>Teléfono: {paciente.telefono}</p>
              </div>
            </div>
          ) : (
            <p>No se encontraron detalles para este paciente.</p>
          )}
        </section>
      </div>
      <div className="boton-analisis">
        {paciente && (
          <section className="boton-crear-container">
            <Link to={`/Pacientes/${paciente.id}/crearAnalisis`} className="link">
              <MdAddChart className="icono-analisis" />
            </Link>
          </section>
        )}
      </div>
      <div className="lista-analisis">
        <section className='section'>
        <h2 style={styles.box_h2}>Analisis Realizados</h2>
          {listaAnalisis.length > 0 ? (
            listaAnalisis.map((analisis, index) => (
              <div className='box'>
                <ul style={styles.box_ul}>
                  <li style={styles.box_ul_li}>
                    <span style={styles.span}>{index + 1}</span>
                    <p><strong>edad: </strong> {analisis.edad}</p>
                    <p><strong>Fecha:</strong> {formatearFecha(analisis.createdAt)}</p>
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <div className="box">
              <h2>No se encontraron analisis</h2>
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
  
};

const styles = {

  box_h2: {
    color: '#fff',
    background: '#03a9f4',
    padding: '10px 20px',
    "font-size": '20px',
    "font-weigth": '700',
    "border-top-left-radius": '10px',
    "border-top-right-radius": '10px',
  },

  box_ul: {
    position: 'relative',
    background: '#fff',
  },

  box_ul_li: {
    "list-style": 'none',
    padding: '10px',
    width : '125%',
    background: '#fff',
    "box-shadow": '0 5px 25px rgba(0,0,0,.1)',
    transition: 'transform 0.5s',
    display: 'flex',
    "align-items": 'center',
    "justify-content": 'flex-start',
    gap: '10px'
  },
  box_ul_li_hover : {
    transform: 'scale(1.1)',
    "z-index": '100',
    background: '#25bcff',
    "box-shadow": '0 5px 25px rgba(0,0,0,.2)',
    color: '#fff'
  },

  span: {
    width: '20px',
    height: '20px',
    "text-align": 'center',
    "line-height": '20px',
    background: '#25bcff',
    color: '#fff',
    display: 'inline-block',
    "border-radius": '50%',
    "margin-right": '10px',
    "font-size": '12px',
    "font-weight": '600',
    transform: 'translate(-20px)'
  }
}

export default PacienteDetalles;

