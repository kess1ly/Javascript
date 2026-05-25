import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="home-hero">
        <h1>Bem-vindo ao PetFlow 🐾</h1>

        <p>
          Sistema completo para pet shops.
          Gerencie pets, clientes, serviços e atendimentos de forma simples.
        </p>

        <Link to="/cliente" className="haome-ct">
          Começar agora
        </Link>
      </section>

      {/* CARDS */}
      <section className="home-cards">

        <Link to="/cliente" className="home-card">
          <h3>🐶 Cadastro de Pets</h3>
          <p>Clientes podem cadastrar e visualizar seus pets.</p>
        </Link>

        <Link to="/servicos" className="home-card">
          <h3>🛁 Serviços</h3>
          <p>Banho, tosa, consulta e vacinação.</p>
        </Link>

        <Link to="/admin" className="home-card">
          <h3>⚙️ Painel Admin</h3>
          <p>Gerencie pets, clientes e atendimentos.</p>
        </Link>

      </section>

    </div>
  );
}
