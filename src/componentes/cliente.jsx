import { useState } from "react";
import PetForm from "./PetForm";
import PetList from "./PetList";

export default function Cliente({ pets, setPets }) {
  const [editando, setEditando] = useState(null);

  // ➕ cadastrar pet
  function adicionarPet(pet) {
    setPets([...pets, { ...pet, id: Date.now() }]);
  }

  return (
    <div className="container">
      <h1>Área do Cliente 🐾</h1>

      {/* FORMULÁRIO DE CADASTRO */}
      <PetForm adicionarPet={adicionarPet} />

      {/* LISTA DE PETS */}
      <PetList pets={pets} modo="cliente" />
    </div>
  );
}
