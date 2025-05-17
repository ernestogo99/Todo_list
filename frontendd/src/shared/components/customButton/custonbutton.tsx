import type React from "react";
import styles from "./style.module.css"

interface Ibutton{
    text:string
    type:"button" | "submit" | "reset" | undefined
}

export const CustonButton:React.FC<Ibutton>=({text,type})=>{
    return(
        <button type={type} className={styles.button}>{text}</button>
    )
}