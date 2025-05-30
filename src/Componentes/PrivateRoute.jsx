// src/Componentes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession'; // creamos esto también

const PrivateRoute = ({ children }) => {
  const { usuario, cargando } = useSession();

  if (cargando) return <p>Cargando...</p>;
  return usuario ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
