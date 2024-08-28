import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DeletePalestra() {
    const [id, setId] = useState("");
    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Envia os dados para o backend (Express)
          const response = await axios.delete(("http://localhost:3001/api/palestras/deletePalestra/" + id))
          
          if (response.status) {
            // Redireciona para uma página (por exemplo, lista de palestras)
            navigate("/palestras")
          } else {
            console.log(response.mensagem)
          }
        } catch (error) {
          console.error("Erro ao deletar palestra:", error)
        }
    
        // Limpar os campos após o submit
        setId("")
      }

      const redirect = () => {
        navigate('/palestras')
      }

      return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <h2>Excluir Palestra Existente</h2>
          <form onSubmit={handleSubmit}>
            {/* Campos do formulário */}
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="id">Id da palestra:</label>
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
              Deletar Palestra
            </button>
            <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
            </button>
          </form>
        </div>
      );
}

export default DeletePalestra;