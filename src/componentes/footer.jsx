import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer 
      className="footer" 
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#1f2937",
        padding: "12px 20px", /* 📏 Altura controlada e reduzida */
        borderTop: "1px solid #374151"
      }}
    >
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px", /* 📏 Menor espaço entre as colunas */
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {/* BRAND */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <h3 style={{ color: "#60a5fa", margin: 0, fontSize: "14px" }}>🐾 PetFlow</h3>
          <p style={{ color: "#d1d5db", margin: 0, fontSize: "11px" }}>Cuidando com amor dos seus pets</p>
        </div>

        {/* LINKS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <h4 style={{ color: "#60a5fa", margin: 0, fontSize: "13px" }}>Links</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "#d1d5db", fontSize: "11px", textDecoration: "none" }}>Home</Link>
            <Link to="/servicos" style={{ color: "#d1d5db", fontSize: "11px", textDecoration: "none" }}>Serviços</Link>
            <Link to="/cliente" style={{ color: "#d1d5db", fontSize: "11px", textDecoration: "none" }}>Cliente</Link>
            <Link to="/admin" style={{ color: "#d1d5db", fontSize: "11px", textDecoration: "none" }}>Admin</Link>
          </div>
        </div>

        {/* CONTATO */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <h4 style={{ color: "#60a5fa", margin: 0, fontSize: "13px" }}>Contato</h4>
          <p style={{ color: "#d1d5db", margin: 0, fontSize: "11px" }}>📞 (99) 9999-8888</p>
          <p style={{ color: "#d1d5db", margin: 0, fontSize: "11px" }}>✉️ contato@petflow.com</p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-start" }}>
          <h4 style={{ color: "#60a5fa", margin: 0, fontSize: "13px" }}>Agende agora 🐶</h4>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button 
              style={{
                background: "#25d366",
                color: "white",
                border: "none",
                padding: "4px 10px", /* 📏 Botão menor e delicado */
                borderRadius: "4px",
                fontSize: "11px",
                cursor: "pointer",
                margin: 0
              }}
            >
              WhatsApp
            </button>
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div 
        style={{
          textAlign: "center",
          marginTop: "8px",
          paddingTop: "6px",
          borderTop: "1px solid #374151",
          color: "#9ca3af",
          fontSize: "10px"
        }}
      >
        <p style={{ margin: 0 }}>© 2026 PetFlow — Feito com carinho para pets felizes 🐾</p>
      </div>
    </footer>
  );
}

export default Footer;
