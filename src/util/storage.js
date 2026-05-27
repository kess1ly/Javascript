export function getPets() {
  try {
    return JSON.parse(localStorage.getItem("pets")) || [];
  } catch {
    return [];
  }
}

export function salvarPet(pet) {
  const lista = getPets();

  const novoPet = {
    ...pet,
    id: crypto.randomUUID(),
  };

  lista.push(novoPet);
  localStorage.setItem("pets", JSON.stringify(lista));
}

export function removerPet(id) {
  const novaLista = getPets().filter(
    (pet) => pet.id !== id
  );

  localStorage.setItem(
    "pets",
    JSON.stringify(novaLista)
  );
}

export function editarPet(id, dadosAtualizados) {
  const lista = getPets();

  const novaLista = lista.map((pet) =>
    pet.id === id
      ? { ...pet, ...dadosAtualizados }
      : pet
  );

  localStorage.setItem(
    "pets",
    JSON.stringify(novaLista)
  );
}

export function limparPets() {
  localStorage.removeItem("pets");
}
