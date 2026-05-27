export default function PetItem({ pet, removerPet, editarPet, modo }) {
  return (
    <div className="pet-card">
      <p><b>Nome:</b> {pet.nome}</p>
      <p><b>Dono:</b> {pet.dono}</p>
      <p><b>Espécie:</b> {pet.especie}</p>
      <p><b>Serviço:</b> {pet.tipo}</p>
      <p><b>Valor:</b> R$ {pet.valor}</p>

      {modo === "admin" && (
        <div className="pet-actions">
          <button className="edit-btn" onClick={() => editarPet(pet)}>
            Editar
          </button>

          <button className="delete-btn" onClick={() => removerPet(pet.id)}>
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}
