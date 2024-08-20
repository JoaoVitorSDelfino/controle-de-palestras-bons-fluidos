import { useNavigate } from "react-router-dom";

function MainMenu() {
    const navigate = useNavigate(); // Hook para navegação

    const redirect = (route) => {
        if (route === 0) {
            navigate("/palestras")
        } else if (route === 1) {
            navigate("/users")
        } else if (route === 2) {
            navigate("/")
        }
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Projeto Bons Fluidos || Controle de Palestras</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(0)} style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Gerenciar palestras
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(1)} style={{ padding: "10px 15px", backgroundColor: "#17A2B8", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Gerenciar usuários
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(2)} style={{ padding: "10px 15px", backgroundColor: "#FFC107", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
}

export default MainMenu;