import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="nav-logo">
        🐾 <span>PetFlow</span>
      </div>

      {/* LINKS */}
      <ul className="nav-links">
        <li>
          <Link className={isActive("/") ? "active" : ""} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className={isActive("/cliente") ? "active" : ""} to="/cliente">
            Cliente
          </Link>
        </li>

        <li>
          <Link className={isActive("/servicos") ? "active" : ""} to="/servicos">
            Serviços
          </Link>
        </li>

        <li>
          <Link className={isActive("/admin") ? "active" : ""} to="/admin">
            Admin
          </Link>
        </li>
      </ul>

      {/* AÇÕES */}
      <div className="nav-actions">
        <button className="icon-btn" title="Perfil">
          👤
        </button>

        <button className="icon-btn" title="Carrinho">
          🛒
        </button>
      </div>
    </nav>
  );
}
