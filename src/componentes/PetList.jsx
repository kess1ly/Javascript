import PetItem from "./PetItem";

export default function PetList({ pets }) {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
