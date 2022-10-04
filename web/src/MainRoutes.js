import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Register";
import AuthTemplate from "./components/templates/AuthTemplate";
import Home from "./pages/Home";

export default function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home/>
        }
      />
      <Route path="auth" element={<AuthTemplate />} >
        <Route path="login" element={<Login />} />

        <Route path="register" element={<Cadastro />} />
      </Route>

    </Routes>
  );
}
