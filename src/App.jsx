import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Accounts,
  CreateTransaction,
  CreateUser,
  DashBoard,
  Login,
  Register,
  Transactions,
  Users,
} from "./pages";
import AuthProtected from "./components/General/AuthProtected";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/enroll" element={<Register />} />
      <Route element={<AuthProtected />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-transaction" element={<CreateTransaction />} />
      </Route>
    </Routes>
  );
};

export default App;
