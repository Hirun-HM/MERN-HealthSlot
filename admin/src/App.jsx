/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Login from "./pages/login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";


const App = () => {

  const {aToken} = useContext(AdminContext)
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      
      <ToastContainer />
      <Navbar />
    </div>

  ) : (
    <>
    <Login />
    <ToastContainer />
    
    </>
  )
}

export default App
