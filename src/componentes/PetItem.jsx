export default function PetItem({ pet }) {
  return (
    <div className="pet-card">

      <p><b>Nome:</b> {pet.nome}</p>
      <p><b>Espécie:</b> {pet.especie}</p>
      <p><b>Idade:</b> {pet.idade}</p>

      {pet.observacao && (
        <p><b>Obs:</b> {pet.observacao}</p>
      )}

    </div>
  );
}
