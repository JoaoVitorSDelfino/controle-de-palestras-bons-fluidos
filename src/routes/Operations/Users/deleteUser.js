import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RoleContext } from "../../../RoleContext";

function DeleteUser() {
    const [id, setId] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const { role } = useContext(RoleContext);

    useEffect(() => {
      if (role !== "Administrador" && role !== "Organizador") {
        setErrorMessage('ERRO, você não possui permissão para acessar essa rota!');
      }
    }, [role]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Envia os dados para o backend (Express)
          const response = await axios.delete(("http://localhost:3001/api/users/deleteUser/" + id))
          
          if (response.data.status) {
            setErrorMessage("")
            navigate("/users")
          } else {
            setErrorMessage(response.data.mensagem)
          }
        } catch (error) {
          console.error("Erro ao deletar usuário:", error)
        }
    
        // Limpar os campos após o submit
        setId("")
      }

      const redirect = () => {
        navigate('/users')
      }

      if (role === "Administrador" || role === "Organizador") {
        return (
          <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h2>Excluir Usuário Existente</h2>
            <form onSubmit={handleSubmit}>
              {/* Campos do formulário */}
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="id">Id do usuário:</label>
                <input
                  type="text"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                  style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                />
              </div>
              <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Deletar Usuário
              </button>
              <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Voltar
              </button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
          </div>
        );
      } else {
        return (
          <div> 
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
            </button>
          </div>
        );
      }
}

export default DeleteUser;