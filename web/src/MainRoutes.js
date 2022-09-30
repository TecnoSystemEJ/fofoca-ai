import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

export default function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            oi estou na home <Link to="/login">login</Link>
          </div>
        }
      />

      <Route path="login" element={<Login />} />

      <Route path="register" element={<div> Cadastro</div>} />
    </Routes>
  );
}
