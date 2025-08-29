import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

const PreventLoggedInRoute = ({ children }) => {
  const { user } = useAuth(); 

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return children; 
};

export default PreventLoggedInRoute;
