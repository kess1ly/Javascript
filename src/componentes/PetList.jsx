import PetItem from "./PetItem";

export default function PetList({ pets, removerPet, editarPet, modo }) {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetItem
          key={pet.id}
          pet={pet}
          removerPet={removerPet}
          editarPet={editarPet}
          modo={modo}
        />
      ))}
    </div>
  );
}
