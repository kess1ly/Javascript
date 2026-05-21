import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="nav-logo">
        🐾 PetFlow
      </div>

      {/* BUSCA (estilo Petz) */}
      <div className="nav-search">
        <input type="text" placeholder="Buscar produtos para seu pet..." />
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cliente">Cliente</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>

      {/* AÇÕES (tipo Petz: usuário/carrinho) */}
      <div className="nav-actions">
        <span>👤</span>
        <span>🛒</span>
      </div>

    </nav>
  );
}
