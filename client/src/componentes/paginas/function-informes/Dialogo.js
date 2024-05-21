import React from 'react';
import '../../css/informes.css';
import { obtenerAnalisis } from '../../../api/informes.api.js';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"


const Dialogo = ({ personaSeleccionada, onClose }) => {

  const [analisis, setAnalisis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState({
    medicalHistory: false,
    lifeStyle: false,
    riskEvaluation: false
  });

  const params = useParams()
  

  useEffect(() => {
    const cargarAnalisis = async () => {
      
      try {
        const respuesta = await obtenerAnalisis(params.id);
        console.log(respuesta)
        setAnalisis(respuesta.data);
        console.log(respuesta.data)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    cargarAnalisis();
  }, []);

  const toggleInfo = (key) => {
    setShowInfo(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  if (loading) {
    return <div>Cargando analisis...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dialogo-container">
      <div className='name'>
        <h2>{personaSeleccionada.nombre} {personaSeleccionada.apellido}</h2>
        <button onClick={onClose} className='cerrar'>X</button>
      </div>
      
      <div className="personal-info border">
        <b>Información Personal:</b>
        <div className='separation'>
          <p><strong>Edad:</strong> {personaSeleccionada.edad}</p>
          <p><strong>Sexo:</strong> {personaSeleccionada.sexo} </p>
          <p><strong>Dirección:</strong> {personaSeleccionada.direccion}</p>
          <p><strong>Teléfono:</strong> {personaSeleccionada.telefono}</p>
        </div>
      </div>

      <div className='statics border'>
        <div className="separation">
            <p>Probabilidad Coronaria: <b>{analisis.coronaria}%</b></p>
            <p>Probabilidad Hiperlipidemia: <b>{analisis.hiperlipidemia}%</b></p>
        </div>
        <div className="separation">
            <p>Probabilidad Hipertension: <b>{analisis.hipertension}%</b></p>
            <p>Probabilidad de Transmitir enfermedad congenita: <b>{analisis.congenita}%</b></p>
        </div>
        <div className="separation">
            <p>Probabilidad de enfermedad de cerebrovascular: <b>{analisis.cerebrovascular}%</b></p>
            <p>Probabilidad de Diabetes tipo 2: <b>{analisis.diabetes}%</b></p>
        </div>
        <div className="separation">
            <p>Probabilidad de Enfermedad Arterial Periferica: <b>{analisis.arterial}%</b></p>
        </div>
      </div>


      <div className='medical-history border'>
        <b>Antecedentes Médicos</b>
        <button onClick={() => toggleInfo('medicalHistory')} className='info'>Info</button>
        {showInfo.medicalHistory && (
          <div>
            <div className='separation'>
              <p><strong>Presión Arterial Sistólica:</strong> {personaSeleccionada.sistolica}</p>
              <p><strong>Presión Arterial Diastólica:</strong> {personaSeleccionada.diastolica}</p>
            </div>
            <div className='separation'>
              <p><strong>Niveles de Colesterol Total:</strong> {personaSeleccionada.colesterol}</p>
              <p><strong>Niveles de LDL (Colesterol Malo):</strong> {personaSeleccionada.ldl}</p>
            </div>
            <div className='separation'>
              <p><strong>Niveles de HDL (Colesterol Bueno):</strong> {personaSeleccionada.hdl}</p>
              <p><strong>Niveles de Triglicéridos:</strong> {personaSeleccionada.trigriceridos}</p>
            </div>
            <div className="separation">
              <p><strong>Historial Familiar de Enfermedades Cardiacas:</strong> {personaSeleccionada.familiares}</p>
              <p><strong>Historial de Enfermedades Crónicas (ej: diabetes):</strong> {personaSeleccionada.enfermedades}</p>
            </div>
          </div>
        )}
      </div>


      <div className="life-style border">
        <b>Estilo de Vida</b>
        <button onClick={() => toggleInfo('lifeStyle')} className='info'>Info</button>
        {showInfo.lifeStyle && (
          <div>
            <div className="separation">
              <p><strong>Hábito de Fumar (Si/No):</strong> {personaSeleccionada.fumar}</p>
              <p><strong>Frecuencia de Consumo de Alcohol:</strong> {personaSeleccionada.alcohol}</p>
            </div>
            <div className="separation">
              <p><strong>Dieta (Alta/Baja en Grasas Saturadas y Colesterol):</strong> {personaSeleccionada.dieta}</p>
              <p><strong>Nivel de Actividad Física (Horas a la Semana):</strong> {personaSeleccionada.actividad}</p>
            </div>
          </div>
        )}
      </div>


      <div className="risk-evaluation border">
        <b>Evaluación de Riesgo</b>
        <button onClick={() => toggleInfo('riskEvaluation')} className='info'>Info</button>
        {showInfo.riskEvaluation && (
          <div>
            <div className="separation">
              <p><strong>Índice de Masa Corporal (IMC):</strong> {personaSeleccionada.masa}</p>
              <p><strong>Niveles de Glucosa en Sangre:</strong> {personaSeleccionada.glucosa}</p>
            </div>
            <div className="separation">
              <p><strong>Altura:</strong> {personaSeleccionada.altura}cm</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Dialogo;