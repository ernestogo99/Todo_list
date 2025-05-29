import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, CustonButton } from "../../shared/components";
import toast from "react-hot-toast";
import { authService } from "../../shared/services/authservice";
import styles from "./style.module.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error("Usuário e senha são obrigatórios.");
      return;
    }

    authService
      .createUser({ username, password })
      .then(result => {
        if (result instanceof Error) {
          toast.error(result.message || "Erro ao criar usuário");
        } else {
          toast.success("Usuário criado com sucesso!");
          navigate("/login");
        }
      })
      .catch(error => {
        toast.error("Erro inesperado ao criar usuário.");
        console.error(error);
      });
  };

  return (
    <Container>
      <div className={styles.box}>
        <h1 className={styles.title}>Registro</h1>
        <form id="user-register" onSubmit={handleSubmit} className={styles.flex}>
          <div>
            <label htmlFor="user-name" className={styles.label}>Usuário:</label>
            <input
              type="text"
              id="user-name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div>
            <label htmlFor="user-password" className={styles.label}>Senha:</label>
            <input
              type="password"
              id="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <CustonButton type="submit" >
            Criar conta
          </CustonButton>
        </form>

        <div className={styles.linkText}>
          <p>
            Já possui conta? <Link to="/login">Faça seu login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Register;
