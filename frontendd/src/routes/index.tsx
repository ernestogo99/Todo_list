import  React from "react";
import  { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

const AppRoutes:React.FC=()=>{
    return(
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    )
}

export default AppRoutes