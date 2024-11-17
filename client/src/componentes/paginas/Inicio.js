import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import {
  obtenerUsuariosRequest,
  crearUsuarioRequest,
} from "../../api/usuarios.api";
import { crearPerfilRequest } from "../../api/perfil.api";
import "../css/Inicio.css";

const Inicio = () => {
  const { user, isAuthenticated } = useAuth0();
  const [yaGuardado, setYaGuardado] = useState(false);

  useEffect(() => {
    const guardarUsuario = async () => {
      if (!user || !isAuthenticated || yaGuardado) {
        console.log("Usuario no autenticado o sin datos");
        return;
      }

      try {
        const { data: usuarios } = await obtenerUsuariosRequest();
        console.log("Usuarios existentes:", usuarios);

        const usuarioExiste = usuarios.some((usuario) => {
          console.log("Comparando con:", usuario.sub);
          return usuario.sub === user.sub;
        });
        
        console.log("¿Usuario existe?", usuarioExiste);

        if (!usuarioExiste) {
          const respuestaUsuario = await crearUsuarioRequest({
            name: user.name,
            given_name: user.given_name,
            nickname: user.nickname,
            email: user.email,
            email_verified: user.email_verified,
            family_name: user.family_name,
            picture: user.picture,
            sub: user.sub,
            aplicacionID: 1,
          });
          console.log("Respuesta crear usuario:", respuestaUsuario);

          const respuestaPerfil = await crearPerfilRequest({
            rol: "doctor",
            acercaDe: null,
            premium: false,
            idAuth0: user.sub,
          });
          console.log("Respuesta crear perfil:", respuestaPerfil);
        }

      } catch (error) {
        console.error("Error específico:", error.message);
        console.error("Stack completo:", error.stack);
      }
    };

    guardarUsuario();
  }, [user, isAuthenticated]);

  return (
    isAuthenticated && (
      <div className="inicio-container">
        <div className="nota">
          <img src={user.picture} alt={user.name} />
          <p>Bienvenido {user.name}</p>
          <p>Nombre de Usuario: {user.nickname}</p>
          <div class="linea"></div>
          <h3 className="caracteristicas">
            ¡Nuevas Caracteristicas de nuestra Version 2.0 de DoclinApp!
          </h3>

          <ul className="texto-inicio">
            <li>Módulo de Configuración ⚙</li>
            <li>Módulo de Pago 💵</li>
            <li>Compras a través de PayPal 💲</li>
            <li>Podrás Trabajar en Equipo 💻</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Inicio;
