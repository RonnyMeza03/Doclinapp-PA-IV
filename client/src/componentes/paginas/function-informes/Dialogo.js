import React from 'react';
import '../../css/informes.css';
import { obtenerAnalisis } from '../../../api/informes.api.js';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import { IoChevronBack } from "react-icons/io5";
import { BsJournalMedical } from "react-icons/bs";
import { GiLifeInTheBalance } from "react-icons/gi";
import { PiHeartHalf } from "react-icons/pi";
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

  const params = useParams();

  useEffect(() => {
    const cargarAnalisis = async () => {
      try {
        const respuesta = await obtenerAnalisis(params.id);
        // Si hay datos y no están vacíos, los guardamos
        if (respuesta.data && Object.keys(respuesta.data).length > 0) {
          setAnalisis([respuesta.data]);
          console.log('Análisis cargados:', respuesta.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar análisis:', error);
        setError(error.message);
        setLoading(false);
      }
    };
    cargarAnalisis();
  }, [params.id]);

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

  // Una única validación para cuando no hay datos
  if (analisis.length === 0 || !analisis[0]) {
    return <div>No se encontraron datos del análisis.</div>;
  }
  return (
    <div className="dialogo-container">
      <div className='name'>
        <h2>{personaSeleccionada.nombre} {personaSeleccionada.apellido}</h2>
        <button onClick={onClose} className='cerrar'><IoChevronBack /> Regresar</button>
      </div>
      
      <div className="dialogo-container-child personal-info">
        <b className='title-child'>Información Personal:</b>
        <p className='input-child'><MdDateRange/> <strong>Edad:</strong> {analisis[0].edad}</p>
        <p className='input-child'><BsGenderAmbiguous/> <strong>Sexo:</strong> {personaSeleccionada.sexo} </p>
        <p className='input-child'><FaAddressBook/> <strong>Dirección:</strong> {personaSeleccionada.direccion}</p>
        <p className='input-child'><BsFillTelephoneFill/> <strong>Teléfono:</strong> {personaSeleccionada.telefono}</p>
      </div>

      <div className='dialogo-container-child statics'>
        <b className='title-child'>Estadísticas:</b>
        <p className='input-child'>Probabilidad Coronaria: <strong>{analisis[0].analisisCoronaria}%</strong></p>
        <p className='input-child'>Probabilidad Hiperlipidemia: <strong>{analisis[0].analisisHiperlipidemia}%</strong></p>
        <p className='input-child'>Probabilidad Hipertension: <strong>{analisis[0].analisisHipertension}%</strong></p>
        <p className='input-child'>Probabilidad de Transmitir enfermedad congenita: <strong>{analisis[0].analisisCongenita}%</strong></p>
        <p className='input-child'>Probabilidad de enfermedad de cerebrovascular: <strong>{analisis[0].analisisCerebrovascular}%</strong></p>
        <p className='input-child'>Probabilidad de Diabetes tipo 2: <strong>{analisis[0].analisisDiabetes2}%</strong></p>
        <p className='input-child'>Probabilidad de Enfermedad Arterial Periferica: <strong>{analisis[0].analisisArterial}%</strong></p>
      </div>


      <div className='dialogo-container-child medical-history'>
        <div className='header-dialogo-container'>
          <b className='title-child'>Antecedentes Médicos <BsJournalMedical /></b>
          <button onClick={() => toggleInfo('medicalHistory')} className='info'>Info</button>
        </div>
        {showInfo.medicalHistory && (
          <>
            <p className='input-child'><FaHandHoldingMedical/>Presión Arterial Sistólica: <strong>{analisis[0].sistolica}</strong></p>
            <p className='input-child'><MdOutlineMedicalServices />Presión Arterial Diastólica: <strong>{analisis[0].diastolica}</strong></p>
            <p className='input-child'> <GiMedicalDrip />Niveles de Colesterol Total: <strong>{analisis[0].colesterol}</strong></p>
            <p className='input-child'><GiMedicalThermometer />Niveles de LDL (Colesterol Malo): <strong>{analisis[0].ldl}</strong></p>
            <p className='input-child'><GiMedicalThermometer />Niveles de HDL (Colesterol Bueno): <strong>{analisis[0].hdl}</strong></p>
            <p className='input-child'><FaNotesMedical />Niveles de Triglicéridos: <strong>{analisis[0].triglicerios}</strong></p>
            <p className='input-child'><MdFamilyRestroom />Historial Familiar de Enfermedades Cardiacas: <strong>{analisis[0].familiar}</strong></p>
            <p className='input-child'><MdHistory />Historial de Enfermedades Crónicas (ej: diabetes): <strong>{analisis[0].enfermedades}</strong></p>
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
            <p className='input-child'><MdOutlineSmokeFree />Hábito de Fumar (Si/No): <strong>{analisis[0].habitoFumar}</strong></p>
            <p className='input-child'><MdLocalDrink />Frecuencia de Consumo de Alcohol: <strong>{analisis[0].habitoAlcohol}</strong></p>
            <p className='input-child'><IoNutrition />Dieta (Alta/Baja en Grasas Saturadas y Colesterol): <strong>{analisis[0].habitoDieta}</strong></p>
            <p className='input-child'><BsCalendar2WeekFill />Nivel de Actividad Física (Horas a la Semana): <strong>{analisis[0].horasActividadSemanal}</strong></p>
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
            <p className='input-child'><IoBody />Índice de Masa Corporal (IMC): <strong>{analisis[0].masaCorporalKg}Kg</strong></p>
            <p className='input-child'><MdBloodtype />Niveles de Glucosa en Sangre: <strong>{analisis[0].glucosa}</strong></p>
            <p className='input-child'><GiBodyHeight />Altura: <strong>{analisis[0].cmAltura}cm</strong></p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dialogo;