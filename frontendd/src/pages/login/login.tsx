
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, CustonButton } from "../../shared/components";
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
  <div className={styles.box}>
    <h1 className={styles.title}>Login do Usuário</h1>
    <form id="user-login" onSubmit={handleSubmit} className={styles.flex}>
      <div>
        <label htmlFor="user-name" className={styles.label}>Usuário:</label>
        <input
          type="text"
          id="user-name"
          value={formData.username}
          onChange={handleChange}
          disabled={loading}
          required
          className={styles.input}
        />
      </div>

      <div>
        <label htmlFor="user-password" className={styles.label}>Senha:</label>
        <input
          type="password"
          id="user-password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          required
          className={styles.input}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <CustonButton type="submit" >
        {loading ? "Entrando..." : "Entrar"}
      </CustonButton>
    </form>

    <div className={styles.linkText}>
      <p>
        Não possui conta? <Link to="/register">Faça seu registro!</Link>
      </p>
    </div>
  </div>
</Container>

  );
};

export default Login;
