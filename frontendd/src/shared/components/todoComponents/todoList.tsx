import type React from "react";
import type { ItodoItem } from "../../interfaces/todoitem";


interface ItodoList{
    items:ItodoItem
    handleDelete:()=>void;
    handleEdit:()=>void;
}


const TodoList:React.FC=()=>{
    return(
        <ul>

        </ul>
    )
}