import React from "react";
import { useEffect, useState } from "react";
import { cambiarAPremiun } from "../../api/perfil.api";
import { useAuth0 } from "@auth0/auth0-react";
import "../css/PremiunBronce.css"; // Asegúrate de crear este archivo CSS

export const PremiunPlata = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [mensajeExito, setMensajeExito] = useState(false);

  useEffect(() => {
    const actualizarAPremium = async () => {
      if (!isAuthenticated || isLoading || !user) {
        setLoading(false);
        return;
      }
      try {
        await cambiarAPremiun({
          premium: 1,
          idAuth0: user.sub,
        });
        setMensajeExito(true);
        setLoading(false);
        console.log("Perfil actualizado a premium exitosamente");
      } catch (error) {
        console.error("Error al actualizar el perfil a premium:", error);
        setLoading(false);
      }
    };

    actualizarAPremium();
  }, [user, isAuthenticated, isLoading]);

  if(loading){
    return <div>Cargando...</div>
  }

  return (
    <div className="premium-container">
      {mensajeExito && (
        <div className="mensaje-exito">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu suscripción Plata ha sido activada exitosamente.</p>
          <p>Ahora podrás disfrutar de todos los beneficios de ser usuario premium.</p>
        </div>
      )}
    </div>
  );
};