import React, { useState } from "react";

function AddUser() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [funcao, setFuncao] = useState("Administrador"); // Valor padrão

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar o novo usuário
    const novoUsuario = {
      login,
      senha,
      funcao,
    };
    console.log("Novo Usuário:", novoUsuario);
    // Limpar os campos após o submit
    setLogin("");
    setSenha("");
    setFuncao("Administrador");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Adicionar Novo Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="funcao">Função:</label>
          <select
            id="funcao"
            value={funcao}
            onChange={(e) => setFuncao(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          >
            <option value="Administrador">Administrador</option>
            <option value="Organizador">Organizador</option>
            <option value="Participante">Participante</option>
          </select>
        </div>
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Adicionar Usuário
        </button>
      </form>
    </div>
  );
}

export default AddUser;