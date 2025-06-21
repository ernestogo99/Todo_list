import type React from "react";
import type { ItodoItem } from "../../interfaces/todoitem";
import { TodoItem } from "./todoItem";
import styles from "./style.module.css"
import { Search } from "lucide-react";

interface ItodoList{
    items:ItodoItem[]
    handleOpenModal:(item:ItodoItem)=>void;
    handleEdit:(todoItem:ItodoItem)=>void;
    search:string
    setSearch:(value:string)=>void
    handleDone:(todo:ItodoItem)=>void
    handleSeeItem:(item:ItodoItem)=>void
}


export const TodoList:React.FC<ItodoList>=({items,handleSeeItem,handleOpenModal,handleEdit,search,setSearch,handleDone})=>{  

  

    return(
        <> 
        <h3 className={styles.todoListText}>TodoList</h3>

        
          <div className={styles.card}>
        <div className={styles.inputGroup}>
          <div className={styles.inputGroupPrepend}>
            <div>
              <Search size={18} />
            </div>
          </div>
          <input
            type="text"
            className={styles.input}
            placeholder="Search todos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

        <ul className={styles.todoList}>    
            {items.map((item) => (
    <TodoItem
        key={item.id}
        item={item}
        handleEdit={handleEdit}
        onOpenModal={handleOpenModal}
        handleDone={handleDone}
        handleSeeItem={handleSeeItem}
    />
))}

        </ul></>
       
    )
}

