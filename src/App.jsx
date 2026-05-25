import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./componentes/Home";
import Cliente from "./componentes/cliente";
import Servicos from "./componentes/Servicos";
import Admin from "./componentes/Admin";
import AdminLogin from "./componentes/AdminLogin";

import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";

import { getPets, savePets, getAdminLogin, setAdminLogin } from "./util/storage";

export default function App() {
  const [pets, setPets] = useState([]);
  const [adminLogado, setAdminLogado] = useState(false);

  // carregar pets
  useEffect(() => {
    setPets(getPets());
    setAdminLogado(getAdminLogin());
  }, []);

  // salvar pets sempre que mudar
  useEffect(() => {
    savePets(pets);
  }, [pets]);

  function adicionarPet(pet) {
    setPets([
      ...pets,
      { ...pet, id: crypto.randomUUID() }
    ]);
  }

  function removerPet(id) {
    setPets(pets.filter((p) => p.id !== id));
  }

  function atualizarPet(id, dados) {
    setPets(
      pets.map((p) =>
        p.id === id ? { ...p, ...dados } : p
      )
    );
  }

  function loginAdmin() {
    setAdminLogin(true);
    setAdminLogado(true);
  }

  function logoutAdmin() {
    setAdminLogin(false);
    setAdminLogado(false);
  }

  return (
    <>
      <Nav />

      <div className="container">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/cliente"
            element={
              <Cliente
                pets={pets}
                adicionarPet={adicionarPet}
              />
            }
          />

          <Route path="/servicos" element={<Servicos />} />

          <Route
            path="/admin"
            element={
              adminLogado ? (
                <Admin
                  pets={pets}
                  removerPet={removerPet}
                  atualizarPet={atualizarPet}
                  onLogout={logoutAdmin}
                />
              ) : (
                <AdminLogin onLogin={loginAdmin} />
              )
            }
          />

        </Routes>
      </div>

      <Footer />
    </>
  );
}
