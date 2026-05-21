import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./componentes/Home";
import Cliente from "./componentes/Cliente";
import Servicos from "./componentes/Servicos";
import Admin from "./componentes/Admin";
import AdminLogin from "./componentes/AdminLogin";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";

export default function App() {
  const [pets, setPets] = useState([]);
  const [adminLogado, setAdminLogado] = useState(false);

  // 🔐 mantém login após atualizar página
  useEffect(() => {
    const auth = localStorage.getItem("adminLogado");
    if (auth === "true") {
      setAdminLogado(true);
    }
  }, []);

  // login admin
  function loginAdmin() {
    localStorage.setItem("adminLogado", "true");
    setAdminLogado(true);
  }

  // logout admin
  function logoutAdmin() {
    localStorage.removeItem("adminLogado");
    setAdminLogado(false);
  }

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* CLIENTE CADASTRA PETS */}
        <Route
          path="/cliente"
          element={<Cliente pets={pets} setPets={setPets} />}
        />

        <Route path="/servicos" element={<Servicos />} />

        {/* ADMIN EDITA PETS */}
        <Route
          path="/admin"
          element={
            adminLogado ? (
              <Admin
                pets={pets}
                setPets={setPets}
                onLogout={logoutAdmin}
              />
            ) : (
              <AdminLogin onLogin={loginAdmin} />
            )
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
