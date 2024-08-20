import React, { useState } from "react";

function AddPalestra() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [organizadores, setOrganizadores] = useState("");
  const [palestrantes, setPalestrantes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar a nova palestra
    const novaPalestra = {
      titulo,
      descricao,
      data,
      organizadores,
      palestrantes,
    };
    console.log("Nova Palestra:", novaPalestra);
    // Limpar os campos após o submit
    setTitulo("");
    setDescricao("");
    setData("");
    setOrganizadores("");
    setPalestrantes("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Adicionar Nova Palestra</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="palestrantes">Palestrantes:</label>
          <input
            type="text"
            id="palestrantes"
            value={palestrantes}
            onChange={(e) => setPalestrantes(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Adicionar Palestra
        </button>
      </form>
    </div>
  );
}

export default AddPalestra;