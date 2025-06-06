import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, CustonButton } from "../../shared/components";
import styles from "./style.module.css"
const Home:React.FC = () => {
    const navigate=useNavigate()
    return(
        <Container> 
            <div className={styles.box}> 
            <h1 className={styles.text}> To Do List </h1>
            <h2> Seja bem-vindo a sua lista de tarefas!</h2>
            <div className={styles.flex}>
                 <CustonButton type="submit" onClick={()=>navigate("/login")}> Login </CustonButton>
                <CustonButton type="submit" onClick={()=>navigate("/register")}> Registro </CustonButton>
            </div>
        </div>
        </Container>
           
    )

}

export default Home;