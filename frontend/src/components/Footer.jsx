import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*---left section-----*/}
            <div>
                <img className='mb-5 w-40 ' src= {assets.logo} alt='' />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>gfdhgfgjgdhgdddddjfjjjjjjjjjjjjj</p>

            </div>
            {/*---center section-----*/}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>about us</li>
                    <li>contact</li>
                    <li>privacy policy</li>
                </ul>

            </div>
            {/*---right section-----*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94-729827098</li>
                    <li>hirun080720002@gmail.com</li>
                </ul>

            </div>
        </div>

        <div>
            <hr />
            <p>Copyright 2024@ HealthSlot - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default footer
