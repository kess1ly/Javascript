import { useState } from "react";

export default function Cliente({ pets, adicionarPet }) {
  const [pet, setPet] = useState({
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    dono: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!pet.nome || !pet.especie) return;

    adicionarPet({
      ...pet,
      id: crypto.randomUUID()
    });

    setPet({
      nome: "",
      especie: "",
      raca: "",
      idade: "",
      dono: ""
    });
  }

  return (
    <div className="container">

      <h1>Cadastro de Animais 🐾</h1>

      {/* FORMULÁRIO DETALHADO */}
      <form onSubmit={handleSubmit}>

        <input
          name="nome"
          placeholder="Nome do animal"
          value={pet.nome}
          onChange={handleChange}
        />

        <input
          name="especie"
          placeholder="Espécie (Cachorro, Gato...)"
          value={pet.especie}
          onChange={handleChange}
        />

        <input
          name="raca"
          placeholder="Raça"
          value={pet.raca}
          onChange={handleChange}
        />

        <input
          name="idade"
          placeholder="Idade"
          value={pet.idade}
          onChange={handleChange}
        />

        <input
          name="dono"
          placeholder="Nome do tutor"
          value={pet.dono}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar Animal
        </button>

      </form>

      {/* LISTA DE ANIMAIS */}
      <h2>Animais cadastrados</h2>

      {pets.length === 0 ? (
        <p>Nenhum animal cadastrado ainda.</p>
      ) : (
        pets.map((p) => (
          <div key={p.id} className="pet-card">
            <p><b>Nome:</b> {p.nome}</p>
            <p><b>Espécie:</b> {p.especie}</p>
            <p><b>Raça:</b> {p.raca}</p>
            <p><b>Idade:</b> {p.idade}</p>
            <p><b>Tutor:</b> {p.dono}</p>
          </div>
        ))
      )}

    </div>
  );
}
