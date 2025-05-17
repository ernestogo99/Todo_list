import React from "react";
import { Link } from "react-router-dom";
const Login:React.FC = () => {

    return(
    <div> 
    <h1> Login do Usuário</h1>
    <form id = "user-login">
        <div id = "user-name-container">
            <label htmlFor = "user-name">Usuário:</label>
            <input type = "text" id = "user-name"/>
        </div>
        <div id = "user-password-container">
            <label htmlFor = "user-password">Senha:</label>
            <input type = "password" id = "user-password"/>
        </div>
        <div id = "login-actions">
            <button type="submit"> Entrar </button>
        </div>
    </form>
    <div id = "register-link">
        <p id="text">
          Não possui conta? <Link to="/register">Faça seu registro!</Link>
        </p>
    </div>
</div>
  );
};
export default Login