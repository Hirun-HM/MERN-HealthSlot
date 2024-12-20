/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {assets} from '../assets/assets'

const Login = () => {

const [state,setState] = useState('Admin')

  return (
    <form className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
     <p><span>{state}</span>Login</p>
     <div>
     <p>Email</p>
     <input type='email' required />
     </div>
     <div>
        <p>
            Password
        </p>
        <input type='password' required />
     </div>
     <button>
        Login
     </button>

    </div>
    </form>
  )
}

export default Login
