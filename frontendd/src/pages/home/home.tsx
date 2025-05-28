import "./style.home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../shared/components";

const Home:React.FC = () => {
    const navigate=useNavigate()
    return(
        <Container> 
            <div> 
            <h1> To Do List </h1>
            <h2> Seja bem-vindo a sua lista de tarefas!</h2>
            <div id = "login-button">
                <button type="submit" onClick={()=>navigate("/login")}> Login </button>
            </div>
            <div id = "register-button">
                <button type="submit" onClick={()=>navigate("/register")}> Registro </button>
            </div>
        </div></Container>
           
    )

}

export default Home;