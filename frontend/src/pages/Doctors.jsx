import React from 'react'
import { useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality} = useParams()

  console.log(speciality)

  return (
    <div>
      
    </div>
  )
}

export default Doctors
