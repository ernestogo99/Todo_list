import type React from "react";
import { TodoInput } from "../../../shared/components";
import { useState } from "react";

const DesktopTodo:React.FC=()=>{
    const [isEditing,setIsEditing]=useState(false);

    const description= "ola mundo"

    const handleChange=()=>{

    }


    const handleSubmit=()=>{

    }

    return(
        <>
         <TodoInput isEditing={isEditing} handleChange={handleChange} handleSubmit={handleSubmit} description={description}></TodoInput>
        </>
    )
}

export default DesktopTodo