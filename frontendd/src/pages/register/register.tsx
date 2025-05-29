import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../shared/components";

import toast from "react-hot-toast";
import { authService } from "../../shared/services/authservice";

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
      <div>
        <h1>Registro</h1>
        <form id="user-register" onSubmit={handleSubmit}>
          <div id="user-name-container">
            <label htmlFor="user-name">Usuário:</label>
            <input
              type="text"
              id="user-name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div id="user-password-container">
            <label htmlFor="user-password">Senha:</label>
            <input
              type="password"
              id="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div id="register-actions">
            <button type="submit">Criar conta</button>
          </div>
        </form>
        <div id="login-link">
          <p id="text">
            Já possui conta? <Link to="/login">Faça seu login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Register;
