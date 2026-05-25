import { useState } from "react";

export default function Admin({ pets, removerPet, atualizarPet, onLogout }) {
  const [editando, setEditando] = useState(null);

  function handleEditChange(id, campo, valor) {
    atualizarPet(id, { [campo]: valor });
  }

  return (
    <div className="container">

      {/* HEADER */}
      <div className="admin-header">
        <h1>Painel Admin 🧑‍💼</h1>
        <button onClick={onLogout}>Sair</button>
      </div>

      {/* LISTA */}
      <div className="admin-grid">

        {pets.length === 0 ? (
          <p>Nenhum pet cadastrado.</p>
        ) : (
          pets.map((pet) => (
            <div key={pet.id} className="admin-card">

              {editando === pet.id ? (
                <>
                  <input
                    value={pet.nome}
                    onChange={(e) =>
                      handleEditChange(pet.id, "nome", e.target.value)
                    }
                  />

                  <input
                    value={pet.especie}
                    onChange={(e) =>
                      handleEditChange(pet.id, "especie", e.target.value)
                    }
                  />

                  <input
                    value={pet.raca || ""}
                    onChange={(e) =>
                      handleEditChange(pet.id, "raca", e.target.value)
                    }
                  />

                  <div className="admin-actions">
                    <button onClick={() => setEditando(null)}>
                      Salvar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{pet.nome}</h3>

                  <p><b>Espécie:</b> {pet.especie}</p>
                  <p><b>Raça:</b> {pet.raca || "-"}</p>
                  <p><b>Idade:</b> {pet.idade || "-"}</p>
                  <p><b>Tutor:</b> {pet.dono || "-"}</p>

                  <div className="admin-actions">

                    <button onClick={() => setEditando(pet.id)}>
                      Editar
                    </button>

                    <button onClick={() => removerPet(pet.id)}>
                      Excluir
                    </button>

                  </div>
                </>
              )}

            </div>
          ))
        )}

      </div>
    </div>
  );
}
