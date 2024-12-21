import { useContext } from "react"
import { assets } from "../assets/assets"
import { AdminContext } from "../context/AdminContext"




const Navbar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
        <div className="flex items-center gap-2 text-xs">
            <img src={assets.admin_logo} alt="" />
            <p>{aToken? 'Admin' : 'Doctor'}</p>
        </div>
        <button>Logout</button>
    </div>
  )
}

export default Navbar