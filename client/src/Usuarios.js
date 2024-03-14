import React from "react";
import Button from "react-bootstrap/Button";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik } from "formik";
import {crearUsuarioRequest} from './api/usuarios.api.js';

const Usuarios = ({ toggleSidebar }) => {
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
            <BootstrapForm.Group className="mb-3" controlId="formBasicCheckbox">
              <BootstrapForm.Check type="checkbox" label="Check me out" />
            </BootstrapForm.Group>
            <Button variant="primary" type="submit" disabled = {isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
            </Button>
          </BootstrapForm>
        )}
      </Formik>
    </div>
  );
};

export default Usuarios;
