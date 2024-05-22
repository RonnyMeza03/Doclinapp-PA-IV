import "../css/usuarios.css";
import React from "react";
import {Formik} from "formik";
import { crearUsuarioRequest } from "../../api/usuarios.api";
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

const Usuarios = () => {
  return (
    <div className="usuario-container">
      <h1>REGISTRO DE DATOS</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          edad:"",
          sexo: "",
          sistolica: "",
          ldl:"",
          hdl:"",
          trigriceridos: "",
          familiares:"",
          enfermedades: "",
          fumar:"",
          alcohol:"",
          dieta:"",
          actividad:"",
          masa:"",
          glucosa:"",
          colesterol:"",
          diastolica:"",
          altura: ""

        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const respuesta = await crearUsuarioRequest(values);
            console.log(respuesta);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="container-form personal-info">
              <h5 className="title"><b>Información Personal</b><RiFileUserLine /></h5>
              <div className="input">
                  <p><strong>Nombres</strong></p>
                  <div className="relative">
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      onChange={handleChange}
                      value={values.nombre}
                      required
                    />
                    <FaUserCheck />
                  </div>
              </div>
              <div className="input">
                  <p>
                    <strong>Apellidos</strong>
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      onChange={handleChange}
                      value={values.apellido}
                      required
                    />
                    <FaUserPlus />
                  </div>
              </div>
              <div className="input">
                  <p>
                    <strong>Edad</strong>
                  </p>
                  <div className="relative">
                    <input 
                      type="number"
                      id="edad"
                      name="edad"
                      onChange={handleChange}
                      value={values.edad}
                      required
                    />
                    <MdDateRange />
                  </div>
              </div>
              <div className="input">
                  <p>
                    <strong>Sexo</strong>
                  </p>
                  <div className="relative">
                    <select name="sexo" id="sexo" onChange={handleChange} value={values.sexo} required>
                      <option value="" disabled selected hidden>Seleccione una opcion</option>
                      <option value="masculino">M</option>
                      <option value="femenino">F</option>
                    </select>
                    <BsGenderAmbiguous />
                  </div>
              </div>
              <div className="input">
                  <p>
                    <strong>Dirección</strong>
                  </p>
                  <div className="relative">
                    <input type="text" />
                    <FaAddressBook />
                  </div>
                  
              </div>
              <div className="input">
                <p>
                  <strong>Teléfono</strong>
                </p>
                <div className="relative">
                  <input type="text" />
                  <BsFillTelephoneFill />
                </div>
              </div>
            </div>

            <div className="container-form medical-history">
              <h5 className="title"><b>Antecedentes Médicos</b><BsJournalMedical /></h5>
              <div className="input">
                  <p>
                    <strong>Presion Arterial Sistólica</strong>{" "}
                  </p>
                  <div className="relative">
                    <input 
                      type="number"
                      id="sistolica"
                      name="sistolica"
                      placeholder="mmgHg"
                      onChange={handleChange}
                      value={values.sistolica}
                    />
                    <FaHandHoldingMedical />
                  </div>
              </div>
              <div className="input">
                <p>
                  <strong>Niveles de Colesterol Total</strong>{" "}
                </p>
                <div className="relative">
                  <input 
                    type="number"
                    id="colesterol"
                    name="colesterol"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.colesterol}
                  />
                  <GiMedicalDrip />
                </div>
              </div>
              <div className="input">
                <p>
                  <strong>Niveles de LDL (Colesterol Malo)</strong>{" "}
                </p>
                <div className="relative">
                  <input 
                    type="number"
                    id="ldl"
                    name="ldl"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.ldl}
                  />
                  <GiMedicalThermometer />
                </div>
              </div>
              <div className="input">
                <p>
                  <strong>Niveles de HDL (Colesterol Bueno)</strong>{" "}
                </p>
                <div className="relative">
                  <input 
                    type="number"
                    id="hdl"
                    name="hdl"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.hdl}
                  />
                  <GiMedicalThermometer />
                </div>
              </div>
              <div className="input">
                  <p>
                    <strong>Niveles de Triglicéridos</strong>{" "}
                  </p>
                  <div className="relative">
                    <input 
                      type="number"
                      id="trigriceridos"
                      name="trigriceridos"
                      placeholder="mg/dL"
                      onChange={handleChange}
                      value={values.trigriceridos}
                    />
                    <FaNotesMedical />
                  </div>
              </div>
              <div className="input">
                <p>
                  <strong>
                    Historial Familiar de Enfermedades Cardiacas
                  </strong>
                </p>
                <div className="relative">
                  <select name="familiares" id="familiares" onChange={handleChange} value={values.familiares}  required>
                    <option value="" disabled selected hidden>Seleccione una opcion</option>
                    <option value="Abuelos">Abuelos</option>
                    <option value="Padres">Padres</option>
                    <option value="Tios">Tios</option>
                    <option value="Hermanos">Hermanos</option>
                  </select>
                  <MdFamilyRestroom />
                </div>
              </div>
              <div className="input">
                  <p>
                    <strong>Presion Arterial Diastolica</strong>{" "}
                  </p>
                  <div className="relative">
                  <input 
                    type="number"
                    id="diastolica"
                    name="diastolica"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.diastolica}
                  />
                  <MdOutlineMedicalServices />
                  </div>
              </div>
              <div className="input">
                <p>
                  <strong>
                    Historial de Enfermedades Crónicas (ej: diabetes)
                  </strong>{" "}
                </p>
                <div className="relative">
                  <input 
                    type="text"
                    id="enfermedades"
                    name="enfermedades"
                    placeholder="Enfermedad del Familiar mas cercano"
                    onChange={handleChange}
                    value={values.enfermedades}
                  />
                  <MdHistory />
                </div>
              </div>
            </div>

            <div className="container-form life-style">
            <h5 className="title"><b>Estilo de Vida</b><GiLifeInTheBalance /></h5>
              <div className="input">
                  <p>
                    <strong>Hábito de Fumar (Si/No):</strong>{" "}
                  </p>
                  <div className="relative">
                    <select name="fumar" id="fumar" onChange={handleChange} value={values.fumar} required>
                      <option value="" disabled selected hidden>Selecciona una opción</option>
                      <option value="Activo">Activo</option>
                      <option value="Medio">Medio</option>
                      <option value="Nada">Nada</option>
                    </select>
                    <MdOutlineSmokeFree />
                  </div>
              </div>
              <div className="input">
                <p>
                  <strong>Frecuencia de Consumo de Alcohol:</strong>{" "}
                </p>
                <div className="relative">
                  <select name="alcohol" id="alcohol"  onChange={handleChange} value={values.alcohol} required>
                    <option value="" disabled selected hidden>Selecciona una opción</option>
                    <option value="Ninguna">Ninguna</option>
                    <option value="Baja">Baja</option>
                    <option value="Moderada">Moderada</option>
                    <option value="Alta">Alta</option>
                  </select>
                  <MdLocalDrink />
                </div>
              </div>
              <div className="input">
                  <p>
                    <strong>
                      Dieta (Alta/Baja en Grasas Saturadas y Colesterol):
                    </strong>{" "}
                  </p>
                  <div className="relative">
                    <input 
                      type="text"
                      id="dieta"
                      name="dieta"
                      onChange={handleChange}
                      value={values.dieta}
                    />
                    <IoNutrition />
                  </div>
              </div>
              <div className="input">
                <p>
                  <strong>
                    Nivel de Actividad Física (Horas a la Semana):
                  </strong>{" "}
                </p>
                <div className="relative">
                  <input  
                    type="number"
                    id="actividad"
                    name="actividad"
                    placeholder="Introduzca Numero de Horas a la semana"
                    onChange={handleChange}
                    value={values.actividad}
                  />
                  <BsCalendar2WeekFill />
                </div>
              </div>
            </div>

            <div className="container-form risk-evaluation">
              <h5 className="title"><b>Evaluación de Riesgo</b> <PiHeartHalf /></h5>
              <div className="input">
                  <p>
                    <strong>Índice de Masa Corporal (IMC):</strong>{" "}
                  </p>
                  <div className="relative">
                    <input 
                      type="number"
                      id="masa"
                      name="masa"
                      placeholder="Kg"
                      onChange={handleChange}
                      value={values.masa}
                    />
                    <IoBody />
                  </div>
                  
              </div>
              <div className="input">
                <p>
                  <strong>Niveles de Glucosa en Sangre:</strong>{" "}
                </p>
                <div className="relative">
                  <input 
                    type="number"
                    id="glucosa"
                    name="glucosa"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.glucosa}
                  />
                  <MdBloodtype />
                </div>
              </div>
              <div className="input">
                <p>
                  <strong>Altura:</strong>{" "}
                </p>
                <div className="relative">
                  <input 
                    type="number"
                    id="altura"
                    name="altura"
                    placeholder="cm"
                    onChange={handleChange}
                    value={values.altura}
                  />
                  <GiBodyHeight />
                </div>
              </div>
            </div>
            <button className="button-blue-rounded" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Usuarios;
