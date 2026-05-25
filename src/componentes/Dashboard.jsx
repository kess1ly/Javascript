export default function Dashboard({ pets = [] }) {
  return (
    <div className="container dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Bem-vindo ao Sistema PetShop 🐾</h1>
        <p>Gerencie tudo de forma rápida e prática</p>
      </div>

      {/* CARDS */}
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>🐶 Pets cadastrados</h3>
          <p>{pets.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>👤 Clientes</h3>
          <p>--</p>
        </div>

        <div className="dashboard-card">
          <h3>🛁 Serviços ativos</h3>
          <p>--</p>
        </div>

        <div className="dashboard-card">
          <h3>📅 Agendamentos</h3>
          <p>--</p>
        </div>

      </div>

    </div>
  );
}
