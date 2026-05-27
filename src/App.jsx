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
  // 🌟 INICIALIZAÇÃO: Carrega os pets salvos no localStorage ou começa vazio []
  const [pets, setPets] = useState(() => {
    const petsSalvos = localStorage.getItem("sistema_pets");
    return petsSalvos ? JSON.parse(petsSalvos) : [];
  });
  
  const [adminLogado, setAdminLogado] = useState(false);

  // 🔐 mantém login após atualizar página
  useEffect(() => {
    const auth = localStorage.getItem("adminLogado");
    if (auth === "true") {
      setAdminLogado(true);
    }
  }, []);

  // 💾 SALVAMENTO AUTOMÁTICO: Sempre que a lista de pets mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem("sistema_pets", JSON.stringify(pets));
  }, [pets]);

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
    /* 🌟 ALTERADO: Mudado de <> para <div id="root"> para ativar o CSS do Grid */
    <div id="root">
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

      {/* 🚀 CORREÇÃO: Adicionado o Footer aqui para aparecer em todas as páginas */}
      <Footer />
    </div>
  );
}
