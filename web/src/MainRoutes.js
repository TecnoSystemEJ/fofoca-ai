import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Register";
import AuthTemplate from "./components/templates/AuthTemplate";

export default function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>

            <p>
              oi estou na home - Ir para <Link to="./auth/Login">login</Link>
            </p>

            <p>
              oi estou na home - Ir para cadastro <Link to="./auth/register">Cadastro</Link>
            </p>

          </div>
        }
      />
      <Route path="auth" element={<AuthTemplate />} >
        <Route path="login" element={<Login />} />

        <Route path="register" element={<Cadastro />} />
      </Route>

    </Routes>
  );
}
