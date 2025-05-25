import type React from "react"
import styles from "./style.module.css"

interface Icontainer{
    children:React.ReactNode
}

export const Container:React.FC<Icontainer>=({children})=>{
    return(
        <div className={styles.container}>{children}</div>
    )
}


