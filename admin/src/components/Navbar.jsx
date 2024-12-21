import { useContext } from "react"
import { assets } from "../assets/assets"
import { AdminContext } from "../context/AdminContext"




const Navbar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div>
        <div>
            <img src={assets.admin_logo} alt="" />
            <p>{aToken? 'Admin' : 'Doctor'}</p>
        </div>
        <button>Logout</button>
    </div>
  )
}

export default Navbar