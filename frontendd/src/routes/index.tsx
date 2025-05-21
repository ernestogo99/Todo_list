import  React from "react";
import  { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import DesktopTodo from "../pages/todolist/desktop";
import Home from "../pages/home/home";

const AppRoutes:React.FC=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todolist" element={<DesktopTodo/>} />
      </Routes>
    )
}

export default AppRoutes