import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button id="mi-Boton"type="button" className='d-grid gap-2 col-6 mx-auto btn btn-primary' onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </button>
  );
};