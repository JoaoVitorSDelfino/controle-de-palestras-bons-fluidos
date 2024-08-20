import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Verifica se o login e a senha são corretos
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Login ou senha incorretos.");
      setIsLoggedIn(false);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      {isLoggedIn ? (
        <div>
          <h2>Bem-vindo, {username}!</h2>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;