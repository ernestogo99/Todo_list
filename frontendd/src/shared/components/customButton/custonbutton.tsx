import type React from "react";
import styles from "./style.module.css"

interface Ibutton{
    type:"button" | "submit" | "reset" | undefined
    children:React.ReactNode
    onClick?:()=>void
}

export const CustonButton:React.FC<Ibutton>=({children,type,onClick})=>{
    return(
        <button type={type} onClick={onClick} className={styles.custonButton}>{children}</button>
    )
}