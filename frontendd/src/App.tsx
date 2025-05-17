
import './App.css'
import Login from './pages/login/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/register";
import AppRoutes from './routes';
import { Toaster } from 'react-hot-toast';




function App() {
  

  return (
    <>
      <BrowserRouter>
      <Toaster></Toaster>
       <AppRoutes></AppRoutes>
    </BrowserRouter>
    </>
  )
}

export default App
