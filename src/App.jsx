import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard, Login, Register } from "./pages";
import AuthProtected from "./components/General/AuthProtected";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/enroll" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <AuthProtected>
            <DashBoard />
          </AuthProtected>
        }
      />
    </Routes>
  );
};

export default App;
