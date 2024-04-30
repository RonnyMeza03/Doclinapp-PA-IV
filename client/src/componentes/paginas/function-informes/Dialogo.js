import React from 'react';
import '../../css/informes.css';

const Dialogo = ({ personaSeleccionada, onClose }) => {
  return (
    <div className="dialogo-container">
      <h2>{personaSeleccionada.nombre} {personaSeleccionada.apellido}</h2>
      
      <div className="personal-info border">
        <b>Información Personal:</b>
        <div className='separation'>
          <p><strong>Edad:</strong> {personaSeleccionada.edad}</p>
          <p><strong>Sexo:</strong> {personaSeleccionada.sexo} </p>
          <p><strong>Dirección:</strong> {personaSeleccionada.direccion}</p>
          <p><strong>Teléfono:</strong> {personaSeleccionada.telefono}</p>
        </div>
      </div>

      <div className='medical-history border'>
        <b>Antecedentes Médicos:</b>
        <div className='separation'>
          <p><strong>Presión Arterial Sistólica:</strong> {personaSeleccionada.sistolica}</p>
          <p><strong>Presión Arterial Diastólica:</strong> {personaSeleccionada.diastolica}</p>
        </div>
        <p><strong>Niveles de Colesterol Total:</strong> {personaSeleccionada.colesterol}</p>
        <div className='separation'>
          <p><strong>Niveles de LDL (Colesterol Malo):</strong> {personaSeleccionada.ldl}</p>
          <p><strong>Niveles de HDL (Colesterol Bueno):</strong> {personaSeleccionada.hdl}</p>
        </div>
        <div className='separation'>
        <p><strong>Niveles de Triglicéridos:</strong> {personaSeleccionada.trigriceridos}</p>
        <p><strong>Historial Familiar de Enfermedades Cardiacas:</strong> {personaSeleccionada.familiares}</p>
        </div>
        <p><strong>Historial de Enfermedades Crónicas (ej: diabetes):</strong> {personaSeleccionada.enfermedades}</p>
      </div>

      <div className="life-style border">
        <b>Estilo de Vida:</b>
        <div className="separation">
          <p><strong>Hábito de Fumar (Si/No):</strong> {personaSeleccionada.fumar}</p>
          <p><strong>Frecuencia de Consumo de Alcohol:</strong> {personaSeleccionada.alcohol}</p>
        </div>
        <div className="separation">
          <p><strong>Dieta (Alta/Baja en Grasas Saturadas y Colesterol):</strong> {personaSeleccionada.dieta}</p>
          <p><strong>Nivel de Actividad Física (Horas a la Semana):</strong> {personaSeleccionada.actividad} </p>
        </div>
      </div>

      <div className="risk-evaluation border">
        <b>Evaluación de Riesgo:</b>
        <div className="separation">
        <p><strong>Índice de Masa Corporal (IMC):</strong> {personaSeleccionada.masa} </p>
        <p><strong>Niveles de Glucosa en Sangre:</strong> {personaSeleccionada.glucosa} </p>
        </div>
      </div>

      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Dialogo;