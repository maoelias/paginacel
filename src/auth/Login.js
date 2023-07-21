import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';



export const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      console.log(error);
    }

  };
useEffect(() => {
   if (isAuthenticated && user) {
     dispatch(login(user))};
   }
  , [isAuthenticated, user, dispatch]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return <button id="mi-Boton"type="button" className='d-grid gap-2 col-6 mx-auto btn btn-primary' onClick={handleLogin}>Acceder</button>;


 

};