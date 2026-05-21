import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();

    if (senha === "1234") {
      onLogin(); // salva no localStorage via App.jsx
    } else {
      alert("Senha incorreta!");
    }
  }

  return (
    <div className="container">
      <h1>Login do Administrador 🔐</h1>

      <form onSubmit={entrar}>
        <input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}