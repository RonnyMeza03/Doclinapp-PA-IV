import '../css/inicio.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { obtenerUsuariosRequest, crearUsuarioRequest } from '../../api/usuarios.api';

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
              // Si no existe, guardarlo en la base de datos
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
        </div>
      </div>
    )
  );
};

export default Inicio;

  