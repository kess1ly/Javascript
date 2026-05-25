import { useState } from "react";

export default function PetForm({ adicionarPet }) {
  const [pet, setPet] = useState({
    nome: "",
    especie: "",
    idade: ""
  });

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    adicionarPet(pet);

    setPet({ nome: "", especie: "", idade: "" });
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        name="nome"
        placeholder="Nome do pet"
        value={pet.nome}
        onChange={handleChange}
      />

      <input
        name="especie"
        placeholder="Espécie"
        value={pet.especie}
        onChange={handleChange}
      />

      <input
        name="idade"
        placeholder="Idade"
        value={pet.idade}
        onChange={handleChange}
      />

      <button>Cadastrar Pet</button>
    </form>
  );
}
