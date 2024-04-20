<<<<<<< HEAD
import React from "react";
import Button from "react-bootstrap/Button";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik } from "formik";
import {crearUsuarioRequest} from '../api/usuarios.api.js';

const handleChange =  (evento) => {
  console.log(evento)
  console.log(evento.target.value)
}

const Usuarios = () => {
  return (
    <div className="content">
      <h1>Contenido de Usuarios</h1>
      <p>Aquí encontrarás la información sobre los usuarios.</p>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values)
          try {
            const respuesta = await crearUsuarioRequest(values);
            console.log(respuesta);
            actions.resetForm();
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <BootstrapForm onSubmit={handleSubmit}>
            <BootstrapForm.Group className="mb-3" controlId="">
              <BootstrapForm.Label>Nombre:</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
                value={values.nombre}
              />
              <BootstrapForm.Text className="text-muted">
                introduce un nombre
              </BootstrapForm.Text>
            </BootstrapForm.Group>

            <BootstrapForm.Group className="mb-3" controlId="nombre">
              <BootstrapForm.Label>Apellido</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="apellido"
                placeholder="Apellido"
                onChange={handleChange}
                value={values.apellido}
              />
            </BootstrapForm.Group>
           
            <Button variant="primary" type="submit" disabled = {isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </Button>
          </BootstrapForm>
        )}
      </Formik>
      <div>
        <BootstrapForm.Label>Escriba la url del servidor donde importara los pacientes</BootstrapForm.Label>
        <BootstrapForm.Group className="mb-3" controlId="server">
              <BootstrapForm.Label>servidor:</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                name="server"
                placeholder="URL"
                onChange={handleChange}
              />
            </BootstrapForm.Group>
      </div>
    </div>
  );
};

export default Usuarios;
=======
const Usuarios = ( ) => {
    return <div>Usuarios</div>
}

export default Usuarios
>>>>>>> 82532b8c7325f0aaacc0f481499c2ef612709aab
