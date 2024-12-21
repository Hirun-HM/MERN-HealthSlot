/* eslint-disable no-unused-vars */
import Login from "./pages/login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
