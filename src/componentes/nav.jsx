import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>PetFlow</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cliente">Cliente</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}
