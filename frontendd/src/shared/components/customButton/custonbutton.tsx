import type React from "react";
import styles from "./style.module.css"

interface Ibutton{
    type:"button" | "submit" | "reset" | undefined
    children:React.ReactNode
}

export const CustonButton:React.FC<Ibutton>=({children,type})=>{
    return(
        <button type={type} className={styles.custonButton}>{children}</button>
    )
}