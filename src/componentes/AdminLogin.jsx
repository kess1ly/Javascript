import { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [senha, setSenha] = useState("");

  function entrar(e) {
    e.preventDefault();

    if (senha === "1234") {
      onLogin();
    } else {
      alert("Senha errada");
    }
  }

  return (
    <div className="container">

      <h1>Login Admin</h1>

      <form onSubmit={entrar}>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button>Entrar</button>
      </form>

    </div>
  );
}
