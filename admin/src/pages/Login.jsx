/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {assets} from '../assets/assets'

const Login = () => {

const [state,setState] = useState('Admin')

  return (
    <form>
    <div>
     <p>{state} Login</p>
    </div>
    </form>
  )
}

export default Login
