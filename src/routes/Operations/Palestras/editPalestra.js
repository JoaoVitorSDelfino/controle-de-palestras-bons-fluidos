import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

import { RoleContext } from "../../../RoleContext";

function EditPalestras() {
    const [id, setId] = useState("")
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")
    const [organizadores, setOrganizadores] = useState("")
    const [local, setLocal] = useState("")
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
      const novaPalestra = {
        id,
        titulo,
        descricao,
        data,
        organizadores,
        local,
      }
  
      try {
        // Envia os dados para o backend (Express)
        const response = await axios.put(("http://localhost:3001/api/palestras/editPalestra/" + id), novaPalestra)
        
        if (response.data.status) {
          setErrorMessage("");
          navigate("/palestras")
        } else {
          setErrorMessage(response.data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao editar palestra:", error)
      }
  
      // Limpar os campos após o submit
      setId("")
      setTitulo("")
      setDescricao("")
      setData("")
      setOrganizadores("")
      setLocal("")
    }

    const redirect = () => {
      navigate('/palestras')
    }
  
    if (role === "Administrador" || role === "Organizador") {
      return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <h2>Editar Palestra Existente</h2>
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
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="titulo">Novo Título:</label>
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
              Editar Palestra
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
        <div className="error"> 
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Voltar
          </button>
        </div>
      );
    }
}

export default EditPalestras;