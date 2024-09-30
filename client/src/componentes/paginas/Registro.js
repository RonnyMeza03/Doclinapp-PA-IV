import { Formik } from "formik";
import "../css/Registro.css";
import logo from "../imagenes/login.png";
import { Link, useNavigate } from "react-router-dom";
import { crearUsuarioRequest } from "../../api/usuarios.api";

const Registro = () => {
  const navigate = useNavigate();

  return (
    <div className="registro-container">
      <div className="registro">
        <h1>Registro</h1>
        <Formik
          initialValues={{
            nombreUsuario: "",
            nombre: "",
            apellido: "",
            contrasena: "",
            correo: "",
            telefono: "",
            rol: "doctor",
            fechaNacimiento: "",
            aplicacionID: "1",
          }}
          onSubmit={async (values, actions) => {
            console.log(values);
            try {
              const respuesta = await crearUsuarioRequest(values);
              console.log(respuesta);
              actions.resetForm();
              navigate("/inicio");
            } catch (error) {
              console.error(error);
              alert("Digite nombre de usuario")
            }
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Nombre de Usuario"
                  id="nombreUsuario"
                  name="nombreUsuario"
                  onChange={handleChange}
                  value={values.nombreUsuario}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  id="nombre"
                  name="nombre"
                  onChange={handleChange}
                  value={values.nombre}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Apellido"
                  id="apellido"
                  name="apellido"
                  onChange={handleChange}
                  value={values.apellido}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo"
                  id="correo"
                  name="correo"
                  onChange={handleChange}
                  value={values.correo}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  id="contrasena"
                  name="contrasena"
                  onChange={handleChange}
                  value={values.contrasena}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Teléfono"
                  id="telefono"
                  name="telefono"
                  onChange={handleChange}
                  value={values.telefono}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  onChange={handleChange}
                  value={values.fechaNacimiento}
                />
              </div>
              <button
                className="button-blue-rounded"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registrando..." : "Registrar"}
              </button>
              ¿Ya tienes una cuenta?
              <Link to="/login" className="link">
                {" "}
                Inicia sesión aquí{" "}
              </Link>
            </form>
          )}
        </Formik>
      </div>
      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Registro;
