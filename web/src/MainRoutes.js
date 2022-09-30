import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

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
      <Route
        path="/public"
        element={
          <div>
            <h1>oi estou nas rotas publicas</h1>
            <Outlet />
          </div>
        }
      >
        <Route
          path="login"
          element={
            <div>
              <h2>login</h2>
              <Outlet />
            </div>
          }
        >
          <Route path="normal" element={<div>normal</div>} />
          <Route path="google" element={<div>google</div>} />
        </Route>
        <Route path="register" element={<div> Cadastro</div>} />
      </Route>
    </Routes>
  );
}
