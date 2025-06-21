import {  CheckSquare, Pen, Square, Trash,Eye } from "lucide-react"
import type { ItodoItem } from "../../interfaces/todoitem"
import styles from "./style.module.css"

interface ItodoItemprops{
    item:ItodoItem
    onOpenModal:(item:ItodoItem)=>void
    handleDone:(todoitem:ItodoItem)=>void
    handleEdit:(todoitem:ItodoItem)=>void
    handleSeeItem:(todoitem:ItodoItem)=>void
}


export const TodoItem:React.FC<ItodoItemprops>=({item,onOpenModal,handleDone,handleEdit,handleSeeItem})=>{
  

    return(
        <li className={styles.box}>
            <h6 className={`${styles.text} ${item.done ? styles.done : ""}`}>{item.descricao}</h6>
             <div className={styles.buttonBox} >
                <button onClick={()=>handleDone!(item)}>
                    {item.done? <CheckSquare color="green"/> : <Square/>}
                </button>
                <button onClick={()=>handleEdit(item)}>
                    <Pen></Pen>
                </button>
                <button onClick={()=>onOpenModal(item)}>
                    <Trash color="red"></Trash>
                </button>
                 <button onClick={()=>handleSeeItem(item)}>
                    <Eye color="blue"></Eye>
                </button>
             </div>
        </li>
       
    )
}


