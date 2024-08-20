function PalestrasMenu() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Controle de Palestras</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Criar nova palestra
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "#17A2B8", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Editar palestra existente
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "#FFC107", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Excluir palestra
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
            </button>
          </li>
        </ul>
      </div>
    );
}

export default PalestrasMenu;