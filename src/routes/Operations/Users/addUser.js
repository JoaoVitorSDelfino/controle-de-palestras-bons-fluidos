import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RoleContext } from "../../../RoleContext";

function AddUser() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [funcao, setFuncao] = useState("Administrador") // Valor padrão
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("");

  const { role } = useContext(RoleContext);

  useEffect(() => {
    if (role !== "Administrador" && role !== "Organizador") {
      setErrorMessage('ERRO, você não possui permissão para acessar essa rota!');
    }
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para salvar o novo usuário
    const novoUser = {
      login,
      senha,
      funcao,
    }

    try {
      // Envia os dados para o backend (Express)
      const response = await axios.post("http://localhost:3001/api/users/addUser", novoUser)
      console.log(response.data)

      // Redireciona para uma página (por exemplo, lista de usuário)
      navigate("/users")
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error)
    }

    // Limpar os campos após o submit
    setLogin("")
    setSenha("")
    setFuncao("Administrador")
  }

  const redirect = () => {
    navigate('/users')
  }

  if (role === "Administrador" || role === "Organizador") {
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
          <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="error"> 
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Voltar
        </button>
      </div>
    )
  }
}

export default AddUser;