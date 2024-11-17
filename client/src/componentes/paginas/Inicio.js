import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { obtenerUsuariosRequest, crearUsuarioRequest } from '../../api/usuarios.api';
import { crearPerfilRequest } from '../../api/perfil.api';
import "../css/Inicio.css";

const Inicio = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const guardarUsuario = async () => {
      if (user && isAuthenticated) {
        // Verificar en localStorage si el usuario ya fue guardado
        const usuarioGuardado = localStorage.getItem('usuarioGuardado');

        if (!usuarioGuardado) {
          try {
            // Verificar si el usuario ya existe en la base de datos
            const { data: usuarios } = await obtenerUsuariosRequest();
            const usuarioExiste = usuarios.some((u) => u.sub === user.sub);
            console.log(usuarioExiste)

            if (!usuarioExiste) {
              await crearUsuarioRequest({
                name: user.name,
                given_name: user.given_name,
                nickname: user.nickname,
                email: user.email,
                email_verified: user.email_verified,
                family_name: user.family_name,
                picture: user.picture,
                sub: user.sub,  // El ID de Auth0
                aplicacionID: 1
              });

              await crearPerfilRequest({
                rol: 'doctor',
                acercaDe: "",
                premium: false,
                idAuth0: user.sub
              })
            }

            // Guardar en localStorage que ya se guardó el usuario
            localStorage.setItem('usuarioGuardado', 'true');
          } catch (error) {
            console.error('Error al guardar el usuario:', error);
          }
        }
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
      <h3 className="caracteristicas">¡Nuevas Caracteristicas de nuestra Version 2.0 de DoclinApp!</h3> 
      
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

  