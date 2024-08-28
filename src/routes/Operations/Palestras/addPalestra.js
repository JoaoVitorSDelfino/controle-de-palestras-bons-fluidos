import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AddPalestra() {
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [data, setData] = useState("")
  const [organizadores, setOrganizadores] = useState("")
  const [local, setLocal] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const novaPalestra = {
      titulo,
      descricao,
      data,
      organizadores,
      local,
    }

    try {
      // Envia os dados para o backend (Express)
      const response = await axios.post("http://localhost:3001/api/palestras/addPalestra", novaPalestra)
      console.log(response.data)

      // Redireciona para uma página (por exemplo, lista de palestras)
      navigate("/palestras");
    } catch (error) {
      console.error("Erro ao adicionar palestra:", error)
    }

    // Limpar os campos após o submit
    setTitulo("")
    setDescricao("")
    setData("")
    setOrganizadores("")
    setLocal("")
  }

  const redirect = () => {
    navigate('/palestras')
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Adicionar Nova Palestra</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            rows="4"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          ></textarea>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="data">Data e Horário:</label>
          <input
            type="datetime-local"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="organizadores">Organizadores:</label>
          <input
            type="text"
            id="organizadores"
            value={organizadores}
            onChange={(e) => setOrganizadores(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="local">Local:</label>
          <input
            type="text"
            id="local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Adicionar Palestra
        </button>
        <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Voltar
        </button>
      </form>
    </div>
  );
}

export default AddPalestra;