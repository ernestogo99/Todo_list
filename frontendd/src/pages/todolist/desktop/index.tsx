import type React from "react";
import { Container, CustonButton, TodoInput, TodoList } from "../../../shared/components";

import type { ItodoItem } from "../../../shared/interfaces/todoitem";
import { useMemo, useState } from "react";
import styles from "./style.module.css"
import { DeleteMessage } from "../../../shared/components/deleteMessage/deleteMessage";
import { useNavigate } from "react-router-dom";


const DesktopTodo:React.FC=()=>{
    const[search,setSearch]=useState('')
    const navigate=useNavigate()

 


    const items:ItodoItem[]=[{
        description:"compiladores",
        done:true,
        id:"oi"
        },{
        description:"teste",
        done:false,
        id:"ola"
        },{
            description:"compiladores",
        done:true,
        id:"oie"
        },{
            description:"compiladores",
        done:true,
        id:"oiee"
        }]

    const description= "ola mundo"

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.description.toLowerCase().includes(search.toLowerCase())
        );
}, [items, search]);

    const handleChange=()=>{

    }


    const handleSubmit=()=>{

    }

    return(
        <>
        <Container> 
            <div className={styles.box}> 
            <TodoInput
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                description={description}
            />
            <TodoList
                search={search}
                setSearch={setSearch}
                items={filteredItems}
                handleDelete={handleSubmit}
                handleEdit={handleSubmit}
            />
            <div className={styles.buttonBox}>
                <CustonButton onClick={()=>navigate('/login')} type="button">Sair</CustonButton>
            </div>
            </div>     </Container>
           
     
          <DeleteMessage showDeletemessage={false} handleDelete={handleChange} onClose={handleChange}></DeleteMessage>
        </>
    )
}   

export default DesktopTodo