import React from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../constant/constant";

const AuthProtected = ({ children }) => {
  const isAuthenticated = getAccessToken();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthProtected;
