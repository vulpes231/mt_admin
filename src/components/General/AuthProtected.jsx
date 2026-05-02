// components/ProtectedLayout.jsx
// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { getAccessToken } from "../../constant/constant";
import Sidebar from "../Layout/Sidebar";

const AuthProtected = () => {
  const isAuthenticated = getAccessToken();

  if (isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app-layout">
      <div className="flex h-screen w-screen overflow-hidden">
        <div className="w-100">
          <Sidebar />
        </div>
        <div className="w-full p-6 bg-slate-200/70 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthProtected;
