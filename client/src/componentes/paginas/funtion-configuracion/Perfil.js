import React, { useState, useEffect, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerPerfil } from "../../../api/usuarios.api";
import "../../css/Perfil.css";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { obtenerPacientesPerfil } from "../../../api/perfil.api";
import { formatearFecha } from "../funtion-pacientes/PacienteDetalles";
import Modal from "./grupo-componentes/Modal";
import EditPerfil from "./EditPerfil";

const Perfil = ({ dashboardAbierto }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [perfil, setPerfil] = useState(null);
  const [pacientes, setPacientes] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadingPerfil, setIsLoadingPerfil] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perfilActualizado, setPerfilActualizado] = useState(false);

  const colors = {
    blue: "#1877f2",
    skyblue: "#1da1f2",
    darkPink: "#ea4c89",
    lightBlue: "#0077b5",
    darkMagenta: "#833ab4",
    lightGreen: "#34a853",
    lightPurple: "#8e44ad",
  };

  const cargarPerfil = useCallback(async () => {
    if (!isAuthenticated || isLoading || !user) {
      return;
    }

    try {
      setIsLoadingPerfil(true);
      const respuesta = await obtenerPerfil(user.sub);
      const pacientesRequest = await obtenerPacientesPerfil(respuesta.data.id);
      setPerfil(respuesta.data);
      setPacientes(pacientesRequest.data);
    } catch (error) {
      console.error("Error al cargar perfil:", error);
      setError(error.message);
    } finally {
      setIsLoadingPerfil(false);
    }
  }, [user, isAuthenticated, isLoading]);

  useEffect(() => {
    cargarPerfil();
  }, [cargarPerfil, perfilActualizado]);

  const handlePerfilEditado = useCallback(async () => {
    try {
      await obtenerPerfil(user.sub);
      setIsModalOpen(false); // Cerrar el modal después de agregar exitosamente
      setPerfilActualizado((prev) => !prev); // Cambiar estado para forzar renderizado
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setError(error.message || 'Error al actualizar el perfil');
    }
  }, [user.sub]);

  if (isLoading || isLoadingPerfil) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No hay datos de usuario disponibles</div>;
  }

  console.log(perfil);

  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-pic">
          <img src={user.picture} alt={user.name}></img>
        </div>

        <div className="profile-details">
          <div className="intro">
            <h2>{user.name}</h2>
            <h4>{perfil.rol}</h4>
            <div className="social">
              <a href="#">
                <i style={{ color: colors.blue }}>
                  <FaFacebook></FaFacebook>
                </i>
              </a>
              <a href="#">
                <i style={{ color: colors.skyblue }}>
                  <FaSquareXTwitter></FaSquareXTwitter>
                </i>
              </a>
              <a href="#">
                <i style={{}}>
                  <FaInstagramSquare />
                </i>
              </a>
              <a href="#">
                <i style={{ color: colors.lightBlue }}>
                  <FaLinkedin></FaLinkedin>
                </i>
              </a>
            </div>
          </div>

          <div className="contact-info">
            <div className="row">
              <div className="icon">
                <MdSmartphone></MdSmartphone>
              </div>
              <div className="content">
                <span>Teléfono</span>
                <h5>
                  {!user.phone_number ? "No disponible" : user.phone_number}
                </h5>
              </div>
            </div>

            <div className="row">
              <div className="icon">
                <MdEmail></MdEmail>
              </div>
              <div className="content">
                <span>Email</span>
                <h5>{user.email}</h5>
              </div>
            </div>

            <div className="row">
              <div className="icon">
                <CiLocationOn></CiLocationOn>
              </div>
              <div className="content">
                <span>Location</span>
                <h5>{!user.locale ? "No disponible" : user.locale}</h5>
              </div>
            </div>
          </div>
          <button className="download-btn">
            <i className="fa fa-download"></i> Editar Perfil
          </button>
        </div>
      </div>

      <div className="about">
        <h1>Sobre Mí</h1>
        {perfil.acercaDe === null ?
        <>
        <p>Editar: </p> 
        <FaEdit style={{color: 'black'}} onClick={() => setIsModalOpen(true)}/>
        </> 
          : 
          <p>{perfil.acercaDe || ''}</p>}
        <h2>Ultimos Pacientes creados: </h2>
        <div className="work">
          {pacientes && pacientes.length > 0 ? (
            pacientes.map((item, index) => (
              <div className="workbox" key={index}>
                <div className="icon">
                  <img
                    src={`https://ui-avatars.com/api/?name=${item.nombre} ${item.apellido}&background=random`}
                    alt={item.nombre}
                    className="paciente-avatar"
                  />
                </div>
                <div className="desc">
                  <h3>
                    {item.nombre} {item.apellido}
                  </h3>
                  <p>Fecha de creación: {formatearFecha(item.createdAt)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No se han creado pacientes.</p> // Mensaje cuando no hay pacientes
          )}
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Editar Perfil"
        >
          <EditPerfil
            idPerfil={perfil.id}
            onEdit={handlePerfilEditado}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Perfil;
