import "../css/usuarios.css";
import React from "react";
import {Formik} from "formik";
import { crearUsuarioRequest } from "../../api/usuarios.api";



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
          familiares: "",
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
            <div className="personal-info border">
              <b>Información Personal: </b>

              <div className="separation">
                <div className="input">
                  <p>
                    <strong>Nombre:</strong>
                  </p>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={values.nombre}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>apellido:</strong>
                  </p>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    placeholder="apellido"
                    onChange={handleChange}
                    value={values.apellido}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>Edad:</strong>
                  </p>
                  <input 
                    type="number"
                    id="edad"
                    name="edad"
                    placeholder="introduzca edad"
                    onChange={handleChange}
                    value={values.edad}
                     />
                </div>

                <div className="input">
                  <p>
                    <strong>Sexo:</strong>
                  </p>
                  <input 
                    type="text"
                    id="sexo"
                    name="sexo"
                    placeholder="F/M"
                    onChange={handleChange}
                    value={values.sexo}
                  />
                </div>
              </div>

              <div className="separation">
                <div className="input">
                  <p>
                    <strong>Dirección:</strong>
                  </p>
                  <input type="text" />
                </div>
                <div className="input">
                  <p>
                    <strong>Teléfono:</strong>
                  </p>
                  <input type="text" />
                </div>
                <div></div> {/*DIV DE RELLENO*/}
                <div></div> {/*DIV DE RELLENO*/}
              </div>
            </div>

            <div className="medical-history border">
              <b>Antecedentes Médicos:</b>
              <div className="separation">
              <div className="input">
                  <p>
                    <strong>Presion Arterial Sistólica:</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="sistolica"
                    name="sistolica"
                    placeholder="mmgHg"
                    onChange={handleChange}
                    value={values.sistolica}
                  />
                </div>
                <div className="input">
                  <p>
                    <strong>Niveles de Colesterol Total:</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="colesterol"
                    name="colesterol"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.colesterol}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>Niveles de LDL (Colesterol Malo):</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="ldl"
                    name="ldl"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.ldl}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>Niveles de HDL (Colesterol Bueno):</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="hdl"
                    name="hdl"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.hdl}
                  />
                </div>
              </div>

              <div className="separation">
                <div className="input">
                  <p>
                    <strong>Niveles de Triglicéridos:</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="trigriceridos"
                    name="trigriceridos"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.trigriceridos}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>
                      Historial Familiar de Enfermedades Cardiacas:
                    </strong>{" "}
                  </p>
                  <input 
                    type="text"
                    id="familiares"
                    name="familiares"
                    placeholder="Abuelos/Padres/Tios/Hermanos"
                    onChange={handleChange}
                    value={values.familiares}
                  />
                </div>
              </div>

              <div className="separation">
              <div className="input">
                  <p>
                    <strong>Presion Arterial Diastolica:</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="diastolica"
                    name="diastolica"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.diastolica}
                  />
                </div>
                <div className="input">
                  <p>
                    <strong>
                      Historial de Enfermedades Crónicas (ej: diabetes):
                    </strong>{" "}
                  </p>
                  <input 
                    type="text"
                    id="enfermedades"
                    name="enfermedades"
                    placeholder="Enfermedad del Familiar mas cercano"
                    onChange={handleChange}
                    value={values.enfermedades}
                  />
                </div>
              </div>
            </div>

            <div className="life-style border">
              <b>Estilo de Vida:</b>

              <div className="separation">
                <div className="input">
                  <p>
                    <strong>Hábito de Fumar (Si/No):</strong>{" "}
                  </p>
                  <input 
                    type="text"
                    id="fumar"
                    name="fumar"
                    placeholder="Activo/Medio/Nada"
                    onChange={handleChange}
                    value={values.fumar}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>Frecuencia de Consumo de Alcohol:</strong>{" "}
                  </p>
                  <input 
                    type="text"
                    id="alcohol"
                    name="alcohol"
                    placeholder="Alta/Moderada/Baja/Ninguna"
                    onChange={handleChange}
                    value={values.alcohol}
                  />
                </div>
              </div>

              <div className="separation">
                <div className="input">
                  <p>
                    <strong>
                      Dieta (Alta/Baja en Grasas Saturadas y Colesterol):
                    </strong>{" "}
                  </p>
                  <input 
                    type="text"
                    id="dieta"
                    name="dieta"
                    placeholder=""
                    onChange={handleChange}
                    value={values.dieta}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>
                      Nivel de Actividad Física (Horas a la Semana):
                    </strong>{" "}
                  </p>
                  <input  
                    type="number"
                    id="actividad"
                    name="actividad"
                    placeholder="Introduzca Nuemero de Horas a la semana"
                    onChange={handleChange}
                    value={values.actividad}
                  />
                </div>
              </div>
            </div>

            <div className="risk-evaluation border">
              <b>Evaluación de Riesgo:</b>

              <div className="separation">
                <div className="input">
                  <p>
                    <strong>Índice de Masa Corporal (IMC):</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="masa"
                    name="masa"
                    placeholder="Kg"
                    onChange={handleChange}
                    value={values.masa}
                  />
                </div>

                <div className="input">
                  <p>
                    <strong>Niveles de Glucosa en Sangre:</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="glucosa"
                    name="glucosa"
                    placeholder="mg/dL"
                    onChange={handleChange}
                    value={values.glucosa}
                  />
                </div>
                <div className="input">
                  <p>
                    <strong>Altura:</strong>{" "}
                  </p>
                  <input 
                    type="number"
                    id="altura"
                    name="alura"
                    placeholder="cm"
                    onChange={handleChange}
                    value={values.altura}
                  />
                </div>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Usuarios;
