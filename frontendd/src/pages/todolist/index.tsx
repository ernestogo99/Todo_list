import type React from "react"
import { useViewPort } from "../../shared/hooks/useviewport"
import MobileTodo from "./mobile"
import DesktopTodo from "./desktop"

const TodoList:React.FC=()=>{
    const {isMobile}=useViewPort()
    if(isMobile){
        return <MobileTodo/>
    }
    return <DesktopTodo/>
}


export default TodoList