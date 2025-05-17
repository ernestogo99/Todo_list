import type React from "react";
import { TodoInput } from "../../../shared/components";


const DesktopTodo:React.FC=()=>{
  

    const description= "ola mundo"

    const handleChange=()=>{

    }


    const handleSubmit=()=>{

    }

    return(
        <>
         <TodoInput  handleChange={handleChange} handleSubmit={handleSubmit} description={description}></TodoInput>
        </>
    )
}   

export default DesktopTodo