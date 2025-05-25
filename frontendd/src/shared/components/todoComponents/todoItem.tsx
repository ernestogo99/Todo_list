import {  CheckSquare, Pen, Square, Trash } from "lucide-react"
import type { ItodoItem } from "../../interfaces/todoitem"
import styles from "./style.module.css"

interface ItodoItemprops{
    item:ItodoItem
    onDelete:(id:string)=>void
    handleDone?:(id:string)=>void
    handleEdit:(id:string)=>void
}


export const TodoItem:React.FC<ItodoItemprops>=({item,onDelete,handleDone,handleEdit})=>{
  

    return(
        <li className={styles.box}>
            <h6 className={`${styles.text} ${item.done ? styles.done : ""}`}>{item.description}</h6>
             <div className={styles.buttonBox} >
                <button onClick={()=>handleDone!(item.id)}>
                    {item.done? <CheckSquare color="green"/> : <Square/>}
                </button>
                <button onClick={()=>handleEdit(item.id)}>
                    <Pen></Pen>
                </button>
                <button onClick={()=>onDelete(item.id)}>
                    <Trash color="red"></Trash>
                </button>
             </div>
        </li>
       
    )
}


