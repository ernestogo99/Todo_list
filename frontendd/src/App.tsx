
import './App.css'
import { BrowserRouter } from "react-router-dom";
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
