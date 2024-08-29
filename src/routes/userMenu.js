import { useNavigate } from "react-router-dom";

function UserMenu() {
    const navigate = useNavigate(); // Hook para navegação

    const redirect = (route) => {
        if (route === 0) {
            navigate("/users/add")
        } else if (route === 1) {
            navigate("/users/edit")
        } else if (route === 2) {
            navigate("/users/delete")
        } else if (route === 3) {
            navigate("/users/show")
        } else if (route === 4) {
            navigate("/home")
        }
    }

    return (
      <div className="background" style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Controle de Usuários</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(0)} style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Criar novo usuário
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(1)} style={{ padding: "10px 15px", backgroundColor: "#17A2B8", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Editar usuário existente
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(2)} style={{ padding: "10px 15px", backgroundColor: "#FFC107", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Excluir usuário
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(3)} style={{ padding: "10px 15px", backgroundColor: "orange", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Mostrar usuários
            </button>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(4)} style={{ padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
            </button>
          </li>
        </ul>
      </div>
    );
}

export default UserMenu;