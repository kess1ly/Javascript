import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <h1>PetFlow</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cliente">Cliente</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box brand">
          <h2>🐾 PetFlow</h2>
          <p>Cuidando com amor dos seus pets</p>
        </div>

        {/* LINKS */}
        <div className="footer-box">
          <h3>Links</h3>

          <Link to="/">Home</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/cliente">Cliente</Link>
          <Link to="/admin">Admin</Link>
        </div>

        {/* CONTATO */}
        <div className="footer-box">
          <h3>Contato</h3>
          <p>📍 Montes Claros - MG</p>
          <p>📞 (99) 9999-8888</p>
          <p>✉️ contato@petflow.com</p>
        </div>

        {/* CTA */}
        <div className="footer-box cta">
          <h3>Agende agora 🐶</h3>
          <p>Seu pet merece cuidado especial</p>

          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cta-button">
              Falar no WhatsApp
            </button>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 PetFlow — Feito com carinho para pets felizes 🐾</p>
      </div>

    </footer>
  );
}

export default Footer;
