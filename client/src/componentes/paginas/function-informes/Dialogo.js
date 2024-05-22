import React from 'react';
import '../../css/informes.css';
import { obtenerAnalisis } from '../../../api/informes.api.js';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import { IoChevronBack } from "react-icons/io5";
import { RiFileUserLine } from "react-icons/ri";
import { BsJournalMedical } from "react-icons/bs";
import { GiLifeInTheBalance } from "react-icons/gi";
import { PiHeartHalf } from "react-icons/pi";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { GiMedicalDrip } from "react-icons/gi";
import { FaNotesMedical } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { GiMedicalThermometer } from "react-icons/gi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdOutlineSmokeFree } from "react-icons/md";
import { MdLocalDrink } from "react-icons/md";
import { IoNutrition } from "react-icons/io5";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { IoBody } from "react-icons/io5";
import { MdBloodtype } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";


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
        <button onClick={onClose} className='cerrar'><IoChevronBack /> Regresar</button>
      </div>
      
      <div className="dialogo-container-child personal-info">
        <b className='title-child'>Información Personal:</b>
        <p className='input-child'><MdDateRange/> <strong>Edad:</strong> {personaSeleccionada.edad}</p>
        <p className='input-child'><BsGenderAmbiguous/> <strong>Sexo:</strong> {personaSeleccionada.sexo} </p>
        <p className='input-child'><FaAddressBook/> <strong>Dirección:</strong> {personaSeleccionada.direccion}</p>
        <p className='input-child'><BsFillTelephoneFill/> <strong>Teléfono:</strong> {personaSeleccionada.telefono}</p>
      </div>

      <div className='dialogo-container-child statics'>
        <b className='title-child'>Estadísticas:</b>
        <p className='input-child'>Probabilidad Coronaria: <strong>{analisis.coronaria}%</strong></p>
        <p className='input-child'>Probabilidad Hiperlipidemia: <strong>{analisis.hiperlipidemia}%</strong></p>
        <p className='input-child'>Probabilidad Hipertension: <strong>{analisis.hipertension}%</strong></p>
        <p className='input-child'>Probabilidad de Transmitir enfermedad congenita: <strong>{analisis.congenita}%</strong></p>
        <p className='input-child'>Probabilidad de enfermedad de cerebrovascular: <strong>{analisis.cerebrovascular}%</strong></p>
        <p className='input-child'>Probabilidad de Diabetes tipo 2: <strong>{analisis.diabetes}%</strong></p>
        <p className='input-child'>Probabilidad de Enfermedad Arterial Periferica: <strong>{analisis.arterial}%</strong></p>
      </div>


      <div className='dialogo-container-child medical-history'>
        <div className='header-dialogo-container'>
          <b className='title-child'>Antecedentes Médicos <BsJournalMedical /></b>
          <button onClick={() => toggleInfo('medicalHistory')} className='info'>Info</button>
        </div>
        {showInfo.medicalHistory && (
          <>
            <p className='input-child'><FaHandHoldingMedical/>Presión Arterial Sistólica: <strong>{personaSeleccionada.sistolica}</strong></p>
            <p className='input-child'><MdOutlineMedicalServices />Presión Arterial Diastólica: <strong>{personaSeleccionada.diastolica}</strong></p>
            <p className='input-child'> <GiMedicalDrip />Niveles de Colesterol Total: <strong>{personaSeleccionada.colesterol}</strong></p>
            <p className='input-child'><GiMedicalThermometer />Niveles de LDL (Colesterol Malo): <strong>{personaSeleccionada.ldl}</strong></p>
            <p className='input-child'><GiMedicalThermometer />Niveles de HDL (Colesterol Bueno): <strong>{personaSeleccionada.hdl}</strong></p>
            <p className='input-child'><FaNotesMedical />Niveles de Triglicéridos: <strong>{personaSeleccionada.trigriceridos}</strong></p>
            <p className='input-child'><MdFamilyRestroom />Historial Familiar de Enfermedades Cardiacas: <strong>{personaSeleccionada.familiares}</strong></p>
            <p className='input-child'><MdHistory />Historial de Enfermedades Crónicas (ej: diabetes): <strong>{personaSeleccionada.enfermedades}</strong></p>
          </>
        )}
      </div>

      <div className="dialogo-container-child life-style">
      <div className='header-dialogo-container'>
        <b className='title-child'>Estilo de Vida <GiLifeInTheBalance /></b>
        <button onClick={() => toggleInfo('lifeStyle')} className='info'>Info</button>
      </div>
        {showInfo.lifeStyle && (
          <>
            <p className='input-child'><MdOutlineSmokeFree />Hábito de Fumar (Si/No): <strong>{personaSeleccionada.fumar}</strong></p>
            <p className='input-child'><MdLocalDrink />Frecuencia de Consumo de Alcohol: <strong>{personaSeleccionada.alcohol}</strong></p>
            <p className='input-child'><IoNutrition />Dieta (Alta/Baja en Grasas Saturadas y Colesterol): <strong>{personaSeleccionada.dieta}</strong></p>
            <p className='input-child'><BsCalendar2WeekFill />Nivel de Actividad Física (Horas a la Semana): <strong>{personaSeleccionada.actividad}</strong></p>
          </>
        )}
      </div>

      <div className="dialogo-container-child risk-evaluation">
        <div className='header-dialogo-container'>
          <b className='title-child'>Evaluación de Riesgo<PiHeartHalf /></b>
          <button onClick={() => toggleInfo('riskEvaluation')} className='info'>Info</button>
        </div>
        {showInfo.riskEvaluation && (
          <>
            <p className='input-child'><IoBody />Índice de Masa Corporal (IMC): <strong>{personaSeleccionada.masa}</strong></p>
            <p className='input-child'><MdBloodtype />Niveles de Glucosa en Sangre: <strong>{personaSeleccionada.glucosa}</strong></p>
            <p className='input-child'><GiBodyHeight />Altura: <strong>{personaSeleccionada.altura}cm</strong></p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dialogo;