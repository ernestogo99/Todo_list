import type React from "react";
import { TodoInput } from "../../../shared/components";
import { TodoItem } from "../../../shared/components/todoComponents/todoItem";
import type { ItodoItem } from "../../../shared/interfaces/todoitem";


const DesktopTodo:React.FC=()=>{
     
    const item:ItodoItem={
        description:"compiladores",
        done:true,
        id:"oi"
    }

    const description= "ola mundo"

    const handleChange=()=>{

    }


    const handleSubmit=()=>{

    }

    return(
        <>
         <TodoInput  handleChange={handleChange} handleSubmit={handleSubmit} description={description}></TodoInput>
         <TodoItem item={item} key={item.id} onDelete={handleChange} onToggle={handleSubmit}></TodoItem>
         <TodoItem item={item} key={item.id} onDelete={handleChange} onToggle={handleSubmit}></TodoItem>
        </>
    )
}   

export default DesktopTodo