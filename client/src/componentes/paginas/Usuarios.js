import React from 'react';
import '../css/usuarios.css';
import { Formik, Form, Field } from 'formik';

const Usuarios = () => {
  return (
    <div>
      <h1>Usuarios</h1>

      <Formik
        initialValues={{
          edad: '',
          sexo: '',
          direccion: '',
          telefono: '',
          presionSistolica: '',
          presionDiastolica: '',
          colesterolTotal: '',
          ldl: '',
          hdl: '',
          trigliceridos: '',
          historialFamiliar: '',
          enfermedadesCronicas: '',
          habitoFumar: '',
          frecuenciaAlcohol: '',
          dieta: '',
          actividadFisica: '',
          imc: '',
          nivelesGlucosa: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
           <div className="dialogo-container">
  <div className="personal-info border">
    <b>Información Personal:</b>
    <div className='separation'>
      <p><strong>Edad:</strong></p>
      <div className="field-container">
        <Field type="text" name="edad" />
      </div>
      <p><strong>Sexo:</strong></p>
      <div className="field-container">
        <Field type="text" name="sexo"  />
      </div>
      <p><strong>Dirección:</strong></p>
      <div className="field-container">
        <Field type="text" name="direccion"/>
      </div>
      <p><strong>Teléfono:</strong></p>
      <div className="field-container">
        <Field type="text" name="telefono"  />
      </div>
    </div>
  </div>

  <div className='medical-history border'>
  <b>Antecedentes Médicos:</b>
  <div className='separation'>
    <p><strong>Presión Arterial Sistólica:</strong></p>
    <div className="field-container">
      <Field type="text" name="presionSistolica"  />
    </div>
    <p><strong>Presión Arterial Diastólica:</strong></p>
    <div className="field-container">
      <Field type="text" name="presionDiastolica"  />
    </div>
  </div>
  <p><strong>Niveles de Colesterol Total:</strong></p>
  <div className="field-container">
    <Field type="text" name="colesterolTotal"  />
  </div>
  <div className='separation'>
    <p><strong>Niveles de LDL (Colesterol Malo):</strong></p>
    <div className="field-container">
      <Field type="text" name="ldl" />
    </div>
    <p><strong>Niveles de HDL (Colesterol Bueno):</strong></p>
    <div className="field-container">
      <Field type="text" name="hdl" />
    </div>
  </div>
  <div className='separation'>
    <p><strong>Niveles de Triglicéridos:</strong></p>
    <div className="field-container">
      <Field type="text" name="trigliceridos"  />
    </div>
    <p><strong>Historial Familiar de Enfermedades Cardiacas:</strong></p>
    <div className="field-container">
      <Field type="text" name="historialFamiliar"  />
    </div>
  </div>
  <p><strong>Historial de Enfermedades Crónicas:</strong></p>
  <div className="field-container">
    <Field type="text" name="enfermedadesCronicas" />
  </div>
</div>

<div className="life-style border">
  <b>Estilo de Vida:</b>
  <div className="separation">
    <p><strong>Hábito de Fumar (Si/No):</strong></p>
    <div className="field-container">
      <Field type="text" name="habitoFumar" />
    </div>
    <p><strong>Frecuencia de Consumo de Alcohol:</strong></p>
    <div className="field-container">
      <Field type="text" name="frecuenciaAlcohol" />
    </div>
  </div>
  <div className="separation">
    <p><strong>Dieta (Alta/Baja en Grasas Saturadas y Colesterol):</strong></p>
    <div className="field-container">
      <Field type="text" name="dieta"  />
    </div>
    <p><strong>Nivel de Actividad Física (Horas a la Semana):</strong></p>
    <div className="field-container">
      <Field type="text" name="actividadFisica"  />
    </div>
  </div>
</div>

<div className="risk-evaluation border">
  <b>Evaluación de Riesgo:</b>
  <div className="separation">
    <p><strong>Índice de Masa Corporal (IMC):</strong></p>
    <div className="field-container">
      <Field type="text" name="imc"  />
    </div>
    <p><strong>Niveles de Glucosa en Sangre:</strong></p>
    <div className="field-container">
      <Field type="text" name="nivelesGlucosa"  />
    </div>
  </div>
</div>
</div>
            <button type="submit" className="button" disabled={isSubmitting}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Usuarios;
