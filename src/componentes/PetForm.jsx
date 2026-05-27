import { useState, useEffect } from "react";

export default function PetForm({
  adicionarPet,
  salvarEdicao,
  petEditando,
}) {
  const [pet, setPet] = useState({
    nome: "",
    dono: "",
    especie: "",
    tipo: "",
    produto: "",
    valor: "",
  });

  useEffect(() => {
    if (petEditando) {
      setPet({
        nome: petEditando.nome || "",
        dono: petEditando.dono || "",
        especie: petEditando.especie || "",
        tipo: petEditando.tipo || "",
        produto: petEditando.produto || "",
        valor: petEditando.valor || "",
        id: petEditando.id, // mantém o id pra edição funcionar
      });
    }
  }, [petEditando]);

  function handleChange(e) {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (petEditando) {
      salvarEdicao(pet.id, pet);
    } else {
      adicionarPet(pet);
    }

    setPet({
      nome: "",
      dono: "",
      especie: "",
      tipo: "",
      produto: "",
      valor: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={pet.nome} onChange={handleChange} placeholder="Nome" />
      <input name="dono" value={pet.dono} onChange={handleChange} placeholder="Dono" />

      <select name="especie" value={pet.especie} onChange={handleChange}>
        <option value="">Espécie</option>
        <option>Cães (Todas as raças e portes)</option>
        <option>Gatos (Felinos em geral)</option>
        <option>Roedores (Hamsters, porquinhos-da-índia e coelhos)</option>
        <option>Aves (Calopsitas, periquitos e canários)</option>
      </select>

      <select name="tipo" value={pet.tipo} onChange={handleChange}>
        <option value="">Serviço</option>
        <option>Banho</option>
        <option>Tosa</option>
        <option>Consulta</option>
        <option>Vacinação</option>
        <option>Hospedagem</option>
        <option>Atendimento personalizado</option>
      </select>

      <input
        name="valor"
        value={pet.valor}
        onChange={handleChange}
        placeholder="Valor"
      />

      <button type="submit">
        {petEditando ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}
