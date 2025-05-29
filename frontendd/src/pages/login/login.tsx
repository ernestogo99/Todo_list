
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../shared/components";
import { authService } from "../../shared/services/authservice";
import styles from "./style.module.css"

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;


    setFormData((prev) => ({
      ...prev,
      [id === "user-name" ? "username" : "password"]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const { username, password } = formData;

    authService
      .signIn(username, password)
      .then(({ access, refresh }) => {

        localStorage.setItem("access_token", access);
        sessionStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        sessionStorage.setItem("refresh_token", refresh);

        navigate("/todolist");
      })
      .catch(() => {
        setError("Credenciais inválidas. Tente novamente.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <div>
        <h1>Login do Usuário</h1>
        <form id="user-login" onSubmit={handleSubmit}>
          <div id="user-name-container">
            <label htmlFor="user-name">Usuário:</label>
            <input
              type="text"
              id="user-name"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          <div id="user-password-container">
            <label htmlFor="user-password">Senha:</label>
            <input
              type="password"
              id="user-password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div id="login-actions">
            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>
        </form>
        <div id="register-link">
          <p id="text">
            Não possui conta? <Link to="/register">Faça seu registro!</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
