const Login:React.FC=()=>{



    return(
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
          Já possui conta? <a href="/login">Faça seu login</a>
        </p>
      </div>
    </div>
  );
};
export default Login