import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao PetFlow 🐾</h1>

      <p>
        Sistema de gerenciamento para pet shops.
        Controle clientes, pets, serviços e atendimentos.
      </p>

      <div className="home-cards">

        {/* CLIENTE CADASTRA PETS */}
        <Link to="/cliente" className="home-card">
          <h3>Cadastro de Pets</h3>
          <p>Clientes podem cadastrar e visualizar seus pets.</p>
        </Link>

        {/* SERVIÇOS */}
        <Link to="/servicos" className="home-card">
          <h3>Serviços</h3>
          <p>Banho, tosa, consulta e vacinação.</p>
        </Link>

        {/* ADMIN */}
        <Link to="/admin" className="home-card">
          <h3>Painel Admin</h3>
          <p>Editar, remover e gerenciar todos os pets.</p>
        </Link>

      </div>
    </div>
  );
}