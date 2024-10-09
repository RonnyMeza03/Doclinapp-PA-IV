import React, { useEffect, useState } from "react";
import Persona from "../paginas/function-informes/Persona";
import Dialogo from "../paginas/function-informes/Dialogo";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/informes.css";

import { obtenerUsuarioPacientes } from "../../api/usuarios.api";
import { useNavigate } from "react-router-dom";

const Informes = () => {
  const [dialogoVisible, setDialogoVisible] = useState(false);
  const [filtradorVisible, setFiltradorVisible] = useState(true);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [mostrarLista, setMostrarLista] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [ordenEdad, setOrdenEdad] = useState("ascendente");
  const [sexo, setSexo] = useState("todos");
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    async function cargarUsuarios() {
      if (!isAuthenticated || !user || isLoading) {
        return <h1>cargando...</h1>;
      }

      try {

        const respuesta = await obtenerUsuarioPacientes(user.sub);
        setUsuarios(respuesta.data);
        setLoading(false);
      } catch (error) {
        setUsuarios([]); return
        setError(error.message);
        setLoading(false);
      }
    }
    cargarUsuarios();
  }, [user.sub, isAuthenticated, isLoading]);

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Usuarios:", usuarios);

  const handleClick = (id) => {
    navigate(`/informes/${id}`);
  };

  const abrirDialogo = (id) => {
    const persona = usuarios.find((p) => p.id === id);
    setPersonaSeleccionada(persona);
    setDialogoVisible(true);
    setMostrarLista(false);
    setFiltradorVisible(false);
    handleClick(id);
  };

  const cerrarDialogo = () => {
    setDialogoVisible(false);
    setPersonaSeleccionada(null);
    setMostrarLista(true);
    setFiltradorVisible(true);
  };

  const filtrarPorNombre = () => {
    const busquedaSinEspacios = busqueda.trim();
    if (busquedaSinEspacios === "") {
      return usuarios;
    } else {
      return usuarios.filter((usuario) => {
        const nombreCompleto =
          `${usuario.nombre} ${usuario.apellido}`.toLowerCase();
        return nombreCompleto.includes(busquedaSinEspacios.toLowerCase());
      });
    }
  };

  const ordenarPorEdad = (usuarios) => {
    if (!Array.isArray(usuarios)) {
      console.error("El valor de 'usuarios' no es un array:", usuarios);
      return []; // Retornar un array vacío si no es un array
    }
  
    return usuarios.sort((a, b) => {
      if (ordenEdad === "ascendente") {
        return a.edad - b.edad;
      } else {
        return b.edad - a.edad;
      }
    });
  };

  const filtrarPorSexo = (usuarios) => {
    if (sexo === "todos") {
      return usuarios;
    } else {
      return usuarios.filter((usuario) => usuario.sexo === sexo);
    }
  };

  return (
    <div className="informes-container">
      {filtradorVisible && (
        <>
          {" "}
          <section className="main-header-content">
            <h1 className="title">Informes</h1>
            <div className="filtro">
              <input
                id="busqueda"
                type="text"
                placeholder="Buscar por nombre"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />

              <div className="input">
                <label htmlFor="ordenEdad" className="label-small">
                  {" "}
                  Ordenar por edad:
                </label>
                <select
                  id="ordenEdad"
                  value={ordenEdad}
                  onChange={(e) => setOrdenEdad(e.target.value)}
                >
                  <option value="ascendente">Ascendente</option>
                  <option value="descendente">Descendente</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="sexo" className="label-small">
                  {" "}
                  Filtrar por genero:
                </label>
                <select
                  id="sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                >
                  <option value="todos">Todos</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
            </div>
          </section>
          {mostrarLista && (
            <ul>
              {filtrarPorSexo(ordenarPorEdad(filtrarPorNombre())).map(
                (usuario) => (
                  <Persona
                    key={usuario.id}
                    nombre={usuario.nombre}
                    apellido={usuario.apellido}
                    edad={usuario.edad}
                    creado={new Date(usuario.createAt).toLocaleString()}
                    onClick={() => abrirDialogo(usuario.id)}
                  />
                )
              )}
            </ul>
          )}
        </>
      )}
      {dialogoVisible && (
        <Dialogo
          personaSeleccionada={personaSeleccionada}
          onClose={cerrarDialogo}
        />
      )}
    </div>
  );
};

export default Informes;
