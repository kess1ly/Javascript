import { useState } from "react";
import PetForm from "./PetForm";
import PetList from "./PetList";

export default function Admin({ pets, setPets, onLogout }) {
  const [petEditando, setPetEditando] = useState(null);

  // ➕ agora usa o estado global corretamente (sem duplicar lógica)
  const salvarPet = (pet) => {
    setPets([...pets, { ...pet, id: Date.now() }]);
  };

  const salvarEdicao = (id, petAtualizado) => {
    setPets(pets.map((p) => (p.id === id ? petAtualizado : p)));
    setPetEditando(null);
  };

  const removerPet = (id) => {
    setPets(pets.filter((p) => p.id !== id));
  };

  const editarPet = (pet) => {
    setPetEditando(pet);
  };

  return (
    <div className="container">
      <h1 className="dashboard-title">Painel Admin</h1>

      {/* 🔐 BOTÃO DE SAIR */}
      <button
        onClick={onLogout}
        style={{
          background: "#e74c3c",
          marginBottom: "20px"
        }}
      >
        Sair do Admin
      </button>

      <PetForm
        adicionarPet={salvarPet}
        salvarEdicao={salvarEdicao}
        petEditando={petEditando}
      />

      <PetList
        pets={pets}
        removerPet={removerPet}
        editarPet={editarPet}
        modo="admin"
      />
    </div>
  );
}