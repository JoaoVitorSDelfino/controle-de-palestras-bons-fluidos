function MainMenu() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Bem-vindo ao Menu Inicial!</h2>
        <p>Escolha uma das opções abaixo:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Opção 1
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "#17A2B8", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Opção 2
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button style={{ padding: "10px 15px", backgroundColor: "#FFC107", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Opção 3
            </button>
          </li>
        </ul>
      </div>
    );
}

export default MainMenu;