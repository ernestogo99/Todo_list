import "./style.register.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../shared/components";

const Register: React.FC = () => {
  return (
    <Container>
      <div>
      <h1>Registro</h1>
      <form id="user-register">
        <div id="user-name-container">
          <label htmlFor="user-name">Usuário:</label>
          <input type="text" id="user-name" />
        </div>
        <div id="user-password-container">
          <label htmlFor="user-password">Senha:</label>
          <input type="password" id="user-password" />
        </div>
        <div id="register-actions">
          <button type="submit">Criar conta</button>
        </div>
      </form>
      <div id="login-link">
        <p id="text">
          Já possui conta? <Link to ="/login">Faça seu login</Link>
        </p>
      </div>
    </div>

    </Container>
    
  );
};

export default Register;